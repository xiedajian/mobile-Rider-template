import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListSocketDemoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListSocketDemoProvider {

  constructor() {
    console.log('Hello ListSocketDemoProvider Provider');
    this.startSocket();
  }

  ws:WebSocket;
  lists:any[]=[

  ];
  num:number=0;
  str:string='';
  isShow:boolean=true;

  //开始工作
  startSocket(){
    this.ws=new WebSocket("ws://192.168.3.135:8080/jswm/websocket");

    this.ws.onmessage=evt=>{
      this.lists.push(evt.data);
      this.str+=evt.data;
      console.log('接收ok');
      console.log(this.str);
    }

    this.ws.onopen = function()
    {
      // Web Socket 已连接上，使用 send() 方法发送数据
      console.log("连接成功");
    };

    this.ws.onclose = function()
    {
      // Web Socket 已连接上，使用 send() 方法发送数据
      console.log("连接关闭");
    };

    this.ws.onerror = (error) => {
      // console.log("[umdwebsocket] connect Error");
      console.log("error");
      console.log(error);
    };
    let tab:number=1;
    setInterval(()=>{
      this.num+=1;
      this.isShow=!this.isShow;

      tab=(tab===1) ? 2 : 1;
      this.lists.unshift({'val':'记录'+this.num,'tab':tab});
      console.log('interval');
      let wd='demo'+this.num.toString();
      if (this.ws && this.ws.send && this.ws.readyState === this.ws.OPEN) {
        try {
          this.ws.send(wd);
        } catch (e) {
          console.log("error2");
        }
      }
    },1000);
  }



}
