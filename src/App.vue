<template>
  <div id="app">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo">
        </div>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-menu
          theme="dark"
          mode="horizontal"
          :selectedKeys="[key]"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/todolsit">ToDolist</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/about">About</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <router-view
        :collapsed="collapsed"
      />
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      routeName: "/",
    };
  },
  computed: {
    key: {
      get() {
        if (this.routeName=='/') {
          return "1";
        }
        if (/todolsit/.test(this.routeName)) {
          return "2";
        }
        if (/about/.test(this.routeName)) {
          return "3";
        }
      },
    },
  },
  watch:{
    '$route.path':function (val) {
      this.routeName = val;

    }
  },
  methods: {

  },
};
</script>
<style lang="scss">
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
.trigger {
  width: auto;
  height: auto;
  margin: 16px 28px 16px 0;
  float: left;
  color: white !important;
  font-size: 22px;
  line-height: 31px !important;
}
</style>
