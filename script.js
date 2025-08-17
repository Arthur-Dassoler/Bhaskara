function Calculo() {
    let a = document.getElementById("termoA").value
    let b = document.getElementById("termoB").value
    let c = document.getElementById("termoC").value

    const delta = ((b * b) -4 * a * c)
    const resultado1 = (-b + (delta**0.5))/2 * a
    const resultado2 = (-b - (delta**0.5))/2 * a

    document.getElementById("resultado").innerHTML = "As raizes dessa equação são " + resultado1 + " e " + resultado2
}
