<template>
  <div class="conten" v-if="Object.keys(detailComment).length !== 0">
    <div class="PJW">
			<span>用户评价</span>
			<span>更多</span>
		</div>
		<div class="profile">
      <img :src="detailComment.user.avatar" />
      <span>{{detailComment.user.uname}}</span>
    </div>
    <div class="text">
      <span>{{detailComment.content}}</span>
    </div>
    <div class="info-text">
      <span>{{times}}</span>
      <span>{{detailComment.style}}</span>
    </div>
    <div class="images">
      <img v-for="item in detailComment.images" :src="item" />
    </div>
  </div>
</template>

<script>
  export default{
    name:'DetailComment',
    props:{
      detailComment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      times(){
        const date = new Date(this.detailComment.created)
        const Y = date.getFullYear() + '-'
        const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
        const D = date.getDate() + ' '
        const h = date.getHours() + ':'
        const m = date.getMinutes() + ':'
        const s = date.getSeconds()
        return Y+M+D+h+m+s
      }
    }
  }
</script>

<style scoped>
  .conten{
    padding: 15px 15px;
    border-bottom: 5px solid rgba(127,127,127,0.2);
  }
  .profile{
    height: 60px;
  }
  .profile img{
    width: 60px;
    height: 60px;
    border-radius: 100px;
  }
  .profile span{
    position: relative;
    top: -22px;
    left: 16px;
    color: #000;
  }
  .text{
    padding: 15px 0px;
    text-indent: 50px;
  }
  .info-text{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info-text :nth-child(2){
    margin-left: 10px;
  }
  .images{
    width: 100%;
    overflow: hidden;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
  .images img{
    width: 30%;
    height: 115px;
  }
  .PJW{
    justify-content: space-between;
    border-bottom: 2px solid rgba(127,127,127,0.2);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .PJW span:nth-child(1){
    font-size: 18px;
    margin-left: 20px;
  }
  .PJW span:nth-child(2){
    float: right;
    margin-right: 50px;
  }
</style>
