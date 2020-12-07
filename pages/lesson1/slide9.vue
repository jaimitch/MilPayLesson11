<template>
  <div>
    <div class="row">
      <div class="column">
        <img src="../../assets/lesson1/Pay_Inquiry.png" style="width:680px">
      </div>
      <div class="column">
        <ul>
          <li>Used to collect data in order to identify unit trends for future training needs and communicate between the SM, S1, and Finance</li>
          <li>The nature of the Pay Inquiry should be explained in detail to include dates </li>
          <li>Pay Inquiry should be answered within 72 hours
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Step 1 - Pay Inquiry'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>