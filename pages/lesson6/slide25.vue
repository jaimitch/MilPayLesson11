<template>
  <div>
      <h2>DoDFMR Vol 7A 2607</h2>
      <p>Payable to member with dependents for added housing expenses resulting from separation of dependents; when a member is assigned to an OCONUS PDS or incident to an assignment in the CONUS and dependent travel is delayed or restricted</p>
        <section>
            <ul>
                <li>FSH BAH (FSH-B)</li>
                    <ul>
                        <li>Same as BAH without rate</li>
                        <li>Required to procure housing - restricted tour</li>
                        <li>CONUS with waiver (to include Hawaii and Alaska)</li>
                    </ul>
                <li>FSH OHA (FSH-O)</li>
                    <ul>
                        <li>SSame as OHA without rate</li>
                        <li>Required to procure housing - restricted tour</li>
                        <li>OCONUS</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Family Separation Housing (FSH)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>