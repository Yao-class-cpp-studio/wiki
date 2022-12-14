# Assignment 4 FAQ

## 题目补充说明

* Functor
    * Hint ii修改为：When given $f$ and $x$, pick proper $g$ and $x'$ such that $g(x)=x'$ and $g(x')=f(x')$. Hence $g(f^n(x))=f^{n+1}(x')$.
    * 解法不唯一

## 测试问题

* Tensor
    * `tensor_test.cpp`的105、106、108行`[2]`均改为`[1]`.

## Visual Studio相关编译问题

通用问题：

* LNK2038 / LNK2005: 检测到“RuntimeLibrary”的不匹配项：值“MTd_StaticDebug”不匹配值“MDd_DynamicDebug”
    * 将`target_link_libraries(***_test gtest_main)`改成`target_link_libraries(***_test PRIVATE gtest_main)`
    * 或者在`CMakeLists.txt`第六行添加一行`set(gtest_force_shared_crt on)`

题目：

* Swap
    * C4576: 后跟初始值设定项列表的带圆括号类型是一个非标准的显式类型转换语法（`array_test.cpp:31`）
        * `array_test.cpp`第31行删掉两个圆括号`()`，得到`managed_arr[id] = ManagedArr{new int[n], n};`
* Functor
    * C4716: “fuse”: 必须返回一个值
        * 在`reduce_pow_test.cpp`第10行后添加一行
            ```cpp
            return [=](Functor a) { return a; };
            ```
