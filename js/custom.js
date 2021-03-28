function clock(){

	var time= new Date(),
	hour= time.getHours(),
	min= time.getMinutes(),
	sec= time.getSeconds();
	ap='PM';

	if(hour<12){ // upore rkhte hobe nicher if ta theke details vdo 20 min
		ap='AM';
	}
	
	if(hour==0){
		hour=12;
	}

	if(hour>12){
		hour=hour-12;
	}

	//adding 0
	 if(hour<10){
	 	hour= "0" + hour;
	 }

	  if(min<10){
	 	min= "0" + sec
	 }

	  if(sec<10){
	 	sec= "0" + sec;
	 }


	document.getElementById('hours').innerHTML= hour;
	document.getElementById('minute').innerHTML= min;
	document.getElementById('second').innerHTML= sec;
	document.getElementById('meridiem').innerHTML= ap;

}
setInterval(clock, 100);