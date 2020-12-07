<template>
  <div>
     <p>Continuation Pay</p>
     <section>
         <ul>
             <li>One-time payout; perform obligated service agreement</li>
             <li>Payable at 8, but not more than 12 years of service</li>
             <li>2.5 to 13 times monthly basic pay for AC</li>
             <li>½ to 6 times monthly basic pay for RC/NG</li>
         </ul>
     </section>
     <p>Lump Sum</p>
     <section>
         <ul>
             <li>May elect lump sum of 25% or 50% at retirement</li>
             <li>Discounted present value from retirement to age 67</li>
             <li>At age 67, reverts back to full annuity</li>
         </ul>
     </section>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BRS'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>