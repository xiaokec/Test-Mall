import{ADD_TO_CART,ADD_COUNTER}from'./mutations-types.js'

export default {
    addCart(context,payload){
      return new Promise((reslove,reject)=>{
        // let oldProduct = null
        // for(let i of state.cartList){
        //   if(i.iid === payload.iid){
        //     oldProduct = i
        //   }
        // }
        // if(oldProduct){
        //   oldProduct.count += 1
        // }else{
        //   payload.count = 1
        //   state.cartList.push(payload)
        // }
        //判断之前的数组是否有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)  
        //判断old
        if(oldProduct){//数量加一
          context.commit(ADD_COUNTER,oldProduct)
          reslove('当前商品数量+1')
        }else{//添加商品
          payload.count = 1
          context.commit(ADD_TO_CART,payload)
          reslove('添加了新商品')
        }
      })
    }
  }
