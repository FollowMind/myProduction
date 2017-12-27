	$(function(){
		init();
		function init(){
			$(document).scroll(function(){
				var rightSideTop = $('.rightSide').offset().top;/*内容区距窗口上边的距离*/
				var scrollTop = $(document).scrollTop();/*鼠标滚动的高度*/
				var rightHeight = $('.rightSide').height();
				var leftHeight = $('.leftSide').height();
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
						'top': 1 + 'px'
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
