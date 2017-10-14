import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * socket 通讯
 */
@Injectable()
export class ListSocketDemoProvider {

    constructor() {
        console.log('Hello ListSocketDemoProvider Provider');
        this.startSocket();
    }

    //socket实例
    ws: WebSocket;
    //订单列表
    lists: any[] = [];
    num: number = 0;

    str: string = '';
    //是否已经绑定userId
    isbindUserId: boolean = false;

    //开始工作
    startSocket() {
        this.ws = new WebSocket("ws://192.168.3.172:8080/jswm/shwebsocket");

        //接收socket
        this.ws.onmessage = (event)=>{
            this.socketOnMessage(event);
        }

        //socket连接成功
        this.ws.onopen = (event)=>{
            this.socketOnOpen(event);
        }

        //关闭连接
        this.ws.onclose = (event)=>{
            this.socketOnClose(event);
        }

        //连接出错
        this.ws.onerror = (event)=>{
            this.socketOnError(event);
        }

        // 模拟测试
        // let tab:number=1;
        // setInterval(()=>{
        //   this.num+=1;
        //   this.isShow=!this.isShow;
        //
        //   tab=(tab===1) ? 2 : 1;
        //   this.lists.unshift({'val':'记录'+this.num,'tab':tab});
        //   console.log('interval');
        //   let wd='demo'+this.num.toString();
        //   if (this.ws && this.ws.send && this.ws.readyState === this.ws.OPEN) {
        //     try {
        //       this.ws.send(wd);
        //     } catch (e) {
        //       console.log("error2");
        //     }
        //   }
        // },1000);
    }

    /**
     * socket发送消息
     * @param data   json对象
     */
    sendMessage(data) {
        if (this.ws && this.ws.send && this.ws.readyState === this.ws.OPEN) {
            try {
                this.ws.send(JSON.stringify(data));
            } catch (err) {
                console.log("socket发送消息失败",err);
            }
        }else {
            console.log("socket没有连接，不能发送消息");
        }
    }

    /***
     *  socket返回消息进行分捡处理
     *
     */
    messageHandle(data) {
        console.log('1111111111111111111');
        console.log(data);
        //对返回消息进行分类
        if (data.type == 1) {
            console.log('绑定userId成功');
            this.isbindUserId=true;
            let demoData = {
                'type': 1,
                'data': [46],
                'messageId': ['12345677']
            }
            // this.sendMessage(demoData);
        }
    }

    socketOnOpen(event) {
        console.log("socket连接成功", event);
        //连接成功进行userId绑定
        let bindUserIdData = {
            'type': 1,
            'data': [],
            'messageId': ['12345677']
        }
        this.isbindUserId=true;
        this.toBindUserId(bindUserIdData);
        // this.sendMessage(bindUserIdData);
    }

    toBindUserId(data){
        console.log('去绑定userid');
        this.sendMessage(data);
    }

    socketOnMessage(event) {
        console.log("socket接收消息ok", event);
        this.messageHandle(JSON.parse(event.data));
    }

    socketOnClose(event) {
        console.log("socket连接关闭", event);
    }

    socketOnError(closeEvent) {
        console.log("socket连接失败", closeEvent);
    }
}
