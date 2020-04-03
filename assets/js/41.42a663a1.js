(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{261:function(e,r,a){e.exports=a.p+"assets/img/ios_performance_1.5f16df9f.png"},486:function(e,r,a){"use strict";a.r(r);var t=a(0),i=Object(t.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ios-性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-性能优化","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS 性能优化")]),e._v(" "),t("h2",{attrs:{id:"卡顿产生的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卡顿产生的原因","aria-hidden":"true"}},[e._v("#")]),e._v(" 卡顿产生的原因")]),e._v(" "),t("h3",{attrs:{id:"图像显示的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图像显示的原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 图像显示的原理")]),e._v(" "),t("blockquote",[t("p",[e._v("计算机系统中 CPU 计算好显示内容提交到 GPU，GPU 渲染完成后将渲染结果放入帧缓冲区，随后视频控制器会按照 VSync (垂直同步信号( vertical synchronization )) 信号逐行读取帧缓冲区的数据，经过可能的数模转换传递给显示器显示。")]),e._v(" "),t("p",[t("img",{attrs:{src:a(261),alt:""}})]),e._v(" "),t("p",[e._v("在 VSync 信号到来后，系统图形服务会通过 CADisplayLink 等机制通知 App，App 主线程开始在 CPU 中计算显示内容，"),t("strong",[e._v("比如视图的创建、布局计算、图片解码、文本绘制等")]),e._v("。随后 CPU 会将计算好的内容提交到 GPU 去，由 GPU 进行"),t("strong",[e._v("变换、合成、渲染")]),e._v("。随后 GPU 会把渲染结果提交到帧缓冲区去，等待下一次 VSync 信号到来时显示到屏幕上。由于垂直同步的机制，如果在一个 VSync 时间内，CPU 或者 GPU 没有完成内容提交，则那一帧就会被丢弃，等待下一次机会再显示，而这时显示屏会保留之前的内容不变。这就是界面卡顿的原因。")])]),e._v(" "),t("p",[t("strong",[e._v("由以上内容可以了解到在两次 VSync 信号之间，CPU 和 GPU 无论谁占用的时间过长都会影响到显示的流程，进而产生卡顿的现象。")])]),e._v(" "),t("h3",{attrs:{id:"cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu","aria-hidden":"true"}},[e._v("#")]),e._v(" CPU")]),e._v(" "),t("p",[e._v("加载资源，对象创建，对象调整，对象销毁，布局计算，Autolayout，文本计算，文本渲染，图片的解码， 图像的绘制（Core Graphics）都是在CPU上面进行的。")]),e._v(" "),t("h3",{attrs:{id:"gpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu","aria-hidden":"true"}},[e._v("#")]),e._v(" GPU")]),e._v(" "),t("p",[e._v("接收提交的纹理（Texture）和顶点描述（三角形），应用变换（transform）、混合（合成）并渲染，然后输出到屏幕上。通常你所能看到的内容，主要也就是纹理（图片）和形状（三角模拟的矢量图形）两类。")]),e._v(" "),t("p",[e._v("GPU的渲染性能要比CPU高效很多，同时对系统的负载和消耗也更低一些，所以在开发中，我们应该尽量让CPU负责主线程的UI调动，把图形显示相关的工作交给GPU来处理，当涉及到光栅化等一些工作时，CPU也会参与进来，这点在后面再详细描述。")]),e._v(" "),t("h2",{attrs:{id:"图层混合-blending"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图层混合-blending","aria-hidden":"true"}},[e._v("#")]),e._v(" 图层混合 blending")]),e._v(" "),t("p",[e._v("使用透明view会引起blending，在iOS的图形处理中，blending主要指的是混合像素颜色的计算。最直观的例子就是，我们把两个图层叠加在一起，如果第一个图层的透明的，则最终像素的颜色计算需要将第二个图层也考虑进来。这一过程即为Blending。")]),e._v(" "),t("p",[e._v("会导致blending的原因：")]),e._v(" "),t("ul",[t("li",[e._v("UIView的alpha < 1。")]),e._v(" "),t("li",[e._v("UIImageView的image含有alpha channel（即使UIImageView的alpha是1，但只要image含有透明通道，则仍会导致blending）。")])]),e._v(" "),t("h2",{attrs:{id:"离屏渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离屏渲染","aria-hidden":"true"}},[e._v("#")]),e._v(" 离屏渲染")]),e._v(" "),t("p",[e._v("离屏渲染指的是在图像在绘制到当前屏幕前，需要先进行一次渲染，之后才绘制到当前屏幕。")]),e._v(" "),t("p",[e._v("OpenGL中，GPU屏幕渲染有以下两种方式：")]),e._v(" "),t("ul",[t("li",[e._v("On-Screen Rendering即当前屏幕渲染，指的是GPU的渲染操作是在当前用于显示的屏幕缓冲区中进行。")]),e._v(" "),t("li",[e._v("Off-Screen Rendering即离屏渲染，指的是GPU在当前屏幕缓冲区以外新开辟一个缓冲区进行渲染操作。")])]),e._v(" "),t("p",[e._v("为什么离屏渲染会发生卡顿？主要包括两方面内容：")]),e._v(" "),t("ul",[t("li",[e._v("创建新的缓冲区。")]),e._v(" "),t("li",[e._v("上下文切换，离屏渲染的整个过程，需要多次切换上下文环境（CPU渲染和GPU切换），先是从当前屏幕（On-Screen）切换到离屏（Off-Screen）；等到离屏渲染结束以后，将离屏缓冲区的渲染结果显示到屏幕上又需要将上下文环境从离屏切换到当前屏幕。而上下文环境的切换是要付出很大代价的。")])]),e._v(" "),t("p",[e._v("设置了以下属性时，都会触发离屏渲染：")]),e._v(" "),t("ul",[t("li",[e._v("layer.shouldRasterize，光栅化")]),e._v(" "),t("li",[e._v("layer.mask，遮罩")]),e._v(" "),t("li",[e._v("layer.allowsGroupOpacity为YES，layer.opacity的值小于1.0")]),e._v(" "),t("li",[e._v("layer.cornerRadius，并且设置layer.masksToBounds为YES。可以使用剪切过的图片，或者使用layer画来解决。")]),e._v(" "),t("li",[e._v("layer.shadows，(表示相关的shadow开头的属性)，使用shadowPath代替。")])]),e._v(" "),t("p",[e._v("离屏渲染的优化建议")]),e._v(" "),t("ul",[t("li",[e._v("使用ShadowPath指定layer阴影效果路径。")]),e._v(" "),t("li",[e._v("使用异步进行layer渲染（Facebook开源的异步绘制框架AsyncDisplayKit）。")]),e._v(" "),t("li",[e._v("设置layer的opaque值为YES，减少复杂图层合成。")]),e._v(" "),t("li",[e._v("尽量使用不包含透明（alpha）通道的图片资源。")]),e._v(" "),t("li",[e._v("尽量设置layer的大小值为整形值。")]),e._v(" "),t("li",[e._v("直接让美工把图片切成圆角进行显示，这是效率最高的一种方案。")]),e._v(" "),t("li",[e._v("很多情况下用户上传图片进行显示，可以在客户端处理圆角。")]),e._v(" "),t("li",[e._v("使用代码手动生成圆角image设置到要显示的View上，利用UIBezierPath（Core Graphics框架）画出来圆角图片。")])]),e._v(" "),t("h2",{attrs:{id:"光栅化-shouldrasterize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#光栅化-shouldrasterize","aria-hidden":"true"}},[e._v("#")]),e._v(" 光栅化 shouldRasterize")]),e._v(" "),t("p",[e._v("我们屏幕上显示的画面都是由像素组成，而三维物体都是点线面构成的。要让点线面，变成能在屏幕上显示的像素，就需要Rasterize这个过程。就是从矢量的点线面的描述，变成像素的描述。")]),e._v(" "),t("ul",[t("li",[e._v("光栅化概念：将图转化为一个个栅格组成的图像")]),e._v(" "),t("li",[e._v("光栅化特点：每个元素对应帧缓冲区中的一像素")])]),e._v(" "),t("p",[e._v("iOS中，光栅化的过程是将图形转化为可以存储的bitmap，放在缓存中，以被程序循环使用，减少渲染的频率。\n我的理解是光栅化是一种特殊的离屏渲染，它的主要工作量集中在CPU上.")]),e._v(" "),t("p",[e._v("优点：")]),e._v(" "),t("ul",[t("li",[e._v("CALayer会被光栅化为bitmap，shadows、cornerRadius等效果会被缓存。")])]),e._v(" "),t("p",[e._v("缺点：")]),e._v(" "),t("ul",[t("li",[e._v("更新已经光栅化的layer，会造成离屏渲染。")]),e._v(" "),t("li",[e._v("bitmap超过100ms没有使用就会移除。")]),e._v(" "),t("li",[e._v("受系统限制，缓存的大小为 2.5X Screen Size。")])]),e._v(" "),t("p",[e._v("shouldRasterize "),t("strong",[e._v("适合静态页面显示，动态页面会增加开销")]),e._v("。如果设置了shouldRasterize为 YES，那也要记住设置rasterizationScale为contentsScale。")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://bihongbo.com/2016/01/03/memoryGhostdrawRect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.内存恶鬼drawRect"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://bestswifter.com/efficient-rounded-corner/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.iOS 高效添加圆角效果实战讲解 "),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://bestswifter.com/uikitxing-neng-diao-you-shi-zhan-jiang-jie/",target:"_blank",rel:"noopener noreferrer"}},[e._v("3.性能调优实战"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.ibireme.com/2015/11/12/smooth_user_interfaces_for_ios/",target:"_blank",rel:"noopener noreferrer"}},[e._v("4.iOS 保持界面流畅的技巧"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zsisme.gitbooks.io/ios-/content/chapter1/layer-capabilities.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("5.iOS Core Animation: Advanced Techniques中文译本"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://draveness.me/asdk-rendering",target:"_blank",rel:"noopener noreferrer"}},[e._v("6.使用 ASDK 性能调优 - 提升 iOS 界面的渲染性能"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5ace078cf265da23994ee493",target:"_blank",rel:"noopener noreferrer"}},[e._v("7.iOS 性能优化总结"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://sonnewilling.com/blog/2016/10/19/iostu-xing-yuan-li-yu-chi-ping-xuan-ran/#anchor1.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("8.iOS图形原理与离屏渲染"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=i.exports}}]);