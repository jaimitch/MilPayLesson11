<template>
  <div>
<h2>DoDFMR Vol 7A 010201 E</h2>


<p>Some medical and dental officers are entitled to extra credit for longevity purposes to reflect the time spent in medical or dental school</p>
<ul>
<li>On or before September 15, 1981, the officer already had the  constructive service credit </li>

<li>On September 14, 1981, enrolled either AFHPS or DOM</li>

<li>On September 14, 1981, participating in a program that allowed</li>
<ul>
<li>Medical and Dental officers up to 4 years for school</li>

<li>Medical officer up to 1 additional year for an internship</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Constructive Service'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>