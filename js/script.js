class Carros{
    static alerta=true
    constructor(marca,modelo,cor,ligado,km,comb){
        this.marca=marca
        this.modelo=modelo
        this.cor=cor
        this.ligado=false
        this.km=0
        this.comb=10

    }
    info(){
        console.log("Marca...........: " + this.marca)
        console.log("Modelo..........: " + this.modelo)
        console.log("Cor.............: " + this.cor)
        console.log("Ligado..........: " + this.ligado)
        console.log("Km..............: " + this.km)
        console.log("Combustivel.....: " + this.comb)
        console.log("Alerta..........: " + this.Carro.alerta ? "Sim" : "Não")
        console.log("---------------------")
    }
    ligar(){
        this.ligado=true
    }
    delisgar(){
        this.ligado=false
    }
    set setAlerta(t){
        Carro.alerta=t
    }
    get getAlerte(){
        return Carro.alerta
    }
    set setComb(v){
        if(v<0 || v>100){
            alert("Valor inválido")
        }else{
            this.comb=v
            console.log("Combustivel alterado, valor atual " + this.comb)
        }

    }
    get getComb(){
        return this.comb
    }
}

let c1=new Carros("Honda","Civic","Prata")
let c2=new Carros("VW","Golf","Branco")
let c3=new Carros("GM","Camaro","Preto")
let c4=new Carros("Ford","Mustang","Vermelho")

c1.setComb=100
