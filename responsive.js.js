function calcular_media() {
    // Declaração de variáveis
    var nome, mensalidade, tempo;

    // Entrada de dados
    //nota1 = document.getElementById("nota1").value;
    nota1 = text($("#nome").val());
    nota2 = Number($("#mensalidade").val());
    nota3 = Number($("#tempo").val());
    nota4 = Number($("#nota4").val());
    

     // Processamento de Dados
    

    // Saída de Dados
    // document.getElementsByClassName("form-notas").classList.add("d-none");
    // document.getElementsByClassName("show-result").classList.remove("d-none");
    

    $(".form-notas").addClass("d-none");
    $(".show-result").removeClass("d-none");
    $(".result-value").html(parseInt(media));

    



    if (media >= 7) 
    {
       // Verdadeiro
       $(".description-result").html("Parabéns a sua nota é: " + media);
    }
    else
    {

        //Falso
        $(".description-result").html("Você precisa melhorar");
    }


    console.log("Média é igual a "+media);
    //alert("Média é igual a "+media);
}

function voltar() {
    $("input").val("");

    $(".form-notas").removeClass("d-none");
    $(".show-result").addClass("d-none");
    $(".result-value").html("...");
}