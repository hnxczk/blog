(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{347:function(t,a,r){t.exports=r.p+"assets/img/uml-1.b5046435.png"},348:function(t,a,r){t.exports=r.p+"assets/img/uml-2.af58e9e2.png"},349:function(t,a,r){t.exports=r.p+"assets/img/uml-3.4384b67a.png"},350:function(t,a,r){t.exports=r.p+"assets/img/uml-4.ec85c783.png"},351:function(t,a,r){t.exports=r.p+"assets/img/uml-5.631f095c.png"},352:function(t,a,r){t.exports=r.p+"assets/img/uml-6.d05c0481.png"},353:function(t,a,r){t.exports=r.p+"assets/img/uml-7.343629de.png"},354:function(t,a,r){t.exports=r.p+"assets/img/uml-8.87307bcc.png"},355:function(t,a,r){t.exports=r.p+"assets/img/uml-9.bcac4be0.png"},356:function(t,a,r){t.exports=r.p+"assets/img/uml-10.920f0bb0.png"},415:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"uml-类图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml-类图","aria-hidden":"true"}},[t._v("#")]),t._v(" UML 类图")]),t._v(" "),e("p",[t._v("UML 是统一建模语言（Unified Modeling Language）的缩写。这里只简单介绍其中类图的各个类之间的线条和箭头的含义。通过学习以后看一些设计模式相关的结构图就不会有什么问题了。")]),t._v(" "),e("p",[t._v("首先推荐个在线编辑 UML 的网站 "),e("a",{attrs:{href:"https://www.processon.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.processon.com"),e("OutboundLink")],1),t._v("。用了一下个人感觉相较一些软件例如 StarUML 而言这个网站比较好上手一些。功能样式都还不错。")]),t._v(" "),e("h2",{attrs:{id:"类图中的元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类图中的元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 类图中的元素")]),t._v(" "),e("h3",{attrs:{id:"类和接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类和接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 类和接口")]),t._v(" "),e("p",[e("img",{attrs:{src:r(347),alt:""}})]),t._v(" "),e("p",[t._v("从上到下依次是类名、属性、方法。")]),t._v(" "),e("p",[t._v("属性和方法前面的符号代表其可见性")]),t._v(" "),e("ul",[e("li",[t._v("private 的在前方用 - 表示")]),t._v(" "),e("li",[t._v("public 的在前方用 + 表示")]),t._v(" "),e("li",[t._v("protected 的在前方用 # 表示")])]),t._v(" "),e("p",[e("img",{attrs:{src:r(348),alt:""}}),t._v(" "),e("img",{attrs:{src:r(349),alt:""}})]),t._v(" "),e("p",[t._v("接口和抽象类中的标识方式在不同地方介绍也不同，这里取其中我认为看起来比较好的两种方式。")]),t._v(" "),e("h3",{attrs:{id:"类之间关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类之间关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 类之间关系")]),t._v(" "),e("h4",{attrs:{id:"泛化关系-generalization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛化关系-generalization","aria-hidden":"true"}},[t._v("#")]),t._v(" 泛化关系(generalization)")]),t._v(" "),e("blockquote",[e("p",[t._v("泛化可以被定义为一个专门的元件连接关系与一个广义的元素，它基本上描述了在对象世界中的继承关系，是一种一般化-特殊化的关系。")])]),t._v(" "),e("p",[t._v("继承非抽象类属于这个关系。比如 SUV 继承自 汽车。")]),t._v(" "),e("p",[t._v("用一条带空心箭头的直线来表示。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(350),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"实现关系-realize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现关系-realize","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现关系(realize)")]),t._v(" "),e("blockquote",[e("p",[t._v("类之间的语义关系，其中的一个类指定了由另一个类保证执行的契约。")])]),t._v(" "),e("p",[t._v("继承抽象类或者实现接口都属于这种关系。")]),t._v(" "),e("p",[t._v("用一条带空心箭头的虚线表示。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(351),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"聚合关系-aggregation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合关系-aggregation","aria-hidden":"true"}},[t._v("#")]),t._v(" 聚合关系(aggregation)")]),t._v(" "),e("blockquote",[e("p",[t._v("聚合关系用于表示实体对象之间的关系，表示整体由部分构成的语义；例如一个班级由多个学生组成；\n与组合关系不同的是，整体和部分不是强依赖的，即使整体不存在了，部分仍然存在；例如， 班级因毕业撤销了，学生不会消失，他们依然存在；")])]),t._v(" "),e("p",[t._v("用一条带空心菱形箭头的直线表示。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(352),alt:""}})]),t._v(" "),e("p",[t._v("上图中学生聚合而成为一个班级。")]),t._v(" "),e("h4",{attrs:{id:"组合关系-composition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组合关系-composition","aria-hidden":"true"}},[t._v("#")]),t._v(" 组合关系(composition)")]),t._v(" "),e("blockquote",[e("p",[t._v("组合关系同样表示整体由部分构成的语义；比如公司由多个部门组成；\n但组合关系是一种强依赖的特殊聚合关系，如果整体不存在了，则部分也不存在了；例如， 公司不存在了，部门也将不存在了；")])]),t._v(" "),e("p",[t._v("用一条带实心菱形箭头直线表示.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(353),alt:""}})]),t._v(" "),e("p",[t._v("上图中汽车由引擎和轮胎组合而成。")]),t._v(" "),e("h4",{attrs:{id:"关联关系-association"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联关系-association","aria-hidden":"true"}},[t._v("#")]),t._v(" 关联关系(association)")]),t._v(" "),e("blockquote",[e("p",[t._v("它描述不同类的对象之间的结构关系；它是一种静态关系， 通常与运行状态无关，一般由常识等因素决定的；它一般用来定义对象之间静态的、天然的结构； 所以，关联关系是一种“强关联”的关系；\n比如，乘车人和车票之间就是一种关联关系；学生和学校就是一种关联关系；\n关联关系默认不强调方向，表示对象间相互知道；如果特别强调方向，可以使用箭头来表示；")])]),t._v(" "),e("p",[t._v("拥有成员变量属于这种关系。")]),t._v(" "),e("p",[t._v("用一条直线表示，如果强调方向的话可以加上箭头表示方向。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(354),alt:""}})]),t._v(" "),e("p",[t._v("上图中，学生拥有学生证这个成员变量")]),t._v(" "),e("h4",{attrs:{id:"依赖关系-dependency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系-dependency","aria-hidden":"true"}},[t._v("#")]),t._v(" 依赖关系(dependency)")]),t._v(" "),e("blockquote",[e("p",[t._v("描述一个对象在运行期间会用到另一个对象的关系；\n与关联关系不同的是，它是一种临时性的关系，通常在运行期间产生，并且随着运行时的变化； 依赖关系也可能发生变化；\n显然，依赖也有方向，双向依赖是一种非常糟糕的结构，我们总是应该保持单向依赖，杜绝双向依赖的产生；")])]),t._v(" "),e("p",[t._v("依赖关系体现为类构造方法及类方法的传入参数，箭头的指向为调用关系；依赖关系除了临时知道对方外，还是“使用”对方的方法和属性；")]),t._v(" "),e("p",[t._v("用一套带箭头的虚线表示。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(355),alt:""}})]),t._v(" "),e("p",[t._v("上图中自行车在骑的时候需要学生来骑，因此它依赖于学生。但这个关系是临时的，比如对应共享单车来说一个学生骑过之后，学生和自行车就没有了关系。")]),t._v(" "),e("h2",{attrs:{id:"完整的示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整的示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 完整的示例")]),t._v(" "),e("p",[e("img",{attrs:{src:r(356),alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("车的类图结构为"),e("code",[t._v("<<abstract>>")]),t._v("，表示车是一个抽象类；")]),t._v(" "),e("li",[t._v("它有两个继承类：小汽车和自行车；它们之间的关系为实现关系，使用带空心箭头的虚线表示；")]),t._v(" "),e("li",[t._v("小汽车为与SUV之间也是继承关系，它们之间的关系为泛化关系，使用带空心箭头的实线表示；")]),t._v(" "),e("li",[t._v("小汽车与发动机之间是组合关系，使用带实心箭头的实线表示；")]),t._v(" "),e("li",[t._v("学生与班级之间是聚合关系，使用带空心箭头的实线表示；")]),t._v(" "),e("li",[t._v("学生与学生证之间为关联关系，使用一根实线表示；")]),t._v(" "),e("li",[t._v("学生上学需要用到自行车，与自行车是一种依赖关系，使用带箭头的虚线表示；")])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("看懂UML类图和时序图"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.w3cschool.cn/uml_tutorial/uml_tutorial-pohy28t3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("w3cschool UML教程"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.wistbean.com/blog/2017/10/03/uml-diagrams/",target:"_blank",rel:"noopener noreferrer"}},[t._v("轻松理解UML用例图时序图类图的教程"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=s.exports}}]);