<template>
  <div>
        <section>
            <ul>
                <li>Savings Deposit Program (SDP)</li>
                <li>Thrift Savings Plan (TSP)</li>
                <li>TSP for Blended Retirement System (BRS) Members</li>
                <li>TSP for Members Not Under BRS</li>
            </ul>
        </section>
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