<template>
  <div><ol>
<li>A Soldier is authorized __ travel day(s) when flying CONUS.</li>

<li>For a CONUS move,  __ days of TLE are authorized.</li>

<li>Name four modes of travel</li>
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