<template>
  <div id="app">
    <v-header v-show="getIsHeader"></v-header>
    <transition name="fade" mode="out-in">
      <keep-alive v-if="$route.meta.isKeepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.isKeepAlive"></router-view>
    </transition>
    <v-footer></v-footer>
    <loading v-show="getIsLoading"></loading>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    vHeader: Header,
    vFooter: Footer
  },
  computed: {
    ...mapGetters(["getIsHeader", "getIsLoading"])
  },
  mounted() {

    // 刷新
    this.showHeader(this.$route.meta.isHeader);
  },
  watch: {
    $route(to) {
      // 路由跳转
      this.showHeader(to.meta.isHeader);
    }
  },
  methods: {
    ...mapActions(["HIDE_HEADER", "SHOW_HEADER"]),
    showHeader(isHeader) {
      if (isHeader) {
        this.SHOW_HEADER();
      } else {
        this.HIDE_HEADER();
      }
    }
  }
};
</script>

<style src="@/assets/css/base.css" >

</style>
<style src="@/assets/css/index.css">

</style>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

