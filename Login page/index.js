data=[
    {mail:"xyz@gmail.com",pass:"xyzlmno"},
    {mail:"abc@gmail.com",pass:"abcdegf"},
    {mail:"pqr@gmail.com",pass:"pqrst56"}

]
function func(){
    event.preventDefault()
    overlay=document.getElementById("blurreddiv")
    modal1=document.getElementById("errorDialog")
    modal2=document.getElementById("okDialog")
    inputMail=document.getElementById("mail").value
    inputPass=document.getElementById("pass").value
    l=data.length
    i=0
    while(i<l){
        if(inputMail==data[i].mail && inputPass==data[i].pass){
            // alert("Logged in Succesfully")
            overlay.classList.add("overlay");
            modal2.open="true";
            return ;
        }
        i+=1
    }
    overlay.classList.add("overlay");
    modal1.open="true";
}
