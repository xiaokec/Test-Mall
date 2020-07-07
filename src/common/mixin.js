import {debounce} from 'common/utils.js'

export const itemListMixin = {
  mounted(){
    //防抖
    const refresh = debounce(this.$refs.scroll.refresh,200)

    this.detailILi = ()=>{
      refresh()
    }
    //监听item中图片的加载
    this.$bus.$on('itemImageLoad',this.detailILi)
  }
}
