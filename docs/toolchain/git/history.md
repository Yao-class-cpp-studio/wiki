# 高阶-修改历史

> 前置知识：
>
> * [进阶-Git的分支管理](./branch.md)
> * [进阶-Git的命令行操作](./command.md)

修改历史是git中最强大但是也最危险的操作之一。在修改历史前，**强烈建议**进行数据备份并思考你是否真的需要修改历史。以下一般不构成修改历史的理由：

* 之前的commit里面有误：请创建一个新的commit来修正它
* 删掉某个commit：请创建一个revert commit来去掉这个commit的修改
* 回滚到某个版本：从那个版本开始新建一个分支；

需要修改历史的常见原因有：

* 提交了带密码的文件
* 提交了过大的文件
* 项目要求线性历史（linear history）或one commit per PR

下面的指令如果完成之后你感觉有些晕乎乎的，不知道仓库发生了什么，请永远记得`git status`和`git log`。

## 修改历史后如何与远程同步

远程一般只允许fast forward一个分支，即branch的新位置需要包含之前的所有commit。修改历史后，我们得到的是完全不同的一个分支（原因请参考[Git原理](../principle)），remote会拒绝我们push过去。这时候需要用`--force`指令：

```bash
git push --force
```

由于这是一个危险的指令，很多仓库的主分支`main`不允许force-push，请留意。

## 回滚到上一个版本

这是在有问题的commit刚刚发生时的急救措施。比如我们突然想起来刚刚的commit中不小心加入了一个编译的二进制文件，而我们还没有把结果push到远程，那么我们可以立刻进行一个回滚：

```bash
git reset HEAD^
```

`HEAD^`的意思是当前`HEAD`的上一个commit，改成`HEAD^^`可以回滚到再上一个。这个指令并不会更改你工作区中的文件，只修改了branch指向的commit，所以你可以进行一些修改之后再次commit。

## Squash

“Squash”的意思是把多个commit合并为一个commit。GitHub的PR页面上有一键squash的功能，我们在这里也介绍一个比较简单直接的操作方法。

假设你需要把当前分支的最后3个commit squash到一起：

```bash
git reset --soft HEAD~3
git commit -m "Your new commit message"
```

这两行代码相当于是把最后的几个commit先撤销，然后我们再一次性全部commit回去。类似地，如果你决定要把某个commit `123abc`之后的squash在一起（不包含`123abc`），则命令是：

```bash
git reset --soft 123abc
git commit -m "Your new commit message"
```

## 下一项工作是？

后面是比较复杂的概念，实际用的机会不多，而且有许多可能发生的特殊情况，放在这里稍显冗长，我们直接给出参考资料。

* [Rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase): 在合并入主分支的时候，让自己的分支“看起来”像基于最新的commit开始的。
* [从存储库中删除敏感数据](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
