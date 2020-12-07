<template>
  <div>
      <h2>DoDFMR Vol 7A Chapter 67</h2>
        <section>
            <ul>
                <li>For members assigned to high-cost areas</li>
                <li>CONUS COLA is based on geographic duty location</li>
                <li>Paid on a monthly rate</li>
                <li>With or w/o dep</li>
                <li>COLA is authorized to assist member in maintaining the purchasing power of the discretionary portion of spendable income while assigned to an CONUS PDS</li>
                <li>Taxable</li>
            </ul>
            <a href="https://www.defensetravel.dod.mil/site/conusCalc.cfm">https://www.defensetravel.dod.mil/site/conusCalc.cfm</a>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'CONUS COLA'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>