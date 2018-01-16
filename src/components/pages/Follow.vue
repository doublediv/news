<template>
  <div class="content">
    <div class="newsList">
      <ul>
        <router-link tag="li" v-for="(item, index) in followList" :to="'/article/'+item.id" :key="index">
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
      followList: []
    };
  },
  mounted() {
    this.getFollowData();
  },
  methods: {
    getFollowData() {
      this.$http
        .get("/api/follow")
        .then(res => {
          //   console.log(res)
          this.followList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.newsList{
    margin: 0.6rem 0;
}
</style>


