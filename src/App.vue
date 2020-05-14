<template>
  <div id="app" class="biggbox">
    <!-- 在中部 -->
    <!-- 第一次 -->
    <!-- 第二次develop上 -->
    <!-- 第三次develop上 -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import '../src/assets/css/core.css'
import '../src/assets/css/home.css'
import '../src/assets/css/icon.css'
export default {
  data() {
    return {
      active: 0
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.biggbox{
  padding-bottom:50px;
  overflow: hidden;
}
.v-enter,
.v-leave-to{
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.2s linear;
}
</style>
