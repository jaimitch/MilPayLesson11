<template>
  <div>
<h2>DoDFMR Vol 7A Chapter 19</h2>
<ul>
<li>Qualified in a specialty requiring foreign language</li>

<li>Received training under regulations prescribed by the  Secretary concerned</li>

<li>Assigned duties requiring proficiency in a foreign language
</li>
<li>Proficient in a foreign language identified as critical need (Strategic Language List as determined by SecDef)</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Foreign Language Proficiency Bonus (FLPB)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>