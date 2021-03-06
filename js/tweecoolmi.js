/*Name : TweeCool
 *version: 1.5 
 *Description: get the latest tweets from twitter.
 *Website: www.tweecool.com
 *Licence: no licence, feel free to do whatever you want.
 * Author: TweeCool
 */

! function(e) {
    e.fn.extend({
        tweecool: function(t) {
            function a(e) {
                var t = new Date,
                    a = Date.parse(t),
                    o = 1e3 * e,
                    r = (a - o) / 1e3,
                    i = 1,
                    s = 60,
                    n = 3600,
                    l = 86400,
                    m = 604800,
                    u = 2592e3,
                    h = 31536e3;
                return r > i && s > r ? Math.round(r / i) + " seconds ago" : r >= s && n > r ? Math.round(r / s) + " minutes ago" : r >= n && l > r ? Math.round(r / n) + " hours ago" : r >= l && m > r ? Math.round(r / l) + " days ago" : r >= m && u > r ? Math.round(r / m) + " weeks ago" : r >= u && h > r ? Math.round(r / u) + " months ago" : "over a year ago"
            }
            var o = { username: "tweecool", limit: 5, profile_image: !0, show_time: !0, show_media: !1, show_media_size: "small" },
                t = e.extend(o, t);
            return this.each(function() {
                var o = t,
                    r = e(this),
                    i = e('<ul class="w-list-unstyled">').appendTo(r),
                    s = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                    n = "";
                e.getJSON("https://www.api.tweecool.com/?screenname=" + o.username + "&count=" + o.limit, function(t) {
                    if (t.errors || null == t) return r.html("No tweets available."), !1;
                    if (o.profile_image) var l = '<a style=" float: left; margin-right: 15px;" href="https://twitter.com/' + o.username + '" target="_blank"><img style="border-radius:100%;" src="' + t.user.profile_image_url + '" alt="' + o.username + '" /></a>';
                    else l = "";
                    e.each(t.tweets, function(e, t) {
                        if (o.show_time) var r = a(t.timestamp);
                        else var r = "";
                        n = o.show_media && t.media_url ? '<a href="https://twitter.com/' + o.username + '" target="_blank"><img src="' + t.media_url + ":" + o.show_media_size + '" alt="' + o.username + '" class="media" /></a>' : "", i.append('<li class="w-clearfix" style="margin-bottom: 45px;">' + l + '<div class="tweets_txt" style="overflow:hidden; color: #979797; font-size: 16px; line-height: 26px;">' + t.text.replace(s, '<a style="text-decoration: none; color: #EE2367;" href="$1" target="_blank">$1</a>') + n + ' </br><span style="color: ##B9B9B9; font-size: 14px; margin-top: 5px;">' + r + "</span></div></li>")
                    })
                }).fail(function(e, t, a) { r.html("No tweets available") })
            })
        }
    })
}(jQuery);