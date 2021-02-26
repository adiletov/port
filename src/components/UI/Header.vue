<template>
  <header class="header" :class="{'header-active' : scrollData > 20}">
    <div class="container">
      <ul class="navigation">
        <li>
          <router-link to="/">Главная
            <font-awesome-icon class="icon" icon="hand-point-right" />
          </router-link>
        </li>
        <li>
          <router-link to="/me">Обо мне
            <font-awesome-icon class="icon" icon="hand-point-right" />
          </router-link>
        </li>
        <li>
          <router-link to="/projects">Мои проекты
            <font-awesome-icon class="icon" icon="hand-point-right" />
          </router-link>
        </li>
        <li><a :href="path">Контакты
          <font-awesome-icon class="icon" icon="hand-point-right" />
        </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  data: () => ({
    path: "#contacts"
  }),
  props: [
    "scrollData"
  ],
  watch: {
    $route(to) {
      if (to.name) {
ls
        this.path = "/";
      }
    }
  }
};
</script>
