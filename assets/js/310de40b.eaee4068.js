(self.webpackChunk=self.webpackChunk||[]).push([[25371],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),g=c(r),u=a,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},17950:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>d,metadata:()=>l,toc:()=>c,default:()=>p});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],d={id:"relay-store",title:"Relay Store",original_id:"relay-store"},l={unversionedId:"relay-store",id:"version-v10.1.1/relay-store",isDocsHomePage:!1,title:"Relay Store",description:"The Relay Store can be used to programmatically update client-side data inside updater functions. The following is a reference of the Relay Store interface.",source:"@site/versioned_docs/version-v10.1.1/Modern-RelayStore.md",sourceDirName:".",slug:"/relay-store",permalink:"/docs/v10.1.1/relay-store",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.1/Modern-RelayStore.md",version:"v10.1.1",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1624982467,formattedLastUpdatedAt:"6/29/2021",frontMatter:{id:"relay-store",title:"Relay Store",original_id:"relay-store"},sidebar:"version-v10.1.1/docs",previous:{title:"Subscriptions",permalink:"/docs/v10.1.1/subscriptions"},next:{title:"fetchQuery",permalink:"/docs/v10.1.1/fetch-query"}},c=[{value:"RecordSourceSelectorProxy",id:"recordsourceselectorproxy",children:[{value:"<code>create(dataID: string, typeName: string): RecordProxy</code>",id:"createdataid-string-typename-string-recordproxy",children:[]},{value:"<code>delete(dataID: string): void</code>",id:"deletedataid-string-void",children:[]},{value:"<code>get(dataID: string): ?RecordProxy</code>",id:"getdataid-string-recordproxy",children:[]},{value:"<code>getRoot(): RecordProxy</code>",id:"getroot-recordproxy",children:[]},{value:"<code>getRootField(fieldName: string): ?RecordProxy</code>",id:"getrootfieldfieldname-string-recordproxy",children:[]},{value:"<code>getPluralRootField(fieldName: string): ?Array&lt;?RecordProxy&gt;</code>",id:"getpluralrootfieldfieldname-string-arrayrecordproxy",children:[]},{value:"<code>invalidateStore(): void</code>",id:"invalidatestore-void",children:[]}]},{value:"RecordProxy",id:"recordproxy",children:[{value:"<code>getDataID(): string</code>",id:"getdataid-string",children:[]},{value:"<code>getType(): string</code>",id:"gettype-string",children:[]},{value:"<code>getValue(name: string, arguments?: ?Object): mixed</code>",id:"getvaluename-string-arguments-object-mixed",children:[]},{value:"<code>getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy</code>",id:"getlinkedrecordname-string-arguments-object-recordproxy",children:[]},{value:"<code>getLinkedRecords(name: string, arguments?: ?Object): ?Array&lt;?RecordProxy&gt;</code>",id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy",children:[]},{value:"<code>getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)</code>",id:"getorcreatelinkedrecordname-string-typename-string-arguments-object",children:[]},{value:"<code>setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy</code>",id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy",children:[]},{value:"<code>copyFieldsFrom(sourceRecord: RecordProxy): void</code>",id:"copyfieldsfromsourcerecord-recordproxy-void",children:[]},{value:"<code>setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)</code>",id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object",children:[]},{value:"<code>setLinkedRecords(records: Array&lt;RecordProxy&gt;, name: string, variables?: ?Object)</code>",id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object",children:[]},{value:"<code>invalidateRecord(): void</code>",id:"invalidaterecord-void",children:[]}]},{value:"ConnectionHandler",id:"connectionhandler",children:[{value:"<code>getConnection(record: RecordProxy, key: string, filters?: ?Object)</code>",id:"getconnectionrecord-recordproxy-key-string-filters-object",children:[]},{value:"Edge creation and insertion",id:"edge-creation-and-insertion",children:[]},{value:"<code>deleteNode(connection: RecordProxy, nodeID: string): void</code>",id:"deletenodeconnection-recordproxy-nodeid-string-void",children:[]}]}],s={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Relay Store can be used to programmatically update client-side data inside ",(0,o.kt)("a",{parentName:"p",href:"./mutations#using-updater-and-optimisticupdater"},(0,o.kt)("inlineCode",{parentName:"a"},"updater")," functions"),". The following is a reference of the Relay Store interface."),(0,o.kt)("p",null,"Table of Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#recordsourceselectorproxy"},"RecordSourceSelectorProxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#recordproxy"},"RecordProxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#connectionhandler"},"ConnectionHandler"))),(0,o.kt)("h2",{id:"recordsourceselectorproxy"},"RecordSourceSelectorProxy"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," is the type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," that ",(0,o.kt)("a",{parentName:"p",href:"./mutations#using-updater-and-optimisticupdater"},(0,o.kt)("inlineCode",{parentName:"a"},"updater")," functions")," receive as an argument. The following is the ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"interface RecordSourceSelectorProxy {\n  create(dataID: string, typeName: string): RecordProxy;\n  delete(dataID: string): void;\n  get(dataID: string): ?RecordProxy;\n  getRoot(): RecordProxy;\n  getRootField(fieldName: string): ?RecordProxy;\n  getPluralRootField(fieldName: string): ?Array<?RecordProxy>;\n  invalidateStore(): void;\n}\n")),(0,o.kt)("h3",{id:"createdataid-string-typename-string-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"create(dataID: string, typeName: string): RecordProxy")),(0,o.kt)("p",null,"Creates a new record in the store given a ",(0,o.kt)("inlineCode",{parentName:"p"},"dataID")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"typeName")," as defined by the GraphQL schema. Returns a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the newly created record."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.create(dataID, 'Todo');\n")),(0,o.kt)("h3",{id:"deletedataid-string-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"delete(dataID: string): void")),(0,o.kt)("p",null,"Deletes a record from the store given its ",(0,o.kt)("inlineCode",{parentName:"p"},"dataID"),"."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"store.delete(dataID);\n")),(0,o.kt)("h3",{id:"getdataid-string-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"get(dataID: string): ?RecordProxy")),(0,o.kt)("p",null,"Retrieves a record from the store given its ",(0,o.kt)("inlineCode",{parentName:"p"},"dataID"),". Returns a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(dataID);\n")),(0,o.kt)("h3",{id:"getroot-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getRoot(): RecordProxy")),(0,o.kt)("p",null,"Returns the ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," representing the root of the GraphQL document."),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Represents root query\nconst root = store.getRoot();\n")),(0,o.kt)("h3",{id:"getrootfieldfieldname-string-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getRootField(fieldName: string): ?RecordProxy")),(0,o.kt)("p",null,"Retrieves a root field from the store given the ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,o.kt)("h4",{id:"example-4"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const viewer = store.getRootField('viewer');\n")),(0,o.kt)("h3",{id:"getpluralrootfieldfieldname-string-arrayrecordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getPluralRootField(fieldName: string): ?Array<?RecordProxy>")),(0,o.kt)("p",null,"Retrieves a root field that represents a collection from the store given the ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns an array of ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxies")),"."),(0,o.kt)("h4",{id:"example-5"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"nodes(first: 10) {\n  # ...\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const nodes = store.getPluralRootField('nodes');\n")),(0,o.kt)("h3",{id:"invalidatestore-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"invalidateStore(): void")),(0,o.kt)("p",null,"Globally invalidates the Relay store. This will cause any data that was written to the store before invalidation occurred to be considered stale, and will be considered to require refetch the next time a query is checked with ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,o.kt)("h4",{id:"example-6"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"store.invalidateStore();\n")),(0,o.kt)("p",null,"After global invalidation, any query that is checked before refetching it will be considered stale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,o.kt)("h2",{id:"recordproxy"},"RecordProxy"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxy")," serves as an interface to mutate records:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"interface RecordProxy {\n  copyFieldsFrom(sourceRecord: RecordProxy): void;\n  getDataID(): string;\n  getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy;\n  getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>;\n  getOrCreateLinkedRecord(\n    name: string,\n    typeName: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  getType(): string;\n  getValue(name: string, arguments?: ?Object): mixed;\n  setLinkedRecord(\n    record: RecordProxy,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setLinkedRecords(\n    records: Array<?RecordProxy>,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy;\n  invalidateRecord(): void;\n}\n")),(0,o.kt)("h3",{id:"getdataid-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"getDataID(): string")),(0,o.kt)("p",null,"Returns the dataID of the current record."),(0,o.kt)("h4",{id:"example-7"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const id = record.getDataID();\n")),(0,o.kt)("h3",{id:"gettype-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"getType(): string")),(0,o.kt)("p",null,"Gets the type of the current record, as defined by the GraphQL schema."),(0,o.kt)("h4",{id:"example-8"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const type = user.getType();  // User\n\n")),(0,o.kt)("h3",{id:"getvaluename-string-arguments-object-mixed"},(0,o.kt)("inlineCode",{parentName:"h3"},"getValue(name: string, arguments?: ?Object): mixed")),(0,o.kt)("p",null,"Gets the value of a field in the current record given the field name."),(0,o.kt)("h4",{id:"example-9"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name');\n")),(0,o.kt)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables"),"."),(0,o.kt)("h4",{id:"example-10"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name(arg: $arg)\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name', {arg: 'value'});\n")),(0,o.kt)("h3",{id:"getlinkedrecordname-string-arguments-object-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy")),(0,o.kt)("p",null,"Retrieves a record associated with the current record given the field name, as defined by the GraphQL document. Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,o.kt)("h4",{id:"example-11"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n    name\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer');\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h4",{id:"example-12"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer(arg: $arg) {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {arg: 'value'});\n")),(0,o.kt)("h3",{id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>")),(0,o.kt)("p",null,"Retrieves the set of records associated with the current record given the field name, as defined by the GraphQL document. Returns an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxies"),"."),(0,o.kt)("h4",{id:"example-13"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst nodes = rootField.getLinkedRecords('nodes');\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h4",{id:"example-14"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes(first: $count) {\n    # ...\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {count: 10});\n")),(0,o.kt)("h3",{id:"getorcreatelinkedrecordname-string-typename-string-arguments-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)")),(0,o.kt)("p",null,"Retrieves the a record associated with the current record given the field name, as defined by the GraphQL document. If the linked record does not exist, it will be created given the type name. Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,o.kt)("h4",{id:"example-15"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = rootField.getOrCreateLinkedRecord('viewer', 'User'); // Will create if it doesn't exist\n\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h3",{id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy")),(0,o.kt)("p",null,"Mutates the current record by setting a new value on the specified field. Returns the mutated record."),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name');\n")),(0,o.kt)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name', {arg: 'value'});\n")),(0,o.kt)("h3",{id:"copyfieldsfromsourcerecord-recordproxy-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"copyFieldsFrom(sourceRecord: RecordProxy): void")),(0,o.kt)("p",null,"Mutates the current record by copying the fields over from the passed in record ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceRecord"),"."),(0,o.kt)("h4",{id:"example-16"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(id1);\nconst otherRecord = store.get(id2);\nrecord.copyFieldsFrom(otherRecord); // Mutates `record`\n\n")),(0,o.kt)("h3",{id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)")),(0,o.kt)("p",null,"Mutates the current record by setting a new linked record on the given the field name."),(0,o.kt)("h4",{id:"example-17"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = store.create(/* ... */)''\nrootField.setLinkedRecord(newViewer, 'viewer'); //\n\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h3",{id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"setLinkedRecords(records: Array<RecordProxy>, name: string, variables?: ?Object)")),(0,o.kt)("p",null,"Mutates the current record by setting a new set of linked records on the given the field name."),(0,o.kt)("h4",{id:"example-18"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newNode = store.create(/* ... */);\nconst newNodes = [...rootField.getLinkedRecords('nodes'), newNode];\nrootField.setLinkedRecords(newNodes, 'nodes'); //\n\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h3",{id:"invalidaterecord-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"invalidateRecord(): void")),(0,o.kt)("p",null,"Invalidates the record. This will cause any query that references this record to be considered stale until the next time it is refetched, and will be considered to require a refetch the next time such a query is checked with ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,o.kt)("h4",{id:"example-19"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get('4');\nrecord.invalidateRecord();\n")),(0,o.kt)("p",null,"After invalidating a record, any query that references the invalidated record and that is checked before refetching it will be considered stale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,o.kt)("h2",{id:"connectionhandler"},"ConnectionHandler"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionHandler")," is a utility module exposed by ",(0,o.kt)("inlineCode",{parentName:"p"},"relay-runtime")," that aids in the manipulation of connections. ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionHandler")," exposes the following interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"interface ConnectionHandler {\n  getConnection(\n    record: RecordProxy,\n    key: string,\n    filters?: ?Object,\n  ): ?RecordProxy,\n  createEdge(\n    store: RecordSourceProxy,\n    connection: RecordProxy,\n    node: RecordProxy,\n    edgeType: string,\n  ): RecordProxy,\n  insertEdgeBefore(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  insertEdgeAfter(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  deleteNode(connection: RecordProxy, nodeID: string): void\n}\n")),(0,o.kt)("h3",{id:"getconnectionrecord-recordproxy-key-string-filters-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"getConnection(record: RecordProxy, key: string, filters?: ?Object)")),(0,o.kt)("p",null,"Given a record and a connection key, and optionally a set of filters, ",(0,o.kt)("inlineCode",{parentName:"p"},"getConnection")," retrieves a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," that represents a connection that was annotated with a ",(0,o.kt)("inlineCode",{parentName:"p"},"@connection")," directive."),(0,o.kt)("p",null,"First, let's take a look at a plain connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"fragment FriendsFragment on User {\n  friends(first: 10) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Accessing a plain connection field like this is the same as other regular field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = user && user.getLinkedRecord('friends');\n\n// Access fields on the connection:\nconst edges = friends && friends.getLinkedRecords('edges');\n")),(0,o.kt)("p",null,"In a ",(0,o.kt)("a",{parentName:"p",href:"./pagination-container"},"pagination container"),", we usually annotate the actual connection field with ",(0,o.kt)("inlineCode",{parentName:"p"},"@connection")," to tell Relay which part needs to be paginated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'fragment FriendsFragment on User {\n  friends(first: 10, orderby: "firstname") @connection(\n    key: "FriendsFragment_friends",\n  ) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"For connections like the above, ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionHandler")," helps us find the record:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nimport {ConnectionHandler} from 'relay-runtime';\n\n// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(\n user,                        // parent record\n 'FriendsFragment_friends'    // connection key\n {orderby: 'firstname'}       // 'filters' that is used to identify the connection\n);\n// Access fields on the connection:\nconst edges = friends.getLinkedRecords('edges');\n")),(0,o.kt)("h3",{id:"edge-creation-and-insertion"},"Edge creation and insertion"),(0,o.kt)("h4",{id:"createedgestore-recordsourceproxy-connection-recordproxy-node-recordproxy-edgetype-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)")),(0,o.kt)("p",null,"Creates an edge given a ",(0,o.kt)("a",{parentName:"p",href:"#recordsourceselectorproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"store")),", a connection, the edge type, and a record that holds that connection."),(0,o.kt)("h4",{id:"insertedgebeforeconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,o.kt)("p",null,"Given a connection, inserts the edge at the beginning of the connection, or before the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor"),"."),(0,o.kt)("h4",{id:"insertedgeafterconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,o.kt)("p",null,"Given a connection, inserts the edge at the end of the connection, or after the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor"),"."),(0,o.kt)("h4",{id:"example-20"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nconst edge = ConnectionHandler.createEdge(store, friends, user, 'UserEdge');\n\n// No cursor provided, append the edge at the end.\nConnectionHandler.insertEdgeAfter(friends, edge);\n\n// No cursor provided, Insert the edge at the front:\nConnectionHandler.insertEdgeBefore(friends, edge);\n")),(0,o.kt)("h3",{id:"deletenodeconnection-recordproxy-nodeid-string-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"deleteNode(connection: RecordProxy, nodeID: string): void")),(0,o.kt)("p",null,"Given a connection, deletes any edges whose id matches the given id."),(0,o.kt)("h4",{id:"example-21"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nConnectionHandler.deleteNode(friends, idToDelete);\n")))}p.isMDXComponent=!0}}]);