<template>
  <div>
      <h2>Primary Dependents DoDFMR Vol 7A 670206</h2>
        <section>
            <ul>
                <li>Must certify/recertify annually (Soldier’s birth month)</li>
                    <ul>
                        <li>Spouse</li>
                        <li>Unmarried children under 21</li>
                    </ul>
            </ul>
        <h2>Annual Re-determination of Dependents DoDFMR Vol 7A 260302A2</h2>
            <ul>
                <li>Must certify/recertify annually (Soldier’s birth month)</li>
                    <ul>
                        <li>Unmarried children under 23 if full time student</li>
                        <li>Unmarried children over 21 incapable of self support (physical or mental)</li>
                        <li>Ward of a court</li>
                        <li>Parents, parents-in-law, stepparents, parents-by-adoption</li>
                        <li>In-loco-parentis</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Certification and Re-determination'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>