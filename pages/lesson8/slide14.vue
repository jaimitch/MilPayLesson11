<template>
  <div>
 <h2>DoDFMR Vol 7A Chapter 4008</h2>
<ul>
<li>Start, stop, or change allotments</li>
<ul>
<li>DD Form 2558 (written request)</li>

<li>MyPay (automated)</li>

<li>Special power of attorney (accompanies the DD 2558)</li>
</ul>
<li>Restrictions</li>
<ul>
<li>Not payable to a minor</li>

<li>Not payable to a mentally incompetent person</li>

<li>Member awaiting trial by court-martial</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Rules'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>