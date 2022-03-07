// Menu-toggle button
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

// Efeito dos autores
$(".hover3d").hover3d({
    selector: ".hover3d-child",
    invert: true
});

// Carousel dos livros
$('.slide').hiSlide();

// Carrinho
var valorTotal = 0;

function salvar() {
    document.getElementById('txtNomeCliente').value = document.getElementById('txtNome').value;
    document.getElementById('txtEmailCliente').value = document.getElementById('txtEmail').value;
    document.getElementById('txtCpfCliente').value = document.getElementById('txtCpf').value;
    
    var i;
    for (i = 0; i < document.formVenda.rdEntrega.length; i++) {
        if (document.formVenda.rdEntrega[i].checked)
            break;
    }

    //Forma de entrega
    
    if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtEntregaSelec').value = "Retirar em mãos - busque aqui";
    
    else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtEntregaSelec').value = "Correios - entrega em 20 dias";
    
    else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtEntregaSelec').value = "Sedex - entrega em 7 dias";
    
    //Valor do frete
    
    if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtValorFrete').value = "R$0.00";
    
    else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtValorFrete').value = "R$10.00";
    
    else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtValorFrete').value = "R$25.00";
    
    //Forma de pagamento
    
    if (parseInt(document.formPagto.s1cFormaPagto.value) == 1)
        alert("Escolha uma forma de pagamento!")
              
    else if(parseInt(document.formPagto.s1cFormaPagto.value) == 2)
        document.getElementById('txtFormaSelec').value = "Boleto";
           
    else if(parseInt(document.formPagto.s1cFormaPagto.value) == 3)
        document.getElementById('txtFormaSelec').value = "Transferência";
           
    else if(parseInt(document.formPagto.s1cFormaPagto.value) == 4)
        document.getElementById('txtFormaSelec').value = "Cartão de crédito";
    
    //Número de parcelas
    
    if(parseInt(document.formPagto.s1cFormaPagto.value) != 4)
        document.getElementById('txtNdeParcelas').value = "0";
    
    if (parseInt(document.formPagto.qtdeParcelas.value) == 1)
                alert("Escolha um número de parcelas!")
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 2)
        document.getElementById('txtNdeParcelas').value = "1";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 3)
        document.getElementById('txtNdeParcelas').value = "2";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 4)
        document.getElementById('txtNdeParcelas').value = "3";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 5)
        document.getElementById('txtNdeParcelas').value = "4";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 6)
        document.getElementById('txtNdeParcelas').value = "5";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 7)
        document.getElementById('txtNdeParcelas').value = "6";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 8)
        document.getElementById('txtNdeParcelas').value = "7";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 9)
        document.getElementById('txtNdeParcelas').value = "8";
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 10)
        document.getElementById('txtNdeParcelas').value = "9"
    
    else if(parseInt(document.formPagto.qtdeParcelas.value) == 11)
        document.getElementById('txtNdeParcelas').value = "10"
    
    //Valor total
    
    if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtValorTotal').value = valorTotal;
    
    else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtValorTotal').value = valorTotal + 10;
    
    else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtValorTotal').value = valorTotal + 25;
    
    //Valor de cada parcela
    
    if(parseInt(document.formPagto.qtdeParcelas.value) == 3){
        if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 2;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 2;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 2;
    }
    
    if(parseInt(document.formPagto.qtdeParcelas.value) == 4){
        if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 3;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 3;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 3;
    }
    
    if(parseInt(document.formPagto.qtdeParcelas.value) == 5){
        if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 4;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 4;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 4;
    }
    
    if(parseInt(document.formPagto.qtdeParcelas.value) == 6){
        if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 5;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 5;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 5;
    }
    
        if(parseInt(document.formPagto.qtdeParcelas.value) == 7){
            if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 6;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 6;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 6;
    }
    
        if(parseInt(document.formPagto.qtdeParcelas.value) == 8){
            if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 7;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 7;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 7;
    }
    
        if(parseInt(document.formPagto.qtdeParcelas.value) == 9){
            if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 8;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 8;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 8;
    }
    
        if(parseInt(document.formPagto.qtdeParcelas.value) == 10){
            if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 9;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 9;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 9;
    }
    
        if(parseInt(document.formPagto.qtdeParcelas.value) == 11){
            if (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById('txtVdaParcela').value = valorTotal / 10;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 2)
        document.getElementById('txtVdaParcela').value = (valorTotal + 10) / 10;
    
        else if (parseInt(document.formVenda.rdEntrega[i].value) == 3)
        document.getElementById('txtVdaParcela').value = (valorTotal + 25) / 10;
    }

    //Oferta da newsletter
    
    if (document.getElementById("ckNews").checked == true) {
        alert("Voce aceitou receber nossa newsletter!");
    }
    
    else {
        alert("Voce não aceitou receber nossa newsletter, infelizmente perderá os descontos!");
    }
}

