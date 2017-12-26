	/*窗口宽高*/
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	/*设置图片宽*/
	var imgWidth = 260;
	$('.imgBox > li > img').width(imgWidth)
	
	/*图片块的宽*/
	var liWidth = 268;
	$('.imgBox > li').width(liWidth);
	
	/*图片随着窗口大小排成几列*/
	var cols = parseInt(winWidth / liWidth);
	
	/*图片块的宽度*/
	var boxWidth = parseInt(liWidth * cols + 8);
	$('.box').width(boxWidth);
	
	/*图片块的高度*/
	var liHeight = 0;
	/*图片的路径*/
	var imgObj = [
		{'src' : '/waterfall/img/bragg.png','content' : 'bragg'},
		{'src' : '/waterfall/img/1.jpg','content' : '1'},
		{'src' : '/waterfall/img/hallstart.png','content' : 'hallstart'},
		{'src' : '/waterfall/img/2.jpg','content' : '2'},
		{'src' : '/waterfall/img/iceland.png','content' : 'iceland'},
		{'src' : '/waterfall/img/3.jpg','content' : '3'},
		{'src' : '/waterfall/img/kyoto.png','content' : 'kyoto'},
		{'src' : '/waterfall/img/4.jpg','content' : '4'},
		{'src' : '/waterfall/img/mountain.jpg','content' : 'mountain'},
		{'src' : '/waterfall/img/5.jpg','content' : '5'},
		{'src' : '/waterfall/img/plum.jpg','content' : 'plum'},
		{'src' : '/waterfall/img/6.jpg','content' : '6'},
		{'src' : '/waterfall/img/terrace.jpg','content' : 'terrace'},
		{'src' : '/waterfall/img/7.jpg','content' : '7'},
		{'src' : '/waterfall/img/toyama.jpg','content' : 'toyama'},
		{'src' : '/waterfall/img/8.jpg','content' : '8'},
		{'src' : '/waterfall/img/wallpaper.jpg','content' : 'wallpaper'},
		{'src' : '/waterfall/img/9.jpg','content' : '9'},
		{'src' : '/waterfall/img/willow.jpg','content' : 'willow'},
		{'src' : '/waterfall/img/10.jpg','content' : '10'},
		{'src' : '/waterfall/img/bragg.png','content' : 'bragg'},
		{'src' : '/waterfall/img/11.jpg','content' : '11'},
		{'src' : '/waterfall/img/hallstart.png','content' : 'hallstart'},
		{'src' : '/waterfall/img/12.jpg','content' : '12'},
		{'src' : '/waterfall/img/iceland.png','content' : 'iceland'},
		{'src' : '/waterfall/img/13.jpg','content' : '13'},
		{'src' : '/waterfall/img/kyoto.png','content' : 'kyoto'},
		{'src' : '/waterfall/img/14.jpg','content' : '14'},
		{'src' : '/waterfall/img/mountain.jpg','content' : 'mountain'},
		{'src' : '/waterfall/img/15.jpg','content' : '15'},
		{'src' : '/waterfall/img/plum.jpg','content' : 'plum'},
		{'src' : '/waterfall/img/16.jpg','content' : '16'},
		{'src' : '/waterfall/img/terrace.jpg','content' : 'terrace'},
		{'src' : '/waterfall/img/17.jpg','content' : '17'},
		{'src' : '/waterfall/img/toyama.jpg','content' : 'toyama'},
		{'src' : '/waterfall/img/18.jpg','content' : '18'},
		{'src' : '/waterfall/img/wallpaper.jpg','content' : 'wallpaper'},
		{'src' : '/waterfall/img/19.jpg','content' : '19'},
		{'src' : '/waterfall/img/willow.jpg','content' : 'willow'},
		{'src' : '/waterfall/img/20.jpg','content' : '20 '},
		
	];
	var heightArr = [];
	var minHeight = '';
	var maxHeight = '';
	var minIndex = 0;
	var imgLen = 0;
	var beginIndex = 0;
	initData();
	function initData(){
		imgLen = imgObj.length;
		for(var i = 0;i < imgLen;i ++){
			html = '<li>'+
						'<img src="'+imgObj[i].src+'" width="'+imgWidth+'">'+
						'<a href="javascript:;">'+imgObj[i].content+'</a>'+
					'</li>';
			$('.imgBox').append(html);
		}
		initPosition();
	}
	/*定位函数*/
	function initPosition(){
		imgLen = $('.imgBox').children().length;
		for(var i = beginIndex; i < imgLen;i ++){
			var liHeight = $('.imgBox li').eq(i).height() + 16;
			
			if(i < cols){/*第一排的图片排列*/
				$('.imgBox li').eq(i).css({
					'top' : 8 + 'px',
					'left' : i * liWidth + 8 + 'px'
				})
				heightArr[i] = liHeight;/*把第一排li的高度存储在数组*/
			}else{
	            minHeight = Math.min.apply(null,heightArr);/*最小高度*/
	            
	            maxHeight = Math.max.apply(null,heightArr);/*最大高度*/
	           
	            minIndex = $.inArray(minHeight,heightArr);/*最小高度的索引*/
	           
	            $('.imgBox li').eq(i).css({/*设置li的坐标*/
	                "top" : minHeight + 'px',
	                "left" : $('.imgBox li').eq(minIndex).position().left + 'px'
	            });
	            heightArr[minIndex] += $('.imgBox li').eq(i).height() + 8;/*每添一张图片，就加一张图片的高度*/
	           
	            $('.box').height(maxHeight);/*设置box的高度*/
			}
		}
		beginIndex = imgLen;
	}
	/*滚动的触发事件*/
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop + winHeight > minHeight + 100){
			initData();
		}
	})