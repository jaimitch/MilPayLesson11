<template>
  <div>
        <section>
            <ol>
                <li>The current interest rate of the SDP is ____% annually.  (DoDFMR Vol 7A 510205A)</li>
                <li>SDP is automatically transferred after _____ days.  (DoDFMR Vol 7A 510213)</li>
                <li>SDP withdrawal requests can be submitted through               ________, _________,__________, or mail.
(DFAS website – Military Members/Pay & Allowances/DoD Savings Deposit Program)</li>
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