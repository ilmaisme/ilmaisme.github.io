/*
 * jQuery.eraser v0.4
 * makes any image or canvas erasable by the user, using touch or mouse input
 * https://github.com/boblemarin/jQuery.eraser
 *
 * Usage:
 *
 * $('#myImage').eraser(); // simple way
 *
 * $(#canvas').eraser( {
 *   size: 20, // define brush size (default value is 40)
 *   completeRatio: .65, // allows to call function when a erased ratio is reached (between 0 and 1, default is .7 )
 *   completeFunction: myFunction // callback function when complete ratio is reached
 * } );
 *
 * $('#image').eraser( 'clear' ); // erases all canvas content
 *
 * $('#image').eraser( 'reset' ); // revert back to original content
 *
 * $('#image').eraser( 'size', 80 ); // change the eraser size
 *
 *
 * https://github.com/boblemarin/jQuery.eraser
 * http://minimal.be/lab/jQuery.eraser/
 *
 * Copyright (c) 2010 boblemarin emeric@minimal.be http://www.minimal.be
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//var isMobile = false; //initiate as false
// device detection
/*if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
*/
if (/Mobi|Android/i.test(navigator.userAgent)) {
    // mobile
    (function ($) {
        var methods = {
            init: function (options) {
                return this.each(function () {
                    var $this = $(this),
                        data = $this.data('eraser');

                    if (!data) {
                        var width = $this.width(),
                            height = $this.height(),
                            pos = $this.offset(),
                            $canvas = $("<canvas/>"),
                            canvas = $canvas.get(0),
                            size = (options && options.size) ? options.size : 100,
                            completeRatio = (options && options.completeRatio) ? options.completeRatio : .7,
                            completeFunction = (options && options.completeFunction) ? options.completeFunction : null,
                            parts = [],
                            colParts = Math.floor(width / size),
                            numParts = colParts * Math.floor(height / size),
                            n = numParts,
                            ctx = canvas.getContext("2d");

                        // replace target with canvas
                        $this.after($canvas);
                        canvas.id = this.id;
                        canvas.className = this.className;
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(this, 0, 0);
                        $this.remove();

                        // prepare context for drawing operations
                        ctx.globalCompositeOperation = "destination-out";
                        ctx.strokeStyle = 'rgba(255,0,0,255)';
                        ctx.lineWidth = size;

                        ctx.lineCap = "round";
                        // bind events
                        $canvas.bind('mousedown.eraser', methods.mouseDown);
                        $canvas.bind('touchstart.eraser', methods.touchStart);
                        $canvas.bind('touchmove.eraser', methods.touchMove);
                        $canvas.bind('touchend.eraser', methods.touchEnd);

                        // reset parts
                        while (n--) parts.push(1);

                        // store values
                        data = {
                            posX: pos.left,
                            posY: pos.top,
                            touchDown: false,
                            touchID: -999,
                            touchX: 0,
                            touchY: 0,
                            ptouchX: 0,
                            ptouchY: 0,
                            canvas: $canvas,
                            ctx: ctx,
                            w: width,
                            h: height,
                            source: this,
                            size: size,
                            parts: parts,
                            colParts: colParts,
                            numParts: numParts,
                            ratio: 0,
                            complete: false,
                            completeRatio: completeRatio,
                            completeFunction: completeFunction
                        };
                        $canvas.data('eraser', data);

                        // listen for resize event to update offset values	
                        $(window).resize(function () {
                            var pos = $canvas.offset();
                            data.posX = pos.left;
                            data.posY = pos.top;
                        });
                    }
                });
            },
            touchStart: function (event) {
                var $this = $(this),
                    data = $this.data('eraser');

                if (!data.touchDown) {
                    var t = event.originalEvent.changedTouches[0],
                        tx = t.pageX - data.posX,
                        ty = t.pageY - data.posY;
                    methods.evaluatePoint(data, tx, ty);
                    data.touchDown = true;
                    data.touchID = t.identifier;
                    data.touchX = tx;
                    data.touchY = ty;
                    event.preventDefault();
                }
            },
            touchMove: function (event) {
                var $this = $(this),
                    data = $this.data('eraser');

                if (data.touchDown) {
                    var ta = event.originalEvent.changedTouches,
                        n = ta.length;
                    while (n--)
                        if (ta[n].identifier == data.touchID) {
                            var tx = ta[n].pageX - data.posX,
                                ty = ta[n].pageY - data.posY;
                            methods.evaluatePoint(data, tx, ty);
                            data.ctx.beginPath();
                            data.ctx.moveTo(data.touchX, data.touchY);
                            data.touchX = tx;
                            data.touchY = ty;
                            data.ctx.lineTo(data.touchX, data.touchY);
                            data.ctx.stroke();
                            event.preventDefault();
                            break;
                        }
                }
            },
            touchEnd: function (event) {
                var $this = $(this),
                    data = $this.data('eraser');

                if (data.touchDown) {
                    var ta = event.originalEvent.changedTouches,
                        n = ta.length;
                    while (n--)
                        if (ta[n].identifier == data.touchID) {
                            data.touchDown = false;
                            event.preventDefault();
                            break;
                        }
                }
            },

            evaluatePoint: function (data, tx, ty) {
                var p = Math.floor(tx / data.size) + Math.floor(ty / data.size) * data.colParts;
                if (p >= 0 && p < data.numParts) {
                    data.ratio += data.parts[p];
                    data.parts[p] = 0;
                    if (!data.complete) {
                        if (data.ratio / data.numParts >= data.completeRatio) {
                            data.complete = true;
                            if (data.completeFunction != null) data.completeFunction();
                        }
                    }
                }

            },

            mouseDown: function (event) {
                var $this = $(this),
                    data = $this.data('eraser'),
                    tx = event.pageX - data.posX,
                    ty = event.pageY - data.posY;
                methods.evaluatePoint(data, tx, ty);
                data.touchDown = true;
                data.touchX = tx;
                data.touchY = ty;
                data.ctx.beginPath();
                data.ctx.moveTo(data.touchX - 1, data.touchY);
                data.ctx.lineTo(data.touchX, data.touchY);
                data.ctx.stroke();
                $this.bind('mousemove.eraser', methods.mouseMove);
                $(document).bind('mouseup.eraser', data, methods.mouseUp);
                event.preventDefault();
            },

            mouseMove: function (event) {
                var $this = $(this),
                    data = $this.data('eraser'),
                    tx = event.pageX - data.posX,
                    ty = event.pageY - data.posY;
                methods.evaluatePoint(data, tx, ty);
                data.ctx.beginPath();
                data.ctx.moveTo(data.touchX, data.touchY);
                data.touchX = tx;
                data.touchY = ty;
                data.ctx.lineTo(data.touchX, data.touchY);
                data.ctx.stroke();
                event.preventDefault();
            },

            mouseUp: function (event) {
                var data = event.data,
                    $this = data.canvas;
                data.touchDown = false;
                $this.unbind('mousemove.eraser');
                $(document).unbind('mouseup.eraser');
                event.preventDefault();
            },

            clear: function () {
                var $this = $(this),
                    data = $this.data('eraser');
                if (data) {
                    data.ctx.clearRect(0, 0, data.w, data.h);
                    var n = data.numParts;
                    while (n--) data.parts[n] = 0;
                    data.ratio = data.numParts;
                    data.complete = true;
                    if (data.completeFunction != null) data.completeFunction();
                }
            },

            size: function (value) {
                var $this = $(this),
                    data = $this.data('eraser');
                if (data && value) {
                    data.size = value;
                    data.ctx.lineWidth = value;
                }
            },

            reset: function () {
                var $this = $(this),
                    data = $this.data('eraser');
                if (data) {
                    data.ctx.globalCompositeOperation = "source-over";
                    data.ctx.drawImage(data.source, 0, 0);
                    data.ctx.globalCompositeOperation = "destination-out";
                    var n = data.numParts;
                    while (n--) data.parts[n] = 1;
                    data.ratio = 0;
                    data.complete = false;
                }
            }

        };

        $.fn.eraser = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not yet exist on jQuery.eraser');
            }
        };
    })(jQuery);
    addEventListener("load", init, false);

    function init(event) {
        $("#reduxmob").eraser({
            size: 20
        });

        // you can alse specify the brush size (in pixel) by using options :
        // $("#redux").eraser({size: 20});
    }

    function remove(event) {
        $("#reduxmob").eraser('clear');
        event.preventDefault();
    }

    function reset(event) {
        $("#reduxmob").eraser('reset');
        event.preventDefault();
    }

} else {
    // desktop
    (function ($) {
        var methods = {
            init: function (options) {
                return this.each(function () {
                    var $this = $(this),
                        data = $this.data('eraser');

                    if (!data) {
                        var width = $this.width(),
                            height = $this.height(),
                            pos = $this.offset(),
                            $canvas = $("<canvas/>"),
                            canvas = $canvas.get(0),
                            size = (options && options.size) ? options.size : 100,
                            completeRatio = (options && options.completeRatio) ? options.completeRatio : .7,
                            completeFunction = (options && options.completeFunction) ? options.completeFunction : null,
                            parts = [],
                            colParts = Math.floor(width / size),
                            numParts = colParts * Math.floor(height / size),
                            n = numParts,
                            ctx = canvas.getContext("2d");

                        // replace target with canvas
                        $this.after($canvas);
                        canvas.id = this.id;
                        canvas.className = this.className;
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(this, 0, 0);
                        $this.remove();

                        // prepare context for drawing operations
                        ctx.globalCompositeOperation = "destination-out";
                        ctx.strokeStyle = 'rgba(255,0,0,255)';
                        ctx.lineWidth = size;

                        ctx.lineCap = "round";
                        // bind events
                        $canvas.bind('mouseenter.eraser', methods.mouseDown);
                        $canvas.bind('mouseenter.eraser', methods.touchStart);
                        $canvas.bind('touchmove.eraser', methods.touchMove);
                        $canvas.bind('mouseleave.eraser', methods.touchEnd);

                        // reset parts
                        while (n--) parts.push(1);

                        // store values
                        data = {
                            posX: pos.left,
                            posY: pos.top,
                            touchDown: false,
                            touchID: -999,
                            touchX: 0,
                            touchY: 0,
                            ptouchX: 0,
                            ptouchY: 0,
                            canvas: $canvas,
                            ctx: ctx,
                            w: width,
                            h: height,
                            source: this,
                            size: size,
                            parts: parts,
                            colParts: colParts,
                            numParts: numParts,
                            ratio: 0,
                            complete: false,
                            completeRatio: completeRatio,
                            completeFunction: completeFunction
                        };
                        $canvas.data('eraser', data);

                        // listen for resize event to update offset values	
                        $(window).resize(function () {
                            var pos = $canvas.offset();
                            data.posX = pos.left;
                            data.posY = pos.top;
                        });
                    }
                });
            },
            touchStart: function (event) {
                var $this = $(this),
                    data = $this.data('eraser');

                if (!data.touchDown) {
                    var t = event.originalEvent.changedTouches[0],
                        tx = t.pageX - data.posX,
                        ty = t.pageY - data.posY;
                    methods.evaluatePoint(data, tx, ty);
                    data.touchDown = true;
                    data.touchID = t.identifier;
                    data.touchX = tx;
                    data.touchY = ty;
                    event.preventDefault();
                }
            },
            touchMove: function (event) {
                var $this = $(this),
                    data = $this.data('eraser');

                if (data.touchDown) {
                    var ta = event.originalEvent.changedTouches,
                        n = ta.length;
                    while (n--)
                        if (ta[n].identifier == data.touchID) {
                            var tx = ta[n].pageX - data.posX,
                                ty = ta[n].pageY - data.posY;
                            methods.evaluatePoint(data, tx, ty);
                            data.ctx.beginPath();
                            data.ctx.moveTo(data.touchX, data.touchY);
                            data.touchX = tx;
                            data.touchY = ty;
                            data.ctx.lineTo(data.touchX, data.touchY);
                            data.ctx.stroke();
                            event.preventDefault();
                            break;
                        }
                }
            },
            touchEnd: function (event) {
                var $this = $(this),
                    data = $this.data('eraser');

                if (data.touchDown) {
                    var ta = event.originalEvent.changedTouches,
                        n = ta.length;
                    while (n--)
                        if (ta[n].identifier == data.touchID) {
                            data.touchDown = false;
                            event.preventDefault();
                            break;
                        }
                }
            },

            evaluatePoint: function (data, tx, ty) {
                var p = Math.floor(tx / data.size) + Math.floor(ty / data.size) * data.colParts;
                if (p >= 0 && p < data.numParts) {
                    data.ratio += data.parts[p];
                    data.parts[p] = 0;
                    if (!data.complete) {
                        if (data.ratio / data.numParts >= data.completeRatio) {
                            data.complete = true;
                            if (data.completeFunction != null) data.completeFunction();
                        }
                    }
                }

            },

            mouseDown: function (event) {
                var $this = $(this),
                    data = $this.data('eraser'),
                    tx = event.pageX - data.posX,
                    ty = event.pageY - data.posY;
                methods.evaluatePoint(data, tx, ty);
                data.touchDown = true;
                data.touchX = tx;
                data.touchY = ty;
                data.ctx.beginPath();
                data.ctx.moveTo(data.touchX - 1, data.touchY);
                data.ctx.lineTo(data.touchX, data.touchY);
                data.ctx.stroke();
                $this.bind('mousemove.eraser', methods.mouseMove);
                $(document).bind('mouseup.eraser', data, methods.mouseUp);
                event.preventDefault();
            },

            mouseMove: function (event) {
                var $this = $(this),
                    data = $this.data('eraser'),
                    tx = event.pageX - data.posX,
                    ty = event.pageY - data.posY;
                methods.evaluatePoint(data, tx, ty);
                data.ctx.beginPath();
                data.ctx.moveTo(data.touchX, data.touchY);
                data.touchX = tx;
                data.touchY = ty;
                data.ctx.lineTo(data.touchX, data.touchY);
                data.ctx.stroke();
                event.preventDefault();
            },

            mouseUp: function (event) {
                var data = event.data,
                    $this = data.canvas;
                data.touchDown = false;
                $this.unbind('mousemove.eraser');
                $(document).unbind('mouseup.eraser');
                event.preventDefault();
            },

            clear: function () {
                var $this = $(this),
                    data = $this.data('eraser');
                if (data) {
                    data.ctx.clearRect(0, 0, data.w, data.h);
                    var n = data.numParts;
                    while (n--) data.parts[n] = 0;
                    data.ratio = data.numParts;
                    data.complete = true;
                    if (data.completeFunction != null) data.completeFunction();
                }
            },

            size: function (value) {
                var $this = $(this),
                    data = $this.data('eraser');
                if (data && value) {
                    data.size = value;
                    data.ctx.lineWidth = value;
                }
            },

            reset: function () {
                var $this = $(this),
                    data = $this.data('eraser');
                if (data) {
                    data.ctx.globalCompositeOperation = "source-over";
                    data.ctx.drawImage(data.source, 0, 0);
                    data.ctx.globalCompositeOperation = "destination-out";
                    var n = data.numParts;
                    while (n--) data.parts[n] = 1;
                    data.ratio = 0;
                    data.complete = false;
                }
            }

        };

        $.fn.eraser = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not yet exist on jQuery.eraser');
            }
        };
    })(jQuery);
    addEventListener("load", init, false);

    function init(event) {
        $("#redux").eraser({
            size: 30
        });

        // you can alse specify the brush size (in pixel) by using options :
        // $("#redux").eraser({size: 20});
    }

    function remove(event) {
        $("#redux").eraser('clear');
        event.preventDefault();
    }

    function reset(event) {
        $("#redux").eraser('reset');
        event.preventDefault();
    }
}