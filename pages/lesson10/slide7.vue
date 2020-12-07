<template>
  <div>
      <h2>DoDFMR Vol 7A 440202A2</h2>
       <p>Step 1 Identify taxable pay</p>
        <section>
            <ul>
                <li>Basic pay, HFP, IDP, FLPP, etc.</li>
            </ul>
        </section>
        <p>Step 2 Add IDP/HFP to SMA basic pay</p>
        <section>
            <ul>
                <li>$225 + $8,578.50 (FY19) = $8,803.50</li>
            </ul>
        </section>
        <p>Step 3 Subtract Step 2 from Step 1</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Calculating CZTE'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>