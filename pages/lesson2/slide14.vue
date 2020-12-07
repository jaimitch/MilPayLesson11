<template>
  <div>
        <section>
            <ul>
                <li>Provides statutory guidance for the Department of Defense (military and civilian)</li>
                <li>States who, what, and when an entitlement is earned</li>
                <li>Changes are indicated by the use of yellow highlights</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Joint Travel Regulation (JTR)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>