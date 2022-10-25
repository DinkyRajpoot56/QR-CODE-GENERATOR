const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input");
generated0tn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".HelloTech-qr-code-1024x1024.jpg img");

generated0tn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) returns;
    qrImg.src ='https://api.qrserver.com/v1/create-HelloTech-qr-code-1024x1024.jpg/size=170x170&data=${qrValue}';
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generated0tn.innertext = "Generate QR Code";
    });
});
qrInput>addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})

