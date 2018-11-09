
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
    var dis=document.getElementById("district");
    var dist=dis.options[dis.selectedIndex].value;
    console.log(dist);
 }

 function add()
 {
     var n1=document.getElementById("op1").value;
     var n2=document.getElementById("op2").value;
     var x=parseInt(n1)+parseInt(n2);
     //var n=+n1 + +n2;
     console.log(x);

 }
  
 function calculate(){
    var n1=document.getElementById("op1").value;
    var n2=document.getElementById("op2").value;
    var x=parseInt(n1);
    var y=parseInt(n2);
    var a=document.getElementById("operation");
    var b=a.options[a.selectedIndex].value;
    if(b=="add")
    {
        var add=x+y;
        //console.log(add);
        var res=add;
    }
    else if(b=="sub")
    {
        //var subtract=+n1 - +n2;
        var subtract=x-y;
       // console.log(subtract);
       var res=subtract;

    }
    else if(b=="mul")
    {
        var multiply=x*y;
        //console.log(multiply);
        var res=multilply;
    }
    else{
        var division=x/y;
        //console.log(division);
        var res=division;
    }
    document.getElementById("result").innerHTML="result is"+res;
 }

 function largest()
 {
     var n1=parseInt(document.getElementById("num1").value);
     var n2=parseInt(document.getElementById("num2").value);
     var n3=parseInt(document.getElementById("num3").value);

     if((n1>n2)&&(n1>n3))
     {
         //console.log(n1+" is greatest");
         var res=n1;
     }  
     else{
         if(n2>n3)
         {
             //console.log(n2+" is greatest")
            var res=n2;
         }
         else{
             //console.log(n3+" is greatest");
             var res=n3;
         }
     }
     document.getElementById("result").innerHTML="<table border=1 class='table'><tr><td>"+res+" is largest </td></tr></table>";
 }

 function smallest()
 {
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var n3=parseInt(document.getElementById("num3").value);

    if((n1<n2)&&(n1<n3))
    {
       // console.log(n1+" is smallest");
       var res=n1;
    }
    else{
        if(n2<n3)
        {
           // console.log(n2+" is smallest")
           var res=n2;

        }
        else{
           // console.log(n3+" is smallest");
           var res=n3;
        }
    }
  document.getElementById("r").innerHTML="<table border=1 class='table'><tr><td>"+res+"is smallest </td></tr></table>";

 }