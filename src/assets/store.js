import { createStore } from 'vuex'
import axios from "axios";
const store = createStore({
  state(){
    return {
      name :'kim',
      age :20,
      like: 30,
      check: false,
      more:{},
    }
  },
  mutations :{
    nameChange(state){
      state.name='park'
    },
    setages(state,payload){
      //데이터도 전달이 가능함.
      state.age += payload;
    },
    likeCount(state){
      

      if(state.check == false){
        state.like+=1;
        state.check = true;
      }else{
        state.like-=1;
        state.check = false;
      }
    },
    setMore(state,data){
      state.more = data;

    },
  },
  actions :{
    getData(context){
      axios.get("https://codingapple1.github.io/vue/more0.json")
      .then((a)=>{
        console.log(a);
        context.commit('setMore',a.data);
        //store == context
      })
    },
  },
})

// data=> state 라 함.
export default store ;