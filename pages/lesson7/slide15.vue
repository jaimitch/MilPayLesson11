<template>
  <div>

<ul>
<li><b>Air: </b> one day is allowed in CONUS and within areas OCONUS </li>

<li><b>Bus: </b> government purchases commercial bus transportation; per diem is allowed for the actual time needed to travel over the direct route including necessary delays </li>

<li><b>Train: </b> scheduled departure and arrival dates are used</li>
  </ul>
 
<p>
*Note:  A traveler who elects to travel by a transportation mode other than the one authorized is limited to the actual time used, but not to exceed authorized time
</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Other modes of travel and AT days'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>