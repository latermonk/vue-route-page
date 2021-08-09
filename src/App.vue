<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-link class="list-group-item" active-class="active" to="/page1">page1</router-link>
    <br>

    <router-link class="list-group-item" active-class="active" to="/page2">page2</router-link>

  </div>

<!--  <div class="row">-->
<!--    <div class="col-xs-2 col-xs-offset-2">-->
<!--      <div class="list-group">-->
<!--        &lt;!&ndash; 原始html中我们使用a标签实现页面的跳转 &ndash;&gt;-->
<!--        &lt;!&ndash; <a class="list-group-item active" href="./about.html">About</a> &ndash;&gt;-->
<!--        &lt;!&ndash; <a class="list-group-item" href="./home.html">Home</a> &ndash;&gt;-->

<!--        &lt;!&ndash; Vue中借助router-link标签实现路由的切换 &ndash;&gt;-->
<!--        <router-link class="list-group-item" active-class="active" to="/about">About</router-link>-->
<!--        <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col-xs-6">-->
<!--      <div class="panel">-->
<!--        <div class="panel-body">-->
<!--          &lt;!&ndash; 指定组件的呈现位置 &ndash;&gt;-->
<!--          <router-view></router-view>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
