<template>
  <div>

<h2>DoDFMR Vol 7A Chapter 42</h2>
<ul>
<li>Effective January 1, 2015</li>

<li>Policy prohibits starting new allotments to purchase, lease, or rent personal property</li>

<li>Current allotment payments will continue under a “grandfathering” provision</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Policy Change'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>