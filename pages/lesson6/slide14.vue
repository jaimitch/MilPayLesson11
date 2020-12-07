<template>
  <div>
      <h2>DoDFMR Vol 7A 260301B</h2>
        <section>
            <ul>
                <li>When primary dependent</li>
                    <ul>
                        <li>Is a member on active duty</li>
                        <li>Whereabouts are unknown</li>
                        <li>Occupies Gov’t QTRS as a permanent residence</li>
                        <li>Is not supported by member</li>
                    </ul>
                <li>Dependent confined in penal or correctional institution if</li>
                    <ul>
                        <li>Has been absolved from supporting the dependent</li>
                        <li>Period of confinement may extend beyond 5 years</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BAH W/Dep Not Authorized'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>