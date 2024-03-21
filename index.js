data=[
    {mail:"xyz@gmail.com",pass:"xyzlmno"},
    {mail:"abc@gmail.com",pass:"abcdegf"},
    {mail:"pqr@gmail.com",pass:"pqrst56"}

]

function func(){
    event.preventDefault()
    let overlay=document.getElementById("blurreddiv")
    let modal1=document.getElementById("errorDialog")
    let modal2=document.getElementById("okDialog")
    let inputMail=document.getElementById("mail").value
    let inputPass=document.getElementById("pass").value
    l=data.length
    i=0
    console.log(inputPass)
    while(i<l){
        if(inputMail===data[i].mail && inputPass===data[i].pass){
            console.log(inputPass)
            // alert("Logged in Succesfully")
            modal2.showModal();
            return ;
        }
        i+=1
    }
    modal1.showModal();
}
// function register(){
//     overlay=document.getElementById("blurreddiv")
//     modal1=document.getElementById("errorDialog")
//     modal2=document.getElementById("okDialog")
//     inputMail=document.getElementById("mail").value
//     inputPass=document.getElementById("pass").value
//     l=data.length
//     i=0
//     while(i<l){
//         if(inputMail==data[i].mail){
//             overlay.classList.add("overlay");
//             modal1.open="true";
//             return ;
//         }
//     }
//     data.push({mail:"${inputMail}",pass:"${inputPass}"})
//     overlay.classList.add("overlay");
//     modal2.open="true";
// }
function closePop(){
    let overlay=document.getElementById("blurreddiv")
    let modal1=document.getElementById("errorDialog")
    let modal2=document.getElementById("okDialog")
    let modal3=document.getElementById("hintDialog")
    modal1.close();
    modal2.close();
    modal3.close()
    
}
function openPop(){
    let modal3=document.getElementById("hintDialog")
    modal3.show()
}
