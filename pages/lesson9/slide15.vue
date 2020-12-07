<template>
  <div>

<li>Entitlement Provisions</li>
<ul>
<li>On duty in an area of close proximity of hostile fire incident where member is in danger of being expose</li>
<li>Not to exceed a monthly rate of $225</li>
<li>Prorated daily</li>
<li>Payable when a member is on official duty in a designated IDP area (Figure 10-1) </li>
<ul><li>Land</li>
<li>Air</li>
<li>Sea</li></ul>
<li>Payable for any month or portion, when qualified</li>
</ul>
<li>Documentation</li>
<ul>
<li>Orders/Manifest/DA4187 </li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Imminent Danger Pay (IDP)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>