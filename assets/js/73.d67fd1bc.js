(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{459:function(a,r,t){"use strict";t.r(r);var v=t(11),s=Object(v.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),t("p",[a._v("奇奇怪怪的问题和答案")]),a._v(" "),t("h2",{attrs:{id:"一般问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一般问题"}},[a._v("#")]),a._v(" 一般问题")]),a._v(" "),t("h3",{attrs:{id:"制作-v2ray-的目的是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作-v2ray-的目的是什么"}},[a._v("#")]),a._v(" 制作 V2Ray 的目的是什么")]),a._v(" "),t("p",[a._v("对于已公开的合法信息，人民有自由获取的权利。同时，人民也有言论自由的权利。")]),a._v(" "),t("h3",{attrs:{id:"是否反对管制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否反对管制"}},[a._v("#")]),a._v(" 是否反对管制")]),a._v(" "),t("p",[a._v("不反对管制。事实上任何事物都需要管制，以减少大众的生活成本，比如奶粉。但监管需要有法可依、有据可循。民众都认可的监管方式也是合理的，可接受的。")]),a._v(" "),t("h3",{attrs:{id:"project-v-由谁主导开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-v-由谁主导开发"}},[a._v("#")]),a._v(" Project V 由谁主导开发")]),a._v(" "),t("p",[a._v("我们是一群爱好自由的人们。由于政策压力，我们倾向于保持匿名，尽可能地不透露任何身份信息。")]),a._v(" "),t("h2",{attrs:{id:"v2ray-使用相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-使用相关"}},[a._v("#")]),a._v(" V2Ray 使用相关")]),a._v(" "),t("h3",{attrs:{id:"v2ray-如何升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-如何升级"}},[a._v("#")]),a._v(" V2Ray 如何升级")]),a._v(" "),t("ul",[t("li",[a._v("重新下载安装包。")]),a._v(" "),t("li",[a._v("如果你使用安装脚本进行安装，重新运行安装脚本即可。")])]),a._v(" "),t("h3",{attrs:{id:"v2ray-闪退"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-闪退"}},[a._v("#")]),a._v(" V2Ray 闪退")]),a._v(" "),t("ul",[t("li",[a._v("如果你使用 Linux 并开启了 systemd，可以使用 "),t("code",[a._v("journalctl -u v2ray")]),a._v(" 查看 V2Ray 退出时的日志。")]),a._v(" "),t("li",[a._v("一般情况可以手动运行 "),t("code",[a._v("v2ray -config=<config-file> -test")]),a._v(" 来查看错误信息。")])]),a._v(" "),t("h2",{attrs:{id:"v2ray-错误信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-错误信息"}},[a._v("#")]),a._v(" V2Ray 错误信息")]),a._v(" "),t("h3",{attrs:{id:"vmess-invalid-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vmess-invalid-user"}},[a._v("#")]),a._v(" VMess: Invalid User")]),a._v(" "),t("p",[a._v("可能的原因：")]),a._v(" "),t("ol",[t("li",[a._v("客户端和服务器端的用户 ID 不匹配。")]),a._v(" "),t("li",[a._v("客户端和服务器端的用户 alterId 不匹配。")]),a._v(" "),t("li",[a._v("客户端与服务器的时间不匹配，误差超过 90 秒钟。")])]),a._v(" "),t("h3",{attrs:{id:"shadowsocks-unknown-address-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-unknown-address-type"}},[a._v("#")]),a._v(" Shadowsocks: Unknown address type")]),a._v(" "),t("p",[a._v("可能的原因：")]),a._v(" "),t("ul",[t("li",[a._v("Shadowsocks 协议的加密方式或是密码不匹配。")])]),a._v(" "),t("h3",{attrs:{id:"socks-unknown-socks-version-67"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#socks-unknown-socks-version-67"}},[a._v("#")]),a._v(" Socks: Unknown Socks version: 67")]),a._v(" "),t("p",[a._v("可能的原因：")]),a._v(" "),t("ul",[t("li",[a._v("你开启的是 Socks 代理，但在浏览器中配置了 HTTP 代理。")])]),a._v(" "),t("p",[a._v("解决方案：")]),a._v(" "),t("ul",[t("li",[a._v("在 V2Ray 中配置一个 HTTP 入站代理，然后把浏览器的设置指向这个代理。")])]),a._v(" "),t("h2",{attrs:{id:"其它软件错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它软件错误"}},[a._v("#")]),a._v(" 其它软件错误")]),a._v(" "),t("h3",{attrs:{id:"访问-google-时-浏览器中显示证书无效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问-google-时-浏览器中显示证书无效"}},[a._v("#")]),a._v(" 访问 Google 时，浏览器中显示证书无效")]),a._v(" "),t("p",[a._v("错误信息：攻击者可能试图从 www.google.com 窃取您的信息（例如：密码、通讯内容或信用卡信息）。了解详情 NET::ERR_CERT_COMMON_NAME_INVALID")]),a._v(" "),t("p",[a._v("原因：你的 DNS 缓存可能已被污染。")]),a._v(" "),t("p",[a._v("解决方案：")]),a._v(" "),t("ul",[t("li",[a._v("需要在使用代理的情况下，清空缓存并重新抓取 DNS 数据。")]),a._v(" "),t("li",[a._v("在 V2Ray 中可使用 "),t("code",[a._v("sniffing")]),a._v(" 功能克服一部分 DNS 污染。")])]),a._v(" "),t("h2",{attrs:{id:"项目授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目授权"}},[a._v("#")]),a._v(" 项目授权")]),a._v(" "),t("p",[a._v("Project V 使用以下方式进行授权。")]),a._v(" "),t("h3",{attrs:{id:"v2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray"}},[a._v("#")]),a._v(" V2Ray")]),a._v(" "),t("p",[a._v("源代码以官方发布的安装包，使用 MIT 协议授权。包括以下代码仓库中的源代码及安装包：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.github.com/v2fly/v2ray-core/",target:"_blank",rel:"noopener noreferrer"}},[a._v("v2fly/v2ray-core"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"官方网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方网站"}},[a._v("#")]),a._v(" 官方网站")]),a._v(" "),t("p",[a._v("官方网站（"),t("a",{attrs:{href:"https://www.v2fly.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("v2fly.org"),t("OutboundLink")],1),a._v("）以 "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[a._v("知识共享署名 4.0 国际许可协议"),t("OutboundLink")],1),a._v(" 协议授权。")]),a._v(" "),t("ul",[t("li",[a._v("包括网站中所有可见的文字内容和图片。")]),a._v(" "),t("li",[a._v("包括 Project V 图标文件。")]),a._v(" "),t("li",[a._v("包括生成网站所使用到的源代码，即 "),t("a",{attrs:{href:"https://github.com/v2fly/v2fly-github-io",target:"_blank",rel:"noopener noreferrer"}},[a._v("v2fly/v2fly-github-io"),t("OutboundLink")],1),a._v("。")])]),a._v(" "),t("h3",{attrs:{id:"软件截图和其它文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件截图和其它文件"}},[a._v("#")]),a._v(" 软件截图和其它文件")]),a._v(" "),t("p",[a._v("第三方所创作的内容，其版权归其创作者所有。Project V 放弃对这些内容的所有权。")]),a._v(" "),t("ul",[t("li",[a._v("包括 Project V 使用过程中的截图。")]),a._v(" "),t("li",[a._v("包括运行 Project V 所需的配置文件。")]),a._v(" "),t("li",[a._v("包括 Project V 运行时产生的日志文件。")])]),a._v(" "),t("h3",{attrs:{id:"其它内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它内容"}},[a._v("#")]),a._v(" 其它内容")]),a._v(" "),t("p",[a._v("未在上述提及的内容，其版权视具体情况而定。")])])}),[],!1,null,null,null);r.default=s.exports}}]);