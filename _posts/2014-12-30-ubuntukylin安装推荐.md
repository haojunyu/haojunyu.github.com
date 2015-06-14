---
layout:	default
title:	ubuntukylin(64bit)安装推荐
category:	tool
comments:	true
---
在网上经常会看到[安装ubuntu后必做的n件事](http://www.linuxidc.com/Linux/2014-04/100411.htm),不过这些事情都是大众通用的,并不是完全适合自己的.所以本文就是对自己使用ubuntukylin这些年来的记录总结.



## ubuntukylin简介
UbuntuKylin是Ubuntu社区中面向中文用户的Ubuntu衍生版本，与麒麟系统没有关系。它是由工信部软件、集成电路促进中心（CSIP）、国防科技大学（NUDT）与国际著名开源社区UBUNTU的支持公司CANONICAL发起的一款开源社区操作系统项目。

发行版本从13.04开始，其有以下特性  

* Dash中的在线音乐搜索: 更加简单、方便的音乐搜索，帮助用户发现最新、最热的中国流行音乐
* 农历（中国传统历法）： 便于查询传统假日和节气时令的中文日历，包含公历
天气插件：提供来自中国气象局的天气预报信息，为用户日常起居和旅行提供参考
* 中文输入法：默认使用fctix输入法，支持云拼音输入，更加智能的联想功能
* 与WPS合作：提供中国本土办公软件WPS，兼容多种文档格式，具有强大的图形布局功能和丰富的网络资源，文档工作将更加专业和轻松   


## 事后三件事

1. 联网  
	后面所有的操作都依赖于网络。
2. 更新语言包以及软件更新器  
	安装时建议用英语,一方面安装过程更快一些,另一方面保持通用文件夹为英文名(命令行操作更方便快捷).此时更新时需要安装中文语言包，大概有400M左右的应用需要升级到最新。
3. 安装日常所用软件  
	常用软件可以直接在软件中心中查找安装,不过建议是用shell脚本[ubuntukylin_install.sh]({{ site.baseurl }}/assets/attachs/ubuntukylin_install.sh.txt)安装.
	
	1. 浏览器 -- chrome
		（登陆并同步书签&扩展应用等）
在线视频播放插件—adobe flash plugin（配合firefox/chrome浏览器）
64bit系统必备库文件--ia32-libs（让64bit系统支持32应用[必须在安装qq之前安装]）,build-essential(为编译debian包准备-包含很多必备的库文件)
		sudo apt-get install ia32-libs build-essential
		聊天工具—longene QQ
		rhythmbox显歌词--osdlyrics（rhythmbox是系统自带的音乐播放器）
		字典--starDict（stardict添加字典）
		制作u盘启动盘--unetbootin
		压缩工具—7zip
		ftp客户端软件—FileZilla
		文本编辑器--Geany（功能强大）
		视频播放器—VLC media player/SMPlayer（系统自带）
		位图图像处理--Gimp（等价于photoshop）
		矢量图像处理—inkscape
		排版工具—Texmaker(texmaker只是编辑客户端，还需安装texlive-full)
		sudo apt-get install texlive-full
		sudo apt-get install texlive-fonts-recommended
		飞信--
		阿里旺旺--
		网络电视--
		写博客--blogilo（具体安装配置过程）
		大型游戏平台--steam
		编程软件
		c/c++集成环境--code：blocks
		java集成环境—Eclipse
		python集成环境—Idle
		文本编辑器--Vi增强版
		矩阵操作--matlab
		文档管理--doxygen（具体使用方法）
		版本控制--git（具体安装配置过程）
		 
