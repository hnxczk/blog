(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(t,e,s){t.exports=s.p+"assets/img/instruments_1.ed73aacc.png"},211:function(t,e,s){t.exports=s.p+"assets/img/instruments_2.bc7ece23.jpg"},212:function(t,e,s){t.exports=s.p+"assets/img/instruments_3.bfb86568.jpg"},213:function(t,e,s){t.exports=s.p+"assets/img/instruments_4.29601168.jpg"},214:function(t,e,s){t.exports=s.p+"assets/img/instruments_5.97a50973.png"},215:function(t,e,s){t.exports=s.p+"assets/img/instruments_6.505e09c1.png"},216:function(t,e,s){t.exports=s.p+"assets/img/instruments_7.588bef28.jpg"},217:function(t,e,s){t.exports=s.p+"assets/img/instruments_8.ce84117e.png"},218:function(t,e,s){t.exports=s.p+"assets/img/instruments_9.8b09842a.png"},219:function(t,e,s){t.exports=s.p+"assets/img/instruments_10.00887413.gif"},220:function(t,e,s){t.exports=s.p+"assets/img/instruments_11.bd2804ab.png"},221:function(t,e,s){t.exports=s.p+"assets/img/instruments_12.42ac8cb7.png"},459:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"instruments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instruments","aria-hidden":"true"}},[t._v("#")]),t._v(" Instruments")]),t._v(" "),r("p",[t._v("众所周知 Instruments 是 Apple 提供的检测工具，功能强大。这里结合 《 iOS 和 macOS 性能优化》 这本书来记录下部分工具的用法。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://help.apple.com/instruments/mac/current/#//apple_ref/doc/uid/TP40004652",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档地址"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"time-profiler（时间分析器？）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-profiler（时间分析器？）","aria-hidden":"true"}},[t._v("#")]),t._v(" Time Profiler（时间分析器？）")]),t._v(" "),r("h3",{attrs:{id:"启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),r("p",[t._v("启动 Instruments 可以通过 XCode 菜单栏上 Product 下的 Profile 来启动 或者使用快捷键 "),r("code",[t._v("⌘ + I")]),t._v(" 。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(210),height:"300"}})]),t._v(" "),r("p",[t._v("这里有一点需要注意的是在 scheme 的配置中可以配置 Profile 的编译配置，如下图这种情况就是 debug 模式。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(211),height:"300"}})]),t._v(" "),r("p",[t._v("在这种模式下编译没有生成 dSYM （符号表）文件。这时候通过 Time Profiler 来查看堆栈信息的时候就无法找到我们自己写的函数名和行号等信息了。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(212),alt:""}})]),t._v(" "),r("p",[t._v("这个时候把 debug 改成 release 就能生成 dSYM 文件，并查看到具体函数名和代码行号了。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(213),alt:""}})]),t._v(" "),r("p",[t._v("这时候双击某行就可以跳转到具体代码。")]),t._v(" "),r("h4",{attrs:{id:"ios符号表-dsym"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ios符号表-dsym","aria-hidden":"true"}},[t._v("#")]),t._v(" iOS符号表(dSYM)")]),t._v(" "),r("p",[t._v("这里记录下 dSYM 相关知识。")]),t._v(" "),r("h5",{attrs:{id:"什么是-dsym"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dsym","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 dSYM")]),t._v(" "),r("p",[t._v("iOS构建时产生的符号表，它是内存地址与函数名，文件名，行号的映射表。 符号表元素如下所示:")]),t._v(" "),r("p",[t._v("<起始地址> <结束地址> <函数> [<文件名:行号>]")]),t._v(" "),r("p",[t._v("简单来说就是通过 dSYM 和 地址信息就可以定位到具体的函数名以及对应源代码中的行号。")]),t._v(" "),r("h5",{attrs:{id:"为什么要配置符号表？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要配置符号表？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么要配置符号表？")]),t._v(" "),r("p",[t._v("当 APP crash 的时候崩溃日志会把崩溃时的堆栈信息给保存起来形成崩溃日志，但是这时候的堆栈信息是二进制的地址信息。这时候就需要通过 dSYM 来还原。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(214),alt:""}})]),t._v(" "),r("p",[t._v("当然在 Time Profiler 里也是同样的作用。")]),t._v(" "),r("h5",{attrs:{id:"xcode编译后有没有生成dsym文件？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xcode编译后有没有生成dsym文件？","aria-hidden":"true"}},[t._v("#")]),t._v(" XCode编译后有没有生成dSYM文件？")]),t._v(" "),r("p",[t._v("XCode Release编译默认会生成dSYM文件，而Debug编译默认不会生成.")]),t._v(" "),r("p",[t._v("对应的Xcode配置如下：")]),t._v(" "),r("p",[r("code",[t._v("XCode -> Build Settings -> Code Generation -> Generate Debug Symbols -> Yes")])]),t._v(" "),r("p",[r("code",[t._v("XCode -> Build Settings -> Build Option -> Debug Information Format -> DWARF with dSYM File")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(215),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#界面","aria-hidden":"true"}},[t._v("#")]),t._v(" 界面")]),t._v(" "),r("p",[r("img",{attrs:{src:s(216),alt:""}})]),t._v(" "),r("p",[t._v("程序启动完成之后就会进入到上图所示的界面。")]),t._v(" "),r("p",[t._v("这个界面的上部分就是 cpu 及线程的使用情况 。下部分就是一些堆栈信息。")]),t._v(" "),r("h4",{attrs:{id:"图标说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图标说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 图标说明")]),t._v(" "),r("p",[t._v("需要说明的就是在下部分的界面中有一些小的图标，这些图标表示这函数的来源。比如头像轮廓表示来自用户，杯子表示来自 Cocoa，小齿轮代表系统调用。（XCode 中打断点的时候也是按这些图标的类型来显示的）")]),t._v(" "),r("p",[r("img",{attrs:{src:s(217),alt:""}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/DeveloperTools/Conceptual/debugging_with_xcode/chapters/debugging_tools.html#//apple_ref/doc/uid/TP40015022-CH8-SW19",target:"_blank",rel:"noopener noreferrer"}},[t._v("apple 文档"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"calltree"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calltree","aria-hidden":"true"}},[t._v("#")]),t._v(" CallTree")]),t._v(" "),r("p",[t._v("我们发现调用堆栈上显示了许多系统的调用信息，看起来很是杂乱，影响我们定位到具体的代码中去，这时候需要利用下面 CallTree 选项的勾选操作。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(218),alt:""}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Separate by Thread：按线程分开做分析，这样更容易揪出那些吃资源的问题线程。特别是对于主线程，它要处理和渲染所有的接口数据，一旦受到阻塞，程序必然卡顿或停止响应。")])]),t._v(" "),r("li",[r("p",[t._v("Invert Call Tree：反向输出调用树。把调用层级最深的方法显示在最上面，更容易找到最耗时的操作。")])]),t._v(" "),r("li",[r("p",[t._v("Hide Missing Symbols：隐藏缺失符号。如果dSYM文件或其他系统架构缺失，列表中会出现很多奇怪的十六进制的数值，用此选项把这些干扰元素屏蔽掉，让列表回归清爽。")])]),t._v(" "),r("li",[r("p",[t._v("Hide System Libraries：隐藏系统库文件。过滤掉各种系统调用，只显示自己的代码调用。")])]),t._v(" "),r("li",[r("p",[t._v("Flattern Recursion：拼合递归。将同一递归函数产生的多条堆栈（因为递归函数会调用自己）合并为一条。")])]),t._v(" "),r("li",[r("p",[t._v("Top Functions：找到最耗时的函数或方法。")])])]),t._v(" "),r("h4",{attrs:{id:"选择指定时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择指定时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择指定时间")]),t._v(" "),r("p",[t._v("默认情况下,随着 APP 的运行期间所有的信息都会收集到，当我们查找指定功能的性能问题的时候就会被其他无关调用信息干扰。这时候需要选择指定时间段内的堆栈信息。")]),t._v(" "),r("p",[t._v("具体操作如下图")]),t._v(" "),r("p",[r("img",{attrs:{src:s(219)}})]),t._v(" "),r("h4",{attrs:{id:"focus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#focus","aria-hidden":"true"}},[t._v("#")]),t._v(" Focus")]),t._v(" "),r("p",[t._v("当我们找到 CPU 主要耗费到哪个函数（方法）之后，想要仔细观察这个函数的时候可以使用 Focus 这个功能。操作方式是选中这个函数然后右键展开菜单")]),t._v(" "),r("p",[r("img",{attrs:{src:s(220),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(221),alt:""}})]),t._v(" "),r("p",[t._v("这样就可以专注于选中的调用。")]),t._v(" "),r("h1",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://bugly.qq.com/docs/user-guide/symbol-configuration-ios/?v=1508981694992#_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugly iOS 符号表配置"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=a.exports}}]);