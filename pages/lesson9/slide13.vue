<template>
  <div>
<ol>
<li>Anchorage, Alaska is authorized $____ per month for HDP-L.
     DoDFMR Vol 7A Figure 17-1</li>
<li>Bahrain is authorized $_____ per month for HDP-L.</li>
    <li>Uganda is authorized $____ per month for HDP-L.</li>
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