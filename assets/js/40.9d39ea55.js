(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{260:function(e,t,n){e.exports=n.p+"assets/img/kvocontroller-1.c8bdf1bc.png"},484:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nshashtable-和-nsmaptable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nshashtable-和-nsmaptable","aria-hidden":"true"}},[e._v("#")]),e._v(" NSHashTable 和 NSMapTable")]),e._v(" "),a("h2",{attrs:{id:"kvocontroller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kvocontroller","aria-hidden":"true"}},[e._v("#")]),e._v(" KVOController")]),e._v(" "),a("p",[e._v("最近在使用 KVOController 的时候遇到了一个循环引用的问题。代码如下。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@weakify(self);\n[self.KVOController observe:self keyPath:@"viewModel.model.is_followed" options:NSKeyValueObservingOptionOld | NSKeyValueObservingOptionNew block:^(id  _Nullable observer, id  _Nonnull object, NSDictionary<NSString *,id> * _Nonnull change) {\n        @strongify(self);\n        self.attentionBtn.selected = [change[NSKeyValueChangeNewKey] boolValue];\n    }];\n')])])]),a("p",[e._v("简单来说就是在 View 里面监听模型的改变，然后更新按钮的\b选中状态。")]),e._v(" "),a("p",[e._v("这样写了以后发现 View 不会被释放，造成了循环引用。")]),e._v(" "),a("p",[e._v("查看了 KVOController 的实现之后发现，这种使用 self.KVOController 监听 self 的用法\b会造成 self 与 KVOController 之间\b循环引用。")]),e._v(" "),a("p",[e._v("如下图所示")]),e._v(" "),a("p",[a("img",{attrs:{src:n(260),alt:""}})]),e._v(" "),a("p",[e._v("这里有两种解决方法。")]),e._v(" "),a("ol",[a("li",[e._v("让 KVOController 监听模型")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    @weakify(self);\n    [self.KVOController observe:self.viewModel.model keyPath:@"is_followed" options:NSKeyValueObservingOptionOld | NSKeyValueObservingOptionNew block:^(id  _Nullable observer, id  _Nonnull object, NSDictionary<NSString *,id> * _Nonnull change) {\n        @strongify(self);\n        self.attentionBtn.selected = [change[NSKeyValueChangeNewKey] boolValue];\n    }];\n')])])]),a("p",[e._v("这里的 target 替换成 self.viewModel.model 。这样以来就没有了循环引用。")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("使用 KVOControllerNonRetaining")])]),e._v(" "),a("blockquote",[a("p",[e._v("Use this version when a strong reference between controller and observed object would create a retain cycle.\nWhen not retaining observed objects, special care must be taken to remove observation info prior to deallocation of the observed object.")])]),e._v(" "),a("p",[e._v("这是对这个的注释。大概意思就是当我们上面遇到的那种循环引用的情况下可以使用 KVOControllerNonRetaining。它不会持有被观察的对象。")]),e._v(" "),a("p",[e._v("这个具体的就是通过 NSMapTable 来实现的。")]),e._v(" "),a("p",[e._v("在 FBKVOController 的初始化方法中")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- (instancetype)initWithObserver:(nullable id)observer retainObserved:(BOOL)retainObserved\n{\n  self = [super init];\n  if (nil != self) {\n    _observer = observer;\n    NSPointerFunctionsOptions keyOptions = retainObserved ? NSPointerFunctionsStrongMemory|NSPointerFunctionsObjectPointerPersonality : NSPointerFunctionsWeakMemory|NSPointerFunctionsObjectPointerPersonality;\n    _objectInfosMap = [[NSMapTable alloc] initWithKeyOptions:keyOptions valueOptions:NSPointerFunctionsStrongMemory|NSPointerFunctionsObjectPersonality capacity:0];\n    pthread_mutex_init(&_lock, NULL);\n  }\n  return self;\n}\n")])])]),a("p",[e._v("可以看出通过参数 retainObserved 来区分 KVOController 和 KVOControllerNonRetaining。")]),e._v(" "),a("p",[e._v("\b\b归根结底就是 _objectInfosMap 这个 NSMapTable 的初始化的不同。")]),e._v(" "),a("h2",{attrs:{id:"nshashtable-和-nsmaptable-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nshashtable-和-nsmaptable-2","aria-hidden":"true"}},[e._v("#")]),e._v(" NSHashTable 和 NSMapTable")]),e._v(" "),a("p",[e._v("\b提到集合类型我们最常见的就是 NSSet、NSArray、NSDictionary 这三个。它们能满足我们日常开发中的大部分\b要求。\b但是它们都有一个特点就是："),a("strong",[e._v("将对象添加到容器时，会对该对象的引用计数+1")]),e._v("。 这样以来很自然就出现了上面中的循环引用的问题。而在 iOS6 之后 Objective-C Foundation 框架中添加了两个新的集合类 NSHashTable 和 NSMapTable。")]),e._v(" "),a("p",[e._v("在创建它们的对象时，会传 NSPointerFunctionsOptions 参数，列举如下:")]),e._v(" "),a("ul",[a("li",[e._v("NSHashTableStrongMemory\n将HashTable容器内的对象引用计数+1一次")]),e._v(" "),a("li",[e._v("NSHashTableZeroingWeakMemory\n在OSX 10.8之后已经废弃")]),e._v(" "),a("li",[e._v("NSHashTableCopyIn\n将添加到容器的对象通过NSCopying中的方法，复制一个新的对象存入HashTable容器")]),e._v(" "),a("li",[e._v("NSHashTableObjectPointerPersonality\n使用移位指针(shifted pointer)来做hash检测及确定两个对象是否相等；")]),e._v(" "),a("li",[e._v("NSHashTableWeakMemory\n不会修改HashTable容器内对象元素的引用计数，并且对象释放后，会被自动移除")])]),e._v(" "),a("p",[e._v("在 上面 FBKVOController 的里面正是应用了这一特性。")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://draveness.me/kvocontroller",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何优雅地使用 KVO"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/22c5024cc3c0",target:"_blank",rel:"noopener noreferrer"}},[e._v("简析KVOController实现原理"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/de71385930ba",target:"_blank",rel:"noopener noreferrer"}},[e._v("NSHashTable和NSMapTable用法"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);