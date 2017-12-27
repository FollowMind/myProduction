	function show () {
		var e = window.event || window.which;
        if(e.keyCode == 13){
            addData();
            $('#text').val('');
        }
   	}
	$('#text').on('keypress',function(){
		show();
	})
	$('.checkAll').on('click',function(){
		var allSta = $(this).prop('className');
		if(allSta == 'checkAll notAll'){
			$(this).removeClass('notAll').addClass('allRight');
			$('#lists li .sel').removeClass().addClass('sel checkHere');
			dataObj = JSON.parse(sessionStorage.dataObj);
			var len = $('#lists').find('li').length;
			for(var i = 0;i < len;i ++){
				dataObj.data[i].checkStatus = 'sel checkHere';
			}
			sessionStorage.dataObj = JSON.stringify(dataObj);
		}
		if(allSta == 'checkAll allRight'){
			$(this).removeClass('allRight').addClass('notAll');
			$('#lists li .sel').removeClass().addClass('sel notCheck');
			dataObj = JSON.parse(sessionStorage.dataObj);
			var len = $('#lists').find('li').length;
			for(var i = 0;i < len;i ++){
				dataObj.data[i].checkStatus = 'sel notCheck';
			}
			sessionStorage.dataObj = JSON.stringify(dataObj);
		}
    })
	var dataObj = {
			"data" : []
		}
    var tempObj = {
    	"checkStatus" : 0,
    	"content" : 123
    }
    var isDataObj = sessionStorage.dataObj;
    var dataLen = 0;
    if(isDataObj){
    	dataObj = JSON.parse(isDataObj);
    	dataLen = dataObj.data.length;
    	for (var i = 0;i < dataLen;i ++){
    		var html = '<li>' +
            				'<label class="'+dataObj.data[i].checkStatus+'"><span class="right">√</span></label>'+
                            '<div class="content">'+dataObj.data[i].content+'</div>'+
                            '<button class="wrong">×</button>'+
                        '</li>';
            $('#lists').append(html);
            
            $('.sel').unbind('click');
            $('.wrong').unbind('click');
            $('.sel').on('click',right);
            $('.wrong').on('click',wrong);
            judge();
    	}
    }
    else{
    	console.log('null');
    }
	function addData(){
		var text = $('#text').val();
        if($.trim(text)){
        	var len = $('#lists').find('li').length;
        	var prev = '';
        	var flag = 1;
        	for (var i = 0;i < len;i ++){
        		prev =  $('#lists li').eq(i).find('.content').text();
    			if(prev == text){
    				flag = 0;
    				alert('重复了亲！');
    				break;
        		}
        	}
        	if(flag == 1){
        		var lists = $('#lists');
                var li ='<li>' +
            				'<label class="sel notCheck"><span class="right">√</span></label>'+
                            '<div class="content">'+text+'</div>'+
                            '<button class="wrong">×</button>'+
                        '</li>';
                lists.append(li);
                
              	tempObj = {
              		"checkStatus" : "sel notCheck",
              		"content" : text
              	}
              	
	            
                $('.sel').unbind('click');
                $('.wrong').unbind('click');
                $('.sel').on('click',right);
                $('.wrong').on('click',wrong);
                
                dataObj.data.push(tempObj);
	            sessionStorage.dataObj = JSON.stringify(dataObj);
	            judge();
        	}
        }
	}
	var index = 0;
    function wrong(){
    	index = $(this).parent('li').index();
    	console.log(index)
    	dataObj = JSON.parse(sessionStorage.dataObj);
    	dataObj.data.splice(index,1);
    	sessionStorage.dataObj = JSON.stringify(dataObj);
		$(this).parent().remove();
		judge();
    }
    function right(){
    	var selSta = $(this).prop('className');
    	if(selSta == 'sel notCheck'){
    		$(this).removeClass('notCheck').addClass('checkHere');
    		judge();
    		
		}
    	if(selSta == 'sel checkHere'){
    		$(this).removeClass('checkHere').addClass('notCheck');
	    	judge();
	    	/*index = $(this).parent('li').index();
	    	dataObj = JSON.parse(sessionStorage.dataObj);
	    	dataObj.data[index].checkStatus = $(this).prop('className');
	    	sessionStorage.dataObj = JSON.stringify(dataObj);*/
    	}
    	
    		index = $(this).parent('li').index();
    		dataObj = JSON.parse(sessionStorage.dataObj);
    		dataObj.data[index].checkStatus = $(this).prop('className');
    		sessionStorage.dataObj = JSON.stringify(dataObj);
    }
    
    function judge(){
    	var len = $('#lists').find('li').length;
	    var isAllCheck = '';
	    var flag = 1;
	    if(len > 0){
	    	$('.checkAll').css('display','block');
	    	for(var i = 0;i < len;i ++){
	    		isAllCheck = $('#lists li').eq(i).find('.sel').prop('className');
			  	if(isAllCheck == 'sel notCheck'){
			  		flag = 0;
			  		$('.checkAll').removeClass().addClass('checkAll notAll');
			  	}
		    }
		    if(flag == 1){
		    	$('.checkAll').removeClass().addClass('checkAll allRight');
		    }
	    }else{
	    	$('.checkAll').css('display','none');
	    }    
    }
	    
