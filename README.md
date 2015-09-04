# 目录结构:
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── assets
|   └── images/2009-04-26-barcamp-boston-4-roundup_url.png
|   └── attach/2009-04-26-barcamp-boston-4-roundup_project.zip
├── _site
└── index.html

# 文件/目录功能
_config.yml 保存配置数据
_drafts	    保存未发布的文章
_includes   加载部分到你的布局或者文章中以方便重用.可以用{% include file.ext %}来把_includes/file.ext包含进来
_layouts    包裹在文章外部的模板.布局可以根据博文开头进行选择.
_posts	    保存博文的地方.博文命名规则必须是YEAR-MONTH-DAY-title.md
_data	    存放站点数据.jekyll会自动加载yml文件.
assets	    存放引用文件-图片/附件等的目录
_site	    一但jekyll完成转换,会将生成的页面放在这里.最好将这个目录放进.gitignore文件中.
index.html  博客的首页

# 博文头信息变量
layout	    指定模板文件
published   指定博文是否发布
category    指定博文类别
tags	    指定博文标签,以空格隔开


