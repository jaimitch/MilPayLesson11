<template>
  <div>
        <section>
            <ol>
                <li>A Soldier who resides in the Barracks would be entitled to BAH _________.</li>
                <li>The purpose of COLA is to offset the cost of living in a  _____ cost area.</li>
                <li>An active duty member married to a reserve member (not on orders and no other dependents) will receive the BAH without dependent rate.  True or False</li>
            </ol>
        </section>
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