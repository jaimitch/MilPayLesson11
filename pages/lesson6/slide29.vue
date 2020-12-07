<template>
  <div>
      <h2>DoDFMR 680309 Table 68-7</h2>
        <section>
            <ul>
                <li>Ordered to AD or ADT from Permanent OCONUS Residence.</li>
                <li>Command Sponsorship not required for W/Dep if in receipt</li>
            </ul>
        </section>
        <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Reserve Component OCONUS COLA'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>