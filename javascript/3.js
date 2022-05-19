$(document).ready(function(){
    $("#botao").click(function(){
        $("#texto").css("color","blue");
        $("#texto").css("text-decoration","underline");
        $("#texto").css("padding","10px");
        $("#texto").css("background-color","#ccc");
    });
});

/*Agora vamos entender um pouco do script. Primeiro verificamos se o documento estava pronto em: $(document).ready(). Se o resultado for positivo ele chama uma função que veria se o elemento de  id #botão foi clicado: $("#botão").click(). Se esse botão for clidcado, o script
faz várias alterações em elementos presente na div de id "texto", como por exemplo, altera a cor para azul: $("texto").css("color"*/