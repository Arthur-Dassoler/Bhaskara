function Calculo() {
    let a = document.getElementById("termoA").value
    let b = document.getElementById("termoB").value
    let c = document.getElementById("termoC").value

    const delta = ((b * b) - 4 * a * c)
    const resultado1 = (-b + (delta ** 0.5)) / (2 * a)
    const resultado2 = (-b - (delta ** 0.5)) / (2 * a)

    if (isNaN(resultado1 && resultado2)) {
        document.getElementById("resultado").innerHTML = "Essa equação não possui raízes reais";
    }
    else if (delta === 0) {
        document.getElementById("resultado").innerHTML = "Essa equação possui somente uma raiz real: " + resultado1
    }
    else {
        document.getElementById("resultado").innerHTML = "As raizes dessa equação são " + resultado1 + " e " + resultado2;
    }
}