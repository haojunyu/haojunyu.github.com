---
layout:		default
title:		Python里的数据科学之matplotlib实战
category:	[Python,ML,Plt]
comments:	true
date:		2015-12-07 13:46:20
---
这篇和Numpy类似，是用来将matplotlib在日常实践中作的图片作一个总结，方便以后查询上手。


## 简介
Matlplotlib是Python的一个可视化模块。该项目是由John D. Hunter发起的，但却是受Matlab启发构建的，并且有一套完全仿照Matlab函数形式的绘图接口。它让你方便地制作线条图、饼图、柱状图以及其它专业图形。使用Matplotlib，你可以定制所做图表的任一方面。


## 散点图
散点图是 我们最常见的一种图，它一样用来显示数据点在直角坐标系平面上的分布图例。在我们不清楚数据点之间的关系时，常做该图来直观显示数据的分步情况，以便做进一步分析。
* 图例如下：


* 代码解析如下：
    
    ```py
    """
    Simple demo of a scatter plot.
    """
    import numpy as np
    import matplotlib.pyplot as plt
    
    # matplotlib支持中文
    from pylab import mpl
    mpl.rcParams['font.sans-serif'] = ['SimHei'] #指定默认字体
    mpl.rcParams['axes.unicode_minus'] = False # 解决保存图像是符号的‘-’显示为方块的问题
    
    # 构造数据
    N = 50
    x = np.arange(N)
    y1 = np.random.rand(N)*25
    y2 = np.random.rand(N)*25+25


    ## scatter常用参数
    # s[ize]    点的大小
    # c[olor]   点的颜色
    # marker    点的图案
    # alpha     透明度
    # label     图例说明中的标签
    plt.scatter(x, y1, s=10, c='b', marker='+', alpha=0.5，label=‘ClassA’)
    plt.scatter(x, y2, s=10, c='r', marker='.', alpha=0.5，label=‘ClassB’)
    ## X/Y轴的的极限
    xdelt = x.max() - x.min()
    plt.xlim(x.min()-0.1*xdelt,x.max()+0.1*xdelt)
    plt.ylim(0,50)
    ## 添加图例
    plt.legend(loc=‘upper left’，frameon=True)
    ## 图的标题
    plt.title()
    plt.show()
    ```


## section



## 参考文献
1. [matplotlib官网图例][plt_org]
2. [matplotlib源码][plt_git]
3. [matplotlib入门][plt_tour]


[plt_org]: http://matplotlib.org
[plt_git]:  https://github.com/matplotlib
[plt_tour]: http://www.labri.fr/perso/nrougier/teaching/matplotlib/




