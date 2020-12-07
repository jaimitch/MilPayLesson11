<template>
  <div>
<h2>Authorized</h2>
<ul>
<li>CONUS travel entitlement</li>
<li>Before departure from old PDS</li>
<li>Upon arrival at new PDS</li>
<li>House hunting after arrival at new PDS</li>
<li>PCS orders cancelled after occupying temporary quarters</li>
<li>While awaiting quarters assignment or living arrangements</li>
</ul>
<h2>Not Authorized</h2>
<ul>
<li>Leaving AD</li>
<li>House hunting trip taken before arrival at new PDS</li>
<li>Dependents acquired after effective date of PCS</li>
<li>Dependents return to CONUS prior to issuance of PCS orders</li>
</ul>


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'TLE Con\'t.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>