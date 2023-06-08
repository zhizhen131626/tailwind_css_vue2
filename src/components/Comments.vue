<template>
	<!-- 最小高度为屏幕高度  bg-back-img: 背景图片 -->
  <main class="min-h-screen p-4 bg-gray-50 bg-back-img">
		<!-- 最大宽度为屏幕尺寸为 xl 的屏幕宽度, 水平居中，内间距，圆角，阴影 -->
    <div class="relative max-w-screen-xl p-8 mx-auto overflow-y-auto bg-white rounded-lg shadow-2xl h-my-h zz:bg-yellow-400">
      <!-- text-center underline no-underline hover:underline -->
      <h2 class="my-6 text-3xl font-bold">评论</h2>
			<!-- 网格布局 grid-cols-2 -->
      <form action="" class="grid">
        <textarea
          name="comment"
          id=""
          placeholder="请输入你的评论"
          class="p-2 rounded bg-gray-50"
        ></textarea>
        <fieldset class="py-4">
          <input
            type="submit"
            value="评论"
            class="px-4 py-1 text-white bg-blue-600 rounded-xxx"
          />
          <input
            type="reset"
            value="取消"
            class="px-4 py-1 ml-3 bg-white border rounded"
          />
        </fieldset>
      </form>
      <!-- 分隔线 -->
      <div class="my-2 mb-4 border-b border-gray-300"></div>
      <div>
        <!-- 留言 -->
        <div class="flex">
        <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
          <img src="../assets/桌面壁纸01.jpg" alt="" class="w-12 h-12 mr-4 rounded-full" />
          <div>
            <p>hzz</p>
            <p class="text-sm text-gray-600">2023-05-05</p>
          </div>
          <!-- 菜单考右对齐 -->
          <span class="ml-auto">
            <img
							src="../assets/桌面壁纸01.jpg"
              class="w-5 h-5 text-gray-500"
            />
          </span>
        </div>
        <p class="py-4 text-gray-600">
          111111111111111111111111111
        </p>
        <!-- 留言列表 -->
        <div class="pl-8 border-l-2 border-gray-200">
          <div class="flex">
            <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
              <img src="../assets/桌面壁纸01.jpg" alt="" class="w-12 h-12 mr-4 rounded-full" />
              <div>
                <p>hzz</p>
                <p class="text-sm text-gray-600">2023-05-06</p>
              </div>
            
              <!-- 菜单考右对齐 -->
              <span class="ml-auto">
                <img
									src="../assets/桌面壁纸01.jpg"
                  class="w-5 h-5 text-gray-500"
                />
              </span>
          </div>
          <p class="py-4 text-gray-600">
            2222222222222
          </p>
        </div>
        <button class="pt-4 text-blue-600">
          回复
        </button>
				<form action="" class="grid mb-4">
          <textarea
            name="comment"
            id=""
            placeholder="请输入你的评论"
            class="p-2 rounded bg-gray-50"
          ></textarea>
          <fieldset class="py-4">
            <input
              type="submit"
              value="评论"
              class="px-4 py-1 text-white bg-blue-600 rounded"
            />
            <input
              type="reset"
              value="取消"
              class="px-4 py-1 ml-3 bg-white border rounded"
            />
          </fieldset>
        </form>
      </div>
			<!-- <h1 class=" bg-mycolor1 pl-8xl">111</h1>
			<h2 class=" bg-mycolor2 pl-8xl">111</h2> -->

			<!-- <img
				src="../assets/桌面壁纸01.jpg"
        class="w-20 h-20 filter-grayscale hover:filter-none"
      /> -->

      <!-- form插件 -->
			<!-- <div class=" form-input">111</div> -->

      <!-- sr-only: 隐藏元素，当最小屏幕为sm时不隐藏 -->
			<!-- <div class="sr-only sm:not-sr-only">111</div> -->

			<!-- <img src="../assets/桌面壁纸01.jpg" class=" w-20 h-20 transform rotate-45 ..."/> -->

			<!-- 
				duration-500: 过渡动画的持续时间为500毫秒
				ease-in-out: 使动画平滑自然
			-->
			<!-- <button class=" rounded  p-3 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...">
				Hover me
			</button> -->

			<!-- 动态类名 -->
			<div :class="` bg-${color}-400 hover:bg-${hoverColor}-400`">
        Hover me
      </div> 

      <!-- <div class="btn-green">111</div> -->

      <!-- <div class="absolute top-10 right-10">position</div> -->
    </div>
  </main>
</template>

<script>
export default {
  name: 'CommentsApp',
  props: {
    msg: String
  },
	data: () => {
    return {
      color: 'pink', 
      hoverColor: 'yellow',
    }
  },
	created() {
		console.log(this.color)
	}
}
</script>

<style>
/* .btn-green {
  @apply text-white bg-green-500 hover:bg-green-700 w-10 h-6 text-center rounded-md;
} */
</style>