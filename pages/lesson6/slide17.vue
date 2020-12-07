<template>
  <div>
      <h2>DoDFMR Vol 7A 260504</h2>
        <section>
            <ul>
                <li>Payable when a member is authorized BAH solely on the basis of the member’s child support payment</li>
                <li>Support must change within (60 days) after BAH-DIFF rates change</li>
                <li>Documents</li>
                    <ul>
                        <li>Birth certificate</li>
                        <li>Court order support/divorce decree</li>
                        <li>Proof of support of at least equal to BAH-DIFF amount</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BAH-DIFF'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>