	var dataObj = {
		'ulLists' : [
			{
				'imgSrc' :'/carousel/img/mountain.jpg'
			},
			{
				'imgSrc' :'/carousel/img/terrace.jpg'
			},
			{
				'imgSrc' :'/carousel/img/toyama.jpg'
			},
			{
				'imgSrc' :'/carousel/img/willow.jpg'
			}
		]
	}
	var dataArr = dataObj.ulLists;
//	console.log(dataArr);
	
	var dataLen = dataArr.length;
//	console.log(dataLen);
	
	var dataCount = dataLen + 2;
//	console.log(dataCount);
	
	var currentIndex = 1;
	var ulLiHtml = '';
	var olLiHtml = '';
	var ulLiWidth = '';
	var olLiWidth = '';
	var pageIndex = '';
	var olLiIndex = '';
	var T = '';
	init();
	function init(){
		for(var i = 0;i < dataLen;i ++){
			ulLiHtml = '<li>'+
						'<img src="'+dataArr[i].imgSrc+'" width="600" height="300" ontragstart="return false;"/>'+
					'</li>';
			$('.ulBox').append(ulLiHtml);
			olLiHtml = '<li></li>';
			$('.olBox').append(olLiHtml);
		}
		var firstImg = $('.ulBox li').first().clone();
		var lastImg = $('.ulBox li').last().clone();
		$('.ulBox').prepend(lastImg).append(firstImg);
		$('.olBox li').eq(0).addClass('currentPage').siblings().removeClass('currentPage');
		ulLiWidth = $('.ulBox li').width();
		olLiWidth = $('.olBox').width();
		console.log(olLiWidth)
		$('.ulBox').css(
			{
				'width' : dataCount * ulLiWidth + 'px',
				'left' : - ulLiWidth
			}
		);
		$('.olBox').css('margin-left', - olLiWidth / 2 + 'px');
	}
	$('.next').click(function(){
		showNext();
	})
	
	$('.previous').click(function(){
		showPrevious();
	})
	$('.scroll').hover(function(){
		clearInterval(T);
	},function(){
		setTime();
	})
	clearInterval(setTime);
	$('.olBox li').unbind('click').on('click',function(){
		olLiIndex = $(this).index();
		var compIndex = currentIndex - (olLiIndex + 1);
		currentIndex = olLiIndex + 1;
		if(!$('.ulBox').is(':animated')){
			$('.ulBox').animate({'left' : '+=' + compIndex * ulLiWidth + 'px'},500,'swing',function(){
				pageNum();
			})
			
		}
	})
	function showNext(){
		if(!$('.ulBox').is(':animated')){
			currentIndex ++;
			$('.ulBox').animate({'left' : '-=' + ulLiWidth + 'px'},500,'swing',function(){
				if(currentIndex == dataCount-1){
					$('.ulBox').css('left', - ulLiWidth + 'px');
					currentIndex = 1;
				}
				pageNum();
			})
			
		}
	}
	function showPrevious(){
		if(!$('.ulBox').is(':animated')){
			currentIndex --;
			$('.ulBox').animate({'left' : '+=' + ulLiWidth + 'px'},500,'swing',function(){
				if(currentIndex == 0){
					$('.ulBox').css('left', -ulLiWidth * (dataCount - 2) + 'px');
					currentIndex = dataCount - 2;
				}
				pageNum();
			})
			
		}
	}
	function pageNum(){
		pageIndex = currentIndex - 1;
		$('.olBox li').eq(pageIndex).addClass('currentPage').siblings().removeClass('currentPage');
	}
	setTime();
	function setTime(){
		  T = setInterval('showNext()',1500);
	}
	
	
