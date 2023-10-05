# Grassland

 Grassland 是 Zijian Lyu([@LazyJazz](https://github.com/LazyJazz)) 封装的库，目前主要用于使用 Vulkan 加速的图形渲染。

## 依赖

Grassland 需要依赖 Vulkan SDK，因此请先安装 [Vulkan SDK](https://cpp.studio/toolchain/vulkan)。

除 Vulkan SDK 之外，Grassland 依赖一些其他的第三方库，这些库都是通过 [vcpkg](https://cpp.studio/toolchain/vcpkg) 安装的。根据经验，其中部分库在 Linux 系统上需要手动安装依赖工具。

<details markdown>
<summary>
glfw3
</summary>

这个库是为了创建窗口。不同操作系统创建窗口的方式不同，因此需要使用不同的库。glfw3 是一个跨平台的库，可以在 Windows、Linux、macOS 上使用。

Ubuntu: 

```
sudo apt install libxinerama-dev libxcursor-dev xorg-dev libglu1-mesa-dev pkg-config
```

其它 Linux 发行版请参考对应的包管理器。
</details>


<details markdown>
<summary>
SFML
</summary>

这个库是为了以后加入声音的功能，目前还没有用到。

Ubuntu

```
sudo apt-get install libx11-dev libxrandr-dev libxcursor-dev libxi-dev libudev-dev libgl1-mesa-dev
```

其它 Linux 发行版请参考对应的包管理器。
</details>

<details markdown>
<summary>
ALSA (Advanced Linux Sound Architecture)
</summary>

这个库是为了以后加入声音的功能，目前还没有用到。

```
On Debian and Ubuntu derivatives:
    sudo apt install autoconf libtool
On recent Red Hat and Fedora derivatives:
    sudo dnf install autoconf libtool
On Arch Linux and derivatives:
    sudo pacman -S autoconf automake libtool
On Alpine:
    apk add autoconf automake libtool
```
</details>