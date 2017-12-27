	var dataObj = {
		"data" : [
		
		]
	}
	var dataLen = 0;

	var isDataObj = sessionStorage.dataObj;
	if(isDataObj){
		dataObj = JSON.parse(isDataObj);
		dataLen = dataObj.data.length;
		for(var i = 0;i < dataLen;i ++){
				
			if(dataObj.data[i].checkStatus){
				var html = '<li>'+
								'<input type="checkbox" class="check" checked/>'+
								'<div class="content lineThrough">'+dataObj.data[i].content+'</div>'+
								'<span class="delete">×</span>'+
							'</li>';
			}else{
				var html = '<li>'+
								'<input type="checkbox" class="check"/>'+
								'<div class="content">'+dataObj.data[i].content+'</div>'+
								'<span class="delete">×</span>'+
							'</li>';
			}
			$('#ulBox').append(html);
			
			$('.check').unbind('change').on('change',check);
			$('.delete').unbind('click').on('click',deleteLi);
			judge();
		}
	}
	
	$('#text').on('keypress',function(){
		var e = window.event || window.which;
		if(e.keyCode == 13){
			addData();
			$('#text').val('');
		}
	})
	/*全选*/
	$('#checkAll').on('change',function(){
		var isCheckAll = $('#checkAll').is(':checked');
		$('#ulBox').find('.check').prop('checked',isCheckAll);
		if(isCheckAll){
			$('#ulBox').find('.content').removeClass('lineThrough').addClass('lineThrough');
		}else{
			$('#ulBox').find('.content').removeClass('lineThrough');
		}
		judge();
		dataObj = JSON.parse(sessionStorage.dataObj);
		dataLen = dataObj.data.length;
		for(var i = 0 ;i < dataLen;i ++){
			dataObj.data[i].checkStatus = isCheckAll;
		}
		sessionStorage.dataObj = JSON.stringify(dataObj);
	})
	/*添加数据*/
	function addData(){
		var text = $('#text').val();
		if($.trim(text)){
			var len = $('#ulBox').children().length;
			var html = '';
			var flag = 1;
			for(var i = 0;i < len;i ++){
				var others = $('#ulBox').children().eq(i).children('.content').text();
				if(text == others){
					flag = 0;
					alert('重复了！亲');
					break;
				}
			}
			if(flag == 1){
				html = '<li>'+
							'<input type="checkbox" class="check"/>'+
							'<div class="content">'+text+'</div>'+
							'<span class="delete">×</span>'+
						'</li>';
				$('#ulBox').append(html);
				
				/*存储数据*/
				tempObj = {
					"checkStatus" : false,
					"content" : text
				}
				dataObj.data.push(tempObj);
				sessionStorage.dataObj = JSON.stringify(dataObj);
				
				judge();
				$('.check').unbind('change').on('change',check);
				$('.delete').unbind('click').on('click',deleteLi);
			}	
		}else{
			alert('不能为空哦！亲');
		}
	}
	/*删除数据*/
	function deleteLi(){
		var index = $(this).parents('li').index();
		dataObj = JSON.parse(sessionStorage.dataObj);
		dataObj.data.splice(index,1);
		sessionStorage.dataObj = JSON.stringify(dataObj);
		$('#ulBox').find('li').eq(index).remove();
		judge();
	}
	/*选择数据*/
	function check(){
		/*判断是否选择*/
		var isChecked = $(this).is(':checked');
		
		/*若选择*/
		if(isChecked){
			/*给文本内容加class名*/
			$(this).next('.content').addClass('lineThrough');
		}else{
			$('#checkAll').prop('checked',isChecked);
			
			$(this).next('.content').removeClass('lineThrough');
		}
		$(this).prop('checked',isChecked);
		judge();
		var index = $(this).parents('li').index();
//		console.log(index)
		dataObj = JSON.parse(sessionStorage.dataObj);
		
		dataObj.data[index].checkStatus = isChecked;
//		$(this).prop('checked',isChecked);
		
		sessionStorage.dataObj = JSON.stringify(dataObj);
	}
	/*判断数据是否全部选完*/
	function judge(){
		/*这里是判断是否所有的选项都选择*/
		/*获取li的个数*/
		var len = $('#ulBox').find('li').length;
		var  flag = 1;
		if(len > 0){
			$('#checkAll').css('display','block');
			/*通过for循环找出有没选中的*/
			for(var i = 0;i < len;i ++){
				var tempLi = $('#ulBox').find('li').eq(i).find('.check').is(':checked');
				if(tempLi == false){
					flag = 0;
					$('#checkAll').prop('checked',tempLi);
					break;
				}
			}
			if(flag == 1){
				$('#checkAll').prop('checked',tempLi);
			}
		}else{
			$('#checkAll').css('display','none');
		}	
	}
