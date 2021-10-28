"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4045],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},54224:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],o={title:"Application Client Access Config",keywords:["register center"],description:"register center access"},l=void 0,p={unversionedId:"user-guide/register-center-access",id:"version-2.4.1/user-guide/register-center-access",isDocsHomePage:!1,title:"Application Client Access Config",description:"register center access",source:"@site/versioned_docs/version-2.4.1/user-guide/register-center-access.md",sourceDirName:"user-guide",slug:"/user-guide/register-center-access",permalink:"/docs/user-guide/register-center-access",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/user-guide/register-center-access.md",version:"2.4.1",frontMatter:{title:"Application Client Access Config",keywords:["register center"],description:"register center access"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Motan Proxy",permalink:"/docs/user-guide/motan-proxy"},next:{title:"Sofa Proxy",permalink:"/docs/user-guide/sofa-rpc-proxy"}},c=[{value:"Http Registry Config",id:"http-registry-config",children:[]},{value:"Zookeeper Registry Config",id:"zookeeper-registry-config",children:[]},{value:"Etcd Registry Config",id:"etcd-registry-config",children:[]},{value:"Consul Registry Config",id:"consul-registry-config",children:[]},{value:"Nacos Registry Config",id:"nacos-registry-config",children:[]}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Application client access means to access your microservice to ShenYu gateway, currently supports HTTP, Dubbo, Spring Cloud, gRPC, Motan, Sofa, Tars and other protocols access."),(0,a.kt)("p",null,"Connecting the application client to ShenYu gateway is realized through the registration center, which involves the registration of the client and the synchronization of the server data. The registry supports HTTP, ZooKeeper, Etcd, Consul, and Nacos."),(0,a.kt)("p",null,"This article describes how to configure the application client to access the Apache ShenYu gateway. For related principles, see ",(0,a.kt)("a",{parentName:"p",href:"../design/register-center-design"},"Application Client Access")," in the design document ."),(0,a.kt)("img",{src:"/img/shenyu/register/app-client-access-config-en.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"http-registry-config"},"Http Registry Config"),(0,a.kt)("h4",{id:"shenyu-admin-config"},"shenyu-admin config"),(0,a.kt)("p",null,"Set the register type to '",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"yml")," file. The configuration information is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http\n    props:\n      checked: true  # is checked\n      zombieCheckTimes: 5 # how many times does it fail to detect the service\n      scheduledTime: 10 # timed detection interval time\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-http-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client-config"},"shenyu-client config"),(0,a.kt)("p",null,"The following shows the configuration information registered through ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," when the ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http\n    serverLists: http://localhost:9095\n    props:\n      contextPath: /http\n      appName: http\n      port: 8188  \n      isFull: false\n# registerType : register type, set http\n# serverList: when register type is http\uff0cset shenyu-admin address list\uff0cpls note 'http://' is necessary.\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-http-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"zookeeper-registry-config"},"Zookeeper Registry Config"),(0,a.kt)("h4",{id:"shenyu-admin-config-1"},"shenyu-admin config"),(0,a.kt)("p",null,"First add the related dependencies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom")," file (already added by default) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-zookeeper</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-zk-admin-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," file, set the register type to ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper")," and enter the service address and parameters of ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper"),". The configuration information is as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: zookeeper\n    serverLists: localhost:2181\n    props:\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-zk-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client-config-1"},"shenyu-client config"),(0,a.kt)("p",null,"The following shows the configuration information registered by ",(0,a.kt)("inlineCode",{parentName:"p"},"zookeeper")," when the ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First add dependencies to the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu zookeeper register center --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-zookeeper</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-zk-client-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then set the register type to ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," and enter the service address and related parameters as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: zookeeper\n    serverLists: localhost:2181\n    props:\n      contextPath: /http\n      appName: http\n      port: 8189  \n      isFull: false\n# registerType : register type, set zookeeper\n# serverList: when register type is zookeeper\uff0cset zookeeper address list\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-zk-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"etcd-registry-config"},"Etcd Registry Config"),(0,a.kt)("h4",{id:"shenyu-admin-config-2"},"shenyu-admin config"),(0,a.kt)("p",null,"First add the related dependencies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom")," file (already added by default) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-etcd</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-etcd-admin-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then set register type to ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," and enter ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," service address and parameters. The configuration information is as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: etcd\n    serverLists : http://localhost:2379\n    props:\n      etcdTimeout: 5000\n      etcdTTL: 5\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-etcd-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client-config-2"},"shenyu-client config"),(0,a.kt)("p",null,"The following shows the configuration information registered by ",(0,a.kt)("inlineCode",{parentName:"p"},"Etcd")," when the ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First add dependencies to the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu etcd register center --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-etcd</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-etcd-client-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then set the register type to ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," and enter the ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," service address and related parameters as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: etcd \n    serverLists: http://localhost:2379\n    props:\n      contextPath: /http\n      appName: http\n      port: 8189  \n      isFull: false\n# registerType : register type, set etcd \n# serverList: when register type is etcd, add etcd address list\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-etcd-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"consul-registry-config"},"Consul Registry Config"),(0,a.kt)("h4",{id:"shenyu-admin-config-3"},"shenyu-admin config"),(0,a.kt)("p",null,"First add the related dependencies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom")," file :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu consul register start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-consul</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        \x3c!--spring-cloud-starter-consul-discovery need add by yourself, suggest use 2.2.6.RELEASE version, other version maybe can't work--\x3e\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n            <version>2.2.6.RELEASE</version>\n        </dependency>\n        \x3c!-- apache shenyu consul register end--\x3e\n\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-consul-admin-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," file to configure the registry as ",(0,a.kt)("inlineCode",{parentName:"li"},"consul"),", you also need to configure ",(0,a.kt)("inlineCode",{parentName:"li"},"spring.cloud.consul"),", the configuration information is as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: consul\n    props:\n      delay: 1\n      wait-time: 55\n\nspring:\n  cloud:\n    consul:\n      discovery:\n        instance-id: shenyu-admin-1\n        service-name: shenyu-admin\n        tags-as-metadata: false\n      host: localhost\n      port: 8500\n\n# registerType : register type, set consul.\n# delay: The interval of each polling of monitoring metadata, in seconds, the default value is 1 second.\n# wait-time: The waiting time for each polling of metadata monitoring, in seconds, the default value is 55 second.\n# instance-id: Required, Consul needs to find specific services through instance-id.\n# service-name: The name where the service is registered to consul. If not configured, the value of `spring.application.name` will be taken by default.\n# host: Consul server host, the default value is localhost.\n# port: Consul server port, the default value is 8500.\n# tags-as-metadata: false, Required, This option must be set to false, otherwise the URI information will not be found, will cause to selector and upstream cache unable to update.\n\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-consul-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client-config-3"},"shenyu-client config"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"consul")," registry is currently incompatible with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud")," service and will conflict with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Eureka/Nacos")," registry.")),(0,a.kt)("p",null,"The following shows the configuration information registered by ",(0,a.kt)("inlineCode",{parentName:"p"},"Consul")," when the ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First add dependencies to the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"            <dependency>\n               <groupId>org.springframework.cloud</groupId>\n               <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n               <version>2.2.6.RELEASE</version>\n           </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-consul-client-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then set the register type to ",(0,a.kt)("inlineCode",{parentName:"li"},"consul")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," and config ",(0,a.kt)("inlineCode",{parentName:"li"},"spring.cloud.consul"),", and related parameters as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: consul \n    props:\n      contextPath: /http\n      appName: http\n      port: 8188  \n      isFull: false\n\nspring:\n  cloud:\n    consul:\n      discovery:\n        instance-id: shenyu-http-1\n        service-name: shenyu-http\n      host: localhost\n      port: 8500\n# registerType : register type, set consul.\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc\n# instance-id: Required, Consul needs to find specific services through instance-id.\n# service-name: The name where the service is registered to consul. If not configured, the value of `spring.application.name` will be taken by default.\n# host: Consul server host, the default value is localhost.\n# port: Consul server port, the default value is 8500.\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-consul-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"nacos-registry-config"},"Nacos Registry Config"),(0,a.kt)("h4",{id:"shenyu-admin-config-4"},"shenyu-admin config"),(0,a.kt)("p",null,"First add the related dependencies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom")," file (already added by default) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-nacos</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-nacos-admin-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then in the ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," file, configure the registry as ",(0,a.kt)("inlineCode",{parentName:"li"},"nacos"),", fill in the related ",(0,a.kt)("inlineCode",{parentName:"li"},"nacos")," service address and parameters, and ",(0,a.kt)("inlineCode",{parentName:"li"},"nacos")," namespace (need to be consistent with ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-client"),"), the configuration information is as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: nacos\n    serverLists : localhost:8848\n    props:\n      nacosNameSpace: ShenyuRegisterCenter\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-nacos-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client-config-4"},"shenyu-client config"),(0,a.kt)("p",null,"The following shows the configuration information registered by ",(0,a.kt)("inlineCode",{parentName:"p"},"Nacos")," when the ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First add dependencies to the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-client-nacos</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-nacos-client-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then in ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," configure registration mode as ",(0,a.kt)("inlineCode",{parentName:"li"},"naco"),", and fill in ",(0,a.kt)("inlineCode",{parentName:"li"},"nacos")," service address and related parameters, also need ",(0,a.kt)("inlineCode",{parentName:"li"},"nacos")," namespace (need to be consistent with ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"), IP (optional, then automatically obtain the local IP address) and port, configuration information is as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: nacos\n    serverLists: localhost:8848\n    props:\n      contextPath: /http\n      appName: http\n      port: 8188  \n      isFull: false\n      nacosNameSpace: ShenyuRegisterCenter\n# registerType : register type, set nacos \n# serverList: when register type is nacos, add nacos address list\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n# nacosNameSpace: nacos namespace\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-nacos-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("p",null,"In conclusion, this paper mainly describes how to connect your microservices (currently supporting ",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Motan"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Sofa"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Tars")," and other protocols) to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. the Apache ShenYu gateway support registry has ",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Zookeeper"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Consul"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Nacos")," and so on. This paper introduces the different ways to register configuration information when ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service is used as the client to access ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."))}u.isMDXComponent=!0}}]);