function validation()
{
	var number=document.getElementById("mbnum").value;
	var pass=document.getElementById("pass").value;
	var num=/^\d{10}$/;
	var password=/\w/;
	if((num.test(number) && password.test(pass)))
	{
		document.getElementById("errorMsg").style.visibility="hidden";
		var madhu=setTimeout(myalert,100);
	}
	else
	{
		document.getElementById("errorMsg").innerHTML;
		document.getElementById("errorMsg").style.visibility="visible";	
	}
}
function myalert()
{
	alert("success");
}