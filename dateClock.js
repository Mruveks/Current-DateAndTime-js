window.onload = dateclock;

function dateclock()
	{
		var today = new Date(); 
		
		var day = today.getDate();
		if(day<10) day = "0"+day;
		
		var month = today.getMonth()+1;
		if(month<10) month = "0"+month;
		
		var year = today.getFullYear();
		
		var hours = today.getHours();
		if(hours<10) hours = "0"+hours;
		
		var minutes = today.getMinutes();
		if(minutes<10) minutes = "0"+minutes;
		
		var seconds = today.getSeconds();
		if(seconds<10) seconds = "0"+seconds;
		
		document.getElementById("clock").innerHTML = +hours+":"+minutes+":"+seconds+" <br> "+day+"/"+month+"/"+year;
		
		setTimeout("dateclock()",1000);
	}

