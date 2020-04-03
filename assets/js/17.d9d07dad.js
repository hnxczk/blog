(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{284:function(a,t,e){a.exports=e.p+"assets/img/copy.bff1d32f.gif"},285:function(a,t,e){a.exports=e.p+"assets/img/number-store.e40e1eb1.png"},286:function(a,t,e){a.exports=e.p+"assets/img/number-store-1.02f37e9b.png"},287:function(a,t,e){a.exports=e.p+"assets/img/change-type.05cd1af3.png"},441:function(a,t,e){"use strict";e.r(t);var _=e(0),r=Object(_.a)({},function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 类型")]),a._v(" "),_("p",[a._v("基本类型：Undefined、Null、Boolean、String、Number、Symbol")]),a._v(" "),_("p",[a._v("引用类型：Object")]),a._v(" "),_("h2",{attrs:{id:"_1-基本类型和引用类型的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本类型和引用类型的区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 基本类型和引用类型的区别")]),a._v(" "),_("p",[_("img",{attrs:{src:e(284),alt:""}})]),a._v(" "),_("p",[a._v("上面这张图片很好的解释了值传递和引用传递的区别。")]),a._v(" "),_("h3",{attrs:{id:"_1-1-不可变性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-不可变性","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 不可变性")]),a._v(" "),_("p",[a._v("基本类型，在 ECMAScript 标准中，它们被定义为 "),_("code",[a._v("primitive values")]),a._v(" ，即原始值，代表值本身是不可被改变的。")]),a._v(" "),_("p",[a._v("基本类型的值被直接存储在栈中，在变量定义时，栈就为其分配好了内存空间。由于栈中的内存空间的大小是固定的，那么注定了存储在栈中的变量就是不可变的。")]),a._v(" "),_("p",[a._v("以字符串为例，我们在调用操作字符串的方法时，没有任何方法是可以直接改变字符串的。对其修改也只是修改变量指向的值，而值的本身是不课改变的。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("let str = 'str'\nstr += '1'\nconsole.log(str);  // str1\n")])])]),_("p",[a._v("在上面的代码 "),_("code",[a._v("str")]),a._v(" 是变量名，"),_("code",[a._v("'str'")]),a._v(" 则是一个 String 类型的值，通过 "),_("code",[a._v("+=")]),a._v(" 这个操作符会将一个新的 String 类型的值 "),_("code",[a._v("'str1'")]),a._v(" 赋值给 "),_("code",[a._v("str")]),a._v(" 这个变量。值本身是没有改变的。")]),a._v(" "),_("p",[a._v("引用类型的值实际存储在堆内存中，它在栈中只存储了一个固定长度的地址，这个地址指向堆内存中的值。因此引用类型的值是可以修改的。")]),a._v(" "),_("h3",{attrs:{id:"_1-2-复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-复制","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 复制")]),a._v(" "),_("p",[a._v("基本类型在复制的时候，会在栈中开辟一个新的内存空间来存储复制出来的值。这样以来二者指向的内存空间完全不同，这两个变量的操作就互不影响。")]),a._v(" "),_("p",[a._v("当我们复制引用类型的变量时，实际上复制的是栈中存储的地址，因此复制出来的变量实际上和之前的变量指向堆中同一个对象。这样以来操作会相互影响。")]),a._v(" "),_("h3",{attrs:{id:"_1-3-比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-比较","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.3 比较")]),a._v(" "),_("p",[a._v("对于原始类型，比较时会直接比较它们的值，如果值相等，即返回 true。")]),a._v(" "),_("p",[a._v("对于引用类型，比较时会比较它们的引用地址，即使两个变量在堆中存储的对象具有的属性值都是相等的，但是它们被存储在了不同的存储空间，因此比较值为 false。")]),a._v(" "),_("h3",{attrs:{id:"_1-4-值传递和引用传递"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-值传递和引用传递","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.4 值传递和引用传递")]),a._v(" "),_("blockquote",[_("p",[a._v("所有的函数的参数都是按值传递的。")])]),a._v(" "),_("p",[a._v("当函数参数是值类型的时候，修改函数参数的值是不能修改外部值。")]),a._v(" "),_("p",[a._v("当函数参数是引用类型时，我们同样将参数复制了一个副本到局部变量，只不过复制的这个副本是指向堆内存中的地址而已，我们在函数内部对对象的属性进行操作，实际上和外部变量指向堆内存中的值相同，但是这并不代表着引用传递，依然是值传递。")]),a._v(" "),_("h2",{attrs:{id:"_2-undefined"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-undefined","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. Undefined")]),a._v(" "),_("h3",{attrs:{id:"_2-1-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-语义","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 语义")]),a._v(" "),_("p",[a._v("表示一个变量最原始的状态，代表未定义的值，而非人为操作的结果")]),a._v(" "),_("h3",{attrs:{id:"_2-2-本质"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-本质","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 本质")]),a._v(" "),_("p",[a._v("undefined 是全局对象的一个属性。也就是说，它是全局作用域的一个变量，并非一个关键字。")]),a._v(" "),_("h3",{attrs:{id:"_2-3-获取-undefined"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-获取-undefined","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 获取 undefined")]),a._v(" "),_("ul",[_("li",[a._v("变量被声明了，但没有赋值时，就等于 undefined。")]),a._v(" "),_("li",[a._v("调用函数时，应该提供的参数没有提供，该参数等于 undefined。")]),a._v(" "),_("li",[a._v("对象没有赋值的属性，该属性的值为 undefined。")]),a._v(" "),_("li",[a._v("函数没有返回值时(没有写 return 或者 return 后面没有东西)，默认返回 undefined。")])]),a._v(" "),_("h3",{attrs:{id:"_2-4-void-0-代替-undefined"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-void-0-代替-undefined","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4 void 0 代替 undefined")]),a._v(" "),_("p",[a._v("void 操作符 对任何表达式求值都返回 undefined ，这和函数执行操作后没有返回值的作用是一样的，JavaScript 中的函数都有返回值，当没有 return 操作时，就默认返回一个原始的状态值，这个值就是 undefined，表明函数的返回值未被定义。")]),a._v(" "),_("p",[a._v("undefined 是一个变量而不是关键字，为了避免被篡改一般使用 void 0 来获取 undefined 值。")]),a._v(" "),_("h2",{attrs:{id:"_3-null"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-null","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. Null")]),a._v(" "),_("h3",{attrs:{id:"_3-1-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-语义","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 语义")]),a._v(" "),_("p",[a._v("表示一个对象被人为的重置为空对象，而非一个变量最原始的状态。它只有一个值，即 null。")]),a._v(" "),_("h3",{attrs:{id:"_3-2-本质"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-本质","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 本质")]),a._v(" "),_("p",[a._v("null 在内存里的表示栈中的变量没有指向堆中的内存对象。当一个对象被赋值了 null 以后，原来的对象在内存中就处于游离状态，GC 会择机回收该对象并释放内存。因此，如果需要释放某个对象，就将变量设置为 null，即表示该对象已经被清空，目前无效状态。")]),a._v(" "),_("h3",{attrs:{id:"_3-3-typeof-null-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-typeof-null-object","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.3 "),_("code",[a._v("typeof null == 'object'")])]),a._v(" "),_("p",[a._v("typeof 会将 null 误判为 Object 类型。")]),a._v(" "),_("p",[a._v("这是因为数据类型在底层都是以二进制形式表示的，二进制的前三位为 0 会被 typeof 判定为对象类型。")]),a._v(" "),_("ul",[_("li",[a._v("000 - 对象，数据是对象的应用")]),a._v(" "),_("li",[a._v("1 - 整型，数据是31位带符号整数")]),a._v(" "),_("li",[a._v("010 - 双精度类型，数据是双精度数字")]),a._v(" "),_("li",[a._v("100 - 字符串，数据是字符串")]),a._v(" "),_("li",[a._v("110 - 布尔类型，数据是布尔值")])]),a._v(" "),_("p",[a._v("null 值的二进制表示全是 0 ，自然前三位当然也是 000，因此，typeof 会误以为是对象类型。")]),a._v(" "),_("h3",{attrs:{id:"_3-4-null-和-undefined-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-null-和-undefined-的区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.4 null 和 undefined 的区别")]),a._v(" "),_("p",[a._v("null 表示无值,即该处不应该有值，也没有指向任何对象或者任何值，而 undefined 表示缺少值,表示应该有值，但是还没有定义，所以先指向全局变量 window.undefined 或者 undefined 来代替那个还没有定义的值。")]),a._v(" "),_("p",[a._v("使用 == 只判断值的时候，null 和 undefined 是一样的，但是使用 === 的时候，需要做类型判断，null 的类型为 Null, undefined 的类型为 Undefined")]),a._v(" "),_("h2",{attrs:{id:"_4-boolean"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-boolean","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. Boolean")]),a._v(" "),_("h3",{attrs:{id:"_4-1-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-语义","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1 语义")]),a._v(" "),_("p",[a._v("表示逻辑上的真和假，它有两个值 true 和 false")]),a._v(" "),_("h3",{attrs:{id:"_4-2-转化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-转化","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.2 转化")]),a._v(" "),_("p",[a._v("在 JavaScript 中，所有类型的值都可以转化为与 Boolean 等价的值。转化规则如下：")]),a._v(" "),_("ol",[_("li",[a._v("所有对象都被当作 true")]),a._v(" "),_("li",[a._v("空字符串被当作 false")]),a._v(" "),_("li",[a._v("null 和 undefined 被当作 false")]),a._v(" "),_("li",[a._v("数字 0 和 NaN 被当作 false")]),a._v(" "),_("li",[a._v("出去 2，3，4 之外的值类型都被当做 true")])]),a._v(" "),_("p",[a._v("只推荐使用 Boolean() 转换函数。")]),a._v(" "),_("h3",{attrs:{id:"_4-3-返回-boolean-的操作符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-返回-boolean-的操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3 返回 Boolean 的操作符")]),a._v(" "),_("h4",{attrs:{id:"_4-3-1-关系操作符：-，-，-，"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-关系操作符：-，-，-，","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3.1 关系操作符："),_("code",[a._v(">")]),a._v("，"),_("code",[a._v(">=")]),a._v("，"),_("code",[a._v("<")]),a._v("，"),_("code",[a._v("<=")])]),a._v(" "),_("blockquote",[_("p",[a._v("当关系操作符的操作数使用了非数值时，要进行数据转换或完成某些奇怪的操作。")])]),a._v(" "),_("ul",[_("li",[a._v("如果两个操作数都是数值，则执行数值比较。")]),a._v(" "),_("li",[a._v("如果两个操作数都是字符串，则逐个比较两者对应的字符编码(charCode)，直到分出大小为止 。")]),a._v(" "),_("li",[a._v("如果操作数是其他基本类型，则调用 Number() 将其转化为数值，然后进行比较。")]),a._v(" "),_("li",[a._v("NaN 与任何值比较，均返回 false 。")]),a._v(" "),_("li",[a._v("如果操作数是对象，则调用对象的 valueOf 方法（如果没有 valueOf ，就调用 toString 方法），最后用得到的结果，根据前面的规则执行比较。")])]),a._v(" "),_("h4",{attrs:{id:"_4-3-2-相等操作符：-，-，-，"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-相等操作符：-，-，-，","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3.2 相等操作符： "),_("code",[a._v("==")]),a._v("，"),_("code",[a._v("!=")]),a._v("，"),_("code",[a._v("===")]),a._v("，"),_("code",[a._v("!==")])]),a._v(" "),_("p",[a._v("如果两个操作数类型相同则 "),_("code",[a._v("==")]),a._v(" 和 "),_("code",[a._v("!=")]),a._v(" 跟 "),_("code",[a._v("===")]),a._v(" 和 "),_("code",[a._v("!==")]),a._v(" 是等价的。")]),a._v(" "),_("blockquote",[_("p",[a._v("== 和 != 操作符都会先转换操作数，然后再比较它们的相等性。")])]),a._v(" "),_("ul",[_("li",[a._v("如果有一个操作数是布尔值，则在比较相等性之前，先调用 Number() 将其转换为数值；")]),a._v(" "),_("li",[a._v("如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前，先调用 Number() 将字符串转换为数值；")]),a._v(" "),_("li",[a._v("如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；")]),a._v(" "),_("li",[a._v("null 和 undefined 是相等的。在比较相等性之前，不能将 null 和 undefined 转换成其他任何值。")]),a._v(" "),_("li",[a._v("如果有一个操作数是 NaN，则相等操作符返回 false，而不相等操作符返回 true；")]),a._v(" "),_("li",[a._v("如果两个操作数都是对象，则比较它们的指针地址。如果都指向同一个对象，则相等操作符返回 true；否则，返回 false。")])]),a._v(" "),_("blockquote",[_("p",[_("code",[a._v("===")]),a._v(" 和 "),_("code",[a._v("!==")]),a._v(" 操作符最在比较之前不转换操作数")])]),a._v(" "),_("ul",[_("li",[_("code",[a._v("===")]),a._v("： 类型相同，并且值相等，才返回 true ，否则返回 false 。")]),a._v(" "),_("li",[_("code",[a._v("!==")]),a._v("： 类型不同，或者值不相等，就返回 true，否则返回 false 。")])]),a._v(" "),_("h4",{attrs:{id:"_4-3-3-逻辑操作符：-，-，"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-逻辑操作符：-，-，","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3.3 逻辑操作符： &&，||，!")]),a._v(" "),_("blockquote",[_("p",[a._v("逻辑与 "),_("code",[a._v("&&")]),a._v(" 和 逻辑或 "),_("code",[a._v("||")]),a._v(" 返回的不一定是布尔值，而是包含布尔值在内的任意类型值。")])]),a._v(" "),_("p",[a._v("逻辑操作符属于短路操作符 。在进行计算之前，会先通过 Boolean() 方法将两边的分项转换为布尔值，然后分别遵循下列规则进行计算：")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("&&")]),a._v("：从左到右检测每一个分项，返回第一个布尔值为 false 的分项，并停止检测 。如果没有检测到 false 项，则返回最后一个分项。")]),a._v(" "),_("li",[_("code",[a._v("||")]),a._v("：从左到右检测每一个分项，返回第一个布尔值为 true 的分项，并停止检测 。如果没有检测到 true 项，则返回最后一个分项。")])]),a._v(" "),_("blockquote",[_("p",[a._v("布尔操作符 "),_("code",[a._v("!")]),a._v(" 其求值过程如下")])]),a._v(" "),_("ol",[_("li",[a._v("对分项求值，得到一个任意类型值；")]),a._v(" "),_("li",[a._v("使用 Boolean() 把该值转换为布尔值 true 或 false；")]),a._v(" "),_("li",[a._v("对布尔值取反，即 true 变 false，false 变 true")])]),a._v(" "),_("blockquote",[_("p",[a._v("利用 "),_("code",[a._v("!")]),a._v(" 的取反的特点，使用 "),_("code",[a._v("!!")]),a._v(" 可以很方便的将一个任意类型值转换为布尔值")])]),a._v(" "),_("h4",{attrs:{id:"_4-3-4-条件语句：if，while，"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-条件语句：if，while，","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3.4 条件语句：if，while，?")]),a._v(" "),_("ol",[_("li",[a._v("对表达式求值，得到一个任意类型值")]),a._v(" "),_("li",[a._v("使用 Boolean() 将得到的值转换为布尔值 true 或 false")])]),a._v(" "),_("h2",{attrs:{id:"_5-string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-string","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. String")]),a._v(" "),_("h3",{attrs:{id:"_5-1-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-语义","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 语义")]),a._v(" "),_("p",[a._v("String 类型是零个或多个 16 位无符号整数值（“元素”）的所有有序序列的集合，最大长度为 2^53-1 个元素。 String 类型通常用于表示正在运行的程序中的文本数据，在这种情况下，String 中的每个元素都被视为 UTF-16 代码单元值。每个元素被视为占据序列内的位置。这些位置用非负整数索引。第一个元素（如果有）位于索引 0，索引为 1 的下一个元素（如果有），依此类推。 String 的长度是其中的元素数（即 16 位值）。")]),a._v(" "),_("h3",{attrs:{id:"_5-2-unicode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-unicode","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.2 Unicode")]),a._v(" "),_("p",[a._v("现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上, Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）。")]),a._v(" "),_("blockquote",[_("p",[a._v("UTF-16 比较好理解,就是任何字符对应的数字都用两个字节来保存.我们通常对 Unicode 的误解就是把 Unicode 与 UTF-16 等同了.但是很显然如果都是英文字母这做有点浪费.明明用一个字节能表示一个字符为啥整两个啊.")]),a._v(" "),_("p",[a._v("于是又有个 UTF-8,这里的 8 非常容易误导人,8 不是指一个字节,难道一个字节表示一个字符?实际上不是.当用 UTF-8 时表示一个字符是可变的,有可能是用一个字节表示一个字符,也可能是 两个,三个.当然最多不能超过 3个字节了.反正是根据字符对应的数字大小来确定.")]),a._v(" "),_("p",[a._v("于是 UTF-8 和 UTF-16 的优劣很容易就看出来了.如果全部英文或英文与其他文字混合,但英文占绝大部分,用 UTF-8 就比 UTF-16 节省了很多空间.而如果全部是中文这样类似的字符或者混合字符中中文占绝大多数. UTF-16 就占优势了,可以节省很多空间.")]),a._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/kingcat/archive/2012/10/16/2726334.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("来源"),_("OutboundLink")],1)])]),a._v(" "),_("h3",{attrs:{id:"_5-3-string-对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-string-对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3 String 对象")]),a._v(" "),_("p",[a._v("在 JavaScript 中，字符串是基本数据类型，本身不存任何操作方法 。为了方便的对字符串进行操作，JavaScript 提供了一个 String 类型对象：String 对象 。它是一种特殊的引用类型，JS 引擎每当读取一个字符串的时候，就会在内部创建一个对应的 String 对象，该对象提供了很多操作字符的方法，这就是为什么能对字符串调用方法的原因 。")]),a._v(" "),_("h3",{attrs:{id:"_5-4-string-对象的常见方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-string-对象的常见方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.4 String 对象的常见方法")]),a._v(" "),_("ul",[_("li",[a._v("字符操作：charAt，charCodeAt，fromCharCode")]),a._v(" "),_("li",[a._v("字符串提取：substr，substring ，slice")]),a._v(" "),_("li",[a._v("位置索引：indexOf ，lastIndexOf")]),a._v(" "),_("li",[a._v("大小写转换：toLowerCase，toUpperCase")]),a._v(" "),_("li",[a._v("模式匹配：match，search，replace，split")]),a._v(" "),_("li",[a._v("其他操作：concat，trim，localeCompare")])]),a._v(" "),_("p",[a._v("charCodeAt 的作用是获取字符的 Unicode 编码，俗称 “Unicode 码点”。通过 charCodeAt 获取字符的 Unicode 编码，然后再把这个编码转化成二进制，就可以得到该字符的二进制表示。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("var a = 'a';\nvar code = a.charCodeAt(0); // 97\ncode.toString(2); // 1100001\n")])])]),_("p",[a._v("fromCharCode 是 String 对象上的静态方法，作用是根据 Unicode 编码返回对应的字符。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("substring(start [, end])\n")])])]),_("p",[a._v("substring 截取字符串的某个 start 位置到某个 end 位置（但 end 位置的字符不包括在结果中）的子串，如果没有第 2 个 end 参数，直到字符串末尾。参数只接受正数和 0，把负数或其它无效的数当作 0。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("substr(start [, length])\n")])])]),_("p",[a._v("substr 截取字符串的某个 start 位置起，数 length 个长度的字符才结束。如果没有第 2 个参数，直到字符串末尾。可以接受 “负数”，表示从字符串尾部开始计数。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("slice(start [, end])\n")])])]),_("p",[a._v("slice 与 substring 基本相同，不同的是参数能接受 “负数”，表示从结尾开始计数。")]),a._v(" "),_("h2",{attrs:{id:"_6-number"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-number","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. Number")]),a._v(" "),_("h3",{attrs:{id:"_6-1-表示方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-表示方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.1 表示方式")]),a._v(" "),_("p",[a._v("JavaScript 中的数字类型只有 Number 一种，Number 类型采用 IEEE754 标准中的 “双精度浮点数” 来表示一个数字，不区分整数和浮点数 。所以，1与1.0是相同的，是同一个数。")]),a._v(" "),_("h3",{attrs:{id:"_6-2-存储方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-存储方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.2 存储方式")]),a._v(" "),_("p",[a._v("在 IEEE754 中，双精度浮点数采用 64 位存储，即 8 个字节表示一个浮点数 。其存储结构如下图所示：")]),a._v(" "),_("p",[_("img",{attrs:{src:e(285),alt:""}})]),a._v(" "),_("p",[a._v("指数位可以通过下面的方法转换为使用的指数值：")]),a._v(" "),_("p",[_("img",{attrs:{src:e(286),alt:""}})]),a._v(" "),_("h3",{attrs:{id:"_6-3-数值范围"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-数值范围","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.3 数值范围")]),a._v(" "),_("p",[a._v("从存储结构中可以看出， 指数部分的长度是11个二进制，即指数部分能表示的最大值是 2047（211-1），取中间值进行偏移，用来表示负指数，也就是说指数的范围是 [-1023,1024] 。因此，这种存储结构能够表示的数值范围为 21024 到 2-1023 ，超出这个范围的数无法表示 。21024  和 2-1023  转换为科学计数法如下所示：")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("1.7976931348623157 × 10308\n\n5 × 10-324\n")])])]),_("p",[a._v("因此，JavaScript 中能表示的最大值是 1.7976931348623157 × 10308，最小值为 5 × 10-324 。分别对应 Number 对象的 MAX_VALUE 属性和 MIN_VALUE 属性。")]),a._v(" "),_("p",[a._v("如果一个数大于等于 2 的 1024 次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回 Infinity。")]),a._v(" "),_("p",[a._v("如果一个数小于等于 2 的 -1075 次方（指数部分最小值 -1023，再加上小数部分的 52 位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回 0。")]),a._v(" "),_("h3",{attrs:{id:"_6-4-精度丢失"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-精度丢失","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.4 精度丢失")]),a._v(" "),_("p",[a._v("计算机中的数字都是以二进制存储的，如果要计算 0.1 + 0.2 的结果，计算机会先把 0.1 和 0.2 分别转化成二进制，然后相加，最后再把相加得到的结果转为十进制 。")]),a._v(" "),_("p",[a._v("但有一些浮点数在转化为二进制时，会出现无限循环 。这时候为了表示该数会最末尾出进行 0 舍 1 入。最终导致精度丢失。")]),a._v(" "),_("p",[a._v("因此非整数的 Number 类型无法用 "),_("code",[a._v("==")]),a._v("（"),_("code",[a._v("===")]),a._v("也不行） 来比较，因为有可能会发生精度丢失。")]),a._v(" "),_("p",[a._v("精度丢失解决：正确的比较浮点数的方法是，检查等式左右两边差的绝对值是否小于最小精度。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);  // true\n")])])]),_("h3",{attrs:{id:"_6-5-特殊数值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-特殊数值","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.5 特殊数值")]),a._v(" "),_("ul",[_("li",[a._v("Number.MAX_VALUE：JavaScript 中的最大值")]),a._v(" "),_("li",[a._v("Number.MIN_VALUE：JavaScript 中的最小值")]),a._v(" "),_("li",[a._v("Number.MAX_SAFE_INTEGER：最大安全整数，为 253-1")]),a._v(" "),_("li",[a._v("Number.MIN_SAFE_INTEGER：最小安全整数，为 -(253-1)（在安全整数范围内不会出现精度丢失（小数除外））")]),a._v(" "),_("li",[a._v("Number.POSITIVE_INFINITY：对应 Infinity，代表正无穷")]),a._v(" "),_("li",[a._v("Number.NEGATIVE_INFINITY：对应 -Infinity，代表负无穷")]),a._v(" "),_("li",[a._v("Number.EPSILON：是一个极小的值，用于检测计算结果是否在误差范围内")]),a._v(" "),_("li",[a._v("Number.NaN：表示非数字，NaN 与任何值都不相等，包括 NaN 本身")]),a._v(" "),_("li",[a._v("Infinity：表示无穷大，分 正无穷 Infinity 和 负无穷 -Infinity")])]),a._v(" "),_("p",[a._v("指数部分为 2^11 – 1 且小数部分全 0，这个数字是 ±∞。（符号位决定正负，代表正无穷 Infinity 和 负无穷 -Infinity）")]),a._v(" "),_("p",[a._v("指数部分为 2^11 – 1 且小数部分非全 0，这个数字是 NaN。它不是一个值，而是一批值。这也就解释了为什么 "),_("strong",[_("code",[a._v("NaN != NaN")])]),a._v("。")]),a._v(" "),_("h3",{attrs:{id:"_6-6-数值转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-数值转换","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.6 数值转换")]),a._v(" "),_("h4",{attrs:{id:"_6-6-1-number"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-1-number","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.6.1 Number()")]),a._v(" "),_("p",[a._v("对于不同数据类型的转换，Number() 的处理也不尽相同，其转换规则如下:")]),a._v(" "),_("ul",[_("li",[a._v("如果是 Boolean 值，true 和 false 将分别被转换为 1 和 0。")]),a._v(" "),_("li",[a._v("如果是数字值，只是简单的传入和返回。")]),a._v(" "),_("li",[a._v("如果是 null 值，返回 0。")]),a._v(" "),_("li",[a._v("如果是 undefined，返回 NaN。")]),a._v(" "),_("li",[a._v("如果是字符串，遵循下列规则：\n"),_("ul",[_("li",[a._v("如果字符串中只包含数字(包括前面带正号或负号的情况)，则将其转换为十进制数值;")]),a._v(" "),_("li",[a._v("如果字符串中包含有效的浮点格式，则将其转换为对应的浮点数值;")]),a._v(" "),_("li",[a._v("如果字符串中包含有效的十六进制格式，则将其转换为相同大小的十进制整数值;")]),a._v(" "),_("li",[a._v("如果字符串是空的(不包含任何字符)，则将其转换为 0;")]),a._v(" "),_("li",[a._v("如果字符串中包含除上述格式之外的字符，则将其转换为 NaN。")])])]),a._v(" "),_("li",[a._v("如果是对象，则调用对象的 valueOf() 方法，然后依照前面的规则转换返回的值。如果转换的结果是 NaN，则调用对象的 toString() 方法，然后再次依照前面的规则转换返回的字符串值。")])]),a._v(" "),_("h4",{attrs:{id:"_6-6-2-parseint-和-parsefloat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-2-parseint-和-parsefloat","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.6.2 parseInt() 和 parseFloat()")]),a._v(" "),_("p",[a._v("parseInt() 只支持 16 进制的前缀 “0x”, 不支持其他进制。而且会忽略非数字字符。")]),a._v(" "),_("p",[a._v("parseFloat() 直接把原字符串作为十进制来解析。")]),a._v(" "),_("p",[a._v("他们都不支持科学计数法表示的字符串。")]),a._v(" "),_("h2",{attrs:{id:"_7-symbol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-symbol","aria-hidden":"true"}},[a._v("#")]),a._v(" 7. Symbol")]),a._v(" "),_("h3",{attrs:{id:"_7-1-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-语义","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.1 语义")]),a._v(" "),_("p",[a._v("Symbol 是 ES6 新增的一种原始数据类型，它的字面意思是：符号、标记。代表独一无二的值 。")]),a._v(" "),_("h3",{attrs:{id:"_7-2-初始化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-初始化","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.2 初始化")]),a._v(" "),_("p",[a._v("和其他基本类型不同的是，Symbol 作为基本类型，没有对应的包装类型，也就是说 Symbol 本身不是对象，而是一个函数。因此，在生成 Symbol 类型值的时候，不能使用 new 操作符 。")]),a._v(" "),_("p",[a._v("Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 值的描述，当有多个 Symbol 值时，比较容易区分。")]),a._v(" "),_("p",[a._v("有时，我们希望重新使用同一个 Symbol 值，Symbol.for 方法可以做到这一点。它接受一个字符串作为参数，然后全局搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。")]),a._v(" "),_("p",[a._v("Symbol.for() 也可以生成 Symbol 值，它 和 Symbol() 的区别是：")]),a._v(" "),_("ul",[_("li",[a._v("Symbol.for() 首先会在全局环境中查找给定的 key 是否存在，如果存在就返回，否则就创建一个以 key 为标识的 Symbol 值")]),a._v(" "),_("li",[a._v("Symbol.for() 生成的 Symbol 会登记在全局环境中供搜索，而 Symbol() 不会。")]),a._v(" "),_("li",[a._v("Symbol.for()  永远搜索不到 用 Symbol() 产生的值。")])]),a._v(" "),_("h3",{attrs:{id:"_7-3-symbol-特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-symbol-特性","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.3 Symbol 特性")]),a._v(" "),_("p",[a._v("Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols() 方法，专门获取指定对象的所有 Symbol 属性名。")]),a._v(" "),_("h2",{attrs:{id:"_8-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-object","aria-hidden":"true"}},[a._v("#")]),a._v(" 8. Object")]),a._v(" "),_("h3",{attrs:{id:"_8-1-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-语义","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.1 语义")]),a._v(" "),_("p",[a._v("ECMA262 把对象定义为：无序属性的集合，其属性可以包含基本值、对象或者函数。")]),a._v(" "),_("h3",{attrs:{id:"_8-2-对象拷贝"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-对象拷贝","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.2 对象拷贝")]),a._v(" "),_("p",[a._v("由于引用类型的变量只存指针，而对象本身存储在堆中 。因此，当把一个对象赋值给多个变量时，就相当于把同一个对象地址赋值给了每个变量指针 。这样，每个变量都指向了同一个对象，当通过一个变量修改对象，其他变量也会同步更新。")]),a._v(" "),_("h4",{attrs:{id:"_8-2-1-浅拷贝"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-1-浅拷贝","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.2.1 浅拷贝")]),a._v(" "),_("p",[a._v("ES6 提供了一个原生方法用于对象的拷贝，即 Object.assign() 。")]),a._v(" "),_("p",[a._v("需要注意的是，Object.assign() 拷贝的是属性值。当属性值是基本类型时，没有什么问题 ，但如果该属性值是一个指向对象的引用，它也只能拷贝那个引用值，而不会拷贝被引用的那个对象。")]),a._v(" "),_("h4",{attrs:{id:"_8-2-2-深拷贝"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-2-深拷贝","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.2.2 深拷贝")]),a._v(" "),_("p",[a._v("深拷贝指的是彻底的拷贝一个对象作为副本，两者之间的操作相互不受影响，可以通过 JSON 的序列化和反序列化方法来实现 。")]),a._v(" "),_("h2",{attrs:{id:"_9-类型转化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-类型转化","aria-hidden":"true"}},[a._v("#")]),a._v(" 9. 类型转化")]),a._v(" "),_("h3",{attrs:{id:"_9-1-装箱和拆箱"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-装箱和拆箱","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.1 装箱和拆箱")]),a._v(" "),_("p",[a._v("了解装箱拆箱之前需要先了解包装类型。")]),a._v(" "),_("p",[a._v("Number、String、Boolean、Symbol 这些基本类型都有对应的包装类型。我们使用这些基本类型调用方法的时候，就会自动进行装箱和拆箱操作。")]),a._v(" "),_("p",[a._v("基本包装类型是一种特殊的引用类型。它和普通引用类型有一个很重要的区别，就是对象的生存期不同 。使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。")]),a._v(" "),_("h4",{attrs:{id:"_9-1-1-装箱转换：把基本类型转换为对应的包装类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-1-装箱转换：把基本类型转换为对应的包装类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.1.1 装箱转换：把基本类型转换为对应的包装类型")]),a._v(" "),_("p",[a._v("装箱转换会在我们利用基本类型调用方法的时候自动发生。")]),a._v(" "),_("p",[a._v("使用内置的 Object 函数，我们可以在 JavaScript 代码中显式调用装箱能力。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v('    var symbolObject = Object(Symbol("a"));\n\n    console.log(typeof symbolObject); //object\n    console.log(symbolObject instanceof Symbol); //true\n    console.log(symbolObject.constructor == Symbol); //true\n')])])]),_("p",[a._v("装箱机制会频繁产生临时对象，在一些对性能要求较高的场景下，我们应该尽量避免对基本类型做装箱转换。")]),a._v(" "),_("h4",{attrs:{id:"_9-1-2-拆箱操作：把引用类型转换为基本类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-2-拆箱操作：把引用类型转换为基本类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.1.2 拆箱操作：把引用类型转换为基本类型")]),a._v(" "),_("p",[a._v("从引用类型到基本类型的转换，也就是拆箱的过程中，会遵循 ECMAScript 规范规定的 toPrimitive 原则，一般会调用引用类型的 valueOf 和 toString 方法，你也可以直接重写 toPeimitive 方法。一般转换成不同类型的值遵循的原则不同，例如：")]),a._v(" "),_("ul",[_("li",[a._v("引用类型转换为 Number 类型，先调用 valueOf，再调用 toString")]),a._v(" "),_("li",[a._v("引用类型转换为 String 类型，先调用 toString，再调用 valueOf")])]),a._v(" "),_("p",[a._v("若valueOf和toString都不存在，或者没有返回基本类型，则抛出TypeError异常。")]),a._v(" "),_("p",[a._v("我们可以直接调用包装类型的valueOf或toString，实现拆箱操作。")]),a._v(" "),_("h3",{attrs:{id:"_9-2-隐式类型转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-隐式类型转换","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.2 隐式类型转换")]),a._v(" "),_("h4",{attrs:{id:"_9-2-1-规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-1-规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.2.1 规则")]),a._v(" "),_("p",[_("img",{attrs:{src:e(287),alt:""}})]),a._v(" "),_("h4",{attrs:{id:"_9-2-2-各种运算符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-2-各种运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.2.2 各种运算符")]),a._v(" "),_("p",[a._v("我们在对各种非 Number 类型运用数学运算符 "),_("code",[a._v("(- * /)")]),a._v(" 时，会先将非Number类型转换为 Number 类型;")]),a._v(" "),_("p",[a._v("注意 "),_("code",[a._v("+")]),a._v(" 是个例外，执行 "),_("code",[a._v("+")]),a._v(" 操作符时：")]),a._v(" "),_("ul",[_("li",[a._v("1.当一侧为 String 类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。")]),a._v(" "),_("li",[a._v("2.当一侧为 Number 类型，另一侧为原始类型，则将原始类型转换为 Number 类型。")]),a._v(" "),_("li",[a._v("3.当一侧为 Number 类型，另一侧为引用类型，将引用类型和 Number 类型转换成字符串后拼接。")])]),a._v(" "),_("p",[a._v("其他运算符涉及的类型转换可以查看上面 4.3 的相关总结。")]),a._v(" "),_("h2",{attrs:{id:"_10-判断数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-判断数据类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 10. 判断数据类型")]),a._v(" "),_("h3",{attrs:{id:"_10-1-typeof"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-typeof","aria-hidden":"true"}},[a._v("#")]),a._v(" 10.1 typeof")]),a._v(" "),_("p",[a._v("typeof 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示。")]),a._v(" "),_("p",[a._v("有些时候，typeof 操作符会返回一些令人迷惑但技术上却正确的值：")]),a._v(" "),_("ul",[_("li",[a._v("对于基本类型，除 null 以外，均可以返回正确的结果。")]),a._v(" "),_("li",[a._v("对于引用类型，除 function 以外，一律返回 object 类型。")]),a._v(" "),_("li",[a._v("对于 null ，返回 object 类型。")]),a._v(" "),_("li",[a._v("对于 function 返回  function 类型。")])]),a._v(" "),_("p",[a._v("对于 null 来说这属于最初的设计缺陷导致的。")]),a._v(" "),_("h3",{attrs:{id:"_10-2-instanceof"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-instanceof","aria-hidden":"true"}},[a._v("#")]),a._v(" 10.2 instanceof")]),a._v(" "),_("p",[a._v("instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。")]),a._v(" "),_("p",[a._v("instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。")]),a._v(" "),_("p",[a._v("instanceof 操作符的还有一个问题就是：它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的构造函数。如果你从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数，这时候 instanceof 就会返回 false。")]),a._v(" "),_("h3",{attrs:{id:"_10-3-tostring"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-tostring","aria-hidden":"true"}},[a._v("#")]),a._v(" 10.3 toString")]),a._v(" "),_("p",[a._v("toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 "),_("code",[a._v("[[Class]]")]),a._v(" 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。")]),a._v(" "),_("p",[a._v("对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("Object.prototype.toString.call(null) ; // [object Null]\nObject.prototype.toString.call(new Function()) ; // [object Function]\nObject.prototype.toString.call(new Date()) ; // [object Date]\nObject.prototype.toString.call([]) ; // [object Array]\n")])])]),_("p",[a._v("这种方式是被很多人推荐使用的。")]),a._v(" "),_("h2",{attrs:{id:"_11-参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 11. 参考")]),a._v(" "),_("ol",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/onepixel/p/5140944.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("细说 JavaScript 七种数据类型"),_("OutboundLink")],1)]),a._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5cec1bcff265da1b8f1aa08f",target:"_blank",rel:"noopener noreferrer"}},[a._v("【JS 进阶】你真的掌握变量和类型了吗"),_("OutboundLink")],1)]),a._v(" "),_("li",[_("a",{attrs:{href:"https://js-tutorial.readthedocs.io/zh/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JS 教程"),_("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);