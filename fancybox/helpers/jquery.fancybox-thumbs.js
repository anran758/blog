!function(r){r.fancybox.helpers.thumbs={defaults:{width:50,height:50,position:"bottom",source:function(t){var i;return i=!(i=t.element?r(t.element).find("img").attr("src"):i)&&"image"===t.type&&t.href?t.href:i}},wrap:null,list:null,width:0,init:function(t,h){for(var n=this,l=t.width,a=t.height,e=t.source,i="",s=0;s<h.group.length;s++)i+='<li><a style="width:'+l+"px;height:"+a+'px;" href="javascript:jQuery.fancybox.jumpto('+s+');"></a></li>';this.wrap=r('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"),this.list=r("<ul>"+i+"</ul>").appendTo(this.wrap),r.each(h.group,function(o){var t=h.group[o],i=e(t);i&&r("<img />").load(function(){var t,i,h,e=this.width,s=this.height;n.list&&e&&s&&(t=e/l,i=s/a,h=n.list.children().eq(o).find("a"),1<=t&&1<=i&&(s=i<t?(e=Math.floor(e/i),a):(e=l,Math.floor(s/t))),r(this).css({width:e,height:s,top:Math.floor(a/2-s/2),left:Math.floor(l/2-e/2)}),h.width(l).height(a),r(this).hide().appendTo(h).fadeIn(300))}).attr("src",i).attr("title",t.title)}),this.width=this.list.children().eq(0).outerWidth(!0),this.list.width(this.width*(h.group.length+1)).css("left",Math.floor(.5*r(window).width()-(h.index*this.width+.5*this.width)))},beforeLoad:function(t,i){i.group.length<2?i.helpers.thumbs=!1:i.margin["top"===t.position?0:2]+=t.height+15},afterShow:function(t,i){this.list?this.onUpdate(t,i):this.init(t,i),this.list.children().removeClass("active").eq(i.index).addClass("active")},onUpdate:function(t,i){this.list&&this.list.stop(!0).animate({left:Math.floor(.5*r(window).width()-(i.index*this.width+.5*this.width))},150)},beforeClose:function(){this.wrap&&this.wrap.remove(),this.wrap=null,this.list=null,this.width=0}}}(jQuery);