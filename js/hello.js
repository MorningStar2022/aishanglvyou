"use strict";


var Spot = /** @class */ (function () {
    function Spot(n, j, w, p, t) {
        this.name = n;
        this.jing = j;
        this.wei = w;
        this.price = p;
        this.time = t;
    }
    Spot.prototype.coutname = function () {
        document.write((this.name));
    };
    return Spot;
}());
var Route = /** @class */ (function () {
    function Route(s) {
        this.r = [];
        this.r = s;
        this.n = s.length;
    }
    Route.prototype.showall = function () {
        for (var i = 0; i < this.r.length; i++) {
            document.write(this.r[i].name);
            document.write(".");
        }
    };
    return Route;
}());
var Routebank = /** @class */ (function () {
    function Routebank(s) {
        this.r = [];
        this.r = s;
        this.n = s.length;
    }
    Routebank.prototype.showallall = function () {
        for (var i = 0; i < this.r.length; i++) {
            document.write("route" + i + ": ");
            this.r[i].showall();
            document.write("<br>");
        }
    };
    return Routebank;
}());
var User = /** @class */ (function () {
    function User(n, p, r, e) {
        this.name = n;
        this.password = p;
        this.routebank = r;
        this.email = e;
    }
    return User;
}());
var Userbank = /** @class */ (function () {
    function Userbank(r) {
        this.user = [];
        this.user = r;
        this.n = r.length;
    }
    return Userbank;
}());
function find(r, ub) {
    for (var i = 0; i < ub.n; i++) {
        for (var j = 0; j < ub.user[i].routebank.n; j++) {
            if (ub.user[i].routebank.r[j] == r) {
                alert("为您找到了匹配的驴友："+ub.user[i].name +"------" +ub.user[i].email + "<br>");
               
            }
        }
    }
}
function getroute(routename, ub) {
    var m = 0, n = 0;
    for (var i = 0; i < ub.n; i++) {
        for (var j = 0; j < ub.user[i].routebank.n; j++) {
            if (String(ub.user[i].routebank.r[j]) == routename) {
                m=i;n=j;
            }
        }
    }
    return ub.user[m].routebank.r[n];
}

var dh = new Spot("东湖", 108, 66, 10, 3);
var xh = new Spot("黄鹤楼", 104, 69, 15, 2);
var nh = new Spot("武汉大学", 106, 65, 19, 1);
var bh = new Spot("华中科技大学", 103, 63, 20, 8);
var arr0 = [dh, xh, nh, bh];
var arr1 = [xh, dh, nh, bh];
var arr2 = [dh, xh, bh, nh];
var arr3 = [bh, xh, nh, dh];
var route0 = new Route(arr0);
var route1 = new Route(arr1);
var route2 = new Route(arr2);
var route3 = new Route(arr3);
var r = [route0, route1, route2];
var rb = new Routebank(r);
var r1 = [route1, route2, route3];
var rb1 = new Routebank(r1);
var r2 = [route0, route2, route3];
var rb2 = new Routebank(r2);
var u1 = new User("Brett", "abcdefg", rb, "brett@newInstance.com");
var u2 = new User("Jason", "asfdfa", rb1, "jason@servlets.com");
var u3 = new User("Elliotte", "sadsadsaa", rb2, "elharo@macfaq.com");
var us = [u1, u2, u3];
var ub = new Userbank(us);