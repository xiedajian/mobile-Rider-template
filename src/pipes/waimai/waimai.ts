import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the WaimaiPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'waimai',
})
export class WaimaiPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    let result:string='';
    if(value==1){
      result='assets/img/user/meituan.png';
    }else if(value==2){
          result='assets/img/user/eleme.png';
      }else if(value==3){
        result='assets/img/user/baidu.png';
    }else if(value==4){
        result='assets/img/order/xiao_jiesu.png';
    }
    return result;
  }
}
