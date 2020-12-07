<template>
  <div>
<ol>
<li>A service member may not be paid more than ____ skill(s) incentive pay in any month for the same period of service or skill.  </li>
<li>A Soldier must jump _____  every 3 months in order to collect jump pay.  </li>
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