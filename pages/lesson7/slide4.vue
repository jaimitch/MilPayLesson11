<template>
  <div>
    <ul>
<li>Move from one permanent duty station to another</li>

<li>Transfer from one unit to another </li>

<li>Change of homeport/permanent duty stations of a unit</li>

<li>From home or place ordered to Active Duty (AD)</li>

<li>Last duty station to retirement or separation point/home of record</li>
</ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'PCS Types'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>