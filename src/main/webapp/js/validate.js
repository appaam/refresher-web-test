/**
* This is Trainee validator file
*/

function PersonValidate(){
var count=0;
if(!isValidAdharCard() ||!isValidName() ||isValidBirthdate() ||!isValidAddress() || isValidEmail() || isValidMobile() || !isValidAdmissioncode()||!isValidClassname ||!isValidQualification ||!isValidSalary){
window.alert("Form validation error. Enter valid form data");
return false;
}else{
console.log("Form submitted successfully");
return true;
}
}



function isValidAdharCard(){
var adharCardInput = document.getElementById("adharcard").value;
var regex="^[2-9]{1}[0-9]{11}$";
if(adharCardInput.match(regex) || adharCardInput!==""){
document.getElementById("p1").innerHTML = "";
return true;
}else{
document.getElementById("p1").innerHTML = "<span style='color:#FF0000'>Invalid AdharCard Number</span>";
return false;
}
}



function isValidName(){
var nameInput = document.getElementById("name").value;
var regex="^[a-zA-Z ]*$";
if(nameInput.match(regex)){
document.getElementById("p2").innerHTML = "";
return true;
}else{
document.getElementById("p2").innerHTML = "<span style='color:#FF0000'>Invalid Name</span>";
return false;
}
}

function isValidBirthdate(){
var birthdateInput = document.getElementById("birthdate").value;
var regex="^*$";
if(birthdateInput.match(regex)){
document.getElementById("p3").innerHTML = "";
return true;
}else{
document.getElementById("p3").innerHTML = "<span style='color:#FF0000'>Invalid Birthdate</span>";
return false;
}
}



function isValidAddress(){
var addressInput = document.getElementById("address").value;
var regex="^[a-zA-Z ]*$";
if(addressInput.match(regex)){
document.getElementById("p4").innerHTML = "";
return true;
}else{
document.getElementById("p4").innerHTML = "<span style='color:#FF0000'>Invalid Address</span>";
return false;
}
}





function isValidEmail(){
var emailInput = document.getElementById("email").value;
var regex="^[a-zA-Z]+[a-zA-Z0-9._]+@{1}[a-z]{3,}.{1}[a-z]{2,}$";
if(emailInput.match(regex)){
document.getElementById("p5").innerHTML = "";
return true;
}else{
document.getElementById("p5").innerHTML = "<span style='color:#FF0000'> Invalid Email</span>";
return false;
}
}




function isValidMobile(){
var mobileInput= document.getElementById("mobile").value;
var regex = "^[6789]{1}[0-9]{9}$";
if(mobileInput.match(regex)){
document.getElementById("p6").innerHTML = "";
return true;
}else{
document.getElementById("p6").innerHTML = "<span style='color:#FF0000'> Invalid Mobile</span>";
return false;
}
}

function isValidAdmissioncode(){
var admissioncodeInput = document.getElementById("admissioncode").value;
var regex="^[0-9]{6,10}$";
if(admissioncodeInput.match(regex)){
document.getElementById("p7").innerHTML = "";
return true;
}else{
document.getElementById("p7").innerHTML = "<span style='color:#FF0000'>Invalid Admissioncode</span>";
return false;
}
}

function isValidClassname(){
var classnameInput = document.getElementById("classname").value;

if(classnameInput==="I"||"II"||"III"||"IV"||"V"||"VI"||"VII"||"VIII"||"IX"||"X"||"XI"||"XII"){
document.getElementById("p8").innerHTML = "";
return true;
}else{
document.getElementById("p8").innerHTML = "<span style='color:#FF0000'>Invalid Classname</span>";
return false;
}

}

function isValidSubject1(){
var subject1Input = document.getElementById("subject1").value;
var regex="$";
if(subject1Input.match(regex)){
document.getElementById("p9").innerHTML = "";
return true;
}else{
document.getElementById("p9").innerHTML = "<span style='color:#FF0000'>Invalid Subject1</span>";
return false;
}

}

function isValidQualification(){
var qualificationInput = document.getElementById("qualification").value;
var regex="^[a-zA-Z\\.]+$";
if(qualificationInput.match(regex)){
document.getElementById("p10").innerHTML = "";
return true;
}else{
document.getElementById("p10").innerHTML = "<span style='color:#FF0000'>Invalid Qualification</span>";
return false;
}

}

function isValidSalary(){
var salaryInput = document.getElementById("salary").value;
var regex="^[1-9]{1}[0-9]{4}$";
if(salaryInput.match(regex)){
document.getElementById("p11").innerHTML = "";
return true;
}else{
document.getElementById("p11").innerHTML = "<span style='color:#FF0000'>Invalid Salary</span>";
return false;
}

}