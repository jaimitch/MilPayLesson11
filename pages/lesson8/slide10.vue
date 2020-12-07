<template>
  <div>
<ul>
<li>Allotment:  Portion of pay and allowances</li>

<li>Allottee:  To whom allotment is made payable</li>

<li>Allotter:  Service member</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Definitions'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>