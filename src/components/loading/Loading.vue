<template>
  <div class="loader">
    <div class="loader-inner ball-zig-zag">
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
.loader {
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}

@keyframes ball-zig {
  33% {
    transform: translate(-15px, -30px);
  }

  66% {
    transform: translate(15px, -30px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes ball-zag {
  33% {
    transform: translate(15px, 30px);
  }

  66% {
    transform: translate(-15px, 30px);
  }

  100% {
    transform: translate(0, 0);
  }
}
.ball-zig-zag {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-75%, -75%);
}
.ball-zig-zag > div {
  background-color: rgba(0, 0, 0, 0.5);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.ball-zig-zag > div:first-child {
  animation: ball-zig 0.7s 0s infinite linear;
}
.ball-zig-zag > div:last-child {
  animation: ball-zag 0.7s 0s infinite linear;
}
</style>
