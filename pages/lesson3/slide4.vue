<template>
  <div>
    <h2>Readiness Division (RD) Finance Contacts</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Geographic Areas of Responsibility'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>