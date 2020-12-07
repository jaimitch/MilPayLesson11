<template>
  <div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Permanent Change of Station (PCS) Entitlements'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>