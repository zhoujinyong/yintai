
window.onload=function(){	
var box=getClass('bannera',document);
	// console.dir(box);
	var as=box[0].getElementsByTagName('a');
	// console.dir(as);
	var bodians=getClass('lunbodian',document);
	// console.dir(bodians);
	var bodiandiv=bodians[0].getElementsByTagName('div');
	// console.dir(bodiandiv);
	var lrclickbox=getClass("xuanzeanniu",document)[0]
	var leftclick=getClass('left',box[0]);
	// console.dir(leftclick);
	var rightclick=getClass('right',box[0]);
	// console.dir(rightclick);
	// 设置第一张为默认图片 第一个轮播点为默认选中颜色
	as[0].style.zIndex=10;
	bodiandiv[0].style.background='#e5004f';
	// 声明下标为0
		var index=0;
		// 调用函数
		t=setInterval(move,2000);
		// 封装函数
		function move(){
			index++;
			// 判断下标如果等于图片的个数，就重新给下标赋值为零
			if (index==as.length) {index=0}; 
			// 循环遍历
			for (var i = 0; i < as.length; i++) {
				// 先把所有照片层级调低，轮播点的颜色为空
				as[i].style.zIndex=0; 
				bodiandiv[i].style.background='';
			};
				as[index].style.zIndex=10;
				bodiandiv[index].style.background='#e5004f';
			}
		box[0].onmouseover=function(){
			clearInterval(t);
			lrclickbox.style.zIndex=15;
			
		};
		box[0].onmouseout=function(){
			t=setInterval(move,2000);
			lrclickbox.style.zIndex=0;
		};
		for (var i = 0; i < bodiandiv.length; i++) {
			bodiandiv[i].index=i;
			bodiandiv[i].onmouseover=function(){
				for (var j = 0; j < as.length; j++) {
					bodiandiv[j].style.background='';
					as[j].style.zIndex=0;
				}
				as[this.index].style.zIndex=10;
				bodiandiv[this.index].style.background='#e5004f';
			}
		};
		rightclick[0].onclick=function(){
			move();
		};
		rightclick[0].onmouseover=function(){
			rightclick[0].style.background='#cc477a';
		}
		rightclick[0].onmouseout=function(){
			rightclick[0].style.background='';
		}
		leftclick[0].onmouseover=function(){
			leftclick[0].style.background='#cc477a';
		}
		leftclick[0].onmouseout=function(){
			leftclick[0].style.background='';
		}
		leftclick[0].onclick=function(){
		index--
		if (index<0) {index=as.length-1};
		for (var i = 0; i < as.length; i++) {
			as[i].style.zIndex=0;
			bodiandiv[i].style.background=""
		};
		as[index].style.zIndex=10;
		bodiandiv[index].style.background="#e5004f"
		}
// 选项卡开始
var xxk=getClass("link",document);
var inner=xxk[0].getElementsByTagName("a");
var hongdian=xxk[0].getElementsByTagName("span");
var shows=getClass("zw3",document);
	
	for (var i = 0; i < inner.length; i++) {
	    inner[i].aa=i;
	    shows[0].style.display='block';
	    hongdian[0].style.display="block";
	    inner[0].style.borderBottom="4px solid red";
		inner[i].onmouseover=function(){
			
		for (var j = 0; j <shows.length; j++) {
　　　shows[j].style.display='none';
		inner[j].style.borderBottom="";
		hongdian[j].style.display="none";
	};
		shows[this.aa].style.display='block';
		this.style.borderBottom="4px solid red";
		hongdian[this.aa].style.display="block";
		};
	};
// 图片四边的动画效果
	var zw4s=getClass('zw4',document);
		// paomaxian(zw4s[0])
		// paomaxian(zw4s[1])
		for (var i = 0; i < zw4s.length; i++) {
			paomaxian(zw4s[i],220,263);
		};
	function paomaxian(zw4s,x,y){
	var zuoshangs=getClass("zuoshang",zw4s);
	var youxias=getClass("youxia",zw4s);
	var shangzuos=getClass("shangzuo",zw4s);
	var xiayous=getClass("xiayou",zw4s);
	
	zw4s.onmouseover=function(){
		animate(zuoshangs[0],{height:y},400);
		animate(youxias[0],{height:y},400);
		animate(shangzuos[0],{width:x},400);
		animate(xiayous[0],{width:x},400);
	}
	zw4s.onmouseout=function(){
		animate(zuoshangs[0],{height:0},400);
		animate(youxias[0],{height:0},400);
		animate(shangzuos[0],{width:0},400);
		animate(xiayous[0],{width:0},400);
	}
	}
	// 热门品牌动画
	var zw4s=$('.zhengwen4')
	for (var i = 0; i < zw4s.length; i++) {
		paomaxian(zw4s[i],198,250)
	};
	// 时尚名品动画
	var zw4s=$('.shishang8a');
	for (var i = 0; i < zw4s.length; i++) {
		paomaxian(zw4s[i],272,182)
	};


// 热门品牌选项卡
var anniu=getClass('zhengwen3a',document);
var ab=anniu[0].getElementsByTagName('a');
var span1=anniu[0].getElementsByTagName('span');
var zhenwen=getClass('zhengwen4box',document);
	for (var i = 0; i < ab.length; i++) {
		ab[i].aa=i;
		ab[0].style.borderBottom='3px solid red';
		span1[0].style.display='block';
		zhenwen[0].style.display='block';
		ab[i].onmouseover=function(){
			for (var j = 0; j < zhenwen.length; j++) {
				ab[j].style.borderBottom='';
		span1[j].style.display='none';
		zhenwen[j].style.display='none';
			};
			
		span1[this.aa].style.display='block';
		zhenwen[this.aa].style.display='block';
		this.style.borderBottom='3px solid red';
		};
	};
// 时尚名品无缝轮播模式图模式
	var box=$('.shishang7');
   	for(var i=0;i<box.length;i++){
   		fengzhuang(box[i])
   	}
   	function fengzhuang(box){
   		var n=0;
	   	var next=0;	
	    var boximg=$('.imgbox',box)[0]
	   	var img=$("a",box);
	    	img[0].style.left='0';
	   	var anniu=$('.sh7a',box);
	   		anniu[0].style.background='red';
	   	var btn=$('.shanniu',box)[0];
	   	var left=$('.shleft',btn);
	   	var right=$('.shright',btn);
	   	var iw=parseInt(getStyle(img[0],"width"));
//向左轮播
   	function lunbo(){
   		next=n+1;
   	if (next==img.length) {
   		return
   	};			
    for (var i = 0; i < img.length; i++) {
     	anniu[i].style.background=''
    };	
   		img[next].style.left=iw+'px';
   		animate(img[n],{left:-iw},700);
   		animate(img[next],{left:0},700);
   		anniu[n].style.background=""
   		anniu[next].style.background='red'
   		n=next;	
   };
   
   //向右轮播
   function fanxiang(){
     	next=n-1;
   	if (next<0) {
   		return;
   	};			
    for (var i = 0; i < img.length; i++) {
     	anniu[i].style.background=''
    };	
   		img[next].style.left=-iw+'px';
   		animate(img[n],{left:iw},700);
   		animate(img[next],{left:0},700);
   		anniu[n].style.background=""
   		anniu[next].style.background='red'
   		n=next;	
   }
	anniu[0].onmouseover=function(){
	 	fanxiang(); 	 	
 	};
  	anniu[1].onmouseover=function(){
  		lunbo();   		
   	}
	box.onmouseover=function(){
		btn.style.display="block"
		box.style.opacity='0.8';
	}
	box.onmouseout=function(){
		btn.style.display="none"
		box.style.opacity='1';
	}
	btn.onmousedown=function(){
		return false;
	}
	right[0].onclick=function(){
	 		lunbo();
	}
	left[0].onclick=function(){
		fanxiang();
	}
   	
	// 无缝轮播
	var shishang5=$('.shishang5')
	for (var i = 0; i < shishang5.length; i++) {
		diaoyong(shishang5[i])
	};
	function diaoyong(shishang5){
	var tupianbox=$('.shishang6',shishang5);
	// alert(tupianbox.length)
	var leftbtn=$('.shishang6b',shishang5);
	var rightbtn=$('.shishang6c',shishang5);
	var h=document.documentElement.clientHeight;
	var zw=tupianbox[0].offsetWidth;
	tupianbox[0].style.left="0"
	var indexs=0;
	var nexts=0;
		// console.log(h)
//	t=setInterval(aar,3000)
	function aar(){
		
		nexts++
		
		if (nexts==tupianbox.length) {
			nexts=0
		};
		 	tupianbox[nexts].style.left=zw+"px"
		animate(tupianbox[indexs],{left:-zw},500);
		animate(tupianbox[nexts],{left:0},500)
	
		indexs=nexts
		
	}
	// shishang5.onmouseover=function(){
	// 		clearInterval(t);
	// };
	// shishang5.onmouseout=function(){
	// 	t=setInterval(aar,3000)
	// };


	// 左右按钮
	leftbtn[0].onclick=function(){
		
		aar()
}
	rightbtn[0].onclick=function(){
//		clearInterval(t);
		
		nexts--
		
		if (nexts<0) {
			nexts=tupianbox.length-1
		};
		 	tupianbox[nexts].style.left=-zw+"px"
		animate(tupianbox[indexs],{left:zw},1000);
		animate(tupianbox[nexts],{left:0},1000)
	
		indexs=nexts;
		
		}
	
}
// 按需加载
	var youhua=$('.youhua');
	var hs=document.documentElement.clientHeight;
	var boximg=[];
	var flags=[];
	var fc=$('a',$('.fc')[0]);
	var aa=true
	for (var i = 0; i < youhua.length; i++) {
		boximg.push(youhua[i].offsetTop);
		flags.push(true);
	};
	window.onscroll=function(){
		var top=document.body.scrollTop||document.documentElement.scrollTop;
		// console.log(h)
		for (var i = 0; i < boximg.length; i++) {
			if(boximg[i]<=top+hs&&flags[i]){
				flags[i]=false;
				var imgs=$('img',youhua[i]);
				for (var j = 0; j < imgs.length; j++) {
					imgs[j].src=imgs[j].getAttribute('asrc')
				};
			}
		};
		//浮窗导航高光
		
		// 浮窗导航
	
	var fca=$('.fc')[0];
	// var h=document.documentElement.clientHeight
	// document.onscroll=function(){
	// var Ih=document.body.scrollTop||document.documentElement.scrollTop;
	
	if(top<1000&&aa){
		aa=false;
		// fca.style.display='none'
   	animate(fca,{bottom:-545},150) 
   	// console.log(hs)
	}
	if(top>=1000&&aa==false){
		aa=true;
		// fca.style.display='block'
	animate(fca,{bottom:(hs-545)/2},150)
	};
	}
	//楼层跳转
//	var youhuatop=
//	console.log(top)

//	for(var i=0;i<fc.length;i++){
//		for(var j=0;j<youhua.length;j++){
//			var youhuatop=youhua[0].offsetTop
//				console.log(youhuatop)
//			if(top>youhuatop){
//				fc[j].className="youhua tianjialei"
//			}				
//			}
	}

	// 头部隐藏卡片
	var wx=$('.wx')[0];
	var hy=$('.wx-erweima')[0]
		yidong(wx)
	var tp=$('.ks4a')[0]
	var aa=$('a',tp)[0]
	var b=tp.getElementsByTagName('b')[0];
	yidong(wx,tp,hy,aa,b)


	var wxs=$('.shouji')[0];
	var hys=$(".shoujji")[0];
	 var tps=$(".weixin")[0];
	var aas=$("a",tps)[0];
	var bs=$("b",tps)[0];
	yidong(wxs,tps,hys,aas,bs);

	var kst=$(".ks3t")[0];
	var ks=$(".ks33")[0];
	var aar=$("a",ks)[0];
	var ksb=$(".ks3b")[0];
	var bb=$("b",ks)[0];
	yidong(kst,ks,ksb,aar,bb);

	function yidong(wx,tp,hy,aa,b){
		hover(wx,function(){
			tp.style.background="#fff"
			hy.style.display="block"
			aa.style.color="red"
			b.style.background=" url(jpg/tubiao05.jpg) 0 -17px no-repeat"

		},function(){
			tp.style.background=""
			hy.style.display="none"
			aa.style.color=""
			b.style.background=""
		})
	}
	

	// banner右边详情页
	var furongqi=$(".banner1c");
	 
	 
		for (var i = 0; i < furongqi.length; i++) {cedao(furongqi[i])
		// console.log(furongqi[i])
		};
	 function cedao(sd){
	 	var bosxq=$(".xiangqin",sd)[0];
	 hover(sd,function(){
	 	bosxq.style.display='block';
	 },function(){
	 	bosxq.style.display='none';
	 })
	}

	// banner上的右侧图标动画
	var boxs=$(".banner1a")[0];
	var imgy=$("img",boxs)[0];
	imgy.onmouseover=function(){
		animate(imgy,{left:583},300)
	}
	imgy.onmouseout=function(){
		animate(imgy,{left:590},300)
	}

// 页脚的三个标志
	var yj=$(".yj")[0];
	var yjimg=$("a",yj);
	for (var i = 0; i < yjimg.length; i++) {
		yejiao(yjimg[i])
	};
	function yejiao(aa){
	hover(aa,function(){
		aa.style.opacity='0.7'
	},function(){
		aa.style.opacity="1"
	})	
	}
	
};