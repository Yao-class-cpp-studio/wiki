# 常见软件代理设置

本文是常见软件代理设置的速查表，
下面均假设代理服务器地址为 `http://127.0.0.1:2333/`，实际使用时请替换为自己环境中的地址。

## git

在命令行中输入

```bash
git config --global http.proxy http://127.0.0.1:2333/
git config --global https.proxy http://127.0.0.1:2333/
```

如果只想对当前repo生效，可以将`--global`改成`--local`。

运行这两行命令之后，所有HTTP remote将会通过代理服务器访问。请注意，**SSH remote**不会被代理。

这两行命令实际会修改`~/.gitconfig`：

```gitconfig
[http]
    proxy = http://127.0.0.1:2333/
[https]
    proxy = http://127.0.0.1:2333/
```

如果我们只想对某些网站使用代理，可以改成：

```bash
[http "https://github.com"]
    proxy = http://127.0.0.1:2333/
[https "https://github.com"]
    proxy = http://127.0.0.1:2333/
```

那么对于`https://gitee.com`或`https://git.tsinghua.edu.cn`等网站，就不会使用代理。

### curl

在执行命令的时候加一个选项：

```bash
curl https://example.com --proxy http://127.0.0.1:2333/
```

或者在`~/.curlrc`中添加一行：

```curlrc
proxy=http://127.0.0.1:2333/
```

### apt

新建一个`proxy.conf`：

```bash
Acquire::http::Proxy "http://127.0.0.1:2333/";
Acquire::https::Proxy "http://127.0.0.1:2333/";
```

然后在执行apt命令的时候

```bash
apt -c proxy.conf
```

### wget

在`~/.wgetrc`中添加：

```wgetrc
use_proxy=yes
http_proxy=http://127.0.0.1:2333/
https_proxy=http://127.0.0.1:2333/
```

### golang

在执行go相关的命令前运行：

```bash
export GOPROXY=https://proxy.golang.com.cn,direct
```

更多信息请见[https://goproxy.io/zh/](https://goproxy.io/zh/).

### conda

清华有[conda的镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)。
如果使用清华的镜像站，只需要向`~/.condarc`添加：
```yaml
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```

如果使用代理，则将`~/.condarc`修改为：

```yaml
proxy_servers:
    http: http://127.0.0.1:2333/
    https: http://127.0.0.1:2333/
```

### pip / PyPI

清华提供了[PyPI镜像](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)。

临时使用命令：

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple <some-package>
```

设置成默认：

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

不使用镜像而是使用代理：

```bash
pip install <some-package> --proxy http://127.0.0.1:2333/
```

### vcpkg

Windows:

```cmd
set VCPKG_HTTP_PROXY="http://address:port"
set VCPKG_HTTPS_PROXY="http://address:port"
```

Unix-Like OS (Linux, macOS, WSL):

```bash
export VCPKG_HTTP_PROXY="http://address:port"
export VCPKG_HTTPS_PROXY="http://address:port"
```
