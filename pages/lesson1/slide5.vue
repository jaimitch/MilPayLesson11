<template>
  <div>
<ul>
  <li>The main source of military pay entitlements are public laws passed by Congress and signed by the President</li>
  <li>The laws are in the form of U.S. Code and Titles</li>
  <li>All members in a pay status will receive base pay</li>
  <li>Base pay is based on creditable service and pay grade</li>
  <li>Members receive base pay, allowances, incentives, etc. based on entitlement status and other situations</li>

</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: `Understanding Service Members' Entitlements`
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>