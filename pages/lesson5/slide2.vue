<template>
  <div>
<ul>
  <li>Overview of basic pay</li>

<li>Computation of basic pay</li>

<li>Describe the effects of absence from duty on pay and allowances </li>

<li>Describe the effects of grade changes on pay and allowances</li>
  </ul>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Lesson Objectives'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>