(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{465:function(t,e,o){"use strict";o.r(e);var s=o(11),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"configuration-file-format-draft"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file-format-draft"}},[t._v("#")]),t._v(" Configuration File Format (Draft)")]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("In the V5 major release, a new configuration schema for users is introduced. This configuration format is designed to replace the previous version of configuration format. Currently this format is in the drafting phase, and may change at any time.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("To run your configure file in V5, execute "),o("code",[t._v("./v2ray run -c $configure_file_name -f jsonv5")])])]),t._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"services"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("blockquote",[o("p",[o("code",[t._v("log")]),t._v(": "),o("a",{attrs:{href:"#logobject"}},[t._v("LogObject")])])]),t._v(" "),o("p",[t._v("Log collector setting. Specify the settings regarding the recording of events.")]),t._v(" "),o("p",[t._v("A sensible default will be provided if this entry is not set.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("dns")]),t._v(": "),o("RouterLink",{attrs:{to:"/en_US/v5/config/dns.html"}},[t._v("DnsObject")])],1)]),t._v(" "),o("p",[t._v("Built-in DNS client. Specify hostname resolution settings.")]),t._v(" "),o("p",[t._v("Local DNS will be used if this entry is not set.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("routing")]),t._v(": "),o("RouterLink",{attrs:{to:"/en_US/v5/config/router.html"}},[t._v("RoutingObject")])],1)]),t._v(" "),o("p",[t._v("Routing.")]),t._v(" "),o("p",[t._v("All traffic will be sent to the first outbound if this entry is left empty.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("inbounds")]),t._v(": [ "),o("RouterLink",{attrs:{to:"/en_US/v5/config/inbound.html"}},[t._v("InboundObject")]),t._v(" ]")],1)]),t._v(" "),o("p",[t._v("Inbounds. Describe the listener for incoming connections.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("outbounds")]),t._v(": [ "),o("RouterLink",{attrs:{to:"/en_US/v5/config/outbound.html"}},[t._v("OutboundObject")]),t._v(" ]")],1)]),t._v(" "),o("p",[t._v("Outbounds. Describe the configuration for outgoing connections.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("services")]),t._v(": [ "),o("RouterLink",{attrs:{to:"/en_US/v5/config/service.html"}},[t._v("ServiceObject")]),t._v(" ]")],1)]),t._v(" "),o("p",[t._v("Auxiliary Services. Define additional components.")]),t._v(" "),o("p",[t._v("These settings configure additional functionalities.\nThey are not required for the essential functionality of the software. However, these settings enable advanced features that enable complex use cases.")]),t._v(" "),o("h2",{attrs:{id:"logobject"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logobject"}},[t._v("#")]),t._v(" LogObject")]),t._v(" "),o("p",[o("code",[t._v("LogObject")]),t._v(" is a json field which the configuration file uses in "),o("code",[t._v("log")]),t._v(".")]),t._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("blockquote",[o("p",[o("code",[t._v("access")]),t._v(": LogSpecObject")])]),t._v(" "),o("p",[t._v("Access log settings.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("error")]),t._v(": LogSpecObject")])]),t._v(" "),o("p",[t._v("Error log settings.")]),t._v(" "),o("h2",{attrs:{id:"logspecobject"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logspecobject"}},[t._v("#")]),t._v(" LogSpecObject")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("Type")]),t._v(': "None" | "Console" | "File"')])]),t._v(" "),o("ul",[o("li",[o("code",[t._v('"None"')]),t._v("：Log will be discarded.")]),t._v(" "),o("li",[o("code",[t._v('"Console"')]),t._v("：Log will be outputed to standard output.")]),t._v(" "),o("li",[o("code",[t._v('"File"')]),t._v("：Log will be outputed to a file.")])]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("Path")]),t._v(": string")])]),t._v(" "),o("p",[t._v("File path of log. It should be a valid path string, such as "),o("code",[t._v('"/tmp/v2ray/_error.log"')]),t._v(" (Linux) or "),o("code",[t._v('"C:\\\\Temp\\\\v2ray\\\\_error.log"')]),t._v(" (Windows).")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("Level")]),t._v(': "Debug" | "Info" | "Warning" | "Error" | "None"')])]),t._v(" "),o("p",[t._v("Level of log. Default value is "),o("code",[t._v('"warning"')]),t._v("。")]),t._v(" "),o("ul",[o("li",[o("code",[t._v('"Debug"')]),t._v("：Information for developers. All "),o("code",[t._v('"Info"')]),t._v(" included.")]),t._v(" "),o("li",[o("code",[t._v('"Info"')]),t._v("：Running stats of V2Ray，no effect for the functions. All "),o("code",[t._v('"Warning"')]),t._v(" included.")]),t._v(" "),o("li",[o("code",[t._v('"Warning"')]),t._v("：V2Ray may have encountered some problem, usually some external problem that does not affect V2Ray but possibly the user experience. All "),o("code",[t._v('"Error"')]),t._v(" included.")]),t._v(" "),o("li",[o("code",[t._v('"Error"')]),t._v("：V2Ray encountered a problem that needs to be resolved immediately.")]),t._v(" "),o("li",[o("code",[t._v('"None"')]),t._v("：Nothing will be printed.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);