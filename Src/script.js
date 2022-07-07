const buttom = document.querySelector(".btn")

buttom.addEventListener("click", function(e) {

    e.preventDefault();
    
    const nome = document.querySelector("#Nome");
    const sobrenome = document.querySelector("#Sobrenome");
    const email = document.querySelector("#Email");
    const radio =document.querySelector('input[name="gridRadios"]:checked');
    const descricao = document.querySelector("#experiencia");

    const value = nome.value;
    const value2 = sobrenome.value;
    const value3 = email.value;
    const value4 = radio.value;
    const value5 = descricao.value;

    console.log(value, value2, value3, value4, value5);

})