<template>
  <div class="hello">
    <!-- 字体大小颜色 -->
    <h1 class="font-semibold text-4xl text-mycolor">{{ msg }}</h1>
    <h3 class="text-pink-300 text-4xl">Installed CLI Plugins</h3>


    <!-- 绝对定位 -->
    <ul class=" absolute top-100">
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>


    <!-- 功能类 -->
    <!-- 这不就是内联样式吗？
      与内联样式相比较的优点：
      1、基于约束的设计，使得构建统一的UI更加容易；
      2、响应式的设计，内联样式中不能使用媒体查询，tailwind可以；
      3、hover、focus以及其他状态，内联样式无法做到
    -->
    <div class="p-6 max-w-sm mx-auto bg-yellow-100 rounded-2xl shadow-2xl flex items-center space-x-10">
      <div class="flex-shrink-0">
        <img class="h-20 w-20" src="../assets/logo.png" alt="VUE Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">Vue</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>


    <!-- hover、focus -->
    <div>
      <button class="m-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      <button style="color: red">Message</button>
    </div>


    <!-- 可维护性问题: 在使用功能优先的方式时，最大的可维护性问题是管理通用的可重复使用的功能类组合。 -->
    <!-- 通过提取组件（通常做为模板片断或者组件），可以解决此问题，也可以使用@apply功能创建抽象的CSS 类 -->
    <!-- <template>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <slot/>
      </button>
    </template> -->
    <button class="btn btn-green">
      Button
    </button>



    <!-- 响应式设计
      要添加一个仅在特定断点生效的功能类，只需要在该功能类前加上断点名称，后面跟 : 字符。
        断点前缀	最小宽度	CSS
        sm	     640px	   @media (min-width: 640px) { ... }
        md	     768px	   @media (min-width: 768px) { ... }
        lg	     1024px	   @media (min-width: 1024px) { ... }
        xl	     1280px	   @media (min-width: 1280px) { ... }
        2xl	     1536px	   @media (min-width: 1536px) { ... }
    -->
    <div class=""> 
      <img class=" inline-block" src="../assets/logo.png" alt="">
      <div class="sm:flex p-10">
        <div class="text-right lg:text-left py-2 w-1/4 h-20 bg-red-500 mx-5">111</div>
        <div class="w-1/4 h-20 bg-amber-400 mx-5">222</div>
        <div class="w-1/4 h-20 bg-lime-400 mx-5">333</div>
        <div class="w-1/4 h-20 bg-cyan-500 mx-5">444</div>
      </div>
    </div>


    <!-- 断点仅包括 min-width 没有 max-width,  在较小的断点上添加的任何功能类都将应用在更大的断点上
        如果只想在一个断点上应用某个功能类，解决方案是在更大的断点上添加另一个功能类，用来抵消前一个功能类的效果。
    -->
    <div class="bg-green-500 md:bg-red-500 lg:bg-green-500">
      111
    </div>


    <!-- 自定义断点 -->
    <div>
      <div class="bg-green-400 ee:bg-red-400">222</div>
      <div class="bg-green-400 hh:bg-red-400">222</div>
      <div class="bg-green-400 zz:bg-red-400">222</div>
    </div>


    <!-- 悬停、焦点和其它状态 -->
    <div class=" m-10 bg-yellow-100 w-500 h-500">
      <form class=" p-20">
        <!-- focus:outline-none focus:ring-2   取消默认的外框线并使用环形边框 -->
        <input class=" mx-5 border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
        <button class="bg-purple-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Sign up
        </button>
      </form>
    </div>

    <!-- 可以在 tailwind.config.js 文件中的 variants 部分控制是否为某个插件启用 hover 变体： -->
    <button class=" bg-yellow-500 w-20 hover:p-5 border border-red-400 focus:border-green-500 active:bg-green-700">hzz</button>


    <!--
      group-hover
      当鼠标悬停在一个指定的父元素上时对其子元素设置样式，给父元素添加 group 类，并且为子元素的功能类添加 group-hover: 前缀。
      -->
    <div class="group border-indigo-500 hover:bg-green-300 hover:shadow-lg hover:border-transparent ...">
      <p class="text-indigo-600 group-hover:text-gray-900 ...">New Project</p>
      <p class="text-indigo-500 group-hover:text-gray-500 ...">Create a new project from a variety of starting templates.</p>
    </div>


    <!-- 
      添加 disabled: 前缀，以便当一个元素被禁用时才应用功能类。

      如果你不需要使用 disabled 变体，而直接在 CSS 中使用 .disabled:opacity-25，
      的确也可以达到同样的效果。但这种写法可能会让你的 HTML 和 CSS 代码耦合更紧密，
      不太符合「内容与表现分离」的设计原则。而如果你使用了 Tailwind CSS 提供的 disabled 变体，
      你的代码就能更加清晰地表达「这个透明度只在元素被禁用时生效」的意义。
     -->
    <button class=" mr-10 bg-green-400 disabled:opacity-50">submit</button>
    <button class="bg-green-400 disabled:opacity-50" disabled>submit</button>

    <!-- first:  last:  odd:   even:
      对于循环生成元素时，特别好用
    -->


    <!-- 与响应式前缀结合使用 -->
    <div>
      <button class="px-10 bg-red-300 hover:bg-yellow-400 sm:hover:bg-green-500">me</button>
    </div>

    <div :class="`bg-orange-500 ${color} hover:${hoverColor}`">222</div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      color: `text-green-400`, 
      // color: 'yellow',
      hoverColor: 'bg-pink-500',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
