<template>

  <a-layout>
    <a-layout-sider
      width="200"
      style="background: #fff"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <a-menu
        mode="inline"
        theme="dark"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :selectedKeys=[key]
        :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="user" /><span v-show="!collapsed">项目</span>
          </span>
          <a-menu-item key="1">
            <router-link to="/todolsit">ToDoList</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/todolsit/test">测试</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Todolsit</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>
export default {
  name: "ToDoList",
  props: ["collapsed"],
  data() {
    return {};
  },
  computed: {
    key() {
      if (/test/.test(this.$route.path)) {
        return "2";
      } else {
        return "1";
      }
    },
  },
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>