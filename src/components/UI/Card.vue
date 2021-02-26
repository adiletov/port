<template>
  <div>
    <p>
      {{ title }}
    </p>
    <ul class="card-list">
      <li v-for="(item, idx) in skills" :key="idx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    "title", "skills"
  ]
};
</script>
