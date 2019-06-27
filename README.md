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
- 在开始标签内,需要使用指令 v-bind 例如下

```js
<h1 v-bind:class="js语法" />
//v-bind: 指令可以简写成   :
```

###class 与 style 绑定

vue 处理组件样式的方案

####class 的绑定

- 对象语法 例: 加上 active class

```js
<h1 v-bind:class="{active:true}" />
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
<h1 v-bind:style="{color:'red',fontSize:'16px'}" />
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
<button v-on:click="funName">按钮</button>
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

####vue 组件的 prop

组件的复用:小的组件在大组件中反复使用,需要父组件传递对应的信息给子组件。如何传递就需要使用 vue 组件 prop。如何使用 prop

- 在 父组件内使用子组件的时候,可以给子组件创造属性(相当传递的数据),例如 Header 组件内写成`<Button text='登录'/>`
- 在子组件内的默认导出对象可以添加一个 prop 属性,用来获取父组件传递过来的属性,该属性的值是一个数组(也可以是一个对象),数组内写父组件创造的属性名 例

```js
export default {
  name: "btn",
  props: ["text"]
};
```

写好后,text 就相当于子组件的一个数据

- prop 可以设置默认值,直接在子组件内判断即可 例

```js
<button class='btn'>{{text?text:'默认按钮'}}</button>
```

- 设置 prop 默认值,还有一种方法,需要把 prop 的属性值写成对象类型,对象下的属性就代表父组件传递过来的属性,该属性的属性值需要写成对象类型,该对象可以有 type default...属性 type 属性意思是父组件传递过来的值的类型,default 属性代表的是默认值,validator 代表检测父组件传递过来的值是否满足条件，该属性需要写成一个函数，并返回一个布尔值

####组件的自定义事件

父组件给子组件绑定自定义事件(父组件向子组件传递函数)

- 在父组件内使用 @自定义事件名='父组件函数'
- 在子组件内使用`$emit('自定义函数名')` 接收
- 假如父组件的函数定义的时候写了参数，那么子组件调用的时候就需要传参，如何使用`$emit('自定义函数名','参数1','参数2')`
  例

```html
父组件 <button type="signup" text="注册" @handleSignup="signup" />
```

```js
子组件
this.$emit("handleSignup");

子组件在template内直接使用\$emit('自定义事件名')
```

#### 插槽

当父组件想向子组件传递一些 HTML 结构让子组件展示，喜是需要使用插槽，如何使用：

- 在父组件内将需要展示的 html 机构写到子组件闭合标签内部，例如

```js
<Modal title="对话框" onCancel="取消" onConfirm="确定">
  <span>123456</span>
</Modal>
```

- 在子组件内使用 slot 标签接收父组件传递过来的 html 结构，例如

```js
<div class="modal-main">
  <slot />
</div>
```

插槽可以添加名称，称为具名插槽。(作用就是将父组件传递过来的 html 结构，按需处理，有的结构放在 header，有的结构放在 footer)

- 在父组件内的子组件闭合标签内,使用 template 标签嵌套某个 html 结构,并且给该 template 标签写上 v-slot:名
- 在子组件内使用<slot name='父组件内template标签v-slot的值'></slot>

#### 组件之间的交互
（爸爸控制儿子的变化使用，props属性。儿子自己控制自己的变化使用，data,methods属性。儿子控制爸爸的变化使用，自定义事件由爸爸传递给儿子。爸爸获取儿子的内部的value等值并不改变它，由自定义事件的传参传递）
- 父组件和子组件的交互
  - prop（改变子组件属性）
  - 组件自定义事件（子组件使用父组件的事件）
  
- 子组件和父组件之间的交互
  子组件修改父组件的状态(data)，先在父组件内声明修改自己 data的方法，把方法传递给子组件即可
  - 组件自定义事件

- 兄弟组件之间的交互
  - 将需要交互的data定义在共同的祖先内
  - 兄弟组件的交互，转化为父与子，子与父的交互

- vueX 终极解决方案

#### 表单操作

#### vue组件的计算属性computed
当你有了一个data,但是使用的时候不是直接使用data数据，而是使用data数据的变形，此时需要定义一个computed,computed的用法和data一样
```js
computed: {
    number() {
      return this.comments.length;
    },
    commentsR() {
      //reverse 方法会修改原数组，多次添加会顺序错乱
      //复制原数组，在进行倒叙
      // 复制对象的方法，js(obj.assign)  jq(.extends)
      //es6扩展运算符([...array],{...obj})
      return [...this.comments].reverse();
    }
  },
```
#### 插件使用
- shortid 简短id,生成不重复的id
- npm i shortid
- import 引入
- 使用

#### vue组件的动画和过渡
transition和 transition group

#### vue 的路由
vue 项目内的页面跳转,本身vue不带路由功能
npm i vue-router

#### 错误提示

- `<Dem> - did you register the component correctly?`
- `Failed to compile.` 编译失败 `Module not found: Error: Can't resolve './components/Dem' in 'D:\digitalcity授课\2019\1903\1903\vue-demo\src'`
