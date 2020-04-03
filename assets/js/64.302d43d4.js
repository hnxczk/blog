(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{491:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),r("h2",{attrs:{id:"_05-数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_05-数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 05 数组")]),a._v(" "),r("h3",{attrs:{id:"定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),r("p",[r("strong",[a._v("数组是一种_线性表_数据结构。它用一组_连续的内存空间_来存储一组具有_相同\b类型_的数据。")])]),a._v(" "),r("h3",{attrs:{id:"随机访问"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#随机访问","aria-hidden":"true"}},[a._v("#")]),a._v(" 随机访问")]),a._v(" "),r("p",[a._v("数组支持随机访问，根据下标随机访问的时间复杂度是 O(1)。")]),a._v(" "),r("h4",{attrs:{id:"如何实现根据下标随机访问数组元素？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何实现根据下标随机访问数组元素？","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何实现根据下标随机访问数组元素？")]),a._v(" "),r("p",[a._v("通过寻址公式，计算出该元素存储的内存地址：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("a[i]_address = base_address + i * data_type_size\n")])])]),r("h3",{attrs:{id:"低效的“插入”和“删除”"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低效的“插入”和“删除”","aria-hidden":"true"}},[a._v("#")]),a._v(" 低效的“插入”和“删除”")]),a._v(" "),r("h4",{attrs:{id:"插入："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插入：","aria-hidden":"true"}},[a._v("#")]),a._v(" 插入：")]),a._v(" "),r("p",[a._v("若有一元素想往 int[n] 的第 k 个位置插入数据，需要在 k-n 的位置往后移。")]),a._v(" "),r("p",[a._v("最好情况时间复杂度 O(1)\n最坏情况复杂度为 O(n)\n平均负责度为 O(n)")]),a._v(" "),r("p",[a._v("如果数组中的数据不是有序的，也就是无规律的情况下，可以直接把第 k 个位置上的数据移到最后，然后将插入的数据直接放在第 k 个位置上。这样时间复杂度就将为 O（1）了。")]),a._v(" "),r("h4",{attrs:{id:"删除："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除：","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除：")]),a._v(" "),r("p",[a._v("与插入类似，为了保持内存的连续性。")]),a._v(" "),r("p",[a._v("最好情况时间复杂度 O(1)\n最坏情况复杂度为 O(n)\n平均负责度为 O(n)")]),a._v(" "),r("p",[a._v("提高效率：将多次删除操作中集中在一起执行，可以先记录已经删除的数据，但是不进行数据迁移，而仅仅是记录，当发现没有更多空间存储时，再执行真正的删除操作。这也是 JVM 标记清除垃圾回收算法的核心思想。")]),a._v(" "),r("h3",{attrs:{id:"警惕数组的访问越界问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#警惕数组的访问越界问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 警惕数组的访问越界问题")]),a._v(" "),r("p",[a._v("数组越界在 C 语言中是一种未决行为，并没有规定数组访问越界时编译器应该如何处理。 不同的语言对数组访问越界的处理方式不同，即便是同一种语言，不同的编译器处理的方式也不同。")]),a._v(" "),r("h3",{attrs:{id:"容器与数组的选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器与数组的选择","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器与数组的选择")]),a._v(" "),r("ol",[r("li",[a._v("存储基本数据类型，或者更关注性能可以使用数组")]),a._v(" "),r("li",[a._v("数据大小已知，并且对数据的操作简单，可以使用数组")]),a._v(" "),r("li",[a._v("多维数组的时候，数组更加直观")]),a._v(" "),r("li",[a._v("业务开发，使用容器足够，开发框架，追求性能，首先数组")])]),a._v(" "),r("h3",{attrs:{id:"为什么大多数数组从-0-开始编号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么大多数数组从-0-开始编号","aria-hidden":"true"}},[a._v("#")]),a._v(" 为什么大多数数组从 0 开始编号")]),a._v(" "),r("ol",[r("li",[a._v("数组的根据下标访问元素是根据计算公式来计算内存偏移，从 0 开始更合理")]),a._v(" "),r("li",[a._v("习惯问题")])]),a._v(" "),r("h3",{attrs:{id:"jvm-标记清除算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-标记清除算法","aria-hidden":"true"}},[a._v("#")]),a._v(" JVM 标记清除算法")]),a._v(" "),r("p",[a._v("在标记阶段会标记所有的可访问的对象，在清除阶段会遍历堆，回收那些没有被标记的对象。现在想想，和「如果数组中的数据不是有序的，也就是无规律的情况下，可以直接把第k个位置上的数据移到最后，然后将插入的数据直接放在第k个位置上。」思想类似。")]),a._v(" "),r("h3",{attrs:{id:"二维数组内存寻址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二维数组内存寻址","aria-hidden":"true"}},[a._v("#")]),a._v(" 二维数组内存寻址")]),a._v(" "),r("p",[a._v("对于 "),r("code",[a._v("m * n")]),a._v(" 的数组，"),r("code",[a._v("a [ i ][ j ] (i < m,j < n)")]),a._v("的地址为：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("address = base_address + ( i * n + j) * type_size\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);