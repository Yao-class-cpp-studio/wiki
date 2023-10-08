# vcpkg 注意事项

vcpkg 是微软提供的一个用于管理 C/C++ 第三方库的工具，通常会配合 CMake 使用。目前绝大多数常见的开源 C/C++ 库都可以在 vcpkg 支持的列表中找到。

vcpkg 仓库链接：[https://github.com/microsoft/vcpkg](https://github.com/microsoft/vcpkg)

安装方法：clone该仓库到一个**不含中文名字**的路径，然后运行

=== "Windows"
  
  ```cmd
  .\vcpkg\bootstrap-vcpkg.bat
  ```

=== "Linux / MacOS / WSL"
  
  ```bash
  ./vcpkg/bootstrap-vcpkg.sh
  ```

在提供好的作业框架中，同学们通常不需要自行配置什么，vcpkg 会在构建 CMake 工程的过程中自动部署，但由于系统环境原因可能会出现报错，需要同学们根据提示查看具体的报错信息。

## 已知问题

### vcpkg 在 Linux 系统上需要安装依赖工具

```
On Debian and Ubuntu derivatives:
  sudo apt-get install curl zip unzip tar
On recent Red Hat and Fedora derivatives:
  sudo dnf install curl zip unzip tar
On older Red Hat and Fedora derivatives:
  sudo yum install curl zip unzip tar
On SUSE Linux and derivatives:
  sudo zypper install curl zip unzip tar
On Arch Linux and derivatives:
  sudo pacman -S curl zip unzip tar cmake ninja
On Alpine:
  apk add build-base cmake ninja zip unzip curl git
```

### 网络环境问题

vcpkg 需要从 GitHub 上下载源码，如果你的网络环境不好，可能会出现下载失败的情况。你可以尝试使用梯子，或者使用镜像源。

如果你的梯子是全局代理，那么你可能不需要做任何事情。如果你的梯子是 PAC 代理，那么你可能需要手动设置代理地址。

Windows:

```
set VCPKG_HTTP_PROXY="http://address:port"
set VCPKG_HTTPS_PROXY="http://address:port"
```

Unix-Like OS (Linux, macOS, WSL):

```
export VCPKG_HTTP_PROXY="http://address:port"
export VCPKG_HTTPS_PROXY="http://address:port"
```

使用镜像源的方法请自行通过搜索引擎查询。
