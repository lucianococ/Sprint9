<template>
  <div class="albumitem">
    <AlbumItem/>
   <albumes :albumes="item"></albumes>
  </div>
</template>

<script>
import AlbumItem from '../components/AlbumItem.vue'

export default {
  components: {AlbumItem}
  
}
</script>