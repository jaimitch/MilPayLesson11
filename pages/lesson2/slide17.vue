<template>
  <div>
        <section>
            <ul>
                <li>Provides the most recent, up-to-date information on military pay and entitlements</li>
                <li>Updated or revised yearly</li>
                <li>Effective June 10, 2019 all DFAS e-messages are located on the MilSuite web page <br>
                <a href="https://www.milsuite.mil/book/community/spaces/milpaye-messages">Military Pay E-Messages</a></li>
                <li>Compensation and Entitlement</li>
                    <ul>
                        <li>DFAS Military Pay Policy Messages</li>
                        <li>Pay and entitlement information for all components</li>
                        <li>ALARACT messages <br>
                        <a href="https://www.milsuite.mil/book/community/spaces/apf/s1net/payandentitlements">Pay and Entitlements</a></li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Military Pay E-Messages'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>