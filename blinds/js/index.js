	var dataObj = {
		"data" : [
			{"imgSrc": "/blinds/img/1.jpg"},
			{"imgSrc": "/blinds/img/2.jpg"},
			{"imgSrc": "/blinds/img/3.jpg"},
			{"imgSrc": "/blinds/img/4.jpg"},
			{"imgSrc": "/blinds/img/5.jpg"},
			{"imgSrc": "/blinds/img/4.jpg"},
			{"imgSrc": "/blinds/img/3.jpg"},
			{"imgSrc": "/blinds/img/2.jpg"},
			{"imgSrc": "/blinds/img/1.jpg"},
		]
	}
	var dataLen = dataObj.data.length;
	var ulBox = document.getElementById('ulBox');
	var html = "";
	init();
	function init(){
		var li = "";
		var img = "";
		var leftW = 0;
		var liW = 0;
		var ulW = 0;
		for(var i = 0;i < dataLen;i ++){
			/*创建节点*/
			li = document.createElement('li');
			img = document.createElement('img');
			/*设置索引*/
			li.index = i;
			/*排列图片块*/
			li.style.left = leftW * i + "px";
			/*图片路径*/
			img.src = dataObj.data[i].imgSrc;
			/*设置图片宽高*/
			img.style.width = 600 + "px";
			img.style.height = 400 + "px";
			/*添加节点*/
			ulBox.appendChild(li);
			li.appendChild(img);
			/*获取图片块和图片盒子的宽度*/
			liW = ulBox.firstElementChild.clientWidth;
			ulW = ulBox.clientWidth;
			/*图片排列的间隔宽度*/
			leftW = (ulW - liW) / (dataLen - 1);
		}
		
		var li = document.getElementsByTagName('li');
		for(var j = 0;j < dataLen;j ++){
			/*创建图片块的移入事件*/
			li[j].onmouseover = function(){
				/*获取点击该图片块的索引*/
				var liIndex = this.index;
				for(var k = 0;k < dataLen;k ++){
					if(k <= liIndex){
						li[k].style.left = k * leftW + "px";
					}
					else if(k < dataLen && k > liIndex){
						li[k].style.left = (k-1)  * leftW + liW + "px";
					}
				}
			}
		}
	}