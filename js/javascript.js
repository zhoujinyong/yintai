/*数组中取最大值*/

function getMax (arr) {
	var num=arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (num<arr[i]) {
			num=arr[i]
		};
	};
	return num;
}

/*数组中删除指定元素*/
function delVal(arr,Val){
	var newArr=[];
	var j=0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]!=Val) {
			newArr[j]=arr[i];
			j++;
		};
	};
	return newArr;
}
/*数组中删除重复*/
function delCc(arr){
	var a=[]
	for (var i = 0; i < arr.length; i++) {
		var s=true
		for (var j = 0; j < a.length; j++) {
			if (a[j]==arr[i]) {
				s=false;
			};
		};if (s) {
			a[a.length]=arr[i]
		};
	};
	return a;
}
/*给数组末尾加数或数组*/
function push(){
	var a=arguments[0]
	for (var i = 1; i < arguments.length; i++) {
		a[a.length]=arguments[i]
	};
	return a.length;
}
/*给数组前加数或数组*/
function push1(){
	var	a=arguments[0];
	var b=[];
	for (var i = 0; i < a.length; i++) {
		b[b.length]=a[i];
	}
	 a.length=0;
	for (var i = 1; i < arguments.length; i++) {
		a[a.length]=arguments[i]
	};
	for (var i = 0; i < b.length; i++) {
		a[a.length]=b[i]
	};
	return a;

}
/*数组排序*/
function paixu(arr){
	var c;                                         //声明变量调换位置
	for (var i = 0; i < arr.length-1; i++) {       //
		for (var j = i+1; j < arr.length; j++) {
			if (arr[i]>arr[j]) {
				c=arr[i];
				arr[i]=arr[j]
				arr[j]=c
			};
		};
	};
	return arr;
}
/*删除数组末尾值并返回被删除的值*/
function delEnd (arr) {
	var end=arr[arr.length-1];   //arr的最后一个数
	arr.length=arr.length-1;            //arr长度-1
	return end;
}
/*删除数组开头值并返回被删除的值*/
function delStart(arr){
	var start=arr[0]                           //开头值取出来
	var b=[];                                  //后面的数放在新的数组
	for (var i = 1; i < arr.length; i++) {
		b[b.length]=arr[i]
	};
	arr.length=0;                              //清空数组
	for (var i = 0; i < b.length; i++) {       //新数组放到原数组里
		arr[arr.length]=b[i]
	};
    return start;
}

/*class类名的获取*/
function getClass(a,b){    //a 字符串
	//判断
	if (//判断是否支持
		document.getElementsByClassName) {
		//支持返回集合
		return b.getElementsByClassName(a);
	}else{
		//不支持的话获取全部标签
		var all=b.getElementsByTagName('*');
		var arr=[];
		//进行遍历 找到自己需要的并且放入新的集合里面
		for (var i = 0; i < all.length; i++) {
			if(checkClass(all[i].className,a)){
				 arr.push(all[i]);
			}
		}
		return arr;
	}
	//返回
	
}
/*挑选 class */
function checkClass(a,b){
	var arr=a.split(' ')
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==b) {
			return true;
		};
	};
	return false;
}


/*获取或改变内容*/
function text(obj,val){
	if (val==undefined) {
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText
		}
	}else{
		if(obj.textContent!=undefined){
			 obj.textContent=val;
		}else{
			 obj.innerText=val 
		}
	}
}

/*获取通用样式*/

function getStyle(obj,attr){
	if (obj.currentStyle!=undefined) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}
/*获取*/
function $(selector,range){
	//判断类型
	if (typeof selector=="string") {                             
		range = range || document;
		//判断第一个字
		if (selector.charAt(0)=="#") {
			//返回除第一个字 的 字符串
			return range.getElementById(selector.substr(1))
		}
		if (selector.charAt(0)==".") {
			return getClass(selector.substr(1),range)
		}
		// 正则判断
		if (/^[a-zA-Z][a-zA-Z1-6]{0,9}$/) {
			return range.getElementsByTagName(selector,range)
		}
	}else if (typeof selector=="function") {

		return window.onload=selector
	}
}