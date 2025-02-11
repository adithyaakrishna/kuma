package observability

import (
	"fmt"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	. "github.com/kumahq/kuma/test/framework"
	obs "github.com/kumahq/kuma/test/framework/deployments/observability"
	"github.com/kumahq/kuma/test/framework/deployments/testserver"
	"github.com/kumahq/kuma/test/framework/envs/kubernetes"
)

func traceAllK8s(meshName string, url string) string {
	return fmt.Sprintf(`
apiVersion: kuma.io/v1alpha1
kind: MeshTrace
metadata:
  name: trace-all
  namespace: kuma-system
  labels:
    kuma.io/mesh: %s
spec:
  targetRef:
    kind: Mesh
  default:
    tags:
      - name: team
        literal: core
    backends:
      - zipkin:
          url: %s
`, meshName, url)
}

func PluginTest() {
	ns := "meshtrace"
	obsNs := "obs-meshtrace"
	obsDeployment := "obs-trace-deployment"
	mesh := "meshtrace"

	var obsClient obs.Observability
	BeforeAll(func() {
		err := NewClusterSetup().
			Install(NamespaceWithSidecarInjection(ns)).
			Install(MeshKubernetes(mesh)).
			Install(DemoClientK8s(mesh, ns)).
			Install(testserver.Install(testserver.WithMesh(mesh), testserver.WithNamespace(ns))).
			Install(obs.Install(obsDeployment, obs.WithNamespace(obsNs), obs.WithComponents(obs.JaegerComponent))).
			Setup(kubernetes.Cluster)
		obsClient = obs.From(obsDeployment, kubernetes.Cluster)
		Expect(err).ToNot(HaveOccurred())
	})
	E2EAfterAll(func() {
		Expect(kubernetes.Cluster.TriggerDeleteNamespace(ns)).To(Succeed())
		Expect(kubernetes.Cluster.DeleteMesh(mesh)).To(Succeed())
		Expect(kubernetes.Cluster.DeleteDeployment(obsDeployment)).To(Succeed())
	})

	It("should emit traces to jaeger", func() {
		// given MeshTrace and with tracing backend
		err := YamlK8s(traceAllK8s(mesh, obsClient.ZipkinCollectorURL()))(kubernetes.Cluster)
		Expect(err).ToNot(HaveOccurred())

		// when client sends requests to server
		clientPod, err := PodNameOfApp(kubernetes.Cluster, "demo-client", ns)
		Expect(err).ToNot(HaveOccurred())

		Eventually(func(g Gomega) {
			_, _, err := kubernetes.Cluster.Exec(ns, clientPod, "demo-client",
				"curl", "-v", "-m", "3", "--fail", "test-server")
			g.Expect(err).ToNot(HaveOccurred())
			srvs, err := obsClient.TracedServices()
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(srvs).To(Equal([]string{
				fmt.Sprintf("demo-client_%s_svc", ns),
				"jaeger-query",
				fmt.Sprintf("test-server_%s_svc_80", ns),
			}))
		}, "30s", "1s").Should(Succeed())
	})
}
