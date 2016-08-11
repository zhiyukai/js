"use strict";
var page = require("caf/page");
page.instance.on("create", function() {
    page.window.config = {
        engine: "domless"
    };
});
var lang = require("caf/core/lang"),
    Page = require("caf/app/Page"),
    TextView = require("caf/ui/TextView"),
    App = lang.extend(Page, {
        constructor: function() {
            App.superclass.constructor.apply(this);

            console.log("HelloPage::constructor");
        },

        destructor: function() {
            console.log("HelloPage::destructor");

            App.superclass.destructor.apply(this);
        },

        onStart: function() {
            console.log("HelloPage::onStart");

            var textView = new TextView();
            textView.text = "Hello hellodemo";
            textView.x = 0;
            textView.y = 0;
            textView.width = this.window.width;
            textView.height = this.window.height;
            textView.fontPixelSize = 100;
            textView.textColor = "#FFFFFF";
            textView.background = "#FF6600";
            textView.vAlign = TextView.VAlign.AlignVCenter;
            textView.hAlign = TextView.HAlign.AlignHCenter;
            this.window.addChildView(textView);
        },

        onShow: function() {
            console.log("HelloPage::onShow");
        },

        onHide: function() {
            console.log("HelloPage::onHide test ");
        },

        onActive: function() {
            console.log("HelloPage::onActive");
        },

        onInactive: function() {
            console.log("HelloPage::onInactive");
        },

        onStop: function() {
            console.log("HelloPage::onStop");
        },

        onRestart: function() {
            console.log("HelloPage::onRestart");
        },

        onTrimMemory: function() {
            console.log("HelloPage::onTrimMemory");
        },

        onDestroy: function() {
            console.log("HelloPage::onDestroy");
        }
    });

module.exports = new App();
