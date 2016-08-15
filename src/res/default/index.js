process.env.CAFUI2 = true;
"use strict";
var Page = require("yunos/page/Page");
var Resource = require("yunos/content/resource/Resource");
var CompositeView = require("yunos/ui/view/CompositeView");
var resource = Resource.getInstance();
var ImageView = require("yunos/ui/view/ImageView");
var TextView = require("yunos/ui/view/TextView");
var View = require("yunos/ui/view/View");

class HomePage extends Page {
    onCreate() {
        var widthCus = this.window.width;
        var heightCus = this.window.height;

        let container = new CompositeView();
        container.width = this.window.width;
        container.height = this.window.height;
        container.background = "#F1F1F1";

        let imageView = new ImageView();
        imageView.width = this.window.width;
        imageView.height = this.window.height;
        imageView.src = resource.getImageSrc("fengjing.png");
        imageView.scaleType = ImageView.ScaleType.Fitxy;
        container.addChild(imageView);


        let imageView1 = new ImageView();
        imageView1.width = 500;
        imageView1.height = 500;
        imageView1.src = resource.getImageSrc("coin.png");
        imageView1.scaleType = ImageView.ScaleType.Fitxy;
        container.addChild(imageView1);

        let textView = new TextView();
        textView.width = 600;
        textView.height = 600;
        textView.fontSize = "24pt";
        textView.fontWeight = TextView.FontWeight.Bold;
        textView.color = "red";
        textView.color = "#FF0000";
        textView.text = "width=" + widthCus + " height=" + heightCus;
        container.addChild(textView);

        let view = new View();
        view.top = 100;
        view.right = 500;
        view.width = 300;
        view.height = 300;
        view.background = "blue";
        view.translationX = 100;
        view.translationY = 100;
        view.opacity = 0.5;
        view.rotationX = 30;
        view.rotationY = 20;
        view.scaleX = 1.1;
        container.addChild(view);

        let imgPriority = new ImageView({
            parentView: container,
            marginRight: 30,
            //centerY: container.centerY,
            // sourceSize: [246, 246],
            source: "b.png"
        });
        // let imgPriority = new ImageView();
        // imgPriority.width = 200;
        // imgPriority.height = 200;
        // imgPriority.src = resource.getImageSrc("b.png");
        // imgPriority.scaleType = ImageView.ScaleType.Fitxy;
        // imgPriority.left = 300;
        container.addChild(imgPriority);
        // //spriteView
        // let spriteView = new SpriteView();
        // // 指定控件大小
        // spriteView.width = 500;
        // spriteView.height = 500;
        // // 设置控件Sprite图片
        // spriteView.src = "fengjing.png";
        // // 设置每帧展示的图片大小
        // spriteView.frameWidth = 100;
        // spriteView.frameHeight = 100;
        // // 设置单帧持续时间，单位是ms
        // spriteView.frameDuration = 50;
        // // 设置执行总帧数
        // spriteView.frameCount = 10;
        // container.addChild(spriteView);
        this.window.addChild(container);
    }
}
module.exports = new HomePage();
