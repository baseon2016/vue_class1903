## vue 项目介绍

###组件

只要后缀名为.vue 的文件都称为组件，可以把组件理解成之前 html 内的某个 div,整个 vue 项目就是由很多小的组件组合的
组件可以复用.组件名称都是大写字母开头，或大驼峰方式,如 HeaderTop

组件内有 3 个标签。

1. `template` (必须):div 的结构
2. `script`
3. `style` :结构的样式

###安装环境

使用官方提供的脚手架 vue cli,版本是 3.x

- 使用命名`npm i -g @vue/cli`全局安装一个 vue 命令
- 使用`vue create projectName`新建一个 vue 项目了

###针对 vue 项目命令创建出来的 vue 项目,改版成一个 hello world

对 src 内的文件进行处理

- 找到 app.vue 删除 template 内的所有内容，添加`<h1>hello world</h1>`,删除 style 内所有内容,删除 script 内部分内容,只留下默认导出对象,以及对象下的 name 属性
- 找到 component 文件夹,直接删除
- 直接去浏览器查看

###写另外一个组件，引入到 App.vue 中

- 在 src 文件夹内新建文件夹 components,里面新建 Button.vue
- 在 App.vue 中 script 标签内的最上方使用默认导入导入你的 Button.vue,在默认导出的对象内添加一个 components 属性,该属性的属性值是一个对象,对象内直接写上导入的组件名
- 在 App.vue 的 template 标签内直接写以组件名为标签名的标签即可,一般写成单闭合标签即可,就相当于使用了组件

##Vue 基础语法

###vue 模板语法

vue 允许在 template 内写 js

- 在两个标签中间,使用`{{js语法}}`,这个 js 必须有返回值
- 在开始标签内,需要使用指令 v-on 例如下

```js
<h1 v-bind:class="js语法" />
//v-bind: 指令可以简写成   :
```

###class 与 style 绑定

vue 处理组件样式的方案

####class 的绑定

- 对象语法 例: 加上 active class

```js
<h1 v-bind:style="{color:'red',fontSize:'16px'}" />
```

- 数组语法 例：加上了 active 以及 bg class 名

```js
<h1 v-bind:class="[true ? 'active' : '','bg']" />
```

- 原始语法 例:加上了 active

```js
<h1 v-bind:class="true ? 'active' : 'bg'" />
```

####style 的绑定

- 对象语法 例:

```js
<h1 v-bind:class="{active:true}" />
```

- 数组语法 例：

```js
<h1 v-bind:style="[styles,customStyles]" />
//styles 和customStyles都是对象,像:{color:'red'}
```

####vue 组件的 data(state)

只要是页面发生变化必须通过控制 data 的改变来实现

- 如何创建一个 data,在组件导出的对象下,添加一个属性 data,该属性的属性值是一个函数,该函数必须返回一个对象,对象内写的就是组件的数据
- 创建好的 data 可以直接在组件的 template 内使用
- 创建好的 data 在其他地方使用需要添加 this.xxx
- 想要修改 data 直接对属性重新赋值即可

####vue 组件的事件处理

使用 v-on 指令绑定事件 可以简写成@ 例

```js
<button v-onclick="funName">按钮</button>
```

事件函数(funName)需要在组件默认导出下添加一个 methods 属性,该属性的属性值是一个对象,该对象下的方法就可以当做事件函数。在 template 内 methods 对象下的方法可以直接使用
methods 的函数内只要使用了 this 那么就不能使用箭头函数,只能写成普通函数

####条件渲染

页面中某个元素的出现或消失

1. none --- flex|block|inline-block|inline，需要 v-show 指令,例

```js
<div v-show="参数" class="box" />
// 如果参数值为false的话，div消失，true的话出现
```

2. 元素在页面中 remove 或者 create,需要使用指令 v-if,一般搭配使用 v-else 例

```js
<div v-if="showBox1" class="box1"></div>
<div v-else class="box2"></div>
```

v-if 和 v-else 必须紧挨着,作为兄弟结构

####列表渲染

我们页面展示的内容(列表内容),一般都是获取后台数据，将后台数据处理生生页面中的结构。后台的数据一般都是 array。
v-for 经常搭配 v-if 使用,等待后台数据的过程此时展示 gif 图
在 vue 中实现列表渲染直接使用 v-for 指令 例子
template

```html
<div class="goods" v-for="(cart,index) in carts" :key="cart.id">
  <span>名称: {{cart.goodsName}}</span>
  <span>索引值: {{index}}</span>
</div>
```

v-for 生成的标签必须加上 key 属性，属性值保证不重复。跟 vue 底层处理虚拟 dom 有关。一般来说 key 的值都是后台数据的 id 的值

script

```js
data() {
    return {
      carts: [
        {
          id: "xdg12",
          goodsName: "mac book pro",
          price: 12000,
          num: 1
        },
        {
          id: "djashg12",
          goodsName: "奥迪A8",
          price: 1200000,
          num: 1
        }
      ]
    };
  ...
```

#### 错误提示

- `<Dem> - did you register the component correctly?`
- `Failed to compile.` 编译失败 `Module not found: Error: Can't resolve './components/Dem' in 'D:\digitalcity授课\2019\1903\1903\vue-demo\src'`
