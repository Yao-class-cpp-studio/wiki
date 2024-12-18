# WSL中会出现的问题

自WSL2开始，WSL底层使用了Hyper-V虚拟机，因此WSL被认为是和主操作系统不同一台机器，它们具有独立的网卡。

因此，在Windows中开启的网络服务（假设为http://127.0.0.1:2333/），在WSL中并不是本机，无法通过`127.0.0.1`访问。

要从WSL中访问这个服务，我们首先需要在相关软件中设置“允许来自局域网的连接”。然后我们需要获取主机名，可以在WSL中运行以下命令查看：

```bash
hostname
```

假设输出结果是`zhangsan`，则将`127.0.0.1`替换为`zhangsan.local`即可访问到主机的服务。
