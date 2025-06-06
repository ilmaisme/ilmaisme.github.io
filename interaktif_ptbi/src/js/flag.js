$(document).ready(function () {
	window.onload = function () {
		var flag = document.getElementById('flag');
		drawAmericanFlag(flag, 320, 0, 40);
		flag.style.marginLeft = -(flag.width / 2) + 'px';
		flag.style.marginTop = -(flag.height / 2) + 'px';
		var timer = waveFlag(flag, 20, 10, 150, 200, -0.1);
	};

	function drawAmericanFlag(canvas, width, padX, padY) {
		if (!padX) padX = 0;
		if (!padY) padY = 0;
		// http://www.montney.com/flag/proportions.htm
		var a = width / 1.9;
		var b = width;
		var c = 7 * a / 13;
		var d = 0.76 * a;
		var e = 0.054 * a;
		var g = 0.063 * a;
		var k = 0.0616 * a;
		var l = a / 13;
		canvas.width = b + 2 * padX;
		canvas.height = a + 2 * padY;
		var ctx = canvas.getContext('2d');

		// Stripes
		ctx.fillStyle = '#fff';
		ctx.fillRect(padX, padY, b, a);
		ctx.fillStyle = '#900';
		for (var i = 0; i < 13; i += 2) ctx.fillRect(padX, i * l + padY, b, l);

		// Field
		ctx.fillStyle = '#009';
		ctx.fillRect(padX, padY, d, c);

		// Stars
		ctx.fillStyle = '#fff';
		for (var row = 1; row <= 9; ++row) {
			for (var col = 1; col <= 11; ++col) {
				if ((row % 2 == 1 && col % 2 == 0) || (row % 2 == 0 && col % 2 == 1)) continue;
				ctx.beginPath();
				ctx.arc(col * g + padX, row * e + padY, k / 3, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.fill();
			}
		}

		// Border
		ctx.strokeStyle = 'rgba(0,0,0,0.5)';
		ctx.lineWidth = 1;
		ctx.strokeRect(padX, padY, b, a);
	}

	function waveFlag(canvas, wavelength, amplitude, period, shading, squeeze) {
		if (!squeeze) squeeze = 0;
		if (!shading) shading = 100;
		if (!period) period = 200;
		if (!amplitude) amplitude = 10;
		if (!wavelength) wavelength = canvas.width / 10;

		var fps = 30;
		var ctx = canvas.getContext('2d');
		var w = canvas.width, h = canvas.height;
		var od = ctx.getImageData(0, 0, w, h).data;
		// var ct = 0, st=new Date;
		return setInterval(function () {
			var id = ctx.getImageData(0, 0, w, h);
			var d = id.data;
			var now = (new Date) / period;
			for (var y = 0; y < h; ++y) {
				var lastO = 0, shade = 0;
				var sq = (y - h / 2) * squeeze;
				for (var x = 0; x < w; ++x) {
					var px = (y * w + x) * 4;
					var pct = x / w;
					var o = Math.sin(x / wavelength - now) * amplitude * pct;
					var y2 = y + (o + sq * pct) << 0;
					var opx = (y2 * w + x) * 4;
					shade = (o - lastO) * shading;
					d[px] = od[opx] + shade;
					d[px + 1] = od[opx + 1] + shade;
					d[px + 2] = od[opx + 2] + shade;
					d[px + 3] = od[opx + 3];
					lastO = o;
				}
			}
			ctx.putImageData(id, 0, 0);
			// if ((++ct)%100 == 0) console.log( 1000 * ct / (new Date - st));
		}, 1000 / fps);
	}
})