function addProduto(tbProduto){    
    var tabela = document.getElementById('tbLivrao');         
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var tr = document.createElement("tr");
    var cod = parseInt(document.getElementById('codProduto').value);
    switch(cod){
        case 100:
            var descricao = "Capitã Marvel";
            var preco = "R$32.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 32.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 120:
            var descricao = "Mister No: Revolução";
            var preco = "R$45.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 45.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 140:
            var descricao = "Deadwood Dick";
            var preco = "R$45.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 45.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 160:
            var descricao = "Amazing Spider-man";
            var preco = "R$55.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 55.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 180:
            var descricao = "Invasão!";
            var preco = "R$20.00";
            var qtde = document.getElementById("qtde").value;
            var nsei = 20.00 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 200:
            var descricao = "Superman - Secret Identity";
            var preco = "R$37.20";
            var qtde = document.getElementById("qtde").value;
            var nsei = 37.20 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 220:
            var descricao = "Marvel Legado";
            var preco = "R$19.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 19.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 240:
            var descricao = "Wolverine";
            var preco = "R$45.00";
            var qtde = document.getElementById("qtde").value;
            var nsei = 45.00 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 260:
            var descricao = "Vingadores: Invasão [...]";
            var preco = "R$32.40";
            var qtde = document.getElementById("qtde").value;
            var nsei = 32.40 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 280:
            var descricao = "Capitão América";
            var preco = "R$79.99";
            var qtde = document.getElementById("qtde").value;
            var nsei = 79.99 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 320:
            var descricao = "Duna";
            var preco = "R$49.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 49.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 320:
            var descricao = "O Último Desejo";
            var preco = "R$30.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 30.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 340:
            var descricao = "Eu, Robô";
            var preco = "R$32.20";
            var qtde = document.getElementById("qtde").value;
            var nsei = 32.20 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 360:
            var descricao = "O Silmarillion";
            var preco = "R$54.36";
            var qtde = document.getElementById("qtde").value;
            var nsei = 54.36 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 380:
            var descricao = "Máquinas Mortais";
            var preco = "R$28.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 28.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 400:
            var descricao = "Artemis";
            var preco = "R$26.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 26.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 420:
            var descricao = "O Hobbit";
            var preco = "R$45.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 45.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 440:
            var descricao = "Neuromancer";
            var preco = "R$29.90";
            var qtde = document.getElementById("qtde").value;
            var nsei = 29.90 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 460:
            var descricao = "Beren e Lúthien";
            var preco = "R$35.90";
            var qtde = document.getElementById("qtde").value;
            var nsei = 35.90 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 480:
            var descricao = "A Trama Perdida";
            var preco = "R$39.90";
            var qtde = document.getElementById("qtde").value;
            var nsei = 39.90 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 500:
            var descricao = "A Árvore da Mentira";
            var preco = "R$31.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 31.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 520:
            var descricao = "Os Três";
            var preco = "R$39.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 39.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 540:
            var descricao = "Desespero";
            var preco = "R$55.00";
            var qtde = document.getElementById("qtde").value;
            var nsei = 55.00 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 560:
            var descricao = "Estou Atrás de Você";
            var preco = "R$40.90";
            var qtde = document.getElementById("qtde").value;
            var nsei = 40.90 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 580:
            var descricao = "A Hora do Lobisomem";
            var preco = "R$46.32";
            var qtde = document.getElementById("qtde").value;
            var nsei = 45.32 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 600:
            var descricao = "A Garota do Lago";
            var preco = "R$11.99";
            var qtde = document.getElementById("qtde").value;
            var nsei = 11.99 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 620:
            var descricao = "O Bazar dos Sonhos Ruins";
            var preco = "R$46.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 46.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 640:
            var descricao = "It - A Coisa";
            var preco = "R$47.30";
            var qtde = document.getElementById("qtde").value;
            var nsei = 47.30 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 660:
            var descricao = "Invocadores do Mal";
            var preco = "R$37.92";
            var qtde = document.getElementById("qtde").value;
            var nsei = 37.92 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 680:
            var descricao = "O Diretor";
            var preco = "R$17.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 17.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 385:
            var descricao = "As Ciências Ocultas";
            var preco = "R$45.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 45.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 666:
            var descricao = "Livro de São Cipriano";
            var preco = "R$1780.00";
            var qtde = document.getElementById("qtde").value;
            var nsei = 1780.00 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 227:
            var descricao = "Box: Harry Potter";
            var preco = "R$45.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 45.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 357:
            var descricao = "Desafio Infinito";
            var preco = "R$38.50";
            var qtde = document.getElementById("qtde").value;
            var nsei = 38.50 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 157:
            var descricao = "One Punch Man";
            var preco = "R$25.60";
            var qtde = document.getElementById("qtde").value;
            var nsei = 25.60 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
        case 124:
            var descricao = "BREAKING BAD";
            var preco = "R$32.70";
            var qtde = document.getElementById("qtde").value;
            var nsei = 32.70 * qtde;
            var st = "R$"+nsei;
            valorTotal += nsei;
            break;
    } 
    var descricaoNode = document.createTextNode(descricao);
    var precoNode = document. createTextNode(preco);
    var qtdeNode = document.createTextNode(qtde);
    var stNode = document.createTextNode(st);
    var codNode = document.createTextNode(cod);
       
    td1.appendChild(codNode)
    td2.appendChild(descricaoNode);
    td3.appendChild(precoNode);
    td4.appendChild(qtdeNode);
    td5.appendChild(stNode);
       
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
       
    tabela.appendChild(tr);
           
    document.getElementById('codProduto').value = '';
    document.getElementById('qtde').value = '';
    document.getElementById('codProduto').focus();

}