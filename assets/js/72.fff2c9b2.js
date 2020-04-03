(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{461:function(a,t,r){"use strict";r.r(t);var _=r(0),v=Object(_.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"散列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 散列表")]),a._v(" "),r("h2",{attrs:{id:"_18-散列表（上）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_18-散列表（上）","aria-hidden":"true"}},[a._v("#")]),a._v(" 18 散列表（上）")]),a._v(" "),r("h3",{attrs:{id:"定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),r("h4",{attrs:{id:"键"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#键","aria-hidden":"true"}},[a._v("#")]),a._v(" 键")]),a._v(" "),r("p",[a._v("用来标识元素")]),a._v(" "),r("h4",{attrs:{id:"散列函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散列函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 散列函数")]),a._v(" "),r("p",[a._v("将键转化为数组下标的映射方法")]),a._v(" "),r("h4",{attrs:{id:"散列值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散列值","aria-hidden":"true"}},[a._v("#")]),a._v(" 散列值")]),a._v(" "),r("p",[a._v("通过散列函数获取的值")]),a._v(" "),r("h4",{attrs:{id:"散列表-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散列表-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 散列表")]),a._v(" "),r("p",[a._v("散列表是数组的一种扩展，通过使用散列函数将键值映射为下标，然后将数据存储在数组中对应下标的位置，这样就能使用数组支持随机访问数据的特性来实现快速查找删除等操作。")]),a._v(" "),r("h3",{attrs:{id:"散列函数-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散列函数-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 散列函数")]),a._v(" "),r("p",[a._v("基本要求")]),a._v(" "),r("ol",[r("li",[a._v("散列函数计算得到的散列值是一个非负整数")]),a._v(" "),r("li",[a._v("如果 key1 = key2，那 hash(key1) == hash(key2)")]),a._v(" "),r("li",[a._v("如果 key1 ≠ key2，那 hash(key1) ≠ hash(key2)")])]),a._v(" "),r("h3",{attrs:{id:"散列冲突"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散列冲突","aria-hidden":"true"}},[a._v("#")]),a._v(" 散列冲突")]),a._v(" "),r("p",[a._v("当 key1 ≠ key2，hash(key1) = hash(key2) 这种情况就称为散列冲突")]),a._v(" "),r("h4",{attrs:{id:"开放寻址法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开放寻址法","aria-hidden":"true"}},[a._v("#")]),a._v(" 开放寻址法")]),a._v(" "),r("p",[a._v("开放寻址法的核心思想是，如果出现了散列冲突，我们就重新探测一个空闲位置，将其插入。")]),a._v(" "),r("h5",{attrs:{id:"线性探测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线性探测","aria-hidden":"true"}},[a._v("#")]),a._v(" 线性探测")]),a._v(" "),r("p",[a._v("当插入数据的时候，如果通过散列函数得到的位置上已经被占用，就从当前位置开始，依次往后查找，如果查到尾部还没有就从头部查找，直到查到空闲位置为止。")]),a._v(" "),r("p",[a._v("查找数据的时候，先通过散列函数获取下标，然后从下标开始依次往后查找，直到查到空闲位置，则说明没有要查找的元素。")]),a._v(" "),r("p",[a._v("删除数据的时候，找到数据后删除数据并标识为已经删除，这样在查找的时候找到标记删除的空白空间还是继续向下查找。")]),a._v(" "),r("h4",{attrs:{id:"二次探测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二次探测","aria-hidden":"true"}},[a._v("#")]),a._v(" 二次探测")]),a._v(" "),r("p",[a._v("线性探测是依次往下查找，二次探测的步长是二次方")]),a._v(" "),r("p",[a._v("hash(key)+0，hash(key)+1^2，hash(key)+2^2 ......")]),a._v(" "),r("h4",{attrs:{id:"双重散列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双重散列","aria-hidden":"true"}},[a._v("#")]),a._v(" 双重散列")]),a._v(" "),r("p",[a._v("使用一组散列函数，第一个得到的位置被占用则用第二个散列函数计算位置，依次类推，直到查到空闲的位置")]),a._v(" "),r("h3",{attrs:{id:"装载因子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#装载因子","aria-hidden":"true"}},[a._v("#")]),a._v(" 装载因子")]),a._v(" "),r("blockquote",[r("p",[a._v("散列表的装载因子 = 填入表中的元素个数 / 散列表的长度")])]),a._v(" "),r("p",[a._v("装载因子越大，说明空闲位置越少，冲突越多，散列表的性能会下降.")]),a._v(" "),r("h4",{attrs:{id:"链表法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链表法","aria-hidden":"true"}},[a._v("#")]),a._v(" 链表法")]),a._v(" "),r("p",[a._v("这个时候数组中存放的不再是简单的值了，而是一条链表，相同散列值的元素都存放到链表中。")]),a._v(" "),r("p",[a._v("插入数据的时候，直接插入到对应链表即可，时间复杂度是 O(1).")]),a._v(" "),r("p",[a._v("查找删除元素的时候，事件复杂度跟链表的长度 k 成正比，也就是 O(k).")]),a._v(" "),r("h2",{attrs:{id:"_19-散列表（中）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_19-散列表（中）","aria-hidden":"true"}},[a._v("#")]),a._v(" 19 散列表（中）")]),a._v(" "),r("h3",{attrs:{id:"工业级散列表要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工业级散列表要求","aria-hidden":"true"}},[a._v("#")]),a._v(" 工业级散列表要求")]),a._v(" "),r("ol",[r("li",[a._v("支持快速的查询、插入、删除操作；")]),a._v(" "),r("li",[a._v("内存占用合理，不能浪费过多空间；")]),a._v(" "),r("li",[a._v("性能稳定，在极端情况下，散列表的性能也不会退化到无法接受的情况。")])]),a._v(" "),r("h3",{attrs:{id:"如何设计散列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何设计散列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何设计散列表")]),a._v(" "),r("ol",[r("li",[a._v("设计一个合适的散列函数；")]),a._v(" "),r("li",[a._v("定义装载因子阈值，并且设计动态扩容策略；")]),a._v(" "),r("li",[a._v("选择合适的散列冲突解决方法。")])]),a._v(" "),r("h3",{attrs:{id:"如何设计散列函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何设计散列函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何设计散列函数")]),a._v(" "),r("ol",[r("li",[a._v("要尽可能让散列后的值随机且均匀分布，这样会尽可能减少散列冲突，即便冲突之后，分配到每个槽内的数据也比较均匀。")]),a._v(" "),r("li",[a._v("除此之外，散列函数的设计也不能太复杂，太复杂就会太耗时间，也会影响到散列表的性能。")]),a._v(" "),r("li",[a._v("常见的散列函数设计方法：直接寻址法、平方取中法、折叠法、随机数法等。")])]),a._v(" "),r("h3",{attrs:{id:"如何根据装载因子动态扩容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何根据装载因子动态扩容","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何根据装载因子动态扩容")]),a._v(" "),r("h4",{attrs:{id:"确定合适的装载因子阈值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确定合适的装载因子阈值","aria-hidden":"true"}},[a._v("#")]),a._v(" 确定合适的装载因子阈值")]),a._v(" "),r("p",[a._v("装载因子阈值的设置要权衡时间、空间复杂度。如果内存空间不紧张，对执行效率要求很高，可以降低负载因子的阈值；相反空间紧张，对执行效率要求不高则可以增加负载因子，甚至可以大于 1。")]),a._v(" "),r("h4",{attrs:{id:"避免低效的扩容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#避免低效的扩容","aria-hidden":"true"}},[a._v("#")]),a._v(" 避免低效的扩容")]),a._v(" "),r("p",[a._v("通过分批扩容进行优化")]),a._v(" "),r("ul",[r("li",[a._v("分批扩容的插入操作：当有新数据要插入时，我们将数据插入新的散列表，并且从老的散列表中拿出一个数据放入新散列表。每次插入都重复上面的过程。这样插入操作就变得很快了。")]),a._v(" "),r("li",[a._v("分批扩容的查询操作：先查新散列表，再查老散列表。")]),a._v(" "),r("li",[a._v("通过分批扩容这种均摊的方式，将一次扩容的代价均摊到多次插入操作中，避免了一次扩容耗时过多的情景，这样以来任何情况下，插入一个数据的时间复杂度都是O(1)。")])]),a._v(" "),r("h3",{attrs:{id:"如何选择冲突解决方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何选择冲突解决方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何选择冲突解决方法")]),a._v(" "),r("h4",{attrs:{id:"开放寻址法-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开放寻址法-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 开放寻址法")]),a._v(" "),r("p",[a._v("当数据比较小，装载因子小的时候，适用开放寻址法")]),a._v(" "),r("h4",{attrs:{id:"链表法-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链表法-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 链表法")]),a._v(" "),r("p",[a._v("基于链表的散列冲突处理方法比较适存储大对象、大数据量的散列表，而且，比起开放寻址法，它更加灵活，支持更多的优化策略，比如用红黑树代替链表。")]),a._v(" "),r("h2",{attrs:{id:"_20-散列表-下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_20-散列表-下","aria-hidden":"true"}},[a._v("#")]),a._v(" 20 散列表 下")]),a._v(" "),r("h3",{attrs:{id:"利用链表实现-lru-淘汰算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#利用链表实现-lru-淘汰算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 利用链表实现 LRU 淘汰算法")]),a._v(" "),r("ul",[r("li",[a._v("维护一个按照访问时间从大到小有序排列的链表")]),a._v(" "),r("li",[a._v("缓存空间不足，就从链表头部节点的数据淘汰")]),a._v(" "),r("li",[a._v("缓存某个数据的时候，先在链表中查找\n"),r("ul",[r("li",[a._v("没找到的时候，直接将数据放入链表尾部")]),a._v(" "),r("li",[a._v("找到了就将其移动到链表尾部")])])])]),a._v(" "),r("p",[a._v("进行查找需要遍历链表，因此这种方式实现的算法复杂度是 O(n)")]),a._v(" "),r("h3",{attrs:{id:"利用散列表和链表实现-lru-淘汰算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#利用散列表和链表实现-lru-淘汰算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 利用散列表和链表实现 LRU 淘汰算法")]),a._v(" "),r("p",[a._v("组合使用散列表和链表可以将查找操作的时间复杂度降为 O(1)")]),a._v(" "),r("h4",{attrs:{id:"结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 结构")]),a._v(" "),r("ul",[r("li",[a._v("散列表使用拉链法来解决散列冲突")]),a._v(" "),r("li",[a._v("散列表里的每个元素都被包装为双向链表的一个节点")]),a._v(" "),r("li",[a._v("所有的元素构成一个双向链表")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v(" ------ ------ ------ ------- \n| prev | data | next | hnext |\n ------ ------ ------ ------- \n")])])]),r("ol",[r("li",[a._v("prev : 双向链表的前驱节点指针")]),a._v(" "),r("li",[a._v("data : 数据")]),a._v(" "),r("li",[a._v("next : 双向链表的后继节点指针")]),a._v(" "),r("li",[a._v("hnext : 散列表拉链中相同散列值的后一个数据指针")])]),a._v(" "),r("h4",{attrs:{id:"复杂度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复杂度","aria-hidden":"true"}},[a._v("#")]),a._v(" 复杂度")]),a._v(" "),r("ol",[r("li",[a._v("查找数据 : 直接通过散列表查找，找到之后将其移动到双向链表的尾部，复杂度为 O(1)")]),a._v(" "),r("li",[a._v("删除 : 找到元素所在的节点后，由于是双向链表可以直接获取前驱节点，复杂度为 O(1)")]),a._v(" "),r("li",[a._v("添加 : 首先查找是否已经存在\n"),r("ol",[r("li",[a._v("不存在 : 链表未满直接插入尾部，已满是删除头结点在插入到尾部，复杂度都为 O(1)")]),a._v(" "),r("li",[a._v("存在 : 移动对应节点到尾部，复杂度为 O(1)")])])])]),a._v(" "),r("h3",{attrs:{id:"有序集合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有序集合","aria-hidden":"true"}},[a._v("#")]),a._v(" 有序集合")]),a._v(" "),r("ul",[r("li",[a._v("有序集合对象的两个重要属性：key (键值) 和 score (分值)")]),a._v(" "),r("li",[a._v("不仅会通过score来查找数据，还会通过key来查找数据。")])]),a._v(" "),r("h4",{attrs:{id:"操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 操作")]),a._v(" "),r("ol",[r("li",[a._v("添加一个对象；")]),a._v(" "),r("li",[a._v("根据键值删除一个对象；")]),a._v(" "),r("li",[a._v("根据键值查找一个成员对象；")]),a._v(" "),r("li",[a._v("根据分值区间查找数据，比如查找 score 在[100.356]之间的成员对象；")]),a._v(" "),r("li",[a._v("按照分值从小到大排序成员变量。")])]),a._v(" "),r("h4",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),r("p",[a._v("通过跳表和散列表组合，按照分值将成员对象组织成跳表结构，按照键值构建一个散列表。")]),a._v(" "),r("h3",{attrs:{id:"qa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qa","aria-hidden":"true"}},[a._v("#")]),a._v(" QA")]),a._v(" "),r("h4",{attrs:{id:"_1-为什么散列表和链表经常一起使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么散列表和链表经常一起使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 为什么散列表和链表经常一起使用")]),a._v(" "),r("p",[a._v("散列表的查找、删除、插入操作非常高效，但数据都是无序的，如果如链表结合使用既保留了这些特性也能保证数据有序")]),a._v(" "),r("h4",{attrs:{id:"_2-散列表和单向链表可以结合使用吗？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-散列表和单向链表可以结合使用吗？","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 散列表和单向链表可以结合使用吗？")]),a._v(" "),r("p",[a._v("单链表删除节点的时候找到前驱节点的时间复杂度为 O(n), 这样就不如双向链表了")]),a._v(" "),r("h4",{attrs:{id:"_3-10-万猎头数据，每个猎头都有-id-和积分，如何在内存中存储着些数据并支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-10-万猎头数据，每个猎头都有-id-和积分，如何在内存中存储着些数据并支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 10 万猎头数据，每个猎头都有 ID 和积分，如何在内存中存储着些数据并支持")]),a._v(" "),r("ol",[r("li",[a._v("根据 ID 查找、删除、更新猎头数据")]),a._v(" "),r("li",[a._v("查找积分在某个区间的猎头")]),a._v(" "),r("li",[a._v("查找积分从小到大排名在 x - y 区间的猎头")])]),a._v(" "),r("p",[a._v("可以通过跳表和散列表组合来实现")])])},[],!1,null,null,null);t.default=v.exports}}]);