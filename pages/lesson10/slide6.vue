<template>
  <div>
        <section>
            <ul>
                <li>Service in a combat zone or qualified area (illness/wounds, captured by enemy, missing, leave)</li>
                <li>All enlisted member and warrant officers pay</li>
                <li>Officers: highest enlisted pay (based on SMA) plus HFP/IDP ($225)</li>
                <li>In direct support of CZTE operations</li>
                <li>Area must be designated (land, sea, air)</li>
                <li>Tax exclusion does not apply when in CZTE area for mere convenience (leave)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Combat Zone Tax Exclusion (CZTE)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>