function validation()
{
	var number=document.getElementById("mbnum").value;
	var pass=document.getElementById("pass").value;
	var num=/^\d{10}$/;
	var password=/\w/;
	if((num.test(number) && password.test(pass)))
	{
		document.getElementById("errorMsg").innerHTML = " ";
	setTimeout(function(){alert("success");	},1);
	}
	else
	{
	
		document.getElementById("errorMsg").innerHTML = "*Invalid Login";
	}
}
