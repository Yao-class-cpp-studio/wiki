# Conda

> 前置知识：
>
> * [命令行](../shell/)

Conda是一个包管理工具。
一般提到conda，
大家都会想到它是一个Python的包管理工具，
但是conda并不局限于此。
本篇将为大家介绍conda的使用方法以及常用场景。

## 为什么历史选择了conda

> 本节是助教的私货

无论是做数据挖掘还是做计算机，
我们都不得不跟Linux打交道，
因为目前绝大多数服务器都在运行Linux。
在Linux上安装一个软件，可以是很简单的事情，也可以是很麻烦的事情。
如果你有管理员权限，那就很简单，你可以直接用这个工具安装：

```bash
sudo apt install g++
```

就结束了。

但是如果你**没有**管理员权限，你需要

<ol markdown>
<li>上官网找到这个软件的下载链接；</li>
<li>在服务器上用命令行下载，或者在本地下载好了再上传到服务器上；</li>
<li>解压缩；</li>
<li>如果程序还是源代码，那么需要进行编译；如果编译器没有安装，则需要先按这整个流程安装编译器；</li>
<li>记住这个软件的安装路径；</li>
<li>为了能够在任何文件夹中都能执行这个程序，我们把安装路径加到环境变量`PATH`中；如在`.bashrc`中添加一行

```bash
export PATH=/path/to/your/program:$PATH
```

</li>
<li>安装完成。</li>
</ol>

我们有没有可能把以上过程简化？比如输入一行命令，就能完成上面的所有步骤？一般`PATH`变量只包含了系统的库，因此能一键安装的办法都必须把软件安装到`PATH`变量中的某个目录下，这就必须要求我们有管理员权限。[^1]

没有管理员权限的情况非常常见。比如我们使用实验室的公用服务器，或者借用他人的服务器的时候，服务器的维护者为了保障服务器稳定运行，一般不会开放管理员权限。

Conda是这种情况下的一个妥协方案。Conda不需要管理员权限，可以一键安装软件，同时不会污染系统环境。它还有其他几个好处：

1. 跨平台，可以在Linux、MacOS和Windows上使用；
2. 软件默认完全安装在一个目录下，不会修改其他地方的内容；
3. 提供虚拟环境，因此你可以在同一台电脑上安装多个版本的软件，根据需要切换；
4. 一键卸载；
5. 使用SAT solver进行精确的依赖管理。
6. 常用软件基本都有，没有的软件可以提交PR添加；
7. 可以精确复现实验环境，用于论文代码仓库。

[^1]: 有很多软件在尝试改善这种状况，它们会提供一些一键安装脚本。但是这种方法的缺点是：你很难确认这些脚本都做了什么事情，它们会修改你的`.bashrc`文件，同时占用你的`~`目录下的空间。当你要卸载这个软件的时候，你需要手动去`.bashrc`文件中删除这个软件，同时在`~`目录下删去相应的文件夹。如果你不小心删除了其他软件的路径，那么你的系统就会出现问题。

## 安装Conda主程序

Anaconda是原版conda发行，但是捆绑了大量科学计算包，体积较为臃肿；大家平常安装的是Miniconda，它仅包含核心安装包。我们在此推荐(micro)mamba。这是使用C++重新实现的conda，用法一致，但是速度比conda快得多。一般conda安装一个包需要10分钟计算dependency，而libmamba一般在两秒内计算完成。

