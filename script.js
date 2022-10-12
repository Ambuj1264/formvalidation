var alphaExp = /^[a-zA-Z\s]+$/;
		var numExp=/^[0-9]*$/;
		var passExp=/^[a-zA-Z]\w{3,14}$/;
	// var alphaNumExp = /^[a-zA-Z0-9]+$/;
	// var alphaNumSpaceExp = /^[a-zA-Z0-9\s]+$/;
	var alphaAddExp = /^[a-zA-Z0-9\s,.'-]{3,}$/;
	var emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	

function validateData(){
    var x=document.forms["frm"]['uname'].value;
    if(x==""){
        document.getElementById("error1").innerHTML="please enter the name";
        document.getElementById("error1").focus();
        document.getElementById("error1").style="color:red";
        return false;
    }
    else if(!x.match(alphaExp)){
        document.getElementById("error1").innerHTML="please name should be in letter formate";
        return false;
    }
    else{
        document.getElementById("error1").innerHTML="";
    }

    // password validation
    var y=document.getElementById("up").value;
    if(y==""){
        document.getElementById("error2").innerHTML="please enter the name";
        document.getElementById("error2").focus();
        document.getElementById("error2").style="color:red";
        return false;
    }
    else if(!y.match(passExp)){
        document.getElementById("error2").innerHTML="please password formate";
          document.getElementById("error2").style="color:red";
        return false;
    }
    else{
        document.getElementById("error2").innerHTML="";
    }
    //mobile validation
    var z=document.getElementById("movie").value;
    if(z==""){
        document.getElementById("error3").innerHTML="please enter the name";
        document.getElementById("error3").focus();
        document.getElementById("error3").style="color:red";
        return false;
    }
    else if(!z.match(numExp)){
        document.getElementById("error3").innerHTML="please fill number formate";
          document.getElementById("error3").style="color:red";
        return false;
    }
    
    else{
       if(!z.length==10){
            document.getElementById("error3").innerHTML="number should be 10 digits";
            return false;
        }
        else{
        document.getElementById("error3").innerHTML="";}
    }

    //email validation
    var a=document.getElementById("email").value;
    if(a==""){
        document.getElementById("error4").innerHTML="please enter the  right email";
        document.getElementById("error4").focus();
        document.getElementById("error4").style="color:red";
        return false;
    }
    else if(!a.match(emailExp)){
        document.getElementById("error4").innerHTML="please fill email formate";
          document.getElementById("error4").style="color:red";
        return false;
    }
    else{
        document.getElementById("error4").innerHTML="";
    }
    // address validation
    var a=document.getElementById("address").value;
    if(a==""){
        document.getElementById("error5").innerHTML="please enter the name";
        document.getElementById("error5").focus();
        document.getElementById("error5").style="color:red";
        return false;
    }
    else if(!a.match(alphaAddExp)){
        document.getElementById("error5").innerHTML="please fill number formate";
          document.getElementById("error5").style="color:red";
        return false;
    }
    else{
        document.getElementById("error5").innerHTML="";
    }
}

