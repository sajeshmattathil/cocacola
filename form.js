function validateform(){  
    var name=document.getElementById("Name").value 
    var text=document.getElementById("text").value 
    var email=document.getElementById("email").value
    var pass=document.getElementById("pass").value
  
      
    if (name==null|| name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(!isNaN(name)){
    alert(" Invalid Name ");
    return false;
    }else if(pass.length<8 ||pass==""||pass==null){
      alert("Password Invalid");
      return false;
    }else if(text==""||text==null){  
      alert("Message null??");  
      return false;  
      }else if(email==""||email==null){  
      alert("Email can't be blank");  
      return false; 
      } 
    }