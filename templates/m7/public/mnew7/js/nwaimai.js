
function gocars_(){
}})}
$(".aswm-show-class-box a").click(function(){
	$(".aswm-show-class-box a").removeClass("onbtns");$(this).addClass("onbtns");
	$root.animate({scrollTop:$("#s"+$.attr(this,"data-href")).offset().top},500);return false});
	$(".search-index-box .s_btns").click(function(){var keys=$("#inx_search").val();if(keys==""){layer.msg("\u8bf7\u8f93\u5165\u5173\u952e\u8bcd\u8fdb\u884c\u641c\u7d22",function(){});$("#inx_search").focus()}else{window.location.href="/search.asp?key="+keys}});
	$(".aswmpro span").click(function(){
			$(".aswmpro span").removeClass("onbtn");$(this).addClass("onbtn");
			if($(this).data("name")=="li"){
				$(".aswm-product-li_on").removeClass("aswm-product-lis");
				$(".aswm-product-li_on").addClass("aswm-product-li");
					$('.btnCart').css('bottom','14px');
					$('.xuanguige').css('bottom','14px');
					$('.newjiacart').css('bottom','14px');
					$('.wmr_cx_info').css('width','80px');
					$('.wmr_cx_info').css('height','80px');
					$('.wmr_cx_info').css('top','20px');
					$('.wmr_cx_info').css('left','20px');
					$('.wmr_cx_info p').css('font-size','14px');
					$('.wmr_cx_info p').css('height','25px');
					$('.wmr_cx_info p span').css('font-size','24px');
			}else{
				if($(this).data("name")=="lis"){
					$('.btnCart').css('bottom','22px');
					$('.xuanguige').css('bottom','22px');
					$('.newjiacart').css('bottom','22px');
					$('.wmr_cx_info').css('width','60px');
					$('.wmr_cx_info').css('height','60px');
					$('.wmr_cx_info').css('top','5px');
					$('.wmr_cx_info').css('left','500px');
					$('.wmr_cx_info p').css('font-size','12px');
					$('.wmr_cx_info p').css('height','20px');
					$('.wmr_cx_info p span').css('font-size','12px');
				}
				
				$(".aswm-product-li_on").removeClass("aswm-product-li");
				$(".aswm-product-li_on").addClass("aswm-product-lis")}});
				$("#mycars").click(function(){
					$("#mycars_box").height($("#mycar_main").height()+20);
					var topnum=$(window).height()-43;
					if($("#mycars").attr("data-btn")=="true"){
						$("#mycars_box").animate({top:topnum});
						$("#mycars").attr("data-btn","false")
					}else{
						var onheight=$(window).height()-$("#mycars_box").height()-40;
						var postzt=$("#mycar_main").data("post");
						$("#mycars_box").animate({top:onheight});
						$("#mycars").attr("data-btn","true");
						if($("#mycar_main").attr("data-post")=="false"){
							var lashop=$("#mycar_main").attr("data-shopid");
$.post("",{shop:lashop},function(data,status){if(status=="success"){if(data=="no"){$("#mycar_main").html('<div class="kong">\u5916\u5356\u5355\u8bfb\u53d6\u5931\u8d25</div>')}else{if(data=="login"){layer.msg("\u767b\u5f55\u4e4b\u540e\u624d\u80fd\u4eab\u53d7\u7f8e\u98df\u54e6",function(){});$("#mycar_main").html('<div class="kong cus" onclick="login();">\u767b\u5f55\u4e4b\u540e\u624d\u80fd\u4eab\u53d7\u7f8e\u98df\u54e6\uff0c\u70b9\u51fb\u767b\u5f55</div>')}else{$("#mycar_main").html(data);$("#mycar_main").attr("data-post","true");$("#mycars_box").height($("#mycar_main").height()+20);$("#mycars_box").animate({top:$(window).height()-$("#mycars_box").height()-40})}}}else{$("#mycar_main").html('<div class="kong">\u5916\u5356\u5355\u8bfb\u53d6\u5931\u8d25</div>')}})}}})});