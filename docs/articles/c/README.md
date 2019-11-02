# C 语言变量与计算
## C 语言 Hello World

`mac OS` 或者是 `Linux` 系统因为都是基于 `Unix` 系统的，所以可以直接 `gcc` 运行 C 语言代码，C 语言是编译型语言，所以我们要先编译，再执行。

``` c
#include <stdio.h>
int main() {
 	printf("Hello World\n");  
  return 0;
}
```

执行 `gcc -o program hello.c`，`-o program` 表示输出的文件，然后再执行 `./program`，就可以看到输出的 Hello World 了。

`#include <stdio.h>` 表示引入了一个名为 `stdio` 的库，`stdio` 是 Standard Input & Output 的缩写。`printf` 是一个库函数，因为我们引入了库，所以就可以使用了。

`main` 是一个特殊的函数，多数情况下 main 函数被规定为是 C 语言程序运行的入口。`main` 函数的返回值这里返回了 0，表示正常结束，如果返回了其他值，则表示程序是非正常结束。

## C 语言的变量

### 声明

我们要声明变量的话，同时要声明它的类型，`int` 类型表示整数，`char` 类型表示一个字符。这里还使用了 `printf` 函数的占位符。

``` c
#include <stdio.h>
int main() {
  int number;
  char alpha;
  number = 2;
  alpha = 'a';
  printf("this is char %c, this is number %d", alpha, number);
  return 0;
}
```

### 作用域

我们可以使用不属于当前作用域的变量：

``` c
#include <stdio.h>
int main() {
  int number;
  char alpha;
  {
      number = 2;
      alpha = 'a';  
  }
  printf("this is char %c, this is number %d", alpha, number);
  return 0;
}
```

### 变量类型

常见的变量的类型：

* int
* float
* char
* double

其中 init、float、double 可以被 **short**、**long** 修饰，**unsigned int** 表示无符号的整数，所以也就可以用来存储更大的正整数。

### 变量内存地址

`scanf` 函数也属于 `stdio.h` 库，它可以接受输出：

``` c
#include <stdio.h>

int main() {
    int number;
    scanf("I say %d", &number);
    printf("Computer says %d", number);
    return 0;
}
```

`&number` 表示 `number` 变量的内存地址，这样当我们运行程序，并输入 `I say 32` 的时候，`number` 的值就会变成 32。

我们还可以用变量存储一个变量的内存地址，类型要和存储变量一致，且变量名前带一个 `*` 号：

``` c
#include <stdio.h>

int main() {
    int number = 2;
    int *p_number = &number;
    char letter = 'a';
    char *p_letter = &letter;
    printf("%p\n", p_number);
    printf("%p\n", p_letter);
    return 0;
}
```