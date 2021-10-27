# 自制简历生成器

## 介绍

此项目是由 vue3 + vuex4 构建的简历生成器，具有如下几个特点：

- 可通过输入框将内容写入简历中，还有多种**主题样式**及其**颜色**可供用户选择，为求职者们提供更加自定义的简历生成过程；
- 写好简历内容后，点击**打印简历**按钮即可将简历下载保存至本地，操作简单生成快速，有pdf文件或jpg文件两种格式供用户选择；
- 未写完的简历内容可以点击**保存数据**暂时保存为json文件并下载，可在下一次使用时通过点击**上传数据**按钮，将保存的数据导入生成器继续编写

## 在线使用

在线使用地址：[https://eddievandeer.github.io/resume/](https://eddievandeer.github.io/resume/)

国内用户可访问(不会被墙): 

[https://resume-eddievandeer.vercel.app/](https://resume-eddievandeer.vercel.app/) 或 [https://resume-inky-one.vercel.app/](https://resume-inky-one.vercel.app/)

## 本地使用

### 克隆项目

```bash
# 使用HTTPS方式
git clone https://github.com/eddievandeer/resume.git

# 或者使用SSH方式
git clone git@github.com:eddievandeer/resume.git
```

### 启动服务

进入项目目录后运行如下指令：

~~~bash
# 安装依赖
npm install

# 启动本地服务
npm run start
~~~

