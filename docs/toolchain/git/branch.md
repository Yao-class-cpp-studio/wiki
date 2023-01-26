# 进阶-Git的分支管理

> 前置知识：
>
> * [Git新手入门](./README.md)

Commit的历史不一定会排成一条直线。比如说，你和朋友同时从commit A开始写代码，每个人负责一个模块。你写完之后得到了commit B，朋友写完之后得到了commit C，这个时候的commit记录就产生了分叉——究竟谁的版本才是最新的版本呢？

![Git Branch illustration](./images/01 Git branch.svg)
<br>
<small markdown>图源：[Atlassian](https://www.atlassian.com/git/tutorials/using-branches)</small>

上图中就描述了这样的情况。每一个圆圈都是一个commit，三个方框分别指向了三种不同的修改路线，我们把这个方框称为“分支”（branch）。

<img src="../images/new_branch.jpg" align="right">

创建分支非常简单，而且对系统也没有什么压力，因为分支并没有把整个仓库都拷贝一遍，它只是指向某个commit的指针。在GitHub Desktop中，点击菜单栏&#8594;Branch&#8594;New Branch即可创建一个新的分支，新的分支和当前所在的分支是一样的进度。

<img src="../images/switch_branch.jpg" align="right">

创建分支之后，我们可以随时在不同的分支之间切换。单击GitHub Desktop界面中间的“Current Branch”，就可以看到所有的分支。切换的时候，工作区会被更新成分支的内容；只要原分支还在，我们就不担心当前进度丢失。

要删除分支，只需要在分支选择界面右键要删除的分支并单击“Delete...”。

## 合并操作

菜单栏&#8594;Branch&#8594;Merge into Current Branch...操作可以把其他branch的内容合并到目前我们所在的分支。

![Merge illustration](../images/02 Branch-1 kopiera.png)
<br>
<small markdown>图源：[Atlassian](https://www.atlassian.com/git/tutorials/using-branches/git-merge)</small>

需要注意的是，merge操作后默认**不会删除**被merge的分支。你可以继续在上图的`Feature tip`分支继续提交commit，并在日后再次merge进入主线。这种用法一般是在维护fork的时候从上游更新最新的进度。

## 合并冲突

如果两个分支同时修改了同一个文件，这个文件应该用哪个版本？一般来说，我们认为两个版本都是有价值的，应该同时保留两个版本。但是，无论是代码、文章还是图片，粗暴地保留两个版本都不work。因此git会中断merge，给我们一个选择的机会。

对于文本文件，git会把文件修改成这个样子：

```
一开始的内容……
<<<<<<< main
这里是main分支做的修改！
这里包含了大家的代码
=======
这是一个小分支，包含了一些bug fix
>>>>>>> new_branch
其他的内容……
```

这里是git贴心地帮你做好了文件比对，标注出了文件中两个分支不同的地方。修复merge conflict的工作就是把这样的地方删掉并改成合适的样子：

```
一开始的内容……
这里是main分支做的修改！
这里包含了大家的代码和一些bug fix
其他的内容……
```

然后就可以继续merge了。

## 远程分支与PR

分支也可以push到远程，在GitHub Desktop里面有非常简便的操作，这里不再赘述。

我们有时候在GitHub上发现别人的仓库里面有bug，想要修改，却没有修改权限，这个时候的标准操作是创建一个PR。我们首先点击仓库页面右上方的Fork：

![Fork button](../images/fork_button.jpg)

这样就创建了一个我们有修改权限的仓库，它相当于是我们的一个分支。我们在这上面进行修改之后，创建一个Pull request，等待原仓库管理员审核即可。

## 下一项工作是？

暂时没有啦！
