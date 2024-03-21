data=[
    {mail:"xyz@gmail.com",pass:"xyzlmno"},
    {mail:"abc@gmail.com",pass:"abcdegf"},
    {mail:"pqr@gmail.com",pass:"pqrst56"}

]
function func(){
    // event.preventDefault()
    inputMail=document.getElementById("mail").value
    inputPass=document.getElementById("pass").value
    l=data.length
    i=0
    while(i<l){
        if(inputMail==data[i].mail && inputPass==data[i].pass){
            alert("Logged in Succesfully")
            return 
        }
        i+=1
    }
    alert("Invalid Credentials")
}