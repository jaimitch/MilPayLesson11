<template>
  <div>
    <ul>
<li>Dependent Travel</li>
<ul>
<li>Concurrent</li>
<li>Deferred/Delayed</li>
</ul>
<li>Member married to member</li>

<li>RC/NG call to/release from AD–20 weeks or more</li>

<li>Members whose enlistment has been voided</li>

</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'PCS Types Con\'t.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>