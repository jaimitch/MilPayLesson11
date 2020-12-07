<template>
  <div>
<h2>Terminology</h2>
<ul>
<li>Army:  Pay Entry Basic Date </li>
<li>Navy/Marine Corps:  Pay Entry Base Date </li>
<li>Air Force:  Pay Date</li>
</ul>
<h2>Determination of Basic Pay</h2>
<ul>
<li>Longevity</li>
<li>Pay Grade</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Basic Pay 101'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>