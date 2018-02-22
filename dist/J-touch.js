/**
 * 获取移动端touch事件方向与距离
 * @author JinnHo 309126288@qq.com
 * @version 1.0  2018/1/26
 * @param callback(data) 自定义回调函数，返回touchend结果
 * @param isOffset 自定义参数 是否获取相对位置（默认false）
 * @param moveFn 自定义参数 是否获取touchmove移动的位置（默认false）
 * @param swipeDis 自定义参数 滑动距离（默认100）
 * @constructor
 */
(function ($) {
    $.fn.extend({
        J_swipe: function (callback,obj) {
            var _extends = arguments[1] ? arguments[1] : [];
            if (typeof _extends != "object") {
                console.log("param error : extends param type(object) ->" + typeof _extends);
                return;
            }
            var isOffset = _extends.offset == true ? 1 : 0;
            var moveFn = _extends.fn ? _extends.fn : false;
            var swipeDis = _extends.swipeDis ? _extends.swipeDis : 100;

            var _this = this;
            var offset = {x: _this.offset().left, y: _this.offset().top};
            var touchesStart = {x: 0, y: 0};
            var touchesMove = {x: 0, y: 0};
            var touchesEnd = {x: 0, y: 0};
            var moveDis = {x: 0, y: 0};

            this.on("touchstart", function (e) {
                touchesStart = {
                    x: e.changedTouches[0].pageX - ((offset.x) * isOffset),
                    y: e.changedTouches[0].pageY - ((offset.y) * isOffset)
                };
                offset = {x: _this.offset().left, y: _this.offset().top};
            });
            this.on("touchend", function (e) {
                touchesEnd = {
                    x: e.changedTouches[0].pageX - ((offset.x) * isOffset),
                    y: e.changedTouches[0].pageY - ((offset.y) * isOffset)
                };
                var flag = "tap";
                var dis = {x: touchesEnd.x - touchesStart.x, y: touchesEnd.y - touchesStart.y};
                if (dis.x > swipeDis && Math.abs(dis.x) > Math.abs(dis.y)) {
                    flag = "right";
                } else if (dis.x < -swipeDis && Math.abs(dis.x) > Math.abs(dis.y)) {
                    flag = "left";
                } else if (dis.y > swipeDis && Math.abs(dis.y) > Math.abs(dis.x)) {
                    flag = "down";
                } else if (dis.y < -swipeDis && Math.abs(dis.y) > Math.abs(dis.x)) {
                    flag = "up";
                }
                callback(flag,this);
            });
            this.on("touchmove", function (e) {
                e.preventDefault();
                touchesMove = {
                    x: e.changedTouches[0].pageX - ((offset.x) * isOffset),
                    y: e.changedTouches[0].pageY - ((offset.y) * isOffset)
                };
                if (typeof(moveFn) === 'function') {
                    moveDis = {
                        x: touchesMove.x - touchesStart.x,
                        y: touchesMove.y - touchesStart.y,
                        offx: offset.x,
                        offy: offset.y
                    };
                    moveFn(moveDis, this);
                }
            });
        }
    });
})(jQuery);