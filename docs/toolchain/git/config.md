# 进阶-配置Git

> 前置知识：
>
> * [Git新手入门](./README.md)

这一篇文章主要介绍一些Git的配置。
它们不是必须，但是非常推荐，
笔者几乎所有的项目都会用上它们。

## gitignore

有些文件我们并不想加入到版本控制中，比如编译生成的文件，或者是一些敏感信息，比如密码等。
但是因为它们被放在了仓库文件夹下，
git始终会显示出来，
有些麻烦，
这时候我们就可以使用`.gitignore`文件来忽略这些文件。

在仓库下新建一个`.gitignore`文件，
里面每一行表示一个要忽略的文件/文件夹名。

比如：

```gitignore
# 忽略所有的 .o 文件
*.o
# 但是 hell.o 除外
!hell.o
# 忽略一个文件夹
build/
```

对于常见的语言，GitHub都提供了[模板](https://github.com/github/gitignore)，在新建仓库时可以直接选择。

## 用LF作为换行符

一般我们认为一个回车是LF（C/C++中的`'\n'`），
在Linux下确实是这样，但是其他情况未必。
Windows下的默认换行符是CRLF（C/C++中的`"\r\n"`），
同时老版本的macOS的默认换行符是CR（C/C++中的`'\r'`）。

这样会导致许多不便，
如在Windows下编辑的文件在Linux下无法正常编译。
另外，有可能你明明只改了一行代码，
git却显示你修改了整个文件，
也有可能是因为换行符的问题。
按照目前业界的支持情况，使用LF作为换行符是最好的选择。
因此，我们希望在把文件加入git仓库之前，将所有文件的换行符统一为LF。

Git提供了这样的功能。我们在仓库下新建一个`.gitattributes`文件，里面写入：

```gitattributes
* text=auto eol=lf
```

这行代码的意思是，对于所有文件，由git自动决定该文件是否为文本文件；如果是，则将换行符修改为LF。

## filemode

Git默认会将文件的权限信息保存在仓库中，
表示这个文件是否可执行。
我们几乎没有这样的需求，
但是在某些文件系统下（如WSL中的Windows文件系统），
权限信息会出问题。
因此我们一般会禁用这个功能。

打开一个能使用git的命令行，输入：

```bash
git config --global core.filemode false
```

<blockquote markdown>
<h3>选读：为什么git记录可执行信息</h3>

可执行权限是一个Linux中的概念。
一个程序如果没有可执行权限，那么它就不能被运行。
但是由于需要运行的程序一般是二进制文件，
我们不会加入到git仓库中，
因此这个功能我们不会用到。

在历史上，有很多Linux下的bash脚本都是这样运行的：

```bash
./script.sh
```

这种运行方式需要`script.sh`有可执行权限，
而且`.sh`文件是文本文件，
我们会添加进入git仓库，
因此git里面记录这个文件的可执行信息就派上用场了。
但我们并不鼓励这种运行方式，
我们可以用更明确、可靠的方式运行这个脚本：

```bash
bash ./script.sh
```

这行命令明确调用了`bash`来执行这个`.sh`文件，
不需要`script.sh`有可执行权限。

</blockquote>

## 下一项工作是？

* [git-config](https://git-scm.com/docs/git-config): git配置文件的完整指南
* [pre-commit](https://pre-commit.com/): 让git在commit之前做更多的事情
