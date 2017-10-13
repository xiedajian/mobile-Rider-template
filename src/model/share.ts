import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService{

  constructor(){

  }

  orderWaiting:any=[];
  //订单列表
  orderList:any=[];
  //总数
  total:number=0;
  //是否已经显示结束
  isEnd:boolean;
  //是否加载完成
  isLoad:boolean=false;





}
