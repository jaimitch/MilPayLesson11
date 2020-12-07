<template>
  <div>

<h2>DoDFMR Vol 7A Chapter 42</h2>
<ul>
<li>Discretionary:  Limit of 6</li>
<ul>
<li>Savings Deposit Program</li>
<li>Mortgage or rent payment (not privatized housing)</li>
<li>Dependents, relatives, or divorced spouse</li>
<li>Insurance premiums</li>
<li>Financial organizations</li>
</ul>
<li>Discretionary allotments can continue in retirement</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Discretionary Allotments'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>