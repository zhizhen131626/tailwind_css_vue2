/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
module.exports = {
  // 预设：允许您指定自己的自定义基本配置，而不是使用 Tailwind 的默认基本配置。
  // presets: [
  //   require('./tailwind-preset')
  // ],
  // 从CSS文件中删除未使用的样式，以减小最终的文件大小
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 内容：是配置所有 HTML 模板、JS 组件和任何其他包含 Tailwind 类名称的文件的路径的地方。
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 主题：是您定义调色板、字体、字体比例、边框大小、断点的地方——任何与站点视觉设计相关的内容。
  theme: {
    // 颜色
    // colors: {
    //   'mycolor': '#abcdef',
    // },
    extend: {
      colors: {
        'mycolor1': '#abcdef',
        'mycolor2': 'green',
      },
      spacing: {
        '8xl': '9rem',
        '9xl': '128rem',
        'my-h': '50rem'
      },
      borderRadius: {
        'xxx': '2rem',
      },
      backgroundImage: {
        'back-img': "url('/src/assets/桌面壁纸01.jpg')",
      },
      containers: {
        'xxx': '600px',
      },
    },
    // 默认断点的设置来自于常见的设备分辨率。
    // screens: {
    //   'hh': '875px', // 屏幕名称  断点开始的地方
    //   // => @media (min-width: 875px) { ... }
    //   'ee': {'max': '539px'},
    //   // => @media (max-width: 539px) { ... }
    //   'zz': {'min': '640px', 'max': '767px'},
    // },
  },
  // 可以使用 "@responsive" 指令来创建自己的响应式 "variants"，并使用它来实现基于窗口大小的样式变化效果。
  variants: {
    // display: ['responsive', 'hover', 'focus', 'active'],
    // 表示 padding 属性仅在鼠标悬停时生效。这意味着在鼠标悬停在元素上时，将会应用新的 padding 值。
    // 列表末尾的变体将优先于列表开头的变体
    extend: {
      borderColor: ['focus', 'hover'],
      backgroundColor: ['hover', 'focus'],
    }
  },
  // darkMode: 'media',
  // 插件：允许向 Tailwind 注册插件，这些插件可用于生成额外的实用程序、组件、基本样式或自定义变体。
  plugins: [
    // 官方插件
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'), // 创建响应式的宽高比
    require('@tailwindcss/container-queries'), // 容器查询，根据容器的尺寸来调整元素的样式
    require('@tailwindcss/typography'), // 增强排版风格

    // 通过 编写插件 并使用 addBase 函数来添加基础样式：
    // plugin(function({ addBase, theme }) {
    //   addBase({
    //     'h1': { fontSize: '12px', color: 'red' },
    //     'h2': { fontSize: theme('fontSize.2xl') },
    //     'h3': { fontSize: theme('fontSize.lg') },
    //   })
    // })
  ],

  // 字首：允许您向所有 Tailwind 生成的实用程序类添加自定义前缀。当在可能存在命名冲突的现有 CSS 之上分层 Tailwind 时，非常有用
  // prefix: 'tw-',

  // 禁用
  corePlugins: {
  //  backgroundImage: false,
  }
}
