<template>
  <div>
        <section>
            <ul>
                <li>01 - 04  Basic Pay</li>
                <li>05 - 20  Special Pay and Bonus</li>
                <li>21 - 24  Incentive Pay</li>
                <li>25 - 31  Allowances</li>
                <li>32 - 37  Miscellaneous Payments</li>
                <li>38 - 39  Cadets, Students and Academy Officials</li>
                <li>40 - 43  Allotments of Pay</li>
                <li>44 - 54  Deductions and Cellections</li>
                <li>55 - 64  Reserve and National Guard Pay</li>
                <li> 65   High-Deployment Allowance</li>
                <li> 66   Career Status Bonus/Redux Election Option</li>
                <li>67 - 68  COLA and TLA</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'DoDFMR Vol 7A Chapters'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>