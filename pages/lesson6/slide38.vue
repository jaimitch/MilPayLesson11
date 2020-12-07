<template>
  <div>
        <section>
            <ul>
                <li>FSA Restricted (FSA-R)</li>
                    <ul>
                        <li>Restricted or all others tour</li>
                        <li>Dependents DO NOT reside at or near PDS or homeport</li>
                    </ul>
                <li>FSA Temporary Duty (FSA-T)</li>
                    <ul>
                        <li>TDY away from the PDS more than 30 days</li>
                        <li>Dependents DO NOT reside at or near TDY location</li>
                    </ul>
                <li>FSA Ship (FSA-S)</li>
                    <ul>
                        <li>Duty aboard ship</li>
                        <li>Away from homeport more than 30 days</li>
                    </ul>
                <li>Discontinued after 30 days for FSA-T/FSA-S / 90 days for FSA-R</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Types of FSA'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>