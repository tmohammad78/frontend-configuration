<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    This is App vue hello {{ username }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  props: {
    username: "",
  },
  computed: {
    updateUsername: {
      get() {
        return this.username;
      },
      set(value) {
        this.setValue(value);
      },
    },
  },
  methods: {
    setValue(value) {
      this.$emit("", value);
    },
  },
  mounted: () => {
    window.addEventListener("message", (event) => {
      if (event?.detail && event.detail.action === "auth") {
        console.log(event.detail.value.username);
        this.username = event.detail.value.username || "";
      }
    });
  },
};
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
