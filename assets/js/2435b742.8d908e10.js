"use strict";(self.webpackChunksastix_cms_docs=self.webpackChunksastix_cms_docs||[]).push([[10],{792:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var s=t(7462),a=t(3366),n=(t(7294),t(3905)),o=["components"],c={sidebar_position:1},i="Create a resource",u={unversionedId:"guides/rest-api/create-a-resource",id:"guides/rest-api/create-a-resource",isDocsHomePage:!1,title:"Create a resource",description:"You can create a resource using Swagger interface or the curl",source:"@site/docs/guides/rest-api/create-a-resource.md",sourceDirName:"guides/rest-api",slug:"/guides/rest-api/create-a-resource",permalink:"/gsoc2021-sastixcms/docs/guides/rest-api/create-a-resource",editUrl:"https://github.com/eellak/gsoc2021-sastixcms/edit/master/website/docs/guides/rest-api/create-a-resource.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Usage of Sastix CMS",permalink:"/gsoc2021-sastixcms/docs/guides/usage-of-sastix-cms"},next:{title:"Get benchmark reports",permalink:"/gsoc2021-sastixcms/docs/benchmarking/run-benchmarking-tests"}},p=[],l={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,s.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-resource"},"Create a resource"),(0,n.kt)("p",null,"You can create a resource using Swagger interface or the curl\nequivalent call."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Swagger interface provides the")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"POST /cms/v1.0/createResource\n")),(0,n.kt)("p",null,"which can be used with body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "resourceAuthor": "Test Author",\n  "resourceExternalURI": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png",\n  "resourceMediaType": "image/png",\n  "resourceName": "logo.png",\n  "resourceTenantId": "zaq12345"\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The curl alternative is:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X POST "http://localhost:9082/cms/v1.0/createResource" -H "accept: */*" -H "Content-Type: application/json" -d "{ \\"resourceAuthor\\": \\"Test Author\\", \\"resourceExternalURI\\": \\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png", \\"resourceMediaType\\": \\"image/png\\", \\"resourceName\\": \\"logo.png\\", \\"resourceTenantId\\": \\"zaq12345\\"}"\n')),(0,n.kt)("p",null,"The response will be similar to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "resourceUID": "d6b4a0c8-zaq12345",\n  "author": "Test Author",\n  "resourceURI": "a28d4846-zaq12345/logo.png",\n  "resourcesList": null\n}\n')),(0,n.kt)("p",null,"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"resourceURI")," the resource can be accessed either in the\nbrowser or using any HTTP client in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http://localhost:9082/cms/v1.0/getData/a28d4846-zaq12345/logo.png\n")))}d.isMDXComponent=!0}}]);