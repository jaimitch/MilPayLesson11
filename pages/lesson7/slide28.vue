<template>
  <div>

<img src="../../assets/lesson7/Adv_Pay_Cert.png" style="width:350px">
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Advance Payments Certification / Authorization'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>