const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable name = value",
        "var name = value",
        "v name = value",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para imprimir uma mensagem no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log.console()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona um elemento pelo seu nome de classe",
        "Seleciona um elemento pelo seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "method",
        "func",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de uma variável",
        "Verifica se duas variáveis são do mesmo tipo",
        "Converte o tipo de uma variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      respostas: [
        "if...else",
        "for",
        "switch",
      ],
      correta: 0
    }
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' 
      + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' 
        + totalDePerguntas
        
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
      
    }
  
    quizItem.querySelector('dl dt').remove()
    
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }