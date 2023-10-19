const  validateForm=()=>{
  let firstName= document.getElementById("firstname").value;
  let lastName= document.getElementById("lastname").value;
  let street= document.getElementById("street").value;
  let address= document.getElementById("address").value;
  let city= document.getElementById("city").value;
  let state= document.getElementById("state").value;
  let email= document.getElementById("email").value;
  let phone= document.getElementById("phone").value;


  if(firstName==""){
    alert("First name is required");
    return false;
  }
  if ( lastName== "") {
    alert("Last name is required");
    return false;
  }
 if (street == "") {
    alert("Street is required");
    return false;
  }
   if ( address== "") {
    alert("Address is required");
    return false;
  }

   if ( city== "") {
    alert("City is required");
    return false;
  }
   if (state == "") {
    alert("State is required");
    return false;
  }

   if (phone == "") {
    alert("Phone number is required");
    return false;
  }

   if ( email== "") {
    alert("Email is required");
    return false;
  }else if(!email.includes("@")){
    alert("Invalid email address");
    return false;
  }
return true;

}

const showCustomer=()=>{

  let peopleList;

  if(localStorage.getItem("peopleList")==null){
    peopleList=[];
  }
  else{
    peopleList=JSON.parse(localStorage.getItem("peopleList"))
  }


  let html="";
  peopleList.forEach(function(element,index){
    html+="<tr>";
    html+='<td>'+element.firstName+'</td>';
    html += "<td>" + element.lastName + "</td>";
    html += "<td>" + element.street + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.city + "</td>";
    html += "<td>" + element.state + "</td>";
    html += "<td>" + element.email + "</td>";
     html += "<td>" + element.phone + "</td>";

     html+= '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
     html+="</tr>"
  });

  document.querySelector("#crudTable tbody").innerHTML=html;

}

document.onload= showCustomer();

function AddCustomer(){
if(validateForm()==true){
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let street = document.getElementById("street").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let peopleList;
  if(localStorage.getItem("peopleList")==null){
    peopleList=[];
  }else{
    peopleList=JSON.parse(localStorage.getItem("peopleList"));

  }

  peopleList.push({
    firstName:firstName,
     lastName: lastName,
 street:street,
  address:address,
 city:city,
  state:state,
  email:email,
 phone :phone,

  });

  localStorage.setItem("peopleList",JSON.stringify(peopleList));
  showCustomer();
  document.getElementById("firstname").value="";
  document.getElementById("lastname").value="";
  document.getElementById("street").value="";
  document.getElementById("address").value="";
  document.getElementById("city").value="";
  document.getElementById("state").value="";
  document.getElementById("email").value="";
  document.getElementById("phone").value="";


}

}

const deleteData=(index)=>{

let peopleList;
if(localStorage.getItem("peopleList")==null){
  peopleList=[];
}else{
  peopleList= JSON.parse(localStorage.getItem("peopleList"));
}

peopleList.splice(index,1);
localStorage.setItem("peopleList",JSON.stringify(peopleList));
showCustomer();

}


const updateData=(index)=>{

  document.getElementById("submit").style.display="none";
  document.getElementById("update").style.display = "block";



  let peopleList;
if(localStorage.getItem("peopleList")==null){
  peopleList=[];
}else{
  peopleList= JSON.parse(localStorage.getItem("peopleList"));
  
  }

  document.getElementById("firstname").value = peopleList[index].firstName;
  document.getElementById("lastname").value = peopleList[index].lastName;
  document.getElementById("street").value = peopleList[index].street;
  document.getElementById("address").value = peopleList[index].address;
  document.getElementById("city").value = peopleList[index].city;
  document.getElementById("state").value = peopleList[index].state;
  document.getElementById("email").value = peopleList[index].email;
 document.getElementById("phone").value = peopleList[index].phone;


 document.querySelector("#update").onclick=function(){
  if(validateForm()==true){
       peopleList[index].firstName=document.getElementById("firstname").value ;
       peopleList[index].lastname = document.getElementById("lastname").value;
       peopleList[index].street = document.getElementById("street").value;
       peopleList[index].address = document.getElementById("address").value;
       peopleList[index].city = document.getElementById("city").value;
       peopleList[index].state = document.getElementById("state").value;
       peopleList[index].email = document.getElementById("email").value;
       peopleList[index].phone = document.getElementById("phone").value;


       localStorage.setItem("peopleList",JSON.stringify(peopleList));

       showCustomer();

         document.getElementById("firstname").value = "";
         document.getElementById("lastname").value = "";
         document.getElementById("street").value = "";
         document.getElementById("address").value = "";
         document.getElementById("city").value = "";
         document.getElementById("state").value = "";
         document.getElementById("email").value = "";
         document.getElementById("phone").value = "";



         document.getElementById("submit").style.display = "block";
         document.getElementById("update").style.display = "none";

  }
 }
}