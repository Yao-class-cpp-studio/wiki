# CMake

## VSCode集成

详细教程参考[Get started with CMake Tools on Linux](https://code.visualstudio.com/docs/cpp/cmake-linux)

## MTd_StaticDEBUG不匹配MDd_DynamicDebug的解决办法

修改`CMakeLists.txt`，在其中加入一行：

```cmake
set(CMAKE_CXX_STANDARD 14)

set(gtest_force_shared_crt on)  # 新增的是这一行
add_subdirectory(../external/googletest gtest)
```
