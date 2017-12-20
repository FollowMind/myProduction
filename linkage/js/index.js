$(function(){
	var capitalHtml = '';
	var capitalLen = cities.data.length;
	for(var i = 0;i < capitalLen;i ++){
		capitalHtml = '<option value="'+cities.data[i].name+'">'+cities.data[i].name+'</option>';
		$('.capital').append(capitalHtml);
	}
	
	var capitalVal = '';
	var capitalIndex = 0;
	var cityLen = 0;
	var cityHtml = '';
	
	initCity();
	function initCity(){
		capitalVal = $('.capital option:selected').text();/*省份*/
		capitalIndex = $('.capital  option:selected').index();/*省份索引*/
		if(capitalIndex > 0){
			--capitalIndex;
			cityLen = cities.data[capitalIndex].city.length;/*市的长度*/
			$('.cities').html('');
			for(var i = 0;i < cityLen;i ++){
				cityHtml = '<option>'+cities.data[capitalIndex].city[i].name+'</option>';
				$('.cities').append(cityHtml);
			}
		}
			
	}
	var cityVal = '';
	var cityIndex = 0;
	var cityLen = 0;
	var countyHtml = '';
	
	initCounty();
	function initCounty(){
		if(capitalVal != '省份'){
			cityVal = $('.cities option:selected').text();/*城市*/
			cityIndex = $('.cities option:selected').index();/*城市索引*/
			cityLen = cities.data[capitalIndex].city[cityIndex].area.length;/*区县的长度*/
			$('.county').html('');/*清空*/
			for(var i = 0;i < cityLen;i ++){
				countyHtml = '<option>'+cities.data[capitalIndex].city[cityIndex].area[i]+'</option>';
				$('.county').append(countyHtml);
			}

		}	
	}
	$('.capital').change(function(){
		initCity();
		initCounty();
	})
	$('.cities').change(function(){
		initCounty()
	})
})	