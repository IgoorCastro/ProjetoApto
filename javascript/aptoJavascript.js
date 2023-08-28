const srcImg10 = ['../img/carousel/apto10.jpg', '../img/carousel/apto10.jpg', '../img/carousel/apto10.jpg'];

const srcImg8 = ['../img/carousel/apto8.jpg', '../img/carousel/apto8.jpg', '../img/carousel/apto8.jpg'];

const srcImg7 = ['../img/carousel/apto7.jpg', '../img/carousel/apto7.jpg', '../img/carousel/apto7.jpg'];


// Extrair o valor do parâmetro 'option' da URL
const urlParams = new URLSearchParams(window.location.search);
const option = urlParams.get('option');

if (option === '1') {
    changeCarouselImg(srcImg10);
    changeAptoData("Apartamento para 10 pessoas", "4.9", "9.8", "10 Pessoas", "3 Quartos", "8 Camas", "2 Banheiros", "436", "350");
} else if (option === '2') {
    changeCarouselImg(srcImg8);
    changeAptoData("Apartamento para 08 pessoas", "4.8", "9.7", "8 Pessoas", "2 Quartos", "6 Camas", "1 Banheiros", "415", "320");
} else if (option === '3') {
    changeCarouselImg(srcImg7);
    changeAptoData("Apartamento para 07 pessoas", "4.7", "9.6", "7 Pessoas", "2 Quartos", "5 Camas", "1 Banheiros", "368", "290");
}

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

    //Valor com desconto
    const divValorFinal = document.getElementById("valor-Final").querySelector('h5').textContent = "R$ " + valFinal;
}

function alertMensage(text) {
    alert(text);
}

document.getElementById("btn-Alugar").addEventListener("click", function () {
    alertMensage("*Atenção: Aluguel será feito via Whatsapp!*\nNúmero de contato: (12) 99713-5681.\nLeo e Valeria agradece.\n\nClique em 'Ok' para continuar.");

    window.open("https://wa.me/5512997135681?text=Digite+sua+mensagem+aqui.", "_blank");
})

document.getElementById("button10P").addEventListener("click", function () {
    changeCarouselImg(srcImg10);
    changeAptoData("Apartamento para 10 pessoas", "4.9", "9.8", "10 Pessoas", "3 Quartos", "8 Camas", "2 Banheiros", "436", "350");
});

document.getElementById("button8P").addEventListener("click", function () {
    changeCarouselImg(srcImg8);
    changeAptoData("Apartamento para 08 pessoas", "4.8", "9.7", "8 Pessoas", "2 Quartos", "6 Camas", "1 Banheiros", "415", "320");

});

document.getElementById("button7P").addEventListener("click", function () {
    changeCarouselImg(srcImg7);
    changeAptoData("Apartamento para 07 pessoas", "4.7", "9.6", "7 Pessoas", "2 Quartos", "5 Camas", "1 Banheiros", "368", "290");

});