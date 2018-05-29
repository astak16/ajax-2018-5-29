myButton.addEventListener('click',function(){
	let request = new XMLHttpRequest()
	request.onreadystatechange = function(){
		if(request.readyState === 4){
			if(request.status === 200){	//请求成功
				let string = request.responseText
				let object = JSON.parse(string)
				console.log(object)
			}
		}
	}
	request.open('post','http://jack.com:8889/xxx')		//配置request
	request.send()

})