<template>
  <div>
<ul>
<li>Must be temporary place of residence</li>

<li>Must be in the vicinity of old/new PDS or designated place</li>

<li>Allowed if assigned quarters are not occupied because</li>
<ul><li>Awaiting HHG shipment </li>
<li>Government quarters are undergoing repair/renovation</li>
<li>HHG have been packed, picked up and/or shipped</li></ul>

<li>Lodging with friend or relatives not reimbursable</li>
<ul><li>Meal and Incidental (M&IE)</li></ul>

<li>Lodging receipts required</li>

<li>Member married to member</li>
<ul><li>Both may not claim same dependents for same days</li>
<li>Member may not claim other member</li></ul>
</ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'TLE Rules of Entitlements	'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>