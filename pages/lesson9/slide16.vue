<template>
  <div>
    <ul>
<li>Missing or captured - continue HFP/IDP </li>

<li>Hospitalization outside IDP area</li>
<ul>
<li>Wound or injury incurred as a result of hostile action</li> 

<li>In the line of duty, incurs a wound, injury, or illness in a       combat operation or combat zone </li>

<li>Continues up to 3 additional months after illness of injury occurred</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Special Circumstances'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>