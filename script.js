function validation()
{
	var number=document.getElementById("mbnum").value;
	var pass=document.getElementById("pass").value;
	var num=/^\d{10}$/;
	var password=/\w/;
	document.getElementById("errorMsg").style.visibility="hidden";
	if((num.test(number) && password.test(pass)))
	{
		var madhu=setTimeout(myalert,100);
	}
	else
	{
	
		document.getElementById("errorMsg").style.visibility="visible";	
	}
}
function myalert()
{
	alert("success");
}
