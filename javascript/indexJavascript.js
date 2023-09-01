const srcImg10 = ['img/carousel/apto10.jpg', 'img/carousel/apto10.jpg', 'img/carousel/apto10.jpg'];

const srcImg8 = ['img/carousel/apto8.jpg', 'img/carousel/apto8.jpg', 'img/carousel/apto8.jpg'];

const srcImg7 = ['img/carousel/apto7.jpg', 'img/carousel/apto7.jpg', 'img/carousel/apto7.jpg'];

var selectApto;

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

function slowFade(element, callback) { // Quando desejar esconder a content, adicione a classe "slow-fade" e, em seguida, defina a opacidade como 0
    const contentToHide = document.getElementById(element); // Substitua "sua-content-id" pelo ID da sua content
    contentToHide.classList.add("slow-fade");
    contentToHide.style.opacity = 0;

    // Depois de algum tempo, você pode remover a content ou ajustar o display conforme necessário
    setTimeout(() => {
        contentToHide.style.display = "none"; // Ou ação para remover a content
        callback();
    }, 1000); // Aguarde por 1 segundo (duração da transição)
}

//loadingContent display = "none";
//time padrao: 1500
//contentToOpen: pode ser uma lista de até 2 containers!
function loadingContent(time, contentToClose, contentToOpen) {
    // alert(contentToClose);
    // alert(contentToOpen);
    //alert("selectApto: " + selectApto);
    slowFade(contentToClose, function () {
        document.getElementById("loadingContent").style.display = "block";
        setTimeout(function () {
            document.getElementById("loadingContent").style.display = "none";
            //SECTIO QUU VAI ENTRAR
            if (Array.isArray(contentToOpen)) {
                document.getElementById(contentToOpen[0]).classList.remove('hidden');
                document.getElementById(contentToOpen[1]).classList.remove('hidden');
            }
            else {
                document.getElementById(contentToClose).classList.add('hidden');
                if (document.getElementById(contentToOpen).style.display = "none") {
                    document.getElementById(contentToOpen).removeAttribute("style");
                    document.getElementById(contentToOpen).classList.remove('hidden');
                }
                else
                    document.getElementById(contentToOpen).classList.remove('hidden');
            }
        }, time);
    });
}


function hiddenSectionAptoData() {
    document.getElementById("section-apto-data").classList.add("hidden");
    document.getElementById("section-inicial").className = "";
}

document.getElementById("btn-Logo").addEventListener("click", function () {
    hiddenSectionAptoData();
});

document.getElementById("btn-Wpp").addEventListener("click", function () {
    alertMensage("*Atenção: Você está sendo direcionado para nosso Whatsapp!*\nLeo e Valeria agradece.\n\nClique em 'Ok' para continuar.");

    window.open("https://wa.me/5512997135681?text=Digite+sua+mensagem+aqui.", "_blank");
});


document.getElementById("btn-Alugar").addEventListener("click", function () {
    alertMensage("*Atenção: Aluguel será feito via Whatsapp!*\nNúmero de contato: (12) 99713-5681.\nLeo e Valeria agradece.\n\nClique em 'Ok' para continuar.");

    window.open("https://wa.me/5512997135681?text=Digite+sua+mensagem+aqui.", "_blank");
});

document.getElementById("button10P").addEventListener("click", function () {
    const aptoDataId = "apto10-data";//Id do botão no html

    if (document.getElementById("section-inicial").style.display == "none") {
        if (document.getElementById(aptoDataId).classList.contains("hidden"))
            loadingContent(500, selectApto, aptoDataId);
    } else
        loadingContent(1500, "section-inicial", ["section-apto-data", aptoDataId]);

    selectApto = aptoDataId;
});

document.getElementById("button8P").addEventListener("click", function () {
    const aptoDataId = "apto8-data";//Id do botão no html

    if (document.getElementById("section-inicial").style.display == "none") {
        if (document.getElementById(aptoDataId).classList.contains("hidden"))
            loadingContent(500, selectApto, aptoDataId);
    } else
        loadingContent(1500, "section-inicial", ["section-apto-data", aptoDataId]);

    selectApto = aptoDataId;
});

document.getElementById("button7P").addEventListener("click", function () {
    const aptoDataId = "apto7-data";//Id do botão no html

    if (document.getElementById("section-inicial").style.display == "none") {
        if (document.getElementById(aptoDataId).classList.contains("hidden"))
            loadingContent(500, selectApto, aptoDataId);
    } else
        loadingContent(1500, "section-inicial", ["section-apto-data", aptoDataId]);

    selectApto = aptoDataId;

});