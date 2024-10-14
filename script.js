document.getElementById("calcular").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const soma = num1 + num2;
        alert("A soma é: " + soma);
    } else {
        alert("Por favor, insira números válidos.");
    }
});
