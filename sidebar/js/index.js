	$(function(){
		
		init();
		function init(){
			
			$(document).scroll(function(){
//				var leftSideTop = $('.leftSide').offset().top;/*侧边栏距窗口上边的距离*/
				var rightSideTop = $('.rightSide').offset().top;/*内容区距窗口上边的距离*/
//				console.log(rightSideTop);
				var scrollTop = $(document).scrollTop();/*鼠标滚动的高度*/
//				console.log(scrollTop);
				var rightHeight = $('.rightSide').height();
				var leftHeight = $('.leftSide').height();
//				console.log(rightHeight)
				if(scrollTop < rightSideTop){
					$('.leftSide').css({
						'position':'absolute',
						'top': 0 + 'px'
					})
				}
				if(scrollTop >= rightSideTop && scrollTop < (rightSideTop + rightHeight - leftHeight)){
					console.log(1)
					$('.leftSide').css({
						'position':'fixed',
						'top': 0 + 'px'
					})
				}
				else if(scrollTop >= (rightSideTop + rightHeight - leftHeight)){
					$('.leftSide').css({
						'position' : 'absolute',
						'bottom' : 0 + 'px',
						'top' : 'auto'
					})
				}
				
			})
				
		}
			
	})
