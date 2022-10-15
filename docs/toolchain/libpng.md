# 安装libpng或其他C++库

在引用现成库（如`libpng`）时，我们需要保证编译器：

1. `#include`能找到`png.h`，因此需要加入include directories设定；
2. 链接（link）的时候能找到`libpng.o`（或其他后缀）；
3. 如果是动态链接，还要能找到`libpng.so`或`libpng.dll`动态链接库。

这一系列操作可以手动完成，也可以用包管理器+CMake自动配环境。
我们提供几个比较典型的配置方案供参考。

=== "VS + vcpkg"

    本配置需要Windows系统和Visual Studio。
 
    1. 安装[Visual Studio](https://visualstudio.microsoft.com/)最新版（Community版本免费）。
    安装时，选择“使用C++的桌面开发”套件。
    2. 安装[vcpkg](https://github.com/microsoft/vcpkg)。可以用`git clone`下载或从网页上下载压缩包，然后解压到一个**不含中文**的路径。
    3. 打开`cmd`或`powershell`，切换到vcpkg目录下：

        ```cmd
        cd vcpkg
        ```
        执行安装脚本：
        ```cmd
        .\bootstrap-vcpkg.bat
        ```
        安装libpng：
        ```cmd 
        .\vcpkg install libpng:x64-windows
        ```
        让Visual Studio能搜索到vcpkg安装的包：
        ```cmd
        .\vcpkg integrate install
        ```
        因为网络问题这些命令不总是会成功，**请确认以上每一行运行后都没有错误***。
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
    3. 使用包管理器安装cmake和需要的包（libpng）。如apt：

        ```bash
        sudo apt install cmake libpng-dev
        ```

    4. 进入项目目录，直接进行cmake相关操作即可。
