# Ruby 基础语法

如果我们安装过 `ruby`, 就可以在命令行中打入 `irb`, 进入命令行运行 ruby 代码的环境了。

## 变量

ruby 声明变量不需要关键字，`a = 2` 就表示声明了一个变量，ruby 还根据变量的名称来区分变量的类型

- 局部变量：小写字母或者 \_ 开头
- 全局变量：\$ 开头
- 类变量：@@ 开头
- 实例变量：@ 开头

在 JS 中，我们可以在函数中轻易地访问到不属于自己作用域的变量(也叫做闭包)：

```javascript
const a = 2;
function f1() {
  console.log(a);
}
```

但是在 ruby 中并不行

```ruby
a = 2
def f1
  p a
end
# 调用 f1 会报错
f1
```

这时候就需要用到我们刚才提到的**全局变量**：

```ruby
$a = 2
def f1
  p $a
end

f1
```

## 常量

常量也是根据名称来的，常量需要全大写字母，可加下划线，例如 `VERSION_NAME`，且常量默认是全局的，**ruby 的常量是可以修改的，它只是会提示 warning，但是修改仍然生效。**

```ruby
2.6.0 :011 > VERSION = 2
 => 2
2.6.0 :012 > VERSION
 => 2
2.6.0 :013 > VERSION = 3
(irb):13: warning: already initialized constant VERSION
(irb):11: warning: previous definition of VERSION was here
 => 3
2.6.0 :014 > VERSION
 => 3
```

## 类似 JS 的解构

我们可以同时给多个变量赋值：

```ruby
a, b, c = 1, 2, 3

a, b, *c = 1, 2, 3, 4
# a 1
# b 2
# c [3, 4]

a, b = [1, 2]
```

交换两个变量的值：

```ruby
a, b = b, a
```

## 字符串

- 单引号：不转义字符，`a = 123\n`, 即输入的字符都被当成普通字符。
- 双引号：转义字符，`a = 123\n`，会根据特殊字符进行处理。
- 多行字符串：`a = <<flag fadsfasdfdasfasd flag`，其中 flag 为自定义的标识，用于表示开始和结束，一般使用 `eos`。

## 打印

- print 默认不加换行。
- puts 默认每行加换行。
- p 加换行，且会增加标记，例如 `p '123'` 和 `p 123` 的结果不一样，`p '123'` 的输出结果会带有引号。

一般使用 `p` 来调试，`print` 和 `puts` 用于保存日志。

## 注释

单行注释使用 #

```ruby
# 我是一句注释
```

多行注释使用 `=begin =end`：

```ruby
=begin
我是多行注释
=end
```

## if 语句

主要是几个关键字：`if`，`then`，`elsif`，`else`，`end`，`unless`，以及 if 语句是有返回值的。

```ruby
# then 的作用主要是写在一行的时候区分判断条件和下面的语句。所以我们换行的话，就不一定需要 then 了。
a = if 1 > 2 then '2' else '3' end
a = if 1 > 2
    '2'
    else '3'
    end
```

unless 表示取反

```ruby
a = unless 1 > 2 then '2' else '3' end
# '2'
```

## case 语句

比较大的区别是不需要写 `break` 了。

```ruby
a = '2'
case a
  when '2'
    p '2'
  when '3'
    p '3'
  else
    p 'default'
  end
```

如果要处理多个情况，可以这样写：

```ruby
a = '2'
case a
  when '2', '3', '4'
  p '2, 3, 4'
  end
```

## 循环

ruby 循环中的 `next` 和 `break` 对应 JS 的 `continue` 和 `break`。
`times` 是数字对象的方法：

```ruby
7.times do |i|
  p i
end

7.times {|i|
  p i
}
```

`each` 是数组对象的方法：

```ruby
names = ['a', 'b', 'c']
names.each do |name|
  p name
end

names.each {|name|
  p name
}
```

`for in` 也可以用来遍历数组：

```ruby
names = ['a', 'b', 'c']
for name in names
  p name
end
```

`while` 和 `until` 也用于循环，`until` 也是表示取反的意思。

```ruby
i = 0
while i < 3
  p i
  i += 1
end
```

```
i = 0
until i > 3
  p i
  i += 1
end
```

`loop` 用于无限循环

```ruby
loop do
 p '1'
end
```

## 散列
散列类似 JS 中的 `const a = {name: '123'}`，ruby 中的散列一般用 `symbol` 做 key。`symbol` 像是轻量的字符串，它和字符串支持互相转换：
``` ruby
a = :name
a.to_s # "name"
b = "name"
b.to_sym # :name
```
ruby 中我们不能使用 `person.a` 来访问 `person` 的 `a` 属性，因为 ruby 的点操作符后面跟的大多数都是方法，ruby 的方法执行是可以省略括号的。
``` ruby
person = {name: "zzh", age: 18}
# person.name 错误的写法
# person[name] 错误的写法
# person[:name] 正确的写法
```