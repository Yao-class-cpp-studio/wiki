# 进阶-Git的命令行操作

> 前置知识：
>
> * [命令行](../shell/)
> * [Git新手入门](./README.md)

如果你在之前只安装了GitHub Desktop，请从[官方网站](https://git-scm.com/)下载Git并安装。如果你在安装过程中有看不懂的参数，请不要修改，直接使用默认值。

下面我们所有的操作都在命令行内完成。`git`最常用的命令是：

```bash
git status
```

当你遇到不确定的事情的时候，请立刻进行一个`git status`。这个命令会显示你所处在的状态，并提示你如何进行下一步。

## 创建仓库

在home目录里面`git status`，你很可能会得到这样的输出：

```bash
fatal: not a git repository (or any of the parent directories): .git
```

这是因为你当前所处的目录不是一个Git仓库，几乎所有的Git命令都需要在一个仓库里面进行。创建仓库有几种方法：

* 输入`git init`，可以把当前目录变成一个Git仓库
* 输入`git clone <remote_url>`，可以把一个远程仓库复制到本地。比如这个Wiki的仓库的链接是`https://github.com/Yao-class-cpp-studio/wiki`，那么执行

    ```bash
    git clone https://github.com/Yao-class-cpp-studio/wiki
    ```

    会把这个仓库克隆到`wiki/`下。这时候`cd wiki`就可以进入这个仓库。

## 提交

提交（commit）的概念和在GitHub Desktop中完全相同。我们需要选中我们需要提交的文件，然后填写commit备注并提交。

```bash
git add <your files to commit>
git commit -m "Your comments on the change"
```

其中`git add`可以一次性添加一整个文件夹，比如`git add .`表示添加当前目录下的所有修改。

记住，`git status`命令是全程可用的，你可以随时查看你的状态：

<div data-asciinema="../images/554477.cast"></div>

你第一次在命令行中commit的时候，可能会得到这样的输出：

```bash
$ git commit -m "test"
*** Please tell me who you are.

Run

   git config --global user.email "you@example.com"
   git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.
```

这是因为Git的每一个commit都要求记录下作者的用户名和邮箱。我们直接按照输出中的提示完成即可：

```bash
git config --global user.email "san.zhang@163.com"
git config --global user.name "San Zhang"
```

如果你忘了使用`-m`选项提交commit信息，你可能会进入一个奇妙的界面不知道怎么退出：

<div data-asciinema="../images/554484.cast"></div>

这其实是git打开了vim的界面让我们编辑commit信息，如果你不会用vim的话，按`:wq`退出之后加上`-m`进行commit即可。

## 认证

我们的下一步是把新的commit同步到远端，比如GitHub，但是我们需要向远端证明自己的身份——我们需要登陆我们的帐号。以前，这项工作只要求我们输入GitHub帐户名和密码就可以了；但是从2021/08/13开始，GitHub禁用了密码登录，我们必须使用一些更安全的方式。

=== "GCM (推荐)"

    首先我们需要安装Git Credential Manager。

    === "Windows"

        Git for Windows自带，默认安装即可。

    === "Linux / WSL"

        通过任意一种方式安装：

        * 通过发行版的包管理器安装`dotnet`，然后通过dotnet安装`git-credential-manager`并把安装路径添加到PATH中。如在Debian/Ubuntu中：
            ```bash
            # 通过包管理器安装dotnet
            sudo apt update
            sudo apt install -y dotnet-runtime-6.0
            # 通过dotnet安装
            dotnet tool install -g git-credential-manager
            # 添加工具路径到PATH环境变量中
            echo 'export PATH="'"$HOME/.dotnet/tools"':$PATH"' >> ~/.profile
            ```
        * 通过conda安装：
            ```bash
            conda install dotnet -c conda-forge
            dotnet tool install --tool-path "${DOTNET_TOOLS}" git-credential-manager
            ```
        * 通过[tarball安装](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/install.md#tarball)
        * WSL可以使用Windows上的GCM，参考[官方文档](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/wsl.md)。

        安装完成后，执行以下命令：

        ```bash
        git config --global credential.credentialStore plaintext
        git-credential-manager configure
        ```

        我们这里使用明文存储access token，比较方便但是不太安全，有需要可以根据[GCM文档](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/credstores.md)使用其他存储方式。

    === "macOS"

        安装Homebrew，然后运行：

        ```bash
        brew tap microsoft/git
        brew install --cask git-credential-manager-core
        ```

    安装完成后，直接使用`https:`开头的remote，如

    ```bash
    https://github.com/Yao-class-cpp-studio/wiki.git
    ```

    在进行需要认证的操作的时候（如push）浏览器会自动打开提示你登录，输入帐号密码即可。

=== "GitHub CLI (仅支持GitHub)"

    安装[GitHub的命令行客户端](https://github.com/cli/cli#installation)，然后输入

    ```bash
    gh auth login
    ```

    * When prompted for your preferred protocol for Git operations, select `HTTPS`.
    * When asked if you would like to authenticate to Git with your GitHub credentials, enter `Y`.

=== "SSH"

    参考我们的[教程](../../shell/ssh)准备好一个公钥对，然后把公钥在[这里](https://github.com/settings/ssh/new)添加到GitHub上。

    之后使用ssh协议连接到remote，比如：

    ```
    git clone git@github.com:Yao-class-cpp-studio/wiki.git
    ```

    你的仓库的ssh地址可以在GitHub上找到。

=== "PAT (不推荐)"

    在[这个页面](https://github.com/settings/tokens/new)添加一个personal access token，记得勾选`repo`权限。然后在碰到认证的时候，用户名使用GitHub用户名，密码使用刚刚生成的token。

    如果觉得每次都要输入密码很麻烦，可以使用`git config`命令把密码保存起来：

    ```bash
    git config --global credential.helper store
    ```

    这样输完一次token之后就不需要再重复输入了。需要注意的是，这个命令会把你的token**明文**保存在`~/.git-credentials`文件中，请注意保护好这个文件。

## 同步

只有一个命令：

```bash
git push
```

如果push失败，首先检查是否是网络连接问题（出现`connect`、`tcp`、`timeout`等字眼都是网络问题）。

如果输出的错误信息类似这样：

```bash
Your branch and 'origin/main' have diverged,
and have 44 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
```

这是因为本地和远程都有新的commit，远程要求我们这边先下载它们的修改。根据提示执行`git pull`即可。

第一次`git pull`可能会遇到下面的错误：

```bash
Pulling without specifying how to reconcile divergent branches is
discouraged. You can squelch this message by running one of the following
commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only

You can replace "git config" with "git config --global" to set a default
preference for all repositories. You can also pass --rebase, --no-rebase,
or --ff-only on the command line to override the configured default per
invocation.
```

这与merge策略有关系，我们在这里执行
```bash
git config --global pull.rebase false
```
如果碰到其他merge相关的问题，或者想要了解这行命令背后的原理，请参阅[进阶-Git的分支管理](./branch.md)

## 下一项工作是？

Git命令行是一个非常庞大的工具集合，我们这里仅仅介绍了和入门教程中相对应的基础命令。剩下的命令都与具体的操作相关，你可以在目录中找到其他教程进一步学习。其他教程不完全使用命令行，它们对应的命令可以在[参考-Git命令速查表](../cheatsheet)中找到。
