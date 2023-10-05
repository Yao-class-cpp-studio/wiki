# Vulkan SDK

在开发使用硬件加速的图形程序时，我们通常会使用 OpenGL 这样的图形 API。然而，OpenGL 有着很多的缺点，比如说它的 API 设计过于古老，不符合现代 C++ 的编程风格；OpenGL 的渲染管线是固定的，不够灵活；OpenGL 的驱动实现是黑盒的，不够透明；OpenGL 的性能表现也不尽如人意。

Vulkan 是一个新的图形 API，它的目标是解决 OpenGL 存在的问题。Vulkan 的 API 设计更加现代化，使用起来更加方便；Vulkan 的渲染管线是可编程的，可以实现更加灵活的渲染效果；Vulkan 的驱动实现是开源的，可以方便地进行调试；Vulkan 的性能表现也更加优秀。

Vulkan SDK 是 Vulkan 的官方开发工具包，包含了 Vulkan 的头文件、库文件、调试工具等。

## 安装

=== "Windows"

    在 Windows 上，Vulkan SDK 的安装非常简单，只需要下载并运行[安装程序](https://sdk.lunarg.com/sdk/download/latest/windows/vulkan-sdk.exe)即可。安装仅需要核心组件，其他组件没有必要勾选。

    需要注意，Vulkan 是一个图形接口，在 WSL 中无法使用。如果你使用 WSL，那么你需要在 Windows 系统中安装 Vulkan SDK。

    此外，MinGW 等非官方编译器可能无法使用 Vulkan SDK，因此我们推荐使用 Visual Studio。

=== "Linux"

    - 通用方法

    在 Linux 上，Vulkan SDK 的安装稍微复杂一些，需要手动下载并解压缩。你可以通过如下脚本完成安装：

    ``` bash
    wget https://sdk.lunarg.com/sdk/download/latest/linux/vulkan-sdk.tar.gz -O vulkan-sdk.tar.gz

    sudo mkdir -p /opt/vulkan-sdk
    sudo tar -xvf vulkan-sdk.tar.gz -C /opt/vulkan-sdk

    VULKAN_SDK_VERSION=$(ls /opt/vulkan-sdk/ | grep -v "tar.gz")

    echo "VULKAN_SDK_VERSION: $VULKAN_SDK_VERSION"

    echo "export VULKAN_SDK=/opt/vulkan-sdk/$VULKAN_SDK_VERSION/x86_64" >> ~/.bashrc
    echo "export PATH=$PATH:$VULKAN_SDK/bin" >> ~/.bashrc
    echo "export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$VULKAN_SDK/lib" >> ~/.bashrc

    source ~/.bashrc
    ```

    对于 Ubuntu 20.04 及以上版本，你可以直接通过包管理器安装 Vulkan SDK：

    - Ubuntu 22.04

    ``` bash
    wget -qO- https://packages.lunarg.com/lunarg-signing-key-pub.asc | sudo tee /etc/apt/trusted.gpg.d/lunarg.asc
    sudo wget -qO /etc/apt/sources.list.d/lunarg-vulkan-1.3.261-jammy.list https://packages.lunarg.com/vulkan/1.3.261/lunarg-vulkan-1.3.261-jammy.list
    sudo apt update
    sudo apt install vulkan-sdk
    ```

    - Ubuntu 20.04

    ``` bash
    wget -qO - https://packages.lunarg.com/lunarg-signing-key-pub.asc | sudo apt-key add -
    sudo wget -qO /etc/apt/sources.list.d/lunarg-vulkan-1.3.261-focal.list https://packages.lunarg.com/vulkan/1.3.261/lunarg-vulkan-1.3.261-focal.list
    sudo apt update
    sudo apt install vulkan-sdk
    ```

=== "macOS"

    在 macOS 上，Vulkan SDK 的安装非常简单，只需要下载并运行[安装程序](https://sdk.lunarg.com/sdk/download/latest/mac/vulkan-sdk.dmg)即可。安装仅需要核心组件，其他组件没有必要勾选。


## 验证安装

安装完成后，你可以通过以下命令验证安装是否成功：

``` bash
vulkaninfo
```

如果安装成功，你应该能够看到一些 Vulkan 相关的信息。

或者运行 Vulkan Cube 程序
    
``` bash
vkcube
```

如果安装成功，你应该能够看到一个旋转的立方体。