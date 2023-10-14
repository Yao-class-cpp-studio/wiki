# 安装libpng或其他C++库

在引用现成库（如`libpng`）时，我们需要保证编译器：

1. `#include`能找到`png.h`，因此需要加入include directories设定；
2. 链接（link）的时候能找到`libpng.o`（或其他后缀）；
3. 如果是动态链接，还要在运行时能找到`libpng.so`或`libpng.dll`动态链接库。

这一系列操作可以手动完成，也可以用包管理器+CMake自动配环境。
CMake搜索库的位置主要依靠`find_package()`函数实现，该函数需要正确安装libpng到常用位置。
我们提供几个比较典型的配置方案供参考。

=== "CMake FetchContent"

    `FetchContent`是CMake提供的一个自动下载其它库源代码的Module，类似的Module还有`ExternalProject`。
    
    在作业的`CMakeLists.txt`中，将以下代码

    ```cmakelists
    find_package(PNG REQUIRED)
    include_directories(${PNG_INCLUDE_DIR})
    target_link_libraries(main ${PNG_LIBRARY})
    ```

    替换为

    ```cmakelists
    # 在系统中寻找libpng
    find_package(PNG QUIET)
    
    if(NOT PNG_FOUND)
      message(STATUS "libpng not found, we will download it")
      # 没找到，我们从源码编译
    
      include(FetchContent) # 引入FetchContent Module
    
      FetchContent_Declare(
        zlib                                              # zlib是libpng的依赖，我们引入zlib
        GIT_REPOSITORY https://gitee.com/mirrors/zlib.git # 为了保证国内可连接性，我们使用gitee的镜像
        GIT_TAG 09155eaa2f9270dc4ed1fa13e2b4b2613e6e4851  # 版本：1.3
      )
      FetchContent_Declare(
        libpng
        GIT_REPOSITORY https://gitee.com/mirrors/libpng.git
        GIT_TAG        f135775ad4e5d4408d2e12ffcc71bb36e6b48551 # 版本：1.6.40
      )
    
      FetchContent_MakeAvailable(zlib) # 下载zlib
      # 设置zlib的头文件和库，让libpng能找到
      set(ZLIB_INCLUDE_DIRS ${zlib_SOURCE_DIR} ${zlib_BINARY_DIR})
      set(ZLIB_LIBRARIES zlibstatic)
    
      set(PNG_BUILD_ZLIB ON)             # 让libpng知道我们已经下载了zlib
      set(SKIP_INSTALL_ALL ON)           # 不安装libpng，因为zlibstatic不能安装
      FetchContent_MakeAvailable(libpng) # 下载libpng
      set(PNG_INCLUDE_DIRS ${libpng_SOURCE_DIR} ${libpng_BINARY_DIR})
      set(PNG_LIBRARIES png_static)
    
      # 变量的别名
      set(PNG_INCLUDE_DIR ${PNG_INCLUDE_DIRS})
      set(PNG_LIBRARY ${PNG_LIBRARIES})
    endif()
    
    target_link_libraries(main PRIVATE ${PNG_LIBRARIES})
    target_include_directories(main PRIVATE ${PNG_INCLUDE_DIRS})
    ```

    在上面的代码中，用到了git来下载源代码。如果你没有安装git，也可以使用以下URL下载（链接可能会失效）：

    ```cmakelists
    FetchContent_Declare(
        zlib
        URL http://www.zlib.net/zlib13.zip
        URL_HASH SHA256=c561d09347f674f0d72692e7c75d9898919326c532aab7f8c07bb43b07efeb38
    )
    FetchContent_Declare(
        libpng
        URL https://jaist.dl.sourceforge.net/project/libpng/libpng16/1.6.40/lpng1640.zip
        URL_HASH SHA256=0b05310afd15c4f5ccbbae13b4eec4573ee519dc1c76c411c8c10998ea93f107
    )
    ```

=== "VS + vcpkg"

    本配置需要Windows系统和Visual Studio。
 
    1. 安装[Visual Studio](../environment#_7)最新版（Community版本免费）。
    安装时，选择“使用C++的桌面开发”套件。
    2. 安装[vcpkg](../vcpkg)。
    3. 打开`cmd`或`powershell`，切换到vcpkg目录下：

        ```
        cd vcpkg
        ```

        执行安装脚本：

        ```
        .\bootstrap-vcpkg.bat
        ```

        安装libpng：

        ``` 
        .\vcpkg install libpng:x64-windows
        ```

        让Visual Studio能搜索到vcpkg安装的包：

        ```
        .\vcpkg integrate install
        ```

        因为网络问题这些命令不总是会成功，**请确认以上每一行运行后都没有错误**。
    4. 打开Visual Studio并打开`png`文件夹，这时候应该能直接编译通过。

    如果还没编译通过：

    1. 检查`CMakeLists.txt`是否为最初的版本；
    2. 在Visual Studio的文件列表中，右键`CMakeLists.txt`，删除缓存并重新配置；
    3. 再仔细读一遍以上文档，看是否有要求未满足。

=== "VS Code + WSL"

    本方案适用于Windows 10/11系统。

    1. 安装[Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl/install)，推荐使用Windows 11+WSL2。
    2. 安装[Visual Studio Code](https://code.visualstudio.com/)。
    3. 在VS Code中安装[Remote WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)插件，然后用WSL模式打开项目文件夹。
    4. 后续步骤和“Linux / Mac OS”相同。

=== "Linux / Mac OS"

    1. 首先确认安装的发行版，根据发行版确认包管理器。
        常见发行版对应的包管理器：
        <style>
        #dist-table td:nth-child(2) {
            text-align: center !important;
            vertical-align: middle !important;
        }
        </style>
        <table markdown id="dist-table">
        <tbody markdown>
        <tr>
        <th>发行版</th><th>包管理器</th>
        </tr>
        <tr markdown><td>:simple-ubuntu: Ubuntu</td><td rowspan=2>apt</td></tr>
        <tr markdown><td>:simple-debian: Debian</td></tr>
        <tr markdown><td>:simple-alpinelinux: Alpine Linux</td><td>apk</td></tr>
        <tr markdown><td>:simple-centos: CentOS</td><td rowspan=2>yum</td></tr>
        <tr markdown><td>:simple-fedora: Fedora</td></tr>
        <tr markdown><td>:simple-opensuse: OpenSUSE</td><td>zypper</td></tr>
        <tr markdown><td>:simple-macos: Mac OS</td><td>homebrew</td></tr>
        </tbody>
        </table>

    2. 使用包管理器安装cmake和需要的包（libpng）。如apt：

        ```
        sudo apt install cmake libpng-dev
        ```

    3. 进入项目目录，直接进行cmake相关操作即可。

