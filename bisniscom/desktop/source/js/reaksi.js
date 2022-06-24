var currentUrl = window.location.href,
    split_cookie = document.cookie.split(";");
$(window).on('load', function () {
        var e = String(currentUrl.split("/")[6]),
            i = $("#ip_client").val();
        i = String(i),
            $.ajax({
                url: "https://services.bisnis.com/reak/reaction_api/index",
                type: "GET",
                data: {
                    post_id: e
                },
                dataType: "jsonp",
                beforeSend: function () {},
                success: function (e, a, t) {
                    var d = e;
                    if (1 == d.status) {
                        var s = d.data.reaction.length,
                            n = "",
                            r = "",
                            c = "",
                            g = "",
                            l = "",
                            o = "";
                        if (s > 0) {
                            for (var p = [], v = [], u = [], w = [], h = [], _ = [], k = 0; k < s; k++) {
                                var C = d.data.reaction[k];
                                "1" === C.sticker_id ? p.push(d.data.reaction[k]) : "2" === C.sticker_id ? v.push(d.data.reaction[k]) : "3" === C.sticker_id ? u.push(d.data.reaction[k]) : "4" === C.sticker_id ? w.push(d.data.reaction[k]) : "5" === C.sticker_id ? h.push(d.data.reaction[k]) : "6" === C.sticker_id && _.push(d.data.reaction[k])
                            }
                            if (p)
                                if (n += '<div class="percentage" id="percent_suka">' + (100 * p.length / s).toFixed(0) + "%</div>",
                                    document.getElementById("percent_suka").innerHTML = n,
                                    p.length > 0)
                                    for (var f = 0; f < p.length; f++) {
                                        1 == p[f].hasOwnProperty("ip_address") && p[f].ip_address == i && ($("#widget-suka").removeClass("inactive"),
                                            $("#widget-senang").addClass("inactive"),
                                            $("#widget-bangga").addClass("inactive"),
                                            $("#widget-terinspirasi").addClass("inactive"),
                                            $("#widget-tidaksuka").addClass("inactive"),
                                            $("#widget-sedih").addClass("inactive"))
                                    }
                            if (v)
                                if (r += '<div class="percentage" id="percent_senang">' + (100 * v.length / s).toFixed(0) + "%</div>",
                                    document.getElementById("percent_senang").innerHTML = r,
                                    v.length > 0)
                                    for (f = 0; f < v.length; f++) {
                                        1 == v[f].hasOwnProperty("ip_address") && v[f].ip_address == i && ($("#widget-suka").addClass("inactive"),
                                            $("#widget-senang").removeClass("inactive"),
                                            $("#widget-bangga").addClass("inactive"),
                                            $("#widget-terinspirasi").addClass("inactive"),
                                            $("#widget-tidaksuka").addClass("inactive"),
                                            $("#widget-sedih").addClass("inactive"))
                                    }
                            if (u)
                                if (c += '<div class="percentage" id="percent_bangga">' + (100 * u.length / s).toFixed(0) + "%</div>",
                                    document.getElementById("percent_bangga").innerHTML = c,
                                    u.length > 0)
                                    for (f = 0; f < u.length; f++) {
                                        1 == u[f].hasOwnProperty("ip_address") && u[f].ip_address == i && ($("#widget-suka").addClass("inactive"),
                                            $("#widget-senang").addClass("inactive"),
                                            $("#widget-bangga").removeClass("inactive"),
                                            $("#widget-terinspirasi").addClass("inactive"),
                                            $("#widget-tidaksuka").addClass("inactive"),
                                            $("#widget-sedih").addClass("inactive"))
                                    }
                            if (w)
                                if (g += '<div class="percentage" id="percent_terinspirasi">' + (100 * w.length / s).toFixed(0) + "%</div>",
                                    document.getElementById("percent_terinspirasi").innerHTML = g,
                                    w.length > 0)
                                    for (f = 0; f < w.length; f++) {
                                        1 == w[f].hasOwnProperty("ip_address") && w[f].ip_address == i && ($("#widget-suka").addClass("inactive"),
                                            $("#widget-senang").addClass("inactive"),
                                            $("#widget-bangga").addClass("inactive"),
                                            $("#widget-terinspirasi").removeClass("inactive"),
                                            $("#widget-tidaksuka").addClass("inactive"),
                                            $("#widget-sedih").addClass("inactive"))
                                    }
                            if (h)
                                if (l += '<div class="percentage" id="percent_tidaksuka">' + (100 * h.length / s).toFixed(0) + "%</div>",
                                    document.getElementById("percent_tidaksuka").innerHTML = l,
                                    h.length > 0)
                                    for (f = 0; f < h.length; f++) {
                                        1 == h[f].hasOwnProperty("ip_address") && h[f].ip_address == i && ($("#widget-suka").addClass("inactive"),
                                            $("#widget-senang").addClass("inactive"),
                                            $("#widget-bangga").addClass("inactive"),
                                            $("#widget-terinspirasi").addClass("inactive"),
                                            $("#widget-tidaksuka").removeClass("inactive"),
                                            $("#widget-sedih").addClass("inactive"))
                                    }
                            if (_)
                                if (o += '<div class="percentage" id="percent_sedih">' + (100 * _.length / s).toFixed(0) + "%</div>",
                                    document.getElementById("percent_sedih").innerHTML = o,
                                    _.length > 0)
                                    for (f = 0; f < _.length; f++) {
                                        1 == _[f].hasOwnProperty("ip_address") && _[f].ip_address == i && ($("#widget-suka").addClass("inactive"),
                                            $("#widget-senang").addClass("inactive"),
                                            $("#widget-bangga").addClass("inactive"),
                                            $("#widget-terinspirasi").addClass("inactive"),
                                            $("#widget-tidaksuka").addClass("inactive"),
                                            $("#widget-sedih").removeClass("inactive"))
                                    }
                        }
                    }
                },
                error: function (e) {
                    $(window).on('load', function () {});
                }
            })
    }),
    $(document).ready(function () {
        $(".hover-emoticon").click(function () {
            var e = String(currentUrl.split("/")[6]),
                i = document.getElementsByTagName("h1")[0].innerHTML,
                a = String(currentUrl.split("/")[7]),
                t = String(currentUrl.split("/")[4]),
                d = String(currentUrl.split("/")[5]),
                s = $("#ip_client").val(),
                n = $(this).data("value"),
                r = currentUrl;
            "" != n && (sticker_genre = 1 == n ? "Suka" : 2 == n ? "Senang" : 3 == n ? "Bangga" : 4 == n ? "Terinspirasi" : 5 == n ? "Tidak Suka" : "Sedih"),
                confirm("Anda " + sticker_genre + " dengan artikel ini?") && $.ajax({
                    url: "https://services.bisnis.com/reak/reaction_api/reaction",
                    type: "GET",
                    data: {
                        post_id: e,
                        post_title: i,
                        post_slug: a,
                        post_date: t,
                        post_categoryId: d,
                        ip_address: s,
                        sticker_id: n,
                        link_article: r
                    },
                    dataType: "jsonp",
                    beforeSend: function () {},
                    success: function (e) {
                        $(window).on('load', function () {});
                    },
                    error: function (e) {
                        $(window).on('load', function () {});
                    }
                })
        })
    });