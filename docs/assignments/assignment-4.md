# Assignment 4 FAQ

## Visual Studio相关编译问题

* Swap
    * C4576: 后跟初始值设定项列表的带圆括号类型是一个非标准的显式类型转换语法（`array_test.cpp:31`）
        * `array_test.cpp`第31行删掉两个圆括号`()`，得到`managed_arr[id] = ManagedArr{new int[n], n};`
    * LNK2038 / LNK2005: 检测到“RuntimeLibrary”的不匹配项：值“MTd_StaticDebug”不匹配值“MDd_DynamicDebug”
        * 在`CMakeLists.txt`第六行添加一行`set(gtest_force_shared_crt on)`
* Functor
    * LNK2038 / LNK2005: 检测到“RuntimeLibrary”的不匹配项：值“MTd_StaticDebug”不匹配值“MDd_DynamicDebug”
        * 在`CMakeLists.txt`第六行添加一行`set(gtest_force_shared_crt on)`
