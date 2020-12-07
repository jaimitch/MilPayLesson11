<template>
  <div>
    <ul>
<li>Provides travelers an effective, convenient, and commercially available method to pay for expenses related to official travel</li>

<li>Use is mandatory for all personnel (military and civilian) to pay for PCS moves and all official travel costs</li>

<li>Payments streamlined with split disbursement upon arrival to New PDS</li>

<li>No need to use personal funds for mission related travel expenses</li>
</ul>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Government Travel Charge Card (GTCC)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>