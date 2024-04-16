


function verificarPaís() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaPaís = prompt("Qual o melhor País?");

    
    if (respostaPaís.toLowerCase() === "França") {
      alert("Isso mesmo! A França é o melhor País!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
