package main

import (
	"bytes"
	"fmt"
	"go/format"
	"text/template"

	"github.com/pkg/errors"
	"google.golang.org/protobuf/compiler/protogen"
)

// ResourceTemplate for creating a Kuma resource.
var ResourceTemplate = template.Must(template.New("resource").Parse(`
// Generated by tools/resource-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package {{.PolicyVersion}}

import (
	"fmt"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

{{range .Resources}}
const (
	{{.Name}}Type model.ResourceType = "{{.Name}}"
)

var _ model.Resource = &{{.Name}}Resource{}

type {{.Name}}Resource struct {
	Meta model.ResourceMeta
	Spec *{{.Name}}
}

func New{{.Name}}Resource() *{{.Name}}Resource {
	return &{{.Name}}Resource{
		Spec: &{{.Name}}{},
	}
}

func (t *{{.Name}}Resource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *{{.Name}}Resource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *{{.Name}}Resource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *{{.Name}}Resource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*{{.Name}})
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &{{.Name}}{}
		} else  {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *{{.Name}}Resource) Descriptor() model.ResourceTypeDescriptor {
	return {{.Name}}ResourceTypeDescriptor 
}

func (t *{{.Name}}Resource) Validate() error {
	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &{{.Name}}ResourceList{}

type {{.Name}}ResourceList struct {
	Items      []*{{.Name}}Resource
	Pagination model.Pagination
}

func (l *{{.Name}}ResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *{{.Name}}ResourceList) GetItemType() model.ResourceType {
	return {{.Name}}Type
}

func (l *{{.Name}}ResourceList) NewItem() model.Resource {
	return New{{.Name}}Resource()
}

func (l *{{.Name}}ResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*{{.Name}}Resource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*{{.Name}}Resource)(nil), r)
	}
}

func (l *{{.Name}}ResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

var {{.Name}}ResourceTypeDescriptor = model.ResourceTypeDescriptor{
		Name: {{.Name}}Type,
		Resource: New{{.Name}}Resource(),
		ResourceList: &{{.Name}}ResourceList{},
		Scope: model.ScopeMesh,
		KDSFlags: model.FromGlobalToZone,
		WsPath: "{{.Path}}",
		KumactlArg: "{{index .AlternativeNames 0}}",
		KumactlListArg: "{{.Path}}",
		AllowToInspect: true,
		IsPolicy: true,
		DisplayName: "{{.DisplayName}}",
	}
{{end}}
`))

func generateResource(
	p *protogen.Plugin,
	file *protogen.File,
) error {
	var infos []PolicyConfig
	for _, msg := range file.Messages {
		infos = append(infos, NewPolicyConfig(msg.Desc))
	}

	if len(infos) > 1 {
		return errors.Errorf("only one Kuma resource per proto file is allowed")
	}

	outBuf := bytes.Buffer{}
	if err := ResourceTemplate.Execute(&outBuf, struct {
		PolicyVersion string
		Resources     []PolicyConfig
	}{
		PolicyVersion: string(file.GoPackageName),
		Resources:     infos,
	}); err != nil {
		return err
	}

	out, err := format.Source(outBuf.Bytes())
	if err != nil {
		return err
	}

	g := p.NewGeneratedFile(fmt.Sprintf("api/%s/zz_generated.resource.go", string(file.GoPackageName)), file.GoImportPath)
	if _, err := g.Write(out); err != nil {
		return err
	}
	return nil
}
