var dob = document.querySelector("#birth-date")
var luckyNum = document.querySelector("#lucky-number")
var btnCheck = document.querySelector("#check")
var outputDiv = document.querySelector("#output-bar")

btnCheck.addEventListener("click",check)

function main()
{
    var bdate = dob.value;
    var sum = getSum(bdate)
    
    if(sum % luckyNum.value === 0){
            outputDiv.innerText = "Your birthday is lucky😁😁"
    }
    else{
        outputDiv.innerText = "Your birthday is not lucky 😢😢"
    }
    
}
function check()
{
    if(dob.value !="" && luckyNum){
        main();
    }
    else{
        outputDiv.innerText = "Enter Both Credentials👿"
    }
    }


function getSum(bdate)
{
    //replace function
    var bodString = dob.value.replaceAll("-","")
    
    let sum = 0;
    for(var i=0; i<bodString.length;i++)
    {
        sum = sum+ Number(bodString[i]);
    }
    return sum
}

