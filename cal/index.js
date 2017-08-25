/**
 * Created by Administrator on 2017/8/25.
 */
'use strict'

;(function (window,document,undefind) {
    function Calendar() {
        this.start='';
        this.end='';

    }

    Calendar.prototype={

    }

    function getById(id) {
        if(id){
            return document.getElementById(id);
        }
    }

})(window,document)