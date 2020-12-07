<template>
  <div>

<li>Paid up to 60 days upon arrival</li>

<li>Reviewed after 15 days or local policy</li>

<li>Does not need to be consecutive (TDY, hospital, etc.)</li>

<li>Additional periods of authorization</li>
<ul>
<li>Delay in availability of GOV’T QTRS</li>

<li>Unable to secure private sector housing that the housing officer considers suitable</li>

<li>Non-arrival of HHG</li>
</ul>




  </div>
</template>

<script>

export default {
  data() {
    return {
      title: ' TLA Con\'t.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>