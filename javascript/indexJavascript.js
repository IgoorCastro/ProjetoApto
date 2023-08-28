const srcImg10 = ['img/carousel/apto10.jpg', 'img/carousel/apto10.jpg', 'img/carousel/apto10.jpg'];

const srcImg8 = ['img/carousel/apto8.jpg', 'img/carousel/apto8.jpg', 'img/carousel/apto8.jpg'];

const srcImg7 = ['img/carousel/apto7.jpg', 'img/carousel/apto7.jpg', 'img/carousel/apto7.jpg'];


function changeCarouselImg(srcImg) {
    //IMG 1
    const divElement1 = document.getElementById("carousel-img-1").querySelector('img').src = srcImg[0];

    //IMG 2
    const divElement2 = document.getElementById("carousel-img-2").querySelector('img').src = srcImg[1];

    //IMG 3
    const divElement3 = document.getElementById("carousel-img-3").querySelector('img').src = srcImg[2];
}

function changeAptoData(aptoTitle, airbnbNota, bookingNota, qntPessoa, qntQuarto, qntCama, qntBanheiro, valDesconto, valFinal) {
    //Titulo
    const divTitle = document.getElementById("apto-Title").querySelector('h2').textContent = aptoTitle;

    //Nota AIRBNB
    const divNotaAirbnb = document.getElementById("airbnb-Nota").querySelector('h4').textContent = airbnbNota;

    //Nota booking
    const divNotaBooking = document.getElementById("booking-Nota").querySelector('h4').textContent = bookingNota;

    //Quantidade Pessoas
    const divQntPessoas = document.getElementById("qnt-Pessoas").querySelector('h4').textContent = qntPessoa;

    //Quantidade Quartos
    const divQntQuartos = document.getElementById("qnt-Quartos").querySelector('h4').textContent = qntQuarto;

    //Quantidade Camas  
    const divQntCamas = document.getElementById("qnt-Camas").querySelector('h4').textContent = qntCama;

    //Quantidade Banheiros
    const divQntBanheiros = document.getElementById("qnt-Banheiros").querySelector('h4').textContent = qntBanheiro;

    //Valor com desconto
    const divValorDesc = document.getElementById("valor-Desconto").querySelector('h5').textContent = "R$ " + valDesconto;
    const divValorDesc2 = document.getElementById("valor-Desconto2").querySelector('h5').textContent = "R$ " + valDesconto;

    //Valor com desconto
    const divValorFinal = document.getElementById("valor-Final").querySelector('h5').textContent = "R$ " + valFinal;
    const divValorFinal2 = document.getElementById("valor-Final2").querySelector('h5').textContent = "R$ " + valFinal;
}

function alertMensage(text) {
    alert(text);
}

document.getElementById("btn-Wpp").addEventListener("click", function () {
    alertMensage("*Atenção: Você está sendo direcionado para nosso Whatsapp!*\nLeo e Valeria agradece.\n\nClique em 'Ok' para continuar.");

    window.open("https://wa.me/5512997135681?text=Digite+sua+mensagem+aqui.", "_blank");
});

function redirectToPage(option) {
    let url = "";  // URL da nova página

    switch (option) {
        case "option1":
            url = "../pag/apartamentos.html?option=1";
            break;
        case "option2":
            url = "../pag/apartamentos.html?option=2";
            break;
        case "option3":
            url = "../pag/apartamentos.html?option=3";
            break;
    }

    window.location.href = url;
}

document.getElementById("button10P").addEventListener("click", function () {
    redirectToPage("option1");
});

document.getElementById("button8P").addEventListener("click", function () {
    redirectToPage("option2");
});

document.getElementById("button7P").addEventListener("click", function () {
    redirectToPage("option3");
});