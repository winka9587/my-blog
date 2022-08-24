(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{588:function(a,e,s){"use strict";s.r(e);var t=s(56),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"关于更新node-js以及npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于更新node-js以及npm"}},[a._v("#")]),a._v(" 关于更新node.js以及npm")]),a._v(" "),s("p",[a._v("系统是CentOS 7.3.64")]),a._v(" "),s("p",[a._v("使用阿里云的轻量应用服务器时候发现有node.js应用，省去了安装配置node、npm等等的一系列烦恼，只是阿里云提供的node.js镜像版本是4.8.4，在上面运行代码疯狂报语法错误，看了一下自己电脑上的node版本：10.16.0")]),a._v(" "),s("p",[a._v("顺便看看npm版本")]),a._v(" "),s("p",[a._v("npm –v")]),a._v(" "),s("p",[a._v("2.5.11")]),a._v(" "),s("p",[a._v("自己的")]),a._v(" "),s("p",[a._v("6.9.0")]),a._v(" "),s("h2",{attrs:{id:"使用nvm更新node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用nvm更新node-js"}},[a._v("#")]),a._v(" 使用nvm更新node.js")]),a._v(" "),s("p",[a._v("一开始是用n模块来更新的，后来发现阿里云默认安装了nvm，之前在网上只是了解了更新node有nvm和n模块这两种途径，并没有详细去了解，n模块出现了上面的幺蛾子之后就打算试一试使用nvm来更新会不会更方便一些")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm install stable\n")])])]),s("p",[a._v("搞定了...")]),a._v(" "),s("p",[a._v("一口老血....")]),a._v(" "),s("p",[a._v("每次重新连接后版本会变回原来的旧版本，")]),a._v(" "),s("p",[a._v("nvm ls列出所有版本")]),a._v(" "),s("p",[a._v("挑一个安装的版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm alias default v[版本号]\n")])])]),s("p",[a._v("修改默认版本")]),a._v(" "),s("p",[a._v("或者直接安装稳定版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm install stable\nnvm alias default stable\n")])])]),s("p",[a._v("还是写一下n模块的东西吧...")]),a._v(" "),s("h2",{attrs:{id:"使用n模块更新node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用n模块更新node-js"}},[a._v("#")]),a._v(" 使用n模块更新node.js")]),a._v(" "),s("p",[a._v("n模块就像node的其他模块一样，使用npm的install命令安装后使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install -g n\n")])])]),s("p",[a._v("安装完n模块后")]),a._v(" "),s("p",[a._v("使用n ls可以查看所有可用版本")]),a._v(" "),s("p",[a._v("安装后使用n stable命令可以将node升至稳定版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("n stable\n")])])]),s("p",[a._v("install:xxxxx")]),a._v(" "),s("p",[a._v("mkdir:xxxxx")]),a._v(" "),s("p",[a._v("fetch:xxxxx")]),a._v(" "),s("p",[a._v("#########################################进度条%")]),a._v(" "),s("p",[a._v("installed:安装后的版本")]),a._v(" "),s("p",[a._v("但是进度条跑完后installed并没有变化还是原来的版本，使用node -v发现版本同样没有变化")]),a._v(" "),s("p",[a._v("？？？？")]),a._v(" "),s("p",[a._v("原因：")]),a._v(" "),s("p",[a._v("轻量应用服务器帮你把node安装在root目录下，你可以从root/nvm/versions/node看到当前安装的版本，也可以通过which node来查看当前node的路径")]),a._v(" "),s("p",[a._v("而n模块默认的安装路径是/user/local，你可以到这个目录下找到用n stable命令安装的版本")]),a._v(" "),s("h2",{attrs:{id:"解决n模块无法更新node-js的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决n模块无法更新node-js的问题"}},[a._v("#")]),a._v(" 解决n模块无法更新node.js的问题")]),a._v(" "),s("p",[a._v("参考：https://segmentfault.com/a/1190000007567870")]),a._v(" "),s("p",[a._v("使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim ~/.bash_profile\n")])])]),s("p",[a._v("编辑环境配置文件，在末尾添加")]),a._v(" "),s("p",[a._v("export N_PREFIX=[路径]\nexport PATH=$N_PREFIX/bin:$PATH")]),a._v(" "),s("p",[a._v("比如你用which node得到的结果是/root/xxx/node/v4.8.4/bin/node")]),a._v(" "),s("p",[a._v("那么你就可以填写前面的一段")]),a._v(" "),s("p",[a._v("export N_PREFIX=/root/xxx/node\nexport PATH=$N_PREFIX/bin:$PATH")]),a._v(" "),s("p",[a._v(":wq 保存退出")]),a._v(" "),s("p",[a._v("使你的修改生效")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source ~/.bash_profile\n")])])]),s("p",[a._v("检查是否成功")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("echo $N_PREFIX\n")])])]),s("p",[a._v("安装最新的稳定版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("n stable\n")])])]),s("p",[a._v("node -v查看当前node版本，本来想着弄完node看看怎么更新npm，发现更新完node后连npm一起更新了")])])}),[],!1,null,null,null);e.default=n.exports}}]);