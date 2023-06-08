<template>
	<!-- 最小高度为屏幕高度 -->
  <main class="p-4 bg-gray-50 min-h-screen bg-back-img">
		<!-- 最大宽度为屏幕尺寸为 xl 的屏幕宽度, 水平居中，内间距，圆角，阴影 hidden: 隐藏 -->
    <div class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
      <h2 class="text-3xl my-6">评论</h2>
			<!-- 网格布局 -->
      <form action="" class="grid">
        <textarea
          name="comment"
          id=""
          placeholder="请输入你的评论"
          class="bg-gray-50 p-2 rounded"
        ></textarea>
        <fieldset class="py-4">
          <!-- 渐变色： bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 -->
          <input
            type="submit"
            value="评论"
            class="px-4 py-1 bg-blue-600 rounded text-white"
          />
          <input
            type="reset"
            value="取消"
            class="px-4 py-1 bg-white rounded border ml-3"
          />
        </fieldset>
      </form>
      <!-- 分隔线 -->
      <div class="border-b border-gray-300 my-2 mb-4"></div>
      <div>
        <!-- 留言 -->
        <div class="flex">
        <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
          <img src="../assets/桌面壁纸01.jpg" alt="" class="w-12 h-12 mr-4 rounded-full" />
          <div>
            <p>hzz</p>
            <p class="text-gray-600 text-sm">2023-05-05</p>
          </div>
          <!-- 菜单考右对齐 -->
          <span class="ml-auto">
            <img
							src="../assets/桌面壁纸01.jpg"
              class="h-5 w-5 text-gray-500"
            />
          </span>
        </div>
        <p class="text-gray-600 py-4">
          111111111111111111111111111
        </p>
        <!-- 留言列表 -->
        <div class="pl-8 border-l-2 border-gray-200">
          <div class="flex">
            <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
              <img src="../assets/桌面壁纸01.jpg" alt="" class="w-12 h-12 mr-4 rounded-full" />
              <div>
                <p>hzz</p>
                <p class="text-gray-600 text-sm">2023-05-06</p>
              </div>
            
              <!-- 菜单考右对齐 -->
              <span class="ml-auto">
                <img
									src="../assets/桌面壁纸01.jpg"
                  class="h-5 w-5 text-gray-500"
                />
              </span>
          </div>
          <p class="text-gray-600 py-4">
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
            class="bg-gray-50 p-2 rounded"
          ></textarea>
          <fieldset class="py-4">
            <input
              type="submit"
              value="评论"
              class="px-4 py-1 bg-blue-600 rounded text-white"
            />
            <input
              type="reset"
              value="取消"
              class="px-4 py-1 bg-white rounded border ml-3"
            />
          </fieldset>
        </form>
      </div>
			<!-- <h1 class=" bg-mycolor1 pl-8xl">111</h1>
			<h1 class=" bg-mycolor2 pl-8xl">111</h1> -->

			<!-- <img
				src="../assets/桌面壁纸01.jpg"
        class=" w-20 h-20 filter-grayscale hover:filter-none"
      /> -->

			<!-- <div class=" form-input">111</div> -->

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
			<!-- <div :class="`bg-${color}-300 hover:bg-${hoverColor}-500 hover:underline text-right text-green-400`">
        Hover me
      </div>  -->

      <!-- 自定义类 -->
      <!-- <div class="btn">点击</div> -->

      <!-- 兼容组件库 -->
      <!-- <el-button class=" bg-purple-500 text-white">点击</el-button> -->

    </div>
  </main>
</template>

<script>

export default {
  name: 'CommentsApp',
  components: {
  },
  props: {
    msg: String
  },
	data: () => {
    return {
      color: 'orange', 
      hoverColor: 'lime',
    }
  },
	created() {
		console.log(this.color)
	}
}
</script>

<style>
/* .btn {
  @apply w-16 px-4 py-1 bg-blue-600 rounded text-white
} */
</style>