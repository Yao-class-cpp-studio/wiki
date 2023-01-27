# 参考-Git命令速查表

> 前置知识：
>
> * [进阶-Git的命令行操作](./command.md)

```bash
git init             # 初始化Git仓库
git clone <repo url> # 从远程仓库克隆代码到本地

git config --global user.name "Your Name"       # 设置用户名
git config --global user.email "me@example.com" # 设置邮箱

git status               # 查看当前仓库状态
git diff <file path>     # 查看文件未提交的修改
git add <file path>      # 添加文件到暂存区
git commit -m "message"  # 提交暂存区到仓库
git log                  # 查看提交历史

git branch           # 查看所有分支
git branch <name>    # 从当前分支创建分支
git checkout <name>  # 切换分支
git merge <name>     # 合并分支到当前分支

git checkout <branch or commit> <file path>  # 恢复文件到指定分支的状态

git remote                                       # 查看有哪些远程仓库
git remote add <remote name> <repo url>          # 添加远程仓库
git fetch <remote>                               # 更新远程的信息
git pull <remote> <remote branch>:<local branch> # 更新信息并合并到本地分支
git push <remote> <local branch>:<remote branch> # 推送分支到远程仓库

git submodule add <repo_url> # 添加一个子仓库
git rm <path to submodule>   # 删除子仓库
git submodule update --init  # 初始化子仓库

git worktree add <path> <branch> # 添加一个工作树
git worktree remove <path>       # 删除一个工作树
git worktree list                # 查看工作树列表
git worktree prune               # 删除已经不存在的工作树
```
