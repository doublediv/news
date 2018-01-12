<template>
  <div id="app">
    <v-header v-show="getIsHeader"></v-header>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <v-footer></v-footer>
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
    ...mapGetters(['getIsHeader'])
  },
  mounted() {
    console.log(this.getIsHeader)
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

