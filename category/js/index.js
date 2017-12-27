	var imgObj = {
		'catogery':[
			{'data':[/*动物类*/
				{'imgSrc': '/category/img/animal1.jpg'},
				{'imgSrc': '/category/img/animal2.jpg'},
				{'imgSrc': '/category/img/animal3.jpg'},
				{'imgSrc': '/category/img/animal4.jpg'},
			]},
			{'data':[/*建筑类*/
				{'imgSrc':'/category/img/build1.jpg'},
				{'imgSrc':'/category/img/build2.jpg'},
				{'imgSrc':'/category/img/build3.jpg'},
				{'imgSrc':'/category/img/build4.jpg'},
				{'imgSrc':'/category/img/build5.jpg'},
			]},
			{'data':[/*植物类*/
				{'imgSrc':'/category/img/plant1.jpg'},
				{'imgSrc':'/category/img/plant2.jpg'},
				{'imgSrc':'/category/img/plant3.jpg'},
				{'imgSrc':'/category/img/plant4.jpg'},
				{'imgSrc':'/category/img/plant5.jpg'},			
			]},
			{'data':[/*食物类*/
				{'imgSrc':'/category/img/food1.jpg'},
				{'imgSrc':'/category/img/food2.jpg'},
				{'imgSrc':'/category/img/food3.jpg'},
			]},
			{'data':[/*风景类*/
				{'imgSrc':'/category/img/sightseeing1.jpg'},
				{'imgSrc':'/category/img/sightseeing2.jpg'},
				{'imgSrc':'/category/img/sightseeing3.jpg'},
				{'imgSrc':'/category/img/sightseeing4.jpg'},
			]},
		],
	}
	var imgObjLen = imgObj.catogery.length;/*分为了几类*/
	var categoryLiIndex = 0;/*类的索引*/
	var imgDataLen = 0;/*每类的长度*/
	var navLiWidth = 0;/*每个数字块的宽度*/
	var navWidth = 0;/*数字块总的宽度*/
	var imgLiWidth = 0;/*图片块的宽度*/
	$('.category li').unbind('click').on('click',function(){
		init(this);
	})
	init('.active');
	function init(_this){
		$(_this).addClass('active').siblings().removeClass('active');
		categoryLiIndex = $(_this).index();/*点击时的索引*/

		imgDataLen = imgObj.catogery[categoryLiIndex].data.length;/*每类的长度*/
		
		var imgHtml = '';
		$('.imgBox').html('');
		var navHtml = '';
		$('.navigation').html('');
		for(var i = 0;i < imgDataLen;i ++){
			/*添加图片*/
			imgHtml = '<li><img src="'+imgObj.catogery[categoryLiIndex].data[i].imgSrc+'" width="600" height="300"/></li>';
			$('.imgBox').append(imgHtml);
			
			/*添加数字块*/
			if(i == 0){
				navHtml = '<li class="active">'+(i+1)+'</li>';
				$('.imgBox').css('margin-left',0)
			}else{
				navHtml = '<li>'+(i+1)+'</li>';
			}
			$('.navigation').append(navHtml);
			/*数字块的点击事件*/
			$('.navigation li').unbind('click').on('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
				var navIndex = $(this).index();/*获取点击的索引*/
				var marginLeft = -navIndex * imgLiWidth;/*图片块的移动距离*/
				$('.imgBox').css('margin-left',marginLeft);
			})
		}
		/*设置图片块的总宽度*/
		imgLiWidth = $('.imgBox li').width();/*图片块的宽度*/
		$('.imgBox').width(imgLiWidth * imgDataLen);/*图片块总的宽度*/
		
		/*设置数字块的总宽度*/
		navLiWidth = $('.navigation li').width();/*数字块的宽度*/
		$('.navigation').width(navLiWidth * imgDataLen + imgDataLen);/*数字块总的宽度*/
			
			
		
	}
