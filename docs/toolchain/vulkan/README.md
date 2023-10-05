# Vulkan SDK

在开发使用硬件加速的图形程序时，我们通常会使用 OpenGL 这样的图形 API。然而，OpenGL 有着很多的缺点，比如说它的 API 设计过于古老，不符合现代 C++ 的编程风格；OpenGL 的渲染管线是固定的，不够灵活；OpenGL 的驱动实现是黑盒的，不够透明；OpenGL 的性能表现也不尽如人意。

Vulkan 是一个新的图形 API，它的目标是解决 OpenGL 存在的问题。Vulkan 的 API 设计更加现代化，使用起来更加方便；Vulkan 的渲染管线是可编程的，可以实现更加灵活的渲染效果；Vulkan 的驱动实现是开源的，可以方便地进行调试；Vulkan 的性能表现也更加优秀。

Vulkan SDK 是 Vulkan 的官方开发工具包，包含了 Vulkan 的头文件、库文件、调试工具等。

=== Windows

    在 Windows 上，Vulkan SDK 的安装非常简单，只需要下载并运行[安装程序](https://sdk.lunarg.com/sdk/download/latest/windows/vulkan-sdk.exe)即可。安装仅需要核心组件，其他组件没有必要勾选。

=== Linux

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

    首先，我们需要下载 Vulkan SDK 的安装包。Vulkan SDK 的下载地址为：[https://vulkan.lunarg.com/sdk/home](https://vulkan.lunarg.com/sdk/home)。在这个页面中，我们需要选择适合自己的操作系统的安装包。在这里，我们选择 [Linux 的安装包](https://sdk.lunarg.com/sdk/download/latest/linux/vulkan-sdk.tar.gz)。

=== macOS

    在 macOS 上，Vulkan SDK 的安装非常简单，只需要下载并运行[安装程序](https://sdk.lunarg.com/sdk/download/latest/mac/vulkan-sdk.dmg)即可。安装仅需要核心组件，其他组件没有必要勾选。