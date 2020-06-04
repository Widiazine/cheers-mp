(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{361:function(t,s,e){"use strict";e.r(s);var a=e(18),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"环境变量和模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量和模式"}},[t._v("#")]),t._v(" 环境变量和模式")]),t._v(" "),e("p",[t._v("你可以替换你的项目根目录中的下列文件来指定环境变量：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v(".env                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在所有的环境中被载入")]),t._v("\n.env.local          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在所有的环境中被载入，但会被 git 忽略")]),t._v("\n.env."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只在指定的模式中被载入")]),t._v("\n.env."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".local   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只在指定的模式中被载入，但会被 git 忽略")]),t._v("\n")])])]),e("p",[t._v("一个环境文件只包含环境变量的“键=值”对：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("APPID=bar\nCHEERS_MP_SECRET=secret\n")])])]),e("p",[t._v("被载入的变量将会对 "),e("code",[t._v("cheers-mp-service")]),t._v(" 的所有命令、插件和依赖以及"),e("code",[t._v("cheers-config.js")]),t._v("中可用。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("环境加载属性")]),t._v(" "),e("p",[t._v("为一个特定模式准备的环境文件 (例如 "),e("code",[t._v(".env.production")]),t._v(") 将会比一般的环境文件 (例如 "),e("code",[t._v(".env")]),t._v(") 拥有更高的优先级。")]),t._v(" "),e("p",[t._v("此外，cheers-mp-service 服务 启动时已经存在的环境变量拥有最高优先级，并不会被 "),e("code",[t._v(".env")]),t._v(" 文件覆写。")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("NODE_ENV")]),t._v(" "),e("p",[t._v("如果在环境中有默认的 "),e("code",[t._v("NODE_ENV")]),t._v("，你应该移除它或在运行 "),e("code",[t._v("cheers-mp-service")]),t._v(" 命令的时候明确地设置 "),e("code",[t._v("NODE_ENV")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[t._v("#")]),t._v(" 模式")]),t._v(" "),e("p",[e("strong",[t._v("模式")]),t._v("是 cheers-mp 项目中一个重要的概念。默认情况下，一个 cheers-mp 项目有两个模式：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("development")]),t._v(" 模式用于 "),e("code",[t._v("cheers-mp-service serve")])]),t._v(" "),e("li",[e("code",[t._v("production")]),t._v(" 模式用于 "),e("code",[t._v("cheers-mp-service build")])])]),t._v(" "),e("p",[t._v("注意模式不同于 "),e("code",[t._v("NODE_ENV")]),t._v("，一个模式可以包含多个环境变量。")]),t._v(" "),e("p",[t._v("也就是说，每个模式都会将 "),e("code",[t._v("NODE_ENV")]),t._v(" 的值设置为模式的名称——比如在 development 模式下会去读取"),e("code",[t._v(".development")]),t._v(" 文件，如果文件里设置了 "),e("code",[t._v("NODE_ENV=development")]),t._v(" 的环境变量，则"),e("code",[t._v("NODE_ENV")]),t._v("会被设置为 "),e("code",[t._v('"development"')]),t._v("；如果没有设置，则看命令名字，"),e("code",[t._v("serve")]),t._v("命令对应"),e("code",[t._v('"development"')]),t._v(", "),e("code",[t._v("build")]),t._v(" 命令对应 "),e("code",[t._v('"production"')]),t._v(".")]),t._v(" "),e("p",[t._v("你可以通过为 "),e("code",[t._v(".env")]),t._v(" 文件增加后缀来设置某个模式下特有的环境变量。比如，如果你在项目根目录创建一个名为 "),e("code",[t._v(".env.development")]),t._v(" 的文件，那么在这个文件里声明过的变量就只会在 development 模式下被载入。")]),t._v(" "),e("p",[t._v("你可以通过传递 "),e("code",[t._v("--mode")]),t._v(" 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量，请在你的 "),e("code",[t._v("package.json")]),t._v(" 脚本中加入：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"build:uat": "cheers-mp-service build --mode uat",\n')])])]),e("h2",{attrs:{id:"示例：staging-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例：staging-模式"}},[t._v("#")]),t._v(" 示例：Staging 模式")]),t._v(" "),e("p",[t._v("假设我们有一个应用包含以下 "),e("code",[t._v(".env")]),t._v(" 文件：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CHEERS_MP_TITLE=My App\n")])])]),e("p",[t._v("和 "),e("code",[t._v(".env.staging")]),t._v(" 文件：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("NODE_ENV=production\nCHEERS_MP_TITLE=My App (staging)\n")])])]),e("ul",[e("li",[e("p",[e("code",[t._v("cheers-mp-service build")]),t._v(" 会加载可能存在的 "),e("code",[t._v(".env")]),t._v("、"),e("code",[t._v(".env.production")]),t._v(" 和 "),e("code",[t._v(".env.production.local")]),t._v(" 文件然后构建出生产环境应用；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("cheers-mp-service build --mode staging")]),t._v(" 会在 staging 模式下加载可能存在的 "),e("code",[t._v(".env")]),t._v("、"),e("code",[t._v(".env.staging")]),t._v(" 和 "),e("code",[t._v(".env.staging.local")]),t._v(" 文件然后构建出生产环境应用。")])])]),t._v(" "),e("p",[t._v("这两种情况下，根据 "),e("code",[t._v("NODE_ENV")]),t._v("，构建出的应用都是生产环境应用，但是在 staging 版本中，"),e("code",[t._v("process.env.CHEERS_MP_TITLE")]),t._v(" 被覆写成了另一个值。")]),t._v(" "),e("h2",{attrs:{id:"在客户端侧代码中使用环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在客户端侧代码中使用环境变量"}},[t._v("#")]),t._v(" 在客户端侧代码中使用环境变量")]),t._v(" "),e("p",[t._v("除了特殊的环境变量"),e("code",[t._v("NODE_ENV")]),t._v("、"),e("code",[t._v("APPID")]),t._v(" 以外，其它只有以 "),e("code",[t._v("CHEERS_MP_")]),t._v(" 开头的变量会被脚手架静态嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHEERS_MP_SECRET")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APPID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("在构建过程中，"),e("code",[t._v("process.env.CHEERS_MP_SECRET")]),t._v(" 将会被相应的值所取代。在 "),e("code",[t._v("CHEERS_MP_SECRET=secret")]),t._v(" 的情况下，它会被替换为 "),e("code",[t._v('"secret"')]),t._v("。")]),t._v(" "),e("p",[t._v("除了 "),e("code",[t._v("CHEERS_MP_*")]),t._v(" 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("NODE_ENV")]),t._v(" - 会是 "),e("code",[t._v('"development"')]),t._v("、"),e("code",[t._v('"production"')]),t._v(" 中的一个。具体的值取决于应用运行的"),e("a",{attrs:{href:"#%E6%A8%A1%E5%BC%8F"}},[t._v("模式")]),t._v("和命令。")]),t._v(" "),e("li",[e("code",[t._v("APPID")]),t._v(" - 是小程序的 appid,如果你的开发会在多个小程序之中切换，你可在环境变量中定义它，它会自动替换"),e("code",[t._v("project.config.json")]),t._v("中的"),e("code",[t._v("appid")]),t._v("的值。")])]),t._v(" "),e("p",[t._v("所有解析出来的环境变量都可以在客户端和 nodejs 代码中访问到")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("你可以在 "),e("code",[t._v("cheers.config.js")]),t._v(" 文件中计算环境变量。它们仍然需要以 "),e("code",[t._v("CHEERS_MP_")]),t._v(" 前缀开头。这可以用于版本信息:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHEERS_MP_VERSION")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./package.json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);