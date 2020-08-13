function validation()
{
	var number=document.getElementById("mbnum").value;
	var pass=document.getElementById("pass").value;
	var num=/^\d{10}$/;
	var password=/\w/;
	if((num.test(number) && password.test(pass)))
	{
		document.getElementById("errorMsg").style.visibility="hidden";
		var alert=setTimeout(myalert(),100);
		return true;
	}
	else
	{
	
		document.getElementById("errorMsg").style.visibility="visible";	
		return false;
	}
}
function myalert()
{
	alert("success");
}
