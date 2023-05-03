<template>
<div>
    <div v-if="step == 0">
   <!-- 저번시간에 만든거 -->
        <Post :choiceFil="choiceFil" :data="data[i]" v-for="(a, i) in data" :key="i" />
    </div>
<!-- 필터선택페이지 -->
<div v-if="step == 1">
  <div :class="choiceFil" class="upload-image"  :style="{ backgroundImage : `url(${url})`}"></div>
    <div class="filters">
    <FilterBox  :names="names[i]" :url="url" v-for="(fil,i) in names" :key="fil">
     <template v-slot:a>{{ names[i] }}</template>
    </FilterBox>
    

  </div>
</div>
<!-- 글작성페이지 -->
  <div :class="choiceFil" class="upload-image" v-if="step ==2"  :style="{ backgroundImage : `url(${url})`}"></div>
  <div class="write">
    <textarea @input=" $emit('myData',$event.target.value) " class="write-box"></textarea>
  </div>
</div>
</template>

<script>

import Post from './Post.vue';
import filterBox from "../components/FilterBox.vue";
import filterName from '@/assets/filterName';
export default {
      data(){
        return {
          textData: ' ',
          names: filterName,
        }
      }
    ,
        components: {
        Post: Post,
        FilterBox: filterBox,
    },
    props: {
        data: Array,
        step: Number,
        url: String,
        choiceFil: String,
    },
    
    
}
</script>
<style>
@import  '../assets/css/containerStyle.css';
</style>