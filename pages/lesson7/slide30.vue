<template>
  <div>
<ol>
<li>True or False:  There are two types of Permissive TDY (PTDY) in regards to PCS. </li>

<li>DoD Government Travel Card (GTCC) provides travelers an effective, convenient, and commercially available method to pay for __________related to official travel.</li>

<li>True or False:  An advance payment is to give funds to a member to meet extraordinary vacation expenses. </li>
     
</ol>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check On Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>