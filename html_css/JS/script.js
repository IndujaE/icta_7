
function read()
{
    //console.log("Testing success");
    var name=document.getElementById("getname").value;
    console.log(name);
    var rno=document.getElementById("getrno").value;
    console.log(rno);
    var adno=document.getElementById("getadno").value;
    console.log(adno);
    var age=document.getElementById("getage").value;
    console.log(age);
    if(age<18){
        //console.log("you are not eligible");
        alert(" you are not eligible");
    }
    else
    {
         //console.log("you are eligible"); 
         alert("eligible"); 
    }
 }
  