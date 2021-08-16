"use strict";(self.webpackChunksastix_cms_docs=self.webpackChunksastix_cms_docs||[]).push([[914],{8188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l="Setup with docker-compose",c={unversionedId:"installation/production/docker-compose-setup",id:"installation/production/docker-compose-setup",isDocsHomePage:!1,title:"Setup with docker-compose",description:"You can deploy the CMS by running the installation script",source:"@site/docs/installation/production/docker-compose-setup.md",sourceDirName:"installation/production",slug:"/installation/production/docker-compose-setup",permalink:"/gsoc2021-sastixcms/docs/installation/production/docker-compose-setup",editUrl:"https://github.com/eellak/gsoc2021-sastixcms/edit/master/website/docs/installation/production/docker-compose-setup.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Docker setup",permalink:"/gsoc2021-sastixcms/docs/installation/development/development-environment-setup"},next:{title:"Usage of Sastix CMS",permalink:"/gsoc2021-sastixcms/docs/guides/usage-of-sastix-cms"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-with-docker-compose"},"Setup with docker-compose"),(0,i.kt)("p",null,"You can deploy the CMS by running the installation script\n",(0,i.kt)("inlineCode",{parentName:"p"},"devops/deployment/install-default-setup.sh"),".\nYou will be prompted to type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The DNS or IP of the server."),(0,i.kt)("li",{parentName:"ul"},"Your preference on using the Keycloak server."),(0,i.kt)("li",{parentName:"ul"},"Your preference on using the monitoring stack.")),(0,i.kt)("p",null,"The only requirement to deploy the solution is to have Docker and\ndocker-compose installed."),(0,i.kt)("p",null,"After deployment all services can be accessed via the NGINX reverse\nproxy."),(0,i.kt)("p",null,"In case you have a DNS domain registered and used it during the\ninstallation you can get TLS certificates using the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec -it sxcms-nginx certbot --nginx -d <DOMAIN_NAME>\n")),(0,i.kt)("p",null,"Some significant points of interest are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have enabled the monitoring stack you can login to the\nGrafana interface using:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DOMAIN_NAME/grafana/\n")),(0,i.kt)("p",null,"You can login using the admin/admin username/password combination\nand you will be prompted to change the password.\nTwo dashboards, monitoring the Spring Boot CMS server and the NGINX\nreverse proxy, are already configured and provisioned."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have enabled Keycloak enabled you can login to the Keycloak\nadmin interface using:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DOMAIN_NAME/auth/\n")),(0,i.kt)("p",null,"You can login using the admin/Pa55w0rd username/password combination\nand we strongly suggest that you change it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The three default username/password combinations\n(cms-admin/cms-admin, cms-creator/cms-creator,\ncms-consumer/cms-consumer) are already provisioned and\n",(0,i.kt)("strong",{parentName:"p"},"we strongly suggest that you change these"),", too.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The client secret for the CMS is already set. You can change it in\nthe Keycloak interface and in ",(0,i.kt)("inlineCode",{parentName:"p"},"devops/deployment/sxcms/.env")," file\nand execute ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," to apply the changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can make requests (authenticated if Keycloak is enabled) to the\nCMS-API using the base URL"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DOMAIN_NAME/cms/\n")),(0,i.kt)("p",null,"and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DOMAIN_NAME/apiversion/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can setup custom alerts using the Grafana interface.\n( ",(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/"},"Grafana Alerts")," )")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is of critical importance for the security of the production setup\nto:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Use TLS."),(0,i.kt)("li",{parentName:"ul"},"Change the default username/password combinations."),(0,i.kt)("li",{parentName:"ul"},"Change the client secret both on the Keycloak interface and on the\nserver properties.")))))}d.isMDXComponent=!0}}]);