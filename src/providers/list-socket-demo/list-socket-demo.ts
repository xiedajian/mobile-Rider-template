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
    //是否已经建立连接
    isLinkSuccess: boolean = false;
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


    //建立websocket连接
    toEstablishLink(){
        let linkData = {
            'type': 1,
            'data': [],
            'messageId': ['12345677']
        }
        console.log('去创建websock连接');
        this.sendMessage(linkData);
    }

    //去绑定userid
    toBindUserId(){
        // this.isbindUserId=true;
        let bindUserIdData = {
            'type': 2,
            'data': [46],
            'messageId': ['55555']
        }
        console.log('去绑定userid连接');
        this.sendMessage(bindUserIdData);
    }

    //回复消息表示收到推送消息
    replyMessageId(messageId){
        let replyData = {
            'type': 3,
            'result': true,
            'messageId': messageId
        }
        this.sendMessage(replyData);
    }

    /***
     *  socket返回消息进行分捡处理
     *
     */
    messageHandle(data) {
        console.log(data);
        //对返回消息进行分类
        // type : 1创建连接返回  2.绑定userid返回  3.
        if (data.type == 1) {
            console.log('建立websocket连接成功');
            this.toBindUserId();
            //是否已经建立连接
            this.isLinkSuccess = true;
        }else if(data.type == 2){
            console.log('绑定userId成功');
            this.isbindUserId=true;
        }else if(data.type == 3){
            console.log('回复消息表示收到订单推送');
            console.log(data.messageId);
            this.replyMessageId(data.messageId);
        }
    }

    socketOnOpen(event) {
        console.log("socket连接成功", event);
        this.toEstablishLink();
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

    socketOnMessage(event) {
        console.log("socket接收消息ok", event);
        this.messageHandle(JSON.parse(event.data));
    }

    socketOnClose(event) {
        console.log("socket连接关闭", event);
        //是否已经建立连接
        this.isLinkSuccess = false;
        //是否已经绑定userId
        this.isbindUserId = false;
    }

    socketOnError(closeEvent) {
        console.log("socket连接失败", closeEvent);
        //是否已经建立连接
        this.isLinkSuccess = false;
        //是否已经绑定userId
        this.isbindUserId = false;
    }
}
