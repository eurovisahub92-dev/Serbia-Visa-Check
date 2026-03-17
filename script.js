async function checkVisa(){

const passport=document.getElementById("passport").value.trim();
const visa=document.getElementById("visa").value.trim();
const result=document.getElementById("result");

if(!passport || !visa){

result.innerHTML="⚠️ Please enter passport and visa number";
return;

}

const response=await fetch("visas.json");
const data=await response.json();

const record=data.find(v => v.passport===passport && v.visa===visa);

if(record){

result.innerHTML=`
✅ Visa Found <br><br>
Name: ${record.name}<br>
Passport: ${record.passport}<br>
Visa: ${record.visa}<br>
Status: ${record.status}
`;

result.className="result valid";

}

else{

result.innerHTML="❌ No record found";
result.className="result invalid";

}

}
