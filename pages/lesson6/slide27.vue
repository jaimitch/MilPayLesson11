<template>
  <div>
      <h2>DoDFMR 670601 Table 67-9/Table 67-10, USAR PAM 37-1, CH 3-19</h2>
        <section>
            <ul>
                <li>USAR, ARNG, DoD and U.S. Coast Guard (R) called to AD rules</li>
                <li>Perm. Duty Station when PCS or Primary Residence (PR)on TDY</li>
                <li>Amended days + remaining days may authorize COLA</li>
            </ul>
        </section>
        <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Reserve Component CONUS COLA'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>