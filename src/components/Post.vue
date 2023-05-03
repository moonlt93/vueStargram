<template >
  <div class="post">
    <div class="post-header">
     <div class="profile"  :style="{ backgroundImage : `url(${data.userImage})`}">></div> 
      <span class="profile-name">{{ data.name }}</span>
    </div>
   <div @click="$store.commit('likeCount')" :class="data.filter" class="post-body" :style="{ backgroundImage : `url(${data.postImage})`}"></div> 
    <div class="post-content">
      <p>{{ $store.state.like}} Likes</p>
      <p><strong>{{ data.name }}</strong> {{ data.content }}</p>
      <p class="date">{{data.date}}</p>
   
    </div>
</div> 
</template>
<script>

export default {
    
    props:{
        data: Object,
        choiceFil:String
    },
    
}
</script>
<style >
@import '../assets/css/postStyle.css';
</style>