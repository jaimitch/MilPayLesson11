<template>
  <div>
    <ul>
      <li>DoDFMR Vol 7A</li>

      <li>JTR</li>

      <li>USAR PAM 37-1</li>

      <li>Reserve Pay Supplemental Guide</li>

      <li>Finance Guide for USAR Soldiers</li>

    </ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Reserve Pay Regulations'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>