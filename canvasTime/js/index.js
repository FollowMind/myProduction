$(function(){
	var canvas = document.getElementById("myCanvas");;
	var ctx = canvas.getContext("2d");
	
	function init(){
		/*刻度*/
		for(var i = 0;i < 60;i ++){
			ctx.save();
			ctx.rotate(6*i*Math.PI/180);/*旋转*/
			ctx.beginPath();
			if(i % 15 == 0){
				ctx.moveTo(0,-180);
				ctx.lineTo(0,-200);
			}else{
				ctx.moveTo(0,-190);
				ctx.lineTo(0,-200);
			}
			
			ctx.closePath();
			ctx.strokeStyle = "#376956";
			if(i % 15 == 0){ctx.lineWidth = 6;}
			else if(i % 5==0){ctx.lineWidth = 4;}
			else{ctx.lineWidth = 2;}
			ctx.stroke();
			ctx.restore();
		}
		
		/*外圆环*/
		ctx.beginPath();
		ctx.strokeStyle = "#376956";
		ctx.arc(0,0,200,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
		
		/*原点*/
		ctx.beginPath();
		ctx.fillStyle = "#376956";
		ctx.arc(0,0,10,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
	ctx.translate(250,250);
	
	setInterval(initDate,1000);
	initDate();
	function initDate(){
		ctx.clearRect(-250,-250,500,500);
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		
		hours = minutes / 60 + hours;
		minutes = seconds /60 + minutes;
		init();
		/*秒针*/
		ctx.save();
		ctx.rotate(6*seconds*(Math.PI/180));
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#376956";	
		ctx.beginPath();
		ctx.moveTo(0,-160);
		ctx.lineTo(0,30);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
		
		
		/*分针*/
		ctx.save();
		ctx.rotate(6*minutes*Math.PI/180);
		ctx.strokeStyle = "#376956";
		ctx.lineWidth = 4;
		ctx.beginPath();
		ctx.moveTo(0,-90);
		ctx.lineTo(0,30);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
		
		/*时针*/
		ctx.save();
		ctx.rotate(30*hours*Math.PI/180);
		ctx.strokeStyle = "#376956";
		ctx.lineWidth = 6;
		ctx.beginPath();
		ctx.moveTo(0,-60);
		ctx.lineTo(0,20);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();

		

		

	}
	
	
})
	
	
