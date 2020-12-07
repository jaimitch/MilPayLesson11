<template>
  <div>
<h2>DoDFMR Vol 7A 010203</h2>

<h2>O-1E, O-2E, O-3E</h2>
<ul>
<li>May 20, 1958:  Over 4 years prior active enlisted service</li>

<li>September 1, 1980:  Over 4 years prior active warrant officer service</li>

<li>October 1, 1993:  Over 4 years prior active enlisted and warrant officer service</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Enlisted to Officer'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>