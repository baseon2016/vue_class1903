# vue-hello

## vue 项目介绍

###组件

只要后缀名为.vue 的文件都称为组件，可以把组件理解成之前 html 内的某个 div,整个 vue 项目就是由很多小的组件组合的
组件可以复用.组件名称都是大写字母开头

组件内有 3 个标签。

1. `template` (必须):div 的结构
2. `script`
3. `style` :结构的样式

###针对 vue 项目命令创建出来的 vue 项目,改版成一个 hello world

对 src 内的文件进行处理

- 找到 app.vue 删除 template 内的所有内容，添加`<h1>hello world</h1>`,删除 style 内所有内容,删除 script 内部分内容,只留下默认导出对象,以及对象下的 name 属性
- 找到 component 文件夹,直接删除
- 直接去浏览器查看

###写另外一个组件，引入到 App.vue 中

- 在 src 文件夹内新建文件夹 components,里面新建 Button.vue
- 在 App.vue 中 script 标签内的最上方使用默认导入导入你的 Button.vue,在默认导出的对象内添加一个 components 属性,该属性的属性值是一个对象,对象内直接写上导入的组件名
- 在 App.vue 的 template 标签内直接写以组件名为标签名的标签即可,一般写成单闭合标签即可,就相当于使用了组件

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
