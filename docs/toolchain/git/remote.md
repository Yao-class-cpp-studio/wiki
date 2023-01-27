# 高阶-多远程管理

> 前置知识：
>
> * [进阶-Git的分支管理](./branch.md)
> * [进阶-Git的命令行操作](./command.md)

## Fork仓库拉取上游更新

一般我们使用git的时候只会涉及一个默认分支`origin`，它指向了我们的`GitHub`仓库。出现多个remote的情况有可能是我们通过fork创建了一个新的仓库，同时我们需要从上游仓库不断地拉取更新到我们的分支，保持同步。我们以这种典型情况为线索，介绍多远程的管理。

假设我们的上游仓库为

```
https://github.com/yao-class-cpp-studio/wiki
```

而我们fork出的仓库为

```
https://github.com/zhangsan/wiki
```

我们先对fork仓库进行clone：

```
git clone https://github.com/zhangsan/wiki
cd wiki
```

这时候的默认remote为origin，origin的地址为`https://github.com/zhangsan/wiki`，可以通过以下命令确认：

```bash
git remote get-url origin
```

为了让git能够知道我们还有一个远程仓库，我们添加一个叫`upstream`的remote：

```bash
git remote add upstream https://github.com/yao-class-cpp-studio/wiki
```

然后我们从`upstream`更新信息：

```bash
git fetch upstream
```

这时候`upstream`的所有分支都会被放到`upstream/*`下。假设我们对`main`提交了一些更改之后，原仓库也更新了，我们通过以下命令把原仓库的更改添加到我们的更改上：

```bash
git merge upstream/main
```

这一操作也可以通过GitHub网页完成。

## 两仓库保持同步

GitHub的仓库可能访问速度较慢，服务器上面无法连接，我们可以用一些国内的服务来托管我们的代码，比如[gitee](https://gitee.com/)或[清华git](https://git.tsinghua.edu.cn/)。不过，我们会想要保持两边的仓库同步。

从一个远程`repo1`下载`branch1`的更新到本地`branch2`：

```bash
git pull repo1 branch1:branch2
```

从本地的`branch2`推送更新到`repo2`的`branch3`：

```bash
git push repo2 branch2:branch3
```

## 下一项工作是？

没有啦！
