<template>
<div class="notes-bar">
    <div class="notes-content">
        <p v-if="notesSelected" v-html="this.notesContent" />
        <p v-if="linksSelected" v-html="this.linksContent" />
        <p v-if="resourcesSelected">HERE ARE SOME RESOURCES</p>
    </div>
    <div class="notes-tabs">
        <button :class="{ notesbg: notesOpen}" v-on:click="selectNotes">NOTES</button>
        <button :class="{ notesbg: linksOpen}" v-on:click="selectLinks">LINKS</button>
        <button :class="{ notesbg: resourcesOpen}" v-on:click="selectResources">RESOURCES</button>
    </div>
</div>
  
</template>

<script>
export default {
    data() {
      return {
        pageTitle: 'M I L P A Y',
        isHomePage: true,
        notesSelected: false,
        linksSelected: false,
        resourcesSelected: false,
        notesOpen: false,
        linksOpen: false,
        resourcesOpen: false,
      }
    },
    computed: {
        notesContent() {
          return this.$store.getters.getNotesContent(this.$parent.lessonid, this.$parent.slide)[0].notes
        },
        linksContent() {
          return this.$store.getters.getNotesContent(this.$parent.lessonid, this.$parent.slide)[0].links
        }
    },
    methods: {
        selectNotes (){
            this.notesSelected = !this.notesSelected;
            this.linksSelected = false;
            this.resourcesSelected = false;
            this.notesOpen = !this.notesOpen;
            this.resourcesOpen = false;
            this.linksOpen = false;

        },
        selectLinks (){
            this.linksSelected = !this.linksSelected;
            this.notesSelected = false;
            this.resourcesSelected = false;
            this.linksOpen = !this.linksOpen;
            this.notesOpen = false;
            this.resourcesOpen = false;


        },
        selectResources (){
            this.resourcesSelected = !this.resourcesSelected;
            this.notesSelected = false;
            this.linksSelected = false;
            this.resourcesOpen = !this.resourcesOpen;
            this.notesOpen = false;
            this.linksOpen = false;
        },

    },
    watch: {
      $route: {
        immediate: true,
        handler($route) {
          if ($route.params.lessonid) {
            console.log($route.params.lessonid)
              this.pageTitle = this.$store.getters.getLessonTitle($route.params.lessonid);
              this.isHomePage = false
          } else {
            this.isHomePage = true
          }
          }
        }
    }
}
</script>

<style scoped>

.notes-tabs {
  z-index: 2;
  position: absolute;
  font-size:.75em;
  top: 85%;
  width: 100%;
}

.notes-content > p {
  z-index: 10;
  position: absolute;
  padding: 10% 10% 5% 20%;
  font-size:1em;
  width: 180%;
  height: 80%;
  left: -8%;
  background-color: #3d3d3d;

}

.notesbg {
  background: rgb(79,81,76);
  background: linear-gradient(90deg,#123042 0%,#1f5373 100%);
}

button {
  font-weight: bold;
  background-color: #3d3d3d;
  padding: 10px 15px 10px 15px;
  margin: 0 0 0 10px;
  border-radius: 10px;
  letter-spacing: 3px;
}

#notes-title {
  font-size: 1.5em;
  text-transform: uppercase !important;
  font-weight: bold !important;
}
#notes-text {
  font-size: 1em;
  font-weight: normal;
}

</style>


