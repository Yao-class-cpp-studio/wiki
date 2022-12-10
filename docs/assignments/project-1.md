# Project 1: JSON

Announcements:

* Subtask "trailing comma" is already supported by the library.
Please ignore this subtask.

## Running Tests

There are two predefined tests in this project.
One is simply running the target `jsoncpp_test`.
The other runs a python script and tests the output of the program.

In Visual Studio:

* Run `jsoncpp_test.exe` for the first test.
* Open the "Solution Explorer"(解决方案资源管理器) window if it's not already opened: View -> Solution Explorer
* Click on the icon "Switch between solutions and available views"(切换视图)
    * See the [reference](https://learn.microsoft.com/zh-cn/visualstudio/ide/use-solution-explorer?view=vs-2022#solution-explorer-toolbar) for more details
* Choose "CMake Targets View"
* Right click on the target "jsoncpp_check" and choose "Build". This is the second test.
* You should see three failed tests. These tests are expected to fail(`fail_*.json`), so no worries.

Or if you use command line:

```bash
# build the project as usual
mkdir build
cd build
cmake ..

make jsoncpp_test && ./bin/jsoncpp_test # test 1
make jsoncpp_check                      # test 2
```

## Viewing Compilation Logs on GitHub

Add the following changes to `.github/workflows/build.sh`:

```diff
@@ -113,7 +113,8 @@ cd "${_BUILD_DIR_NAME}"
     -DBUILD_SHARED_LIBS:BOOL=${_CMAKE_BUILD_SHARED_LIBS} \
     -DCMAKE_INSTALL_PREFIX:PATH=${DESTDIR} \
     ../
 
+  cmake --build .
   ctest -C ${BUILD_TYPE} -D ExperimentalStart -D ExperimentalConfigure -D ExperimentalBuild ${CTEST_TESTING_OPTION}
 cd -
```

## Badges

TAs' badge: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/Project-1/branch/main/graph/badge.svg?token=JS6LK1XNFY)](https://codecov.io/gh/Yao-class-cpp-studio/Project-1)

Find your badge from this list:

* ZigZagKmp: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ZigZagKmp/branch/main/graph/badge.svg?token=JH9SsL3rau)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ZigZagKmp)
* 971383129: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-971383129/branch/main/graph/badge.svg?token=PuPx1WvZBJ)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-971383129)
* Fireond: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Fireond/branch/main/graph/badge.svg?token=08CIJYYbPZ)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Fireond)
* huangwux: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-huangwux/branch/main/graph/badge.svg?token=75Ne7LSCLa)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-huangwux)
* BAN-43-32532: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-BAN-43-32532/branch/main/graph/badge.svg?token=VfRBBTaaRf)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-BAN-43-32532)
* C161324: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-C161324/branch/main/graph/badge.svg?token=XmHBYoXV7K)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-C161324)
* csccsru: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-csccsru/branch/main/graph/badge.svg?token=haOI3CiD5o)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-csccsru)
* EDGE-qy: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-EDGE-qy/branch/main/graph/badge.svg?token=HmFdEAfW5o)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-EDGE-qy)
* fdjpg: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-fdjpg/branch/main/graph/badge.svg?token=2zZgrA2tVg)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-fdjpg)
* geometry2021: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-geometry2021/branch/main/graph/badge.svg?token=9pDtTdVqLr)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-geometry2021)
* glecyer: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-glecyer/branch/main/graph/badge.svg?token=l3UXlQEh2h)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-glecyer)
* horipse01: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-horipse01/branch/main/graph/badge.svg?token=UcVLweL3Qj)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-horipse01)
* huang-wj: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-huang-wj/branch/main/graph/badge.svg?token=WCxeJow4Ow)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-huang-wj)
* hwk22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-hwk22/branch/main/graph/badge.svg?token=hNPfXE8Axx)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-hwk22)
* jason-huang03: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jason-huang03/branch/main/graph/badge.svg?token=vmfpIke0gZ)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jason-huang03)
* JasonLannel: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-JasonLannel/branch/main/graph/badge.svg?token=WgmUkwGgcV)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-JasonLannel)
* jiayu-Liu0407: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jiayu-Liu0407/branch/main/graph/badge.svg?token=CnEeX2GWLm)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jiayu-Liu0407)
* jinchen-jiang: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jinchen-jiang/branch/main/graph/badge.svg?token=td2rQytb1Q)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jinchen-jiang)
* jk21lcl: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jk21lcl/branch/main/graph/badge.svg?token=lWwpVVC9NQ)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jk21lcl)
* JohnVictor36: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-JohnVictor36/branch/main/graph/badge.svg?token=c6gcYzzmXg)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-JohnVictor36)
* jojobananana: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jojobananana/branch/main/graph/badge.svg?token=hrnSuDQCNl)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jojobananana)
* jq-zhang22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jq-zhang22/branch/main/graph/badge.svg?token=9BwWqwob2n)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-jq-zhang22)
* kx-zhang22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-kx-zhang22/branch/main/graph/badge.svg?token=xY0paJptvd)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-kx-zhang22)
* lisa045: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-lisa045/branch/main/graph/badge.svg?token=2XSaPUMDbh)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-lisa045)
* liuchuan22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-liuchuan22/branch/main/graph/badge.svg?token=5kSg9X46QL)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-liuchuan22)
* liyitang22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-liyitang22/branch/main/graph/badge.svg?token=Mrt9BQoXZb)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-liyitang22)
* ljc1301: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ljc1301/branch/main/graph/badge.svg?token=crbaVJjB73)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ljc1301)
* LJFYC007: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-LJFYC007/branch/main/graph/badge.svg?token=w6kmC37q2P)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-LJFYC007)
* LMOliver: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-LMOliver/branch/main/graph/badge.svg?token=vx7NEKfUAl)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-LMOliver)
* Megumi-X: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Megumi-X/branch/main/graph/badge.svg?token=K1qafZZYGA)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Megumi-X)
* ninemilewalk: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ninemilewalk/branch/main/graph/badge.svg?token=NjZrf5oJxO)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ninemilewalk)
* pangker7: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-pangker7/branch/main/graph/badge.svg?token=vFmJiOrcFG)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-pangker7)
* ProductiveProfessionalProgrammer: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ProductiveProfessionalProgrammer/branch/main/graph/badge.svg?token=PctWIS8lNM)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ProductiveProfessionalProgrammer)
* PruBlu: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-PruBlu/branch/main/graph/badge.svg?token=XJNXVRuEl8)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-PruBlu)
* QAQAutoMaton: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-QAQAutoMaton/branch/main/graph/badge.svg?token=zraU6baArf)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-QAQAutoMaton)
* RunzeLiang: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-RunzeLiang/branch/main/graph/badge.svg?token=FMuWRHOiun)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-RunzeLiang)
* Ryanzhang887: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Ryanzhang887/branch/main/graph/badge.svg?token=n4J1xDqU7V)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Ryanzhang887)
* RYQ-22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-RYQ-22/branch/main/graph/badge.svg?token=30GzBCxj5K)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-RYQ-22)
* starusc: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-starusc/branch/main/graph/badge.svg?token=LtijUB2yGc)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-starusc)
* su040202: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-su040202/branch/main/graph/badge.svg?token=DlSSuimtJT)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-su040202)
* SUZ-tsinghua: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-SUZ-tsinghua/branch/main/graph/badge.svg?token=1NkCTGK7LN)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-SUZ-tsinghua)
* Sylvia0221: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Sylvia0221/branch/main/graph/badge.svg?token=eKzHGVQtYk)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Sylvia0221)
* tangzhanshuo: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-tangzhanshuo/branch/main/graph/badge.svg?token=bPQ1gO4g2P)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-tangzhanshuo)
* teddyxwx: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-teddyxwx/branch/main/graph/badge.svg?token=vdsNQo8N8i)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-teddyxwx)
* unprintable123: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-unprintable123/branch/main/graph/badge.svg?token=d8PFXOV2Lr)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-unprintable123)
* wanghao-create: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wanghao-create/branch/main/graph/badge.svg?token=wUxgTmoFpW)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wanghao-create)
* wanghm22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wanghm22/branch/main/graph/badge.svg?token=uZuRfECsQY)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wanghm22)
* Wazrrr: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Wazrrr/branch/main/graph/badge.svg?token=MoK9rxlSDj)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Wazrrr)
* Whaooooo: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Whaooooo/branch/main/graph/badge.svg?token=Xs31BPbZLX)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Whaooooo)
* wmj2022: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wmj2022/branch/main/graph/badge.svg?token=NjSeqWRwqM)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wmj2022)
* XiaoxiangRdM: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-XiaoxiangRdM/branch/main/graph/badge.svg?token=A84T1yqQ0U)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-XiaoxiangRdM)
* Xiaoyu1125: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Xiaoyu1125/branch/main/graph/badge.svg?token=DzGE3aE75g)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Xiaoyu1125)
* XieRujian: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-XieRujian/branch/main/graph/badge.svg?token=wDso6tWtC2)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-XieRujian)
* XuGW-Kevin: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-XuGW-Kevin/branch/main/graph/badge.svg?token=kfRtQqHGN3)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-XuGW-Kevin)
* yfllfy: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-yfllfy/branch/main/graph/badge.svg?token=uJjGYwc1hH)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-yfllfy)
* YikaiZheng: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-YikaiZheng/branch/main/graph/badge.svg?token=cFGh2WTkiK)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-YikaiZheng)
* zcszcs522: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zcszcs522/branch/main/graph/badge.svg?token=6hfYiU8smc)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zcszcs522)
* zhengxl0: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhengxl0/branch/main/graph/badge.svg?token=mDQwq0A6qc)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhengxl0)
* zhouxs22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhouxs22/branch/main/graph/badge.svg?token=lPOKLT7rR3)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhouxs22)
* zq-chen22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zq-chen22/branch/main/graph/badge.svg?token=Y4KwMtaQX9)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zq-chen22)
* han-wang19: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-han-wang19/branch/main/graph/badge.svg?token=SnB64UVkHp)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-han-wang19)
* qinchuanhui: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-qinchuanhui/branch/main/graph/badge.svg?token=84347TnCPe)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-qinchuanhui)
* wzjwzjwzjwzjwzj: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wzjwzjwzjwzjwzj/branch/main/graph/badge.svg?token=ml5lh1QGMZ)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-wzjwzjwzjwzjwzj)
* yzc0731: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-yzc0731/branch/main/graph/badge.svg?token=nwcf2OSAAy)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-yzc0731)
* CoffeePot1206: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-CoffeePot1206/branch/main/graph/badge.svg?token=c83NKUCxEp)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-CoffeePot1206)
* cylic14790382: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-cylic14790382/branch/main/graph/badge.svg?token=dwtQDvbDpL)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-cylic14790382)
* h-zhou22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-h-zhou22/branch/main/graph/badge.svg?token=ZFYlXq0MSl)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-h-zhou22)
* Lomiaya: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Lomiaya/branch/main/graph/badge.svg?token=xdSNdaJWhX)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Lomiaya)
* pummmmpkin: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-pummmmpkin/branch/main/graph/badge.svg?token=p8emKZGZZB)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-pummmmpkin)
* sparklist: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-sparklist/branch/main/graph/badge.svg?token=ehsygBAk9y)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-sparklist)
* yangyr22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-yangyr22/branch/main/graph/badge.svg?token=ZgAThLT1lP)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-yangyr22)
* zhang-br22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhang-br22/branch/main/graph/badge.svg?token=mL9kZ4qLPv)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhang-br22)
* beyondwzk666: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-beyondwzk666/branch/main/graph/badge.svg?token=gkf7WWSGZI)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-beyondwzk666)
* skydogli: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-skydogli/branch/main/graph/badge.svg?token=kBy6gUZTnl)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-skydogli)
* sunwc22: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-sunwc22/branch/main/graph/badge.svg?token=4AB9wVgvY9)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-sunwc22)
* the-bucket-rider: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-the-bucket-rider/branch/main/graph/badge.svg?token=Xtlg2hsAZe)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-the-bucket-rider)
* TLLtangling: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-TLLtangling/branch/main/graph/badge.svg?token=pmMy0FhOaE)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-TLLtangling)
* whjhr: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-whjhr/branch/main/graph/badge.svg?token=s6abTTsRNK)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-whjhr)
* xh092113: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-xh092113/branch/main/graph/badge.svg?token=dPPeaoUuly)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-xh092113)
* xyiiiiiii: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-xyiiiiiii/branch/main/graph/badge.svg?token=cMVqSz68nE)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-xyiiiiiii)
* ybweybwe: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ybweybwe/branch/main/graph/badge.svg?token=PjPO7ikrtU)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-ybweybwe)
* zhqwqwq: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhqwqwq/branch/main/graph/badge.svg?token=EhAAiJjnlq)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-zhqwqwq)
* Zixuan-Cao: [![codecov](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Zixuan-Cao/branch/main/graph/badge.svg?token=eyDWBJhdre)](https://codecov.io/gh/Yao-class-cpp-studio/project-1-Zixuan-Cao)

