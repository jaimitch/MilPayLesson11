<template>
  <div>
<ul>
<li>Soldier travels between two duty stations</li>
<li><b>Mode of travel: </b> POV</li>
<li><b>Miles: </b> 800 miles in between duty stations</li>
<ul>
<li>Calculation:  800/350 = 2.29 days</li>
<li>Therefore 800 miles = 3 travel days </li>
</ul>
</ul>
<p>
Note:
  <br>.15 and over must be rounded to another day
 <br>2.14 = 2 days 
<br>2.15 = 3 days 
</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Authorized Travel (AT) Day Example'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>