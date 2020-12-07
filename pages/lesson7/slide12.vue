<template>
  <div>
<ul>
<li>Per Diem Allowance</li>
<ul>
<li>Subsistence allowance is a daily payment instead of actual expense reimbursement for lodging, meals and related incidental expenses</li>

<li>Is separate from transportation expenses and other reimbursable expenses</li>

<li>Authorized for allowable travel time (not leave time)</li>
</ul>
<li>Travel Day Computation</li>
<ul>
<li>Based on mode of transportation</li>

<li>Based on distance between location </li>
</ul>
</ul>




  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Per Diem and Travel Days'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>