<template>
  <div>
      <h2>DoDFMR Vol 7A 2903</h2>
        <section>
            <ul>
                <li>Standard</li>
                    <ul>
                        <li>Enlisted members upon initial enlistment</li>
                        <li>Furnished in kind issue equal to the dollar value of the required items</li>
                        <li>Partial monetary payment allowed if clothing is not furnished</li>
                    </ul>
                <li>Special</li>
                    <ul>
                        <li>Only one payment for continuous service period</li>
                        <li>In lieu of standard issue item</li>
                    </ul>
                <li>Partial</li>
                    <ul>
                        <li>When full standard or special allowance not authorized</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Initial Clothing Allowance'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>