/**
 * Created by fp on 2018/12/18.
 */
import Vue from 'vue'
import waterDialog from './waterDialog.vue'
import {objectAssign} from '@/utils/util'
export default {
  showDialog(params){
    //弹框在地图左侧显示
    let dialogObj = Vue.extend(waterDialog);
    let itemData = {};
    objectAssign(itemData, params);
    let info = {
      itemData: itemData,
    };
    const obj = new dialogObj({
      data: info
    });
    obj.show();
    return obj;
  }
}
