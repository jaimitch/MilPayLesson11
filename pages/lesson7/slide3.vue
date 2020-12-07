<template>
  <div>
<ul>
<li>A transfer or assignment of a military member from one location to another, either CONUS or OCONUS</li>

<li>Why do we PCS?</li>
<ul>
<li>Enhance national security</li>
<li>Compassionate reassignments </li>
<li>Equitable treatment</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Definition'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>