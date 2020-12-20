var email = document.getElementById("exampleInputEmail1");
var pwd = document.getElementById("exampleInputPassword1");

var error = document.getElementById('error');

function validate()
{
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-+]).([a-z]{2,3})(.[a-z]{2,3}?)$/;
              if(regexp.test(email.value))
              {
                  error.innerHTML = "valid";
                  error.style.color = "green";
                  console.log("Valid");

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