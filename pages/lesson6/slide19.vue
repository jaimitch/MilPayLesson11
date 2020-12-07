<template>
  <div>
      <h2>DoDFMR Vol 7A 261010</h2>
        <section>
            <ul>
                <li>Temporary housing allowance paid while a member is in a travel or leave status between PDS (OCONUS to CONUS and OCONUS to OCONUS),
                      provided the member is not assigned to Gov’t QTRS</li>
                <li>Transit rate continues during the proceed time and authorized delays enroute, including TDY enroute (OCONUS not including Hawaii or Alaska)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BAH-Transit'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>