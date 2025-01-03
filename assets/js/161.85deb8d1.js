(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{534:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),t("p",[s._v("当我们想把项目同时托管到GitHub、Gitee，本地只维护一份代码？该如何配置？")]),s._v(" "),t("p",[s._v("本文详细介绍了如何将自己的项目同时发布到GitHub和Gitee平台，同时维护两个平台的代码仓库，减少来回切换维护成本！")]),s._v(" "),t("h2",{attrs:{id:"_1-配置github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置github"}},[s._v("#")]),s._v(" 1 配置GitHub")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fire@163.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/1.png",alt:""}})]),s._v(" "),t("p",[s._v("这里名称改一下便于区分，id_rsa_github")]),s._v(" "),t("h2",{attrs:{id:"_2-配置gitee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置gitee"}},[s._v("#")]),s._v(" 2 配置Gitee")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fire@163.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/2.png",alt:""}})]),s._v(" "),t("p",[s._v("同理名称改一下便于区分，id_rsa_gitee ，到此会在~/.ssh/目录下生成四个文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/3.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_3-在github和gitee添加公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-在github和gitee添加公钥"}},[s._v("#")]),s._v(" 3 在GitHub和Gitee添加公钥")]),s._v(" "),t("p",[s._v("复制id_rsa_github和id_rsa_gitee的内容，分别配置GitHb和Gitee，添加ssh-key")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/4.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/5.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_4-添加配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加配置文件"}},[s._v("#")]),s._v(" 4 添加配置文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/8.png",alt:""}})]),s._v(" "),t("p",[s._v("创建一个config文件，添加配置内容如下：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github")]),s._v("\nHost github.com\nHostName github.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/id_rsa_github\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitee")]),s._v("\nHost gitee.com\nHostName gitee.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/id_rsa_gitee\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"_5-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试"}},[s._v("#")]),s._v(" 5 测试")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@github.com\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@gitee.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/7.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_6-设置用户名邮箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-设置用户名邮箱"}},[s._v("#")]),s._v(" 6 设置用户名邮箱")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mr.Fire"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fire@163.com"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("   --查看\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_7-项目同时提交到github和gitee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-项目同时提交到github和gitee"}},[s._v("#")]),s._v(" 7 项目同时提交到github和gitee")]),s._v(" "),t("h3",{attrs:{id:"创建仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[s._v("#")]),s._v(" 创建仓库")]),s._v(" "),t("p",[s._v("首先要在GitHub和Gitee上分别创建两个仓库，也可以通过导入其他平台仓库的功能进行导入\n"),t("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/img/240311/9.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),t("p",[s._v("在项目下的.git目录下打开config文件，内容如下：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\trepositoryformatversion "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\tfilemode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\tbare "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\tlogallrefupdates "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\tsymlinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\tignorecase "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\turl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git@github.com:FireHH/Java-essay.git\n\tfetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" +refs/heads/*:refs/remotes/github/*\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tremote "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" origin\n\tmerge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" refs/heads/master\npostBuffer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("524288000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("把Gitee的仓库地址也添加到配置中")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\trepositoryformatversion "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\tfilemode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\tbare "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\tlogallrefupdates "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\tsymlinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\tignorecase "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitee"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\turl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" https://gitee.com/firegitspace/java-essay.git\n\tfetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" +refs/heads/*:refs/remotes/gitee/*\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\turl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git@github.com:FireHH/Java-essay.git\n\tfetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" +refs/heads/*:refs/remotes/github/*\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tremote "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" origin\n\tmerge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" refs/heads/master\npostBuffer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("524288000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("到此，大功告成！ 推送代码时，分别推送即可")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push github master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push gitee master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);