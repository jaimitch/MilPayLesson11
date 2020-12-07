<template>
  <div>

<ul>
<li>Service Member With/Without Dependent</li>

<li>Service Member Married to Another Service Member</li>
<ul>
<li>With Dependent</li>

<li>Without Dependent</li>
</ul>
<li>Secondary DLA</li>

<li>Partial DLA </li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Types of DLA'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>