# Node.js 总览

这篇文章会介绍 Node.js 的整体架构，主要是为了初学者能够快速地对 Node.js 有一个整体的了解。

## Node.js 不是什么

有些人可能对 Node.js 有误解，比如会认为：

- Node.js 是一门编程语言，就像 Python、Java。
- Node.js 是一种 Web 框架，就像 Spring Boot。
- ……

上面这些说法都是错误的，**Node.js 既不是语言，也不是框架**，我们接下来介绍 Node.js 到底是什么。

## Node.js 是什么

**Node.js 是一个平台，它把多种技术结合起来，让 JavaScript 能够调用系统接口，开发后端应用。**

那么多种技术指的是哪些技术呢？

* V8 引擎
* libuv
* C/C++ 实现的一些库
* ……

## Node.js 技术架构

下面的图片就是 Node.js 的整体架构：

![image-20191013111847699](https://tva1.sinaimg.cn/large/006y8mN6ly1g7wembbmmhj30s6070wiv.jpg)



我们来介绍下图中出现的一些概念：

### bindings

打比方 C/C++ 实现了一个叫做 http_parser 的库，那我们想在 JavaScript 代码中调用这个库，直接调是不行的，因为这是两种语言，连基本的数据类型都不一样，**binding** 就是为了解决这种问题而出现的。

Node.js 根据一些标准，用 C++ 对 http_parser 进行封装，再用 Node.js 将新生成的 C++ 文件编译成 **.node 文件**，这样 JavaScript 就可以调用 .node 文件了。

Node.js 提供了许多这样的 **binding**，所以叫 **bindings**。 

### libuv

Node.js 的作者想要做一个**跨平台的异步 I/O 库**，但是不同的操作系统上都有不同的 I/O 库，所以他开始写 **libuv**。

那么 I/O 指的是哪些操作呢？凡是涉及到输入、输出的操作，都可以算成 I/O 操作，比如读写文件、收发网络请求等。

### V8

V8 通俗点来说，就是负责执行 JavaScript 代码的，要注意的是：V8 并不提供 **DOM API**，V8 只提供 JavaScript 标准库。

### C/C++ 插件

例如 c-ares、OpenSSL 这些库都是用 C 语言写的，且 Node.js 内置了 bindings 让我们调用，那假设有一个新的 C 语言的库，我们也想调用，那么这时候就需要自己实现 binding 封装 C 语言的库，再到 JavaScript 代码中调用，所以这就是所谓的**自定义其他能力**。

## Node.js 学习方法

通过上文的描述，我们已经对 Node.js 有基本的认识了，所以我们简单总结下 Node.js 学习方法：

* 最上层的 Node.js API 我们肯定要学习，那 API 又分常用的和不常用的，所以我们尽量多了解常用的 API
* 如果工作中有需要 Node.js 调用 C 语言的需求，那么最好我们可以先学习 C 语言，再用 Node.js 去调用。所以并不是说学习 Node.js 就要先学 C，而是如果你要深入了解 Node.js 的内部，那么你就需要学习 C。