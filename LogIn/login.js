var email = document.getElementById("exampleInputEmail1");
var pwd = document.getElementById("exampleInputPassword1");
var error = document.getElementById('error');
function validate()
{
    // if (email.value==""||pwd.value=="")
    // {
    //     alert("Empty Fields");
    //     console.log("empty");
    //     return false;
    // }
    // else
    //     return true;

    // if (email.value=="")
    // {
    //     alert ("Cannot be Empty");
    //     return false;
    // }
    // else if (pwd.value=="")
    // {
    //     alert("Cannot be blank");
    //     return false;
    // }
    // else if (pwd.value.length<=5)
    // {
    //     alert ("Password too short");
    //     return false;
    // }
    // else
    //     return true;

    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-+]).([a-z]{2,3})(.[a-z]{2,3}?)$/
              if(regexp.test(email.value))
              {
                  error.innerHTML = "valid";
                  error.style.color = "green";
                  console.log("Valid");
                  return true;
                  

              }
              else
              {
                  error.innerHTML = "Invalid";
                  error.style.color = "red";
                  console.log("Invalid");
                  return false;
              }
              
}
console.log("login.js Accessed");