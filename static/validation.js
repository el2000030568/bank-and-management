function validateUserName(){
  var name = document.forms['registrationform']['username'].value;

  if(name==''  || name.length<5 || name.length>20){
    document.getElementById("username").style.border = "2px solid red";
    document.getElementById("errorname").style.color = "red";
    document.getElementById("username").value="";
    var error="UserName must contain 5 to 20 characters";
    document.getElementById("username").placeholder=error;
    return false;
  }
  else{
  document.getElementById("username").style.border = "2px solid green";
  document.getElementById("errorname").style.color = "green";
    return true;
  }
}
function validatePassword(){
    var password1 = document.forms['registrationform']['password'].value;
    var patt = new RegExp("[0-9]");
    var result = patt.test(password1);

    if(result==false || password1.length<5 || password1.length>20){
        document.getElementById("password").style.border = "2px solid red";
        var errorpassword = "Password Must Contain 1 digit with 5 to 20 charcters";
        document.getElementById("password").value="";
        document.getElementById("password").placeholder=errorpassword;
        return false;
    }
    else{
        document.getElementById("password").style.border = "2px solid green";
        return true;
    }
}

function validateall(){
    if(validateUserName() & validatePassword()){
        return true;
    }else{
        return false;
    }
}

function firstname1(){
var firstname = document.forms['r1']['C2'].value;
if(firstname='' || firstname.length<5 || firstname.length>20){
          document.getElementById("C2").style.border = "2px solid red";
    document.getElementById("C2").style.color = "red";
    document.getElementById("C2").value="";
    var error="Invalid last name";
    document.getElementById("C2").placeholder=error;
}
else{
  document.getElementById("C2").style.border = "2px solid green";
  document.getElementById("C2").style.color = "green";
    return true;
  }
}

function firstname2(){
var firstname = document.forms['r1']['c4'].value;
if(firstname='' || firstname.length<10 || firstname.length>10){
          document.getElementById("c4").style.border = "2px solid red";
    document.getElementById("c4").style.color = "red";
    document.getElementById("c4").value="";
    var error="Invalid phonenumber , it conatians 10 digits";
    document.getElementById("c4").placeholder=error;
}
else{
  document.getElementById("c4").style.border = "2px solid green";
  document.getElementById("c4").style.color = "green";
    return true;
  }
}
function firstname(){
var firstname = document.forms['r1']['C1'].value;
if(firstname='' || firstname.length<5 || firstname.length>20){
          document.getElementById("C1").style.border = "2px solid red";
    document.getElementById("C1").style.color = "red";
    document.getElementById("C1").value="";
    var error="Invalid";
    document.getElementById("C1").placeholder=error;
}
else{
  document.getElementById("C1").style.border = "2px solid green";
  document.getElementById("C1").style.color = "green";
    return true;
  }
}

function firstname3(){
var firstname = document.forms['r1']['c5'].value;
if(firstname='' || firstname.length<12 || firstname.length>12){
          document.getElementById("c5").style.border = "2px solid red";
    document.getElementById("c5").style.color = "red";
    document.getElementById("c5").value="";
    var error="Inval6id ! it contains 12 digits";
    document.getElementById("c5").placeholder=error;
}
else{
  document.getElementById("c5").style.border = "2px solid green";
  document.getElementById("c5").style.color = "green";
    return true;
  }
}
function firstname4(){
var firstname = document.forms['r1']['c6'].value;
var patt = new RegExp("[0-9]");
var res=patt.test(firstname)
if(res=false || firstname.length<6 || firstname.length>12){
          document.getElementById("c6").style.border = "2px solid red";
    document.getElementById("c6").style.color = "red";
    document.getElementById("c6").value="";
    var error="Invalid ! alteast 1 number and 5 charters";
    document.getElementById("c6").placeholder=error;
}
else{
  document.getElementById("c6").style.border = "2px solid green";
  document.getElementById("c6").style.color = "green";
    return true;
  }
}

function firstname5(){
var firstname = document.forms['r1']['c6'].value;
var first = document.forms['r1']['c7'].value;
if(first='' || firstname!=first){
          document.getElementById("c7").style.border = "2px solid red";
    document.getElementById("c7").style.color = "red";
    document.getElementById("c7").value="";
    var error="Not Match Password";
    document.getElementById("c7").placeholder=error;
}
else{
  document.getElementById("c7").style.border = "2px solid green";
  document.getElementById("c7").style.color = "green";
    return true;
  }
  }

function validate(){
    if(firstname() & firstname2() & firstname3() & firstname4() & firstname5()){
        return true;
    }else{
        return false;
    }
}
function adminusername(){

var name = document.forms['adminsform']['username'].value;

  if(name==''  || name.length<5 || name.length>20){
    document.getElementById("username").style.border = "2px solid red";
    document.getElementById("errorname").style.color = "red";
    document.getElementById("username").value="";
    var error="enter valid name";
    document.getElementById("username").placeholder=error;
    return false;
  }
  else{
  document.getElementById("username").style.border = "2px solid green";
  document.getElementById("errorname").style.color = "green";
    return true;
  }
}
//This is for form1
function validategender() {//gender validation
        if (form1.select1.value == "-1" ) {
             alert( "Please select gender!" );
             return false;
        }
    }

function validategender1() {//gender validation
       var name=document.forms['form1']['t1'].value;
       if(name=='' || name.length<5){
        document.getElementById("t1").style.border = "1px solid red";
        document.getElementById("t1").style.color = "red";
    document.getElementById("t1").value="";
    var error="UserName must contain 5 to 20 characters";
    document.getElementById("t1").placeholder=error;
       return false;
       }
       else{
       document.getElementById("t1").style.border = "1px solid green";
  document.getElementById("t1").style.color = "green";
    return true;
       }
    }

  function ff(){
  var name=document.forms['form1']['t2'].value;
       if(name=='' || name.length<5){
        document.getElementById("t2").style.border = "1px solid red";
        document.getElementById("t2").style.color = "red";
    document.getElementById("t2").value="";
    var error="Aleast 5 character";
    document.getElementById("t2").placeholder=error;
       return false;
       }
       else{
       document.getElementById("t2").style.border = "1px solid green";
  document.getElementById("t2").style.color = "green";
    return true;
  }

  }
  function ln(){
  var name=document.forms['form1']['t3'].value;
       if(name=='' || name.length<5){
        document.getElementById("t3").style.border = "1px solid red";
        document.getElementById("t3").style.color = "red";
    document.getElementById("t3").value="";
    var error="Aleast 5 character";
    document.getElementById("t3").placeholder=error;
       return false;
       }
       else{
       document.getElementById("t3").style.border = "1px solid green";
  document.getElementById("t3").style.color = "green";
    return true;
  }

  }
   function pass(){
  var name=document.forms['form1']['t4'].value;
  var patt = new RegExp("[0-9]");
    var result = patt.test(name);

       if(result==false || name=='' || name.length<5){
        document.getElementById("t4").style.border = "1px solid red";
        document.getElementById("t4").style.color = "red";
    document.getElementById("t4").value="";
    var error="Aleast 1 number and 5 charaters uppercases and lowercases";
    document.getElementById("t4").placeholder=error;
       return false;
       }
       else{
       document.getElementById("t4").style.border = "1px solid green";
  document.getElementById("t4").style.color = "green";
    return true;
  }
  }
function GEEKFORGEEKS(){
      var name = document.forms["r1"]["amount"];
     if(first=''){
          window.alert('The amount must be >10000 and <100000');
          name.focus();
    return false;
}
else{
    return true;
  }
  }
