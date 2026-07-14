/* 히어로 배경: 흐르는 초록 리본 (canvas) */
(function () {
  function init() {
    var canvas = document.getElementById("flow");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      var r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.max(1, W * DPR);
      canvas.height = Math.max(1, H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    var LINES = 54;

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < LINES; i++) {
        var p = i / (LINES - 1);           // 0..1 : 리본 두께 방향
        ctx.beginPath();
        for (var x = 0; x <= W; x += 8) {
          var xn = x / W;
          var base = H * 0.52
            + Math.sin(xn * 3.0 + t * 0.00035) * H * 0.17
            + Math.sin(xn * 6.4 + t * 0.00018) * H * 0.06;
          var thick = (Math.sin(xn * 2.4 + 1.1) * 0.5 + 0.5) * H * 0.34 + H * 0.03;
          var y = base + (p - 0.5) * thick;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        var g = ctx.createLinearGradient(0, 0, W, 0);
        g.addColorStop(0.00, "rgba(126,148,99,0)");
        g.addColorStop(0.20, "rgba(110,133,82,0.45)");   // sage
        g.addColorStop(0.55, "rgba(82,104,58,0.75)");    // deep sage — 가운데 더 진하게
        g.addColorStop(0.85, "rgba(140,160,110,0.50)");  // soft sage
        g.addColorStop(1.00, "rgba(154,106,59,0.34)");   // oak brown hint
        ctx.strokeStyle = g;
        ctx.globalAlpha = 0.28 + 0.46 * (1 - Math.abs(p - 0.5) * 2);
        ctx.lineWidth = 1.3;                              // 살짝 두껍게
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    if (reduce) { draw(0); return; }
    (function loop(ts) { draw(ts || 0); requestAnimationFrame(loop); })(0);
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
  // Material 즉시 로딩(instant navigation) 대응
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(init);
  }
})();
