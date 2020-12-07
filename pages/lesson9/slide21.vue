<template>
  <div>
    <ul>
<li>Korea AIP (KAIP) Military Pay E-message 19-078 </li>
<ul><li>The maximum monthly rate payable is $500 made in a lump sum upon approval 24 month extension</li></ul>

<li>Joint Special Operations Command (JSOC) Special Mission Unit (SMU) Military Pay E-message 19-079</li>
<ul><li>Soldiers must sign a written agreement to serve 1 to 3 years in a JSOC SMU Operator assignment</li></ul>

<li>Security Force Assistance Brigade (SFAB)</li>
<ul><li>Must serve at least 12 months in an SFAB the maximum payment is $5,000</li></ul>

</ul>
<p>
<b>Note:</b>  If the Soldier is eligible for more than one AIP, the Soldier will receive the higher of these AIPs.</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Army AIP Programs'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>