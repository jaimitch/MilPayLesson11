<template>
  <div>
      <h2>DoDFMR Vol 7A Chapter 30</h2>
        <section>
            <ul>
                <li>Initial Uniform Allowance payable only once when:</li>
                    <ul>
                        <li>First reporting for AD for more than 90 days</li>
                        <li>Completes 14 days of AD or ADT for reserve members</li>
                        <li>Completes 14 periods IDT for ready reserve members</li>
                        <li>First period of AD for Armed Forces Health Professions Scholarship Program members</li>
                    </ul>
                <li>Additional AD Uniform Allowance</li>
                    <ul>
                        <li>Members of the RC and ROTC graduates</li>
                        <li>On AD orders for more than 90 days</li>
                    </ul>
                <li>Civilian Clothing Monetary Allowance</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Extra Clothing Allowance'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>