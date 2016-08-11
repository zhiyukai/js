"use strict";

var lang = require("caf/core/lang");
var Controller = require("caf/app/Controller");
var View = require("caf/ui/View");

var HomeController = lang.extend(Controller, {
    constructor: function() {
        HomeController.superclass.constructor.apply(this);
    },

    onStart: function() {
    },

    onShow: function() {
    },

    onHide: function() {
    },

    loadView: function() {
        var self = this;
        if (!self._view) {
            self._view = new View();
        }
        return self._view;
    }

});

module.exports = HomeController;
