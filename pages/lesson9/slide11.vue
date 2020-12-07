<template>
  <div>
<h2>DoDFMR Vol 7A 170202</h2>
<ul>
<li>Perform duty in a remote, isolated area for specified mission</li>

<li>Rate is $150 per month payable at full monthly rate</li>
<ul>
<li><b>Not prorated</b></li>
</ul></ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'HDP-M'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>