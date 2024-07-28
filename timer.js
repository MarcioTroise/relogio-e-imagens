var imgSection = document.getElementById('imagem'); // Peguei a imagem para alterar
var msg = document.getElementById('msg'); // Peguei a msg para alterar 
var containerImage = document.getElementById('foto');

function fctime(numImg) {
    // Pegando a hora atual
    var data = new Date();
    var hor = data.getHours(); // horas
    var min = data.getMinutes(); // minutos

    //var seg = data.getSeconds(); //segundos

    if (hor < 10) { //os 'date.get' nao mostram o '0', logo...
      hor = "0" + hor;
   }
   if (min < 10) {
      min = "0" + min;
   }
   // if (seg < 10) {
   //    seg = "0" + seg;
   // }

    var hora = `${hor}:${min}`; // '12:15:20'
    msg.innerHTML = hora;

    // Remove qualquer parágrafo existente
    var existingParagraph = containerImage.querySelector('p');
    if (existingParagraph) {
        containerImage.removeChild(existingParagraph);
    }

    var p = document.createElement('p');

    if (hor >= 0 && hor < 4 || numImg == 5) { // madrugada
        imgSection.src = 'imagens/fundoNoite.jpg'; // acrescentando img para a hora tal...
        document.body.style.backgroundImage = 'linear-gradient(#333333, black, #333333)';
        p.textContent = "Boa madrugada!";
    } else if (hor >= 4 && hor < 10 || numImg == 1) { // manhã
        imgSection.src = 'imagens/imgMANHA.jpg';
        document.body.style.backgroundImage = 'linear-gradient(orange, #ffff66, orange)';
        p.textContent = "Bom dia!";
    } else if (hor >= 10 && hor < 16 || numImg == 2) { // meio-dia
        imgSection.src = 'imagens/meioDia.jpg';
        document.body.style.backgroundImage = 'linear-gradient(#99CCFF, white, #99CCFF)';
        p.textContent = "Bom almoço!";
    } else if (hor >= 16 && hor < 19 || numImg == 3) { // tarde
        imgSection.src = 'imagens/imgTARDE.jpg';
        document.body.style.backgroundImage = 'linear-gradient(grey, orange, grey)';
        p.textContent = "Boa tarde!";
    } else { // noite
        imgSection.src = 'imagens/imgNOITE.jpg';
        document.body.style.backgroundImage = 'linear-gradient(#333333, grey, #333333)';
        p.textContent = "Boa noite!";
    }

    containerImage.appendChild(p);
}
