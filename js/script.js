const calcInput = document.querySelector(".calc-input");
const cleanAll = document.querySelector(".clean-all");
const delet = document.querySelector(".calc-delet");
const numbers = document.querySelectorAll(".number");
const share = document.querySelector(".share");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const parenthesisLeft = document.querySelector(".parenthesis-left");
const parenthesisRight = document.querySelector(".parenthesis-right");

//pega os valores clicados no input
    for(var i = 0; i < numbers.length; i++)
    {
        numbers[i].addEventListener("click", function() {
            calcInput.value += this.value;
            numberClick = this.value;
   
         });
    }
    //limpa todo o input quando clicado nesse botão
    cleanAll.addEventListener("click", function() {
        calcInput.value = "";
        resultNumber = 0;
    });

    //limpa um número de cada vez quando clicado nesse botão
    delet.addEventListener("click", function() {
        calcInput.value = calcInput.value.substr(0, calcInput.value.length-1);
     });

    //adiciona o parenteses esquerdo
    parenthesisLeft.addEventListener("click", function() {
        calcInput.value += ')';
    });

    //adiciona o parenteses direito
    parenthesisRight.addEventListener("click", function() {
        calcInput.value += '(';
    });
        
        
    add.addEventListener("click", function() {
            calcInput.value += '+';
    });
      
    subtract.addEventListener("click", function() {
         calcInput.value += '-';
    });

    multiply.addEventListener("click", function() {
         calcInput.value += '*';
    });

    share.addEventListener("click", function() {
        calcInput.value += '/';
    });

    equal.addEventListener("click", function() {
        if(calcInput.value != "")
        {
            calcInput.value = eval(calcInput.value);
        }
    });
