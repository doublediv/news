<template>
  <div class="content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="@/assets/images/img_1.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="@/assets/images/img_2.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="@/assets/images/img_3.jpg" alt="" /></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="newsList">
      <ul>
        <router-link tag="li" v-for="item in newList" :to="'/article/'+item.id" :key="item.id">
          <a href="javascript:;">
            <h2>{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newList: []
    };
  },
  mounted() {
    this.banner();
    this.getNewData();
  },
  methods: {
    banner() {
      $(function() {
        var swiper = new Swiper(".swiper-container", {
          speed: 300,
          autoplay: {
            delay: 3000
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      });
    },
    getNewData() {
      this.$http
        .get("/api/index")
        .then(res => {
          // console.log(res)
          this.newList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style src="@/assets/css/swiper.min.css">

</style>
<style>
.swiper-container {
  margin-top: 0.6rem;
  width: 100%;
  height: auto;
}
.swiper-slide {
  text-align: center;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
}
</style>


