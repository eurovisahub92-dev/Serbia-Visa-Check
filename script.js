async function checkVisa(){

const visaNumber=document.getElementById("visaInput").value.trim();
const result=document.getElementById("result");

if(!visaNumber){
result.innerHTML="Enter visa reference number";
return;
}

const response=await fetch("visas.json");
const visas=await response.json();

const record=visas.find(v=>v.visa===visaNumber);

if(record){

result.innerHTML=
`
✅ Visa Valid

Name: ${record.name}
Passport: ${record.passport}
Status: ${record.status}
Expiry: ${record.expiry}
`;

result.style.color="green";

}

else{

result.innerHTML="❌ Visa not found";
result.style.color="red";

}

}
