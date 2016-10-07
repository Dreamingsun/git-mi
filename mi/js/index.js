$(document).ready(function($) {
	var flag=window.location.search.replace(/\?/,"").split("&");
	console.log($.cookie());
	//如果用户已登录slideDown(),slideUp()实现上下互动效果
	if(flag[0])  
	{  //登录按钮获取用户名
		$(".index-login b").html($.cookie("name"+flag[1]))
		$(".index-login .user-icon").css("background","url(images/icon/iconfont_up.png) no-repeat center")
		//注册按钮变为我的订单
		$(".reg").html("我的订单");
		$(".reg").attr("href","###");
		//登录按钮的滑动效果
		$(".index-login").hover(function(){
				$(this).css({"color":"#ff6700","background":"#fff"});
				$(this).find("i").css("background","url(images/icon/iconfont_up2.png) no-repeat center");
				$(".user-list").slideDown();
			},function(){
				$(this).css({"color":"#424242"});
				$(".index-login .user-icon").css("background","url(images/icon/iconfont_up3.png) no-repeat center");
		})
		$(".user").mouseleave(function(){//用mouseout不起作用
				$(".user-list").slideUp();
				$(".index-login").css({"color":"#b0b0b0","background":"#333"});
				$(".index-login .user-icon").css("background","url(images/icon/iconfont_up.png) no-repeat center")
		})
	

	}else{//用户还没有登录
		$(".index-login").find("i").css("display","none");
		$(".index-login").css({"width":"auto"});
		$(".topbar_info .user").css({"width":"auto"});
		$(".index-login").click(function(){
			window.location.href="html/login.html";
		})
	}
	$(".topbar_info").find("a").click(function(){
		$(this).css({"color":"#b0b0b0","textDecoration":"none"})
	})
    //购物车滑动效果
		$("#cart").hover(function(){
		$(".cart-content").css("display","block");
	},function(){
		$(".cart-content").css("display","none");
	})
	
    //header-nav滑动效果,获取json数据
    $.get("js/index.json",function(data){
    	var obj=data.result["header-nav"];
    	$(".header-nav ul").find(".nav-item").each(function(i){
    		if(i>=1&&i<=7)
    		{
	    		$(this).mouseenter(function(){
	    		    var str="";
	    			$(".header-nav-menu").slideDown();
	    			var index=$(this).index();
	    			var d=obj[index-1]
	    			for(var i=0;i<d.length;i++)
	    			{
	                    str+="<li><a class='pro-img' href='html/details.html'><img src='"+d[i].img+"'><a href='html/details.html' class='title'>"+d[i].name+"</a><p class='price'>"+d[i].price+"</p></li>"
	    			}
	    			$(".header-nav-menu ul").html(str);
	    			$(".header-nav-menu ul li").eq(0).addClass("bef-none");
	    		})
    		}else{
    			$(this).mouseenter(function(){
    				$(".header-nav-menu").slideUp();
    			})
    		}
    	})
    	$(".header-nav ul").mouseleave(function(){
    		$(".header-nav-menu").slideUp();
    	})
    })
   

		// $(".index-login").click(function(){
		// 	window.location.href="html/login.html";
		// })
})