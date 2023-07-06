const profilePic = document.getElementById('user-pic-tab');
const btnUploadFile = document.getElementById('btnUpFile');
const fileInput = document.getElementById('file');


profilePic.addEventListener('mouseenter', () =>{
    btnUploadFile.style.display = "flex";
    profilePic.style.filter = 'blur(3px)';
})

btnUploadFile.addEventListener('mouseleave', () =>{
    btnUploadFile.style.display = "none";
    profilePic.style.filter = 'blur(0)'
})

profilePic.addEventListener('touchstart', ()=>{
    btnUploadFile.style.display = "flex";
    profilePic.style.filter = 'blur(3px)';
})

fileInput.addEventListener('change', ()=>{
    btnUploadFile.style.display = "none";
    profilePic.style.filter = 'blur(0)';
})
