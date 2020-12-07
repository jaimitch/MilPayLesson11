<template>
  <div>
    <ul>
      <li>Regulations </li>

      <li>Geographic Areas of Responsibility	</li>

      <li>Reserve Pay Systems</li>

      <li>Duty Types</li>

      <li>Orders and Training Types</li>

      <li>Accrued Leave</li>

      <li>USAR Pay Forms</li>

    </ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Learning Objectives'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>