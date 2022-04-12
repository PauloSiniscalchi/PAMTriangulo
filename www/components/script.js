window.onload = function(){
    let botao = document.getElementById("verificar");
    botao.addEventListener("click", function(){
        let a = parseInt(document.getElementById("l1").value);
        let b = parseInt(document.getElementById("l2").value);
        let c = parseInt (document.getElementById("l3").value);
        let result = document.getElementById("result");

        if ((a+b>c) && (a+c>b) && (b+c>a)){
            if(a==b && b==c) {
                result.value = "Triângulo equilátero";
            }else if (a==b || a==c || b==c) { 
                result.value = "Triângulo isóceles";
            }else 
            result.value = "Triângulo escaleno";

        }else{
            result.value = "Triângulo Inválido";
        }
    });
   
}