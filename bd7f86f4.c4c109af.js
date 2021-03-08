(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),o=(n(0),n(87));const r={id:"develop",title:"Development",sidebar_label:"Development"},p={unversionedId:"npwd/dev/develop",id:"npwd/dev/develop",isDocsHomePage:!1,title:"Development",description:"Adding a new app to useApps",source:"@site/docs\\npwd\\dev\\Develop.md",slug:"/npwd/dev/develop",permalink:"/docs/npwd/dev/develop",editUrl:"https://github.com/project-error/docs.projecterror.dev/docs/npwd/dev/Develop.md",version:"current",lastUpdatedBy:"Taso",lastUpdatedAt:1615148371,sidebar_label:"Development"},i=[{value:"Adding a new app to <code>useApps</code>",id:"adding-a-new-app-to-useapps",children:[]},{value:"The main app component",id:"the-main-app-component",children:[]},{value:"Hooks",id:"hooks",children:[{value:"Creating a hook and states",id:"creating-a-hook-and-states",children:[]},{value:"The service hook and <code>useNuiEvent</code>",id:"the-service-hook-and-usenuievent",children:[]},{value:"Full example",id:"full-example",children:[]}]}],l={toc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"adding-a-new-app-to-useapps"},"Adding a new app to ",Object(o.b)("inlineCode",{parentName:"h3"},"useApps")),Object(o.b)("p",null,"Before creating a new app we want to create a new ",Object(o.b)("inlineCode",{parentName:"p"},"app object")," for our app. The object takes in a couple of properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"id")," - The name of the app."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nameLocale")," - For creating the locale's.-"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"icon")," - The icon that will be used at the home screen."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"backgroundColor")," - The background color for the header (if you use the ",Object(o.b)("inlineCode",{parentName:"li"},"AppTitle"),") and for the app in the home screen."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"color")," - Color of the app icon"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," - The path for the app. Example ",Object(o.b)("inlineCode",{parentName:"li"},'path: "/example"'),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Route")," - A function that uses ",Object(o.b)("inlineCode",{parentName:"li"},"Route")," from ",Object(o.b)("inlineCode",{parentName:"li"},"react-router-dom"),".")),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  id: "EXAMPLE",\n  nameLocale: "APPS_EXAMPLE",\n  icon: <FontAwesomeIcon icon={faPlaneArrival} size="sm" />,\n  backgroundColor: blue[500],\n  color: blue[50],\n  path: "/example",\n  Route: () => <Route path="/example" component={ExampleApp} />,\n}\n')),Object(o.b)("h3",{id:"the-main-app-component"},"The main app component"),Object(o.b)("p",null,"When creating a new app for the phone, you want to import the ",Object(o.b)("inlineCode",{parentName:"p"},"AppWrapper")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AppContent"),". These are two reusable components that surrounds all apps. You  also have access to the ",Object(o.b)("inlineCode",{parentName:"p"},"AppTitle")," component, which serves as a header."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"AppTitle")," takes in a prop called ",Object(o.b)("inlineCode",{parentName:"p"},"app"),". Here you can add any string you want, but as a good practice, use the ",Object(o.b)("inlineCode",{parentName:"p"},"useApp")," hook. Here is an example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"export const ExampleApp = () => {\n  // Calling the useApp hook, and passing in the app name. \n  // The app name will the name you added in useApps.\n  const example = useApp('EXAMPLE');\n\n  return (\n    <AppWrapper>\n      <AppTitle app={example} />\n")),Object(o.b)("h2",{id:"hooks"},"Hooks"),Object(o.b)("p",null,"First we want to import one of the hooks available from the ",Object(o.b)("inlineCode",{parentName:"p"},"recoil")," library."),Object(o.b)("p",null,"If you only want to read a state, you should use the ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilValue"),". This will only read the state, without writing, or updating it. Do you also want to write to the state, you need the ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilState"),", which is a API similar to the React ",Object(o.b)("inlineCode",{parentName:"p"},"useState"),"."),Object(o.b)("h3",{id:"creating-a-hook-and-states"},"Creating a hook and states"),Object(o.b)("p",null,"When you want to have a state that you can update, use in differenet components or reciving some sort of vaules from the client, a hook is the answer. Although, we need to have a state to read or write the value to."),Object(o.b)("p",null,"Lets create a state first!"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// state.ts\nimport { atom } from 'recoil';\n\nexport const exampleState = {\n  exampleArray: atom({\n    key: 'exampleArray', // make sure this is unique, globally.\n    default: []\n  })\n}\n")),Object(o.b)("p",null,"We need to use the state somehow, and be able to read, write or both. Let's hook at how we create a simple hook. In this example we will both read and write to the state."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// useExampleList.ts\nimport { useRecoilState } from 'recoil';\n\nexport const useExampleList = () => {\n  const [list, setList] = useRecoilState();\n  return { list, setList };\n}\n")),Object(o.b)("p",null,"Now that we have created our hook, we'll go a step further and look at the ",Object(o.b)("inlineCode",{parentName:"p"},'"Service Hook"')),Object(o.b)("h3",{id:"the-service-hook-and-usenuievent"},"The service hook and ",Object(o.b)("inlineCode",{parentName:"h3"},"useNuiEvent")),Object(o.b)("p",null,"When you want to recive data from the client, you need to set up a service hook (as we like to call it). It a function that will be called when the phone is rendered, and makes it available to recive data from the client and assign values to a desired hook of choice. If you are known with React, you probably already know how to create a hook. However, here is how you do it."),Object(o.b)("h4",{id:"setting-the-hook-up"},"Setting the hook up"),Object(o.b)("p",null,"This hook will simply listen to any data being sent from the client and store it into any state of choice. In this example we'll continue using the recoil state, but you can also use React Context. You can read more about how to use that here (a link)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// useExampleService.ts\n\n// We'll start by importing the state and the hook we previously made\n// and the useNuIEvent hook\nimport { useExampleList } from './useExampleList';\nimport { exampleState } from './state';\nimport { useNuiEvent } from '../../../os/nui-events/hooks/useNuiEvent';\n// We also need a function from recoil\nimport { useSetRecoilState } from 'recoil';\n\nexport const useExampleService = () => {\n  const setList = useSetRecoilState(exampleState.exampleArray);\n  useNuiEvent('EXAMPLE', 'setList', setList);\n\n  return useExampleList();\n}\n")),Object(o.b)("p",null,"You may wonder what ",Object(o.b)("inlineCode",{parentName:"p"},"useSetRecoilState")," and ",Object(o.b)("inlineCode",{parentName:"p"},"useNuiEvent")," does. We will cover that in the next section."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useSetRecoilState")," returns a setter function for updating the value of a Recoil state (atom). We use this when we only want to write to the state without reading it. We assign this function to 'setList' and use that in the next function we'll talk about, the ",Object(o.b)("inlineCode",{parentName:"p"},"useNuiEvent"),"."),Object(o.b)("p",null,"In order to know what ",Object(o.b)("inlineCode",{parentName:"p"},"app")," and ",Object(o.b)("inlineCode",{parentName:"p"},"method")," that should update our ",Object(o.b)("inlineCode",{parentName:"p"},"exampleArray")," state, we need to use ",Object(o.b)("inlineCode",{parentName:"p"},"useNuiEvent"),". The function listens to the any ",Object(o.b)("inlineCode",{parentName:"p"},"message")," event, in other words, when we use the ",Object(o.b)("inlineCode",{parentName:"p"},"SendNuiMessage"),". Then it takes the data and updates the value using the ",Object(o.b)("inlineCode",{parentName:"p"},"setList")," function we just called. However we're not done yet. In order for this work, we need to call ",Object(o.b)("inlineCode",{parentName:"p"},"useExampleService")," in ",Object(o.b)("inlineCode",{parentName:"p"},"Phone.tsx"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// Phone.tsx\nimport { usePhotoService } from './apps/example/hooks/useExampleService';\n//...\nfunction Phone () {\n//...\nuseExampleService()\n//...\n")),Object(o.b)("h3",{id:"full-example"},"Full example"),Object(o.b)("h4",{id:"exampleapptsx"},"ExampleApp.tsx"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// ExampleApp.tsx\nimport React from 'react';\nimport { AppWrapper } from '../../../ui/components';\nimport { AppTitle } from '../../../ui/components/AppTitle';\nimport { AppContent } from '../../../ui/components/AppContent';\nimport { useApp } from '../../../os/apps/hooks/useApps';\nimport { useExample } from '../hooks/useExample';\n\nexport const ExampleApp = () => {\n  // calling the example hook, and we assign the value to a variable\n  const exampleString = useExample();\n  const example = useApp('EXAMPLE');\n  return (\n    <AppWrapper>\n      <AppTitle app={example} />\n      <AppContent>\n        <h1>This is an example</h1>\n        {/* Here we are using the value in a h3 tag */}\n        <h3>{exampleString}</h3>\n      </AppContent>\n    </AppWrapper>\n  );\n};\n")),Object(o.b)("h4",{id:"useexampletsx"},"useExample.tsx"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { useRecoilValue } from 'recoil';\nimport { exampleState } from './state';\n\nexport const useExample = () => {\n  const example = useRecoilValue(exampleState.example);\n  return example;\n};\n")))}s.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,d=u["".concat(p,".").concat(b)]||u[b]||m[b]||r;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);