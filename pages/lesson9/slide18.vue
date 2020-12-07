<template>
  <div>
    <ol>
<li>The country of Chad is authorized IDP in airspace:       
True or False</li>

<li>Iraq was authorized IDP on ____________
DoDFMR Vol 7A Figure 10-1</li>
</ol>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check on Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>