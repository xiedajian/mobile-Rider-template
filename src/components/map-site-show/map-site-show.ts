import {Component, EventEmitter, Output, Input} from '@angular/core';

declare var AMap: any;
declare var AMapUI: any;

import {MapPositionModel} from '../../model/mapPositionModel';

//自定义遮罩窗口
export class MarkerInfoWindow {
    title: ''; //标题
    content: '';  //内容
    position: [113.573879, 34.805141];  //标记地点
    image: "assets/img/order/home_icon_dw.png";     //标记图标


}

/***
 *  高德地图 - 地图点遮罩物展示  （仿共享单车地图模式）
 *  1. 组件依赖高德官方两个js，在入口文件index.html引入
 *    <!--高德地图JavaScript API入口脚本-->
 *    <script src="http://webapi.amap.com/maps?v=1.4.0&key=7c24ba9bd6a0b7b95d70ec6919e30c34&plugin=AMap.ToolBar"></script>
 *    <!-- 高德地图UI组件库 1.0 -->
 *   <script src="//webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
 *  2.制作地图
 *  3.添加遮罩
 */
@Component({
    selector: 'map-site-show',
    templateUrl: 'map-site-show.html'
})
export class MapSiteShowComponent {
    //需要显示的标记点的数组组合
    @Input() sites: any[] = [
        {
            title: '', //标题
            content: '商家位置',  //内容
            position: [113.573879, 34.805141],  //标记地点
            image: "assets/img/order/home_icon_dw.png",     //标记图标
        },
        {
            title: '', //标题
            content: '骑手位置',  //内容
            position: [113.577879, 34.907141],  //标记地点
            image: "assets/img/order/home_icon_dw.png",     //标记图标
        }
    ];
    //地图中心点的坐标
    @Input() center: any={
        title: '', //标题
        content: '骑手',  //内容
        position: [113.573879, 34.805141],  //标记地点
        image: "assets/img/order/home_icon_dw.png",     //标记图标
    };

    map: any;

    constructor() {
        console.log('Hello MapSiteShowComponent Component');
        this.initMap();
    }

    //初始化地图
    initMap() {
        AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
            //初始化地图对象，加载地图
            this.map = new AMap.Map("container", {
                resizeEnable: true,
                center: this.center.position, //地图中心点
                zoom: 11 //地图显示的缩放级别
            });
            this.createMarker(this.sites[0]);
            this.createMarker(this.sites[1]);
        });
    }

    //添加自定义标记
    createMarker(site) {
        //添加点标记，并使用自己的icon
        var marker = new AMap.Marker({
            map: this.map,
            position: site.position,
            icon: new AMap.Icon({
                size: new AMap.Size(15, 21), //图标大小
                image: "assets/img/order/home_icon_dw.png"
                //		            imageOffset: new AMap.Pixel(0, -60)
            }),
            draggable: false,  //是否可拖动
            offset: new AMap.Pixel(0, 0), //相对于基点的偏移位置
            //当设置content时，icon将失效，可在content设置更复杂的html dom样式
            content: `<div class="info mui-ellipsis" style="padding: 13px 10px 5px 10px;max-width :150px;max-height:40px;overflow:hidden;text-align: center;font-size: 12px;line-height: 23px;background: url(assets/img/order/bm.png) no-repeat;background-size: 100% 100%">${site.content}</div>`   //自定义点标记覆盖物内容
        });
    }

    //添加窗口
    createInfoWindow() {
        var content = '商家位置';
        var info = document.createElement("div");
        info.className = "info mui-ellipsis";
        info.style.padding = '13px 10px 5px 10px';
        info.style.maxWidth = '150px';
        info.style.maxHeight = '40px';
        info.style.overflow = 'hidden';
        info.style.textAlign = 'center';
        info.style.fontSize = '12px';
        info.style.lineHeight = '23px';
        info.style.background = 'url(assets/img/order/bm.png) no-repeat';
        info.style.backgroundSize = '100% 100%';
        info.innerHTML = content;
        return info;

        // let infoWindow:any = new AMap.InfoWindow({
        //     isCustom: true, //使用自定义窗体
        //     content: info,
        //     offset: new AMap.Pixel(-2, 35)
        // });
        // infoWindow.open(this.map, marker.getPosition());//商家位置
    }
}
