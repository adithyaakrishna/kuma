// Generated by tools/resource-gen
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	"fmt"

	apiextensionsv1 "k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	system_proto "github.com/kumahq/kuma/api/system/v1alpha1"
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/registry"
	util_proto "github.com/kumahq/kuma/pkg/util/proto"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:categories=kuma,scope=Cluster
type Zone struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	// Mesh is the name of the Kuma mesh this resource belongs to.
	// It may be omitted for cluster-scoped resources.
	//
	// +kubebuilder:validation:Optional
	Mesh string `json:"mesh,omitempty"`
	// Spec is the specification of the Kuma Zone resource.
	// +kubebuilder:validation:Optional
	Spec *apiextensionsv1.JSON `json:"spec,omitempty"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:scope=Namespaced
type ZoneList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []Zone `json:"items"`
}

func init() {
	SchemeBuilder.Register(&Zone{}, &ZoneList{})
}

func (cb *Zone) GetObjectMeta() *metav1.ObjectMeta {
	return &cb.ObjectMeta
}

func (cb *Zone) SetObjectMeta(m *metav1.ObjectMeta) {
	cb.ObjectMeta = *m
}

func (cb *Zone) GetMesh() string {
	return cb.Mesh
}

func (cb *Zone) SetMesh(mesh string) {
	cb.Mesh = mesh
}

func (cb *Zone) GetSpec() (core_model.ResourceSpec, error) {
	spec := cb.Spec
	m := system_proto.Zone{}

	if spec == nil || len(spec.Raw) == 0 {
		return &m, nil
	}

	err := util_proto.FromJSON(spec.Raw, &m)
	return &m, err
}

func (cb *Zone) SetSpec(spec core_model.ResourceSpec) {
	if spec == nil {
		cb.Spec = nil
		return
	}

	s, ok := spec.(*system_proto.Zone)
	if !ok {
		panic(fmt.Sprintf("unexpected protobuf message type %T", spec))
	}

	cb.Spec = &apiextensionsv1.JSON{Raw: util_proto.MustMarshalJSON(s)}
}

func (cb *Zone) Scope() model.Scope {
	return model.ScopeCluster
}

func (l *ZoneList) GetItems() []model.KubernetesObject {
	result := make([]model.KubernetesObject, len(l.Items))
	for i := range l.Items {
		result[i] = &l.Items[i]
	}
	return result
}

func init() {
	registry.RegisterObjectType(&system_proto.Zone{}, &Zone{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "Zone",
		},
	})
	registry.RegisterListType(&system_proto.Zone{}, &ZoneList{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "ZoneList",
		},
	})
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:categories=kuma,scope=Cluster
type ZoneInsight struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	// Mesh is the name of the Kuma mesh this resource belongs to.
	// It may be omitted for cluster-scoped resources.
	//
	// +kubebuilder:validation:Optional
	Mesh string `json:"mesh,omitempty"`
	// Spec is the specification of the Kuma ZoneInsight resource.
	// +kubebuilder:validation:Optional
	Spec *apiextensionsv1.JSON `json:"spec,omitempty"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:scope=Namespaced
type ZoneInsightList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []ZoneInsight `json:"items"`
}

func init() {
	SchemeBuilder.Register(&ZoneInsight{}, &ZoneInsightList{})
}

func (cb *ZoneInsight) GetObjectMeta() *metav1.ObjectMeta {
	return &cb.ObjectMeta
}

func (cb *ZoneInsight) SetObjectMeta(m *metav1.ObjectMeta) {
	cb.ObjectMeta = *m
}

func (cb *ZoneInsight) GetMesh() string {
	return cb.Mesh
}

func (cb *ZoneInsight) SetMesh(mesh string) {
	cb.Mesh = mesh
}

func (cb *ZoneInsight) GetSpec() (core_model.ResourceSpec, error) {
	spec := cb.Spec
	m := system_proto.ZoneInsight{}

	if spec == nil || len(spec.Raw) == 0 {
		return &m, nil
	}

	err := util_proto.FromJSON(spec.Raw, &m)
	return &m, err
}

func (cb *ZoneInsight) SetSpec(spec core_model.ResourceSpec) {
	if spec == nil {
		cb.Spec = nil
		return
	}

	s, ok := spec.(*system_proto.ZoneInsight)
	if !ok {
		panic(fmt.Sprintf("unexpected protobuf message type %T", spec))
	}

	cb.Spec = &apiextensionsv1.JSON{Raw: util_proto.MustMarshalJSON(s)}
}

func (cb *ZoneInsight) Scope() model.Scope {
	return model.ScopeCluster
}

func (l *ZoneInsightList) GetItems() []model.KubernetesObject {
	result := make([]model.KubernetesObject, len(l.Items))
	for i := range l.Items {
		result[i] = &l.Items[i]
	}
	return result
}

func init() {
	registry.RegisterObjectType(&system_proto.ZoneInsight{}, &ZoneInsight{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "ZoneInsight",
		},
	})
	registry.RegisterListType(&system_proto.ZoneInsight{}, &ZoneInsightList{
		TypeMeta: metav1.TypeMeta{
			APIVersion: GroupVersion.String(),
			Kind:       "ZoneInsightList",
		},
	})
}
