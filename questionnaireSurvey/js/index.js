	$('#addQuestion').click(function(){
		init();
	})
	var inpLen = 0;
	var dataObj = {
			"data":[]
		}
	function init(){
		layer.open({
			type: 1,
			title:"添加问题",
			skin: 'layui-layer-demo', //样式类名
			area: ['420px', 'auto'],
			closeBtn: 0, //不显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			content: '<input type="text" placeholder="输入问题" id="inpQ">'+
				'<div id="selBox"></div>'+
				'<button id="selBtn">添加选项</button>',
			btn:["确定","取消"]
		});
		var html = "";
		
		$('#selBtn').unbind('click').click(function(){
			
			if(inpLen < 4){
				html = '<input type="text" placeholder="输入选项">';
				$('#selBox').append(html);
			}else{
				layer.msg("亲，最多只能添加四项哦！");
			}
			inpLen = $('#selBox input').length;
		})
		
		
		$('.layui-layer-btn0').unbind('click').click(function(){
			dataObj.data = [];
			var inpQ = $('#inpQ').val();
			var inpVal = "";
			var flag = false;
			
			if($.trim(inpQ)){
				if(inpLen > 0){
					for(var i = 0;i < inpLen;i ++){
						inpVal = $('#selBox input').eq(i).val();
						
						if($.trim(inpVal)){
							tempObj = {
								"inpQ" : inpQ,
								"inpVal" : inpVal
							}
							dataObj.data.push(tempObj);
							flag = true;
						}else{
							layer.msg("不能为空哦！");
						}
					}
					if(flag){
						console.log(dataObj.data)
						backFill();
						layer.closeAll();
						inpLen = 0;
					}
						
				}else{
					layer.msg("请输入选项");
				}
			}else{
				layer.msg("请输入问题");
			}
			
		})
	}
	/*回填*/
	function backFill(){
		var addLi = $('#addContent ul');
		var inpHtml = "";
		var liHtml = "";
		for(var i = 0;i < inpLen;i ++){
			inpHtml += '<div><input id="'+(dataObj.data[i].inpQ+i+1)+'" type="radio" name="'+dataObj.data[i].inpQ+'"/><label for="'+(dataObj.data[i].inpQ+i+1)+'">'+dataObj.data[i].inpVal+'</label></div>';
		}
		liHtml = '<li>'+
					'<p>'+dataObj.data[0].inpQ+'</p>'+
					inpHtml+
				'</li>';
		addLi.append(liHtml);
		$('#selBox').html("");
	}
	
	function saveInit(){
		var addContent = $('#addContent').children();
	}
