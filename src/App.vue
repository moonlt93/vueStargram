<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step <=1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('nameChange')">버튼</button>

  <p> 내 나이는 {{ $store.state.age }}</p>
  <button @click="$store.commit('setages',10)">상승</button> -->
  <p>{{ 내이름 }}</p>

  <Container :choiceFil="choiceFil" :url="imgUrl" :step="step" :data="data" @myData ="textData = $event" />

  <!-- <button @click="more">더보기</button> -->
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" multiple type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


  <!-- 탭 <p v-if="step ==0">{{ contents[0] }}</p>
  <p v-if="step ==1">{{ contents[1] }}</p>
  <p v-if="step ==2">{{ contents[2] }}</p>
-->
<button @click="buttons(0)">0버튼</button>
<button @click="buttons(1)">1버튼</button>
<button @click="buttons(2)">2버튼</button> 


</template>

<script>
import Container from "./components/Container.vue";
import data from "./assets/data.js";
import axios from "axios";
import { mapMutations, mapState } from "vuex";


export default {
  name: "App",
  data() {
    return {
      data:data,
      step: 0,
      contents: ["0번입니다.","1번입니다.","2번입니다."],
      imgUrl: '',
      textData:'',
      choiceFil:'',
      likes: 0,
      nowTime:0,
    };
  },
  components: {
    Container: Container,
  },
  mounted(){
 this.emitter.on('fire',(a)=>{
 
 this.choiceFil = a;
 console.log(this.choiceFil); 
});
},
computed:{

  ...mapState(['name','age','like']),
  ...mapState({내이름 :'name',}),
  
},
  methods: {
    ...mapMutations(['setMore','좋아요']),
    now(){
      return new Date();
    },
    publish(){
      var myData = {   name: "Kim Hyun",
                  userImage: "https://placeimg.com/100/100/arch",
                  postImage: this.imgUrl,
                  likes: 30,
                  content: this.textData,
                  date: "May 15",
                  liked: false,
                  filter: this.choiceFil
                 };
    this.data.unshift(myData);
    console.log(myData);
    this.step = 0;
    },
    more() {
      axios
        .get("https://codingapple1.github.io/vue/more" + this.cnt + ".json")
        .then((data) => {
          if (this.cnt < 2) {
            this.cnt++;
          }
          console.log(this.data.data);
          //요청 성공시 실행할 코드
          this.data.push(data.data);
        });
    },
    buttons(data){
      this.step = data;
    },
    upload(e){
     let file= e.target.files;
     let url=URL.createObjectURL(file[0]);
     
     this.step++;
     this.imgUrl = url;
     
    },
    
  },
 
};
</script>

<style>
@import "./assets/css/appStyle.css";
</style>
