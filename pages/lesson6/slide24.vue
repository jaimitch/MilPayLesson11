<template>
  <div>
      <h2>USAR PAM 37-1 CH 3-17(a)(b)</h2>
        <section>
            <ul>
                <li>Table provides rules for OCONUS AD from OCONUS HOR</li>
                <li>3-17(b) provides rules for OCONUS AD from CONUS HOR</li>
            </ul>
        </section>
        <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Effect of Tour Length for Reserve OHA'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>