=== "Windows"

    Anaconda体积比较大，但是功能完整，初学者不容易出问题。我们在这里使用Anaconda，如果磁盘空间不足，可以自行改成[Miniconda](https://docs.conda.io/en/latest/miniconda.html)。

    到[Anaconda官网](https://www.anaconda.com/)下载安装包并安装。安装完成后，开始菜单中可以找到“Anaconda Prompt”，这是一个类似于Windows命令行的程序，可以在这里直接使用conda。

    你也可以在Git Bash中使用conda，参考[这篇教程](https://discuss.codecademy.com/t/setting-up-conda-in-git-bash/534473)。

    Conda安装任何包的速度都非常慢，我们推荐使用mamba替代。首先需要安装mamba：

    ```bash
    conda install -n base -c conda-forge mamba
    ```

    后面使用`conda install`的时候，改成`mamba install`即可。

=== "Linux / macOS / WSL"

    最简单的安装办法是用官方的脚本。

    Linux/WSL上的shell一般是bash，执行：
    ```bash
    curl micro.mamba.pm/install.sh | bash
    ```

    而macOS上的shell一般是zsh，执行：
    ```bash
    curl micro.mamba.pm/install.sh | zsh
    ```

    安装脚本途中会问你几个问题，如果你看不懂，直接按回车就可以了。

    根据你的网络连接情况，你可能需要为`curl`配置代理（参考我们的[常见软件代理设置](../network/common.md)），或者使用清华镜像（参考"Unix手动"）。

=== "Unix手动"

    你参考[官方文档](https://mamba.readthedocs.io/en/latest/installation.html#micromamba)进行手动安装，或者使用这里的清华镜像的安装脚本，在国内可以稳定运行。

    脚本中有一个变量需要你更改，其他的可以不用管。

    ```bash
    ### 需要你更改的变量 ###

    # 你的操作系统型号，可以是linux-64, linux-aarch64, osx-64, osx-arm64, linux-ppc64le
    # Linux/WSL选linux-*开头的，macOS选osx-*开头的；
    # `uname -m`输出包含"arm"就选linux-aarch64或osx-arm64，否则一般选linux-64或osx-64。
    export conda_arch=linux-64

    ### 你可以更改的变量 ###

    # 下载地址
    # 到https://anaconda.org/conda-forge/micromamba/files上可以找到最新的版本，不过旧版本也能用
    export download_url=https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/${conda_arch}/micromamba-1.2.0-1.tar.bz2

    # 软件安装位置
    export MAMBA_ROOT_PREFIX="${HOME}/micromamba"

    #### 下面不需要修改 ####

    mkdir -p "${MAMBA_ROOT_PREFIX}"
    cd "${MAMBA_ROOT_PREFIX}"
    curl -Ls "${download_url}" | tar -xvj bin/micromamba

    # 初始化.rc，这样每次打开shell都会自动初始化
    ./bin/micromamba shell init -p "${MAMBA_ROOT_PREFIX}"
    ```

## conda基础配置

如果你按照上面的教程安装了`micromamba`，请使用`micromamba`替代`conda`命令。如果你觉得这不习惯，可以在`~/.bashrc`（或`~/.zshrc`）中添加：

```bash
alias conda=micromamba
```

之后，你就可以使用`conda`命令了。

确保`conda`命令可以正常运行：

```bash
conda --version
```

如果显示找不到命令，你可能需退出并重新打开shell。如果报错“Shell not initialized”，说明你的shell还没有正确init，请按上面的教程再走一次。

将`~/.condarc`修改为：

```yaml
channels:
  - conda-forge

# 国内访问anaconda.org可能会很慢，因此推荐使用清华镜像：
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```

## conda命令入门

Conda中的每个软件包都安装在环境（Environment）中，一个环境可以包含多个包，环境之间相互独立互不影响。

```bash
# 创建一个叫`daily`的环境，供我们日常使用
conda create -n daily  # -n的全称是--name，不可省略或换位置

# 激活环境
conda activate daily
# 安装一个软件包
conda install python
# 卸载一个软件包
conda remove python
# 退出这个环境（如果只是要切换到另一个环境，则不需要退出）
conda deactivate
# 删除这个叫`daily`的环境
conda remove -n daily --all
```

## 常用软件

=== "服务器必备"

    ```bash
    conda install tmux htop git vim
    ```

=== "C++开发"

    ```bash
    conda install cxx-compiler gdb cmake make
    ```

=== "科学计算"

    ```bash
    conda install numpy scipy matplotlib jupyterlab
    ```

=== "PyTorch"

    ```bash
    conda install pytorch torchvision torchaudio pytorch-cuda=11.6 -c pytorch -c nvidia
    ```

    具体版本请上[PyTorch官网](https://pytorch.org/)查看。

=== "NVCC（Cuda编译）"

    ```bash
    conda install cuda-toolkit=11.6 -c nvidia
    ```

    请根据需要选择cuda版本。

## 下一项工作是？

大部份的conda包可以在[Anaconda搜索页](https://anaconda.org/search)找到。推荐安装`conda-forge` channel的包（网页上的“owner”就是channel）。如果不是这个channel，你需要在install命令后面加`-c channel_name`（`channel_name`替换为包的channel）。如果你发现你需要的软件还没有出现在conda中，欢迎给[conda-forge](https://conda-forge.org/docs/maintainer/adding_pkgs.html)提交PR！
