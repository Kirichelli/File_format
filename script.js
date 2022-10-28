const textarea = document.querySelector("textarea"),
fileName = document.querySelector('.file-name input'),
selectFile = document.querySelector('.save-ass select'), 
saveBtn = document.querySelector('.save-btn')
tryButton = document.querySelector('.try')
saveBtn.addEventListener("click", () =>{
    const blop = new Blob([textarea.value], {type: selectFile.value});
    const fileUrl = URL.createObjectURL(blop);
    const link = document.createElement("a")
    link.download = fileName.value;
    link.href = fileUrl
    link.click();    
})


// saveBtn.onclick(function(){
//     setTimeout(() => {
//         location.href = "thankspage.html" 
//     },1000)
// }


if (saveBtn){
saveBtn.addEventListener("click", () =>{
    setTimeout(() => {
        location.href = "thankspage.html" 
    },1000)
})
}
