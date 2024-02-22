    function suma() {
        //explicacion del  algoritmo
        alert ("Algritmo que realiza una suma entre 2 valores ingresados por el usuario")
    //Declaracion de variables necesarias 
        let A = 0;
        let B = 0;
        let S = 0;
    //capturamos los datos
        A=parseInt(prompt("ingrese el primer valor: "));
        B=parseInt(prompt("ingrese el segundo valor: "));
    //realizamos la operacion 
        S = (A+B);
    //muestra el resultado de la suma 
        alert("El resultado de la suma es: " + S);
    }    

    function opBasicas() {
        //explicacion del  algoritmo
        alert ("Algritmo que realiza una suma entre 2 valores ingresados por el usuario")
    //Declaracion de variables necesarias 
        let A = 0;
        let B = 0;
        let S = 0;
        let R = 0;
        let M = 0;
        let D = 0;
    //capturamos los datos
        A=parseInt(prompt("ingrese el primer valor: "));
        B=parseInt(prompt("ingrese el segundo valor: "));
    //realizamos la operacion 
        S = (A+B);
        R= (A-B);
        M = (A*B);
        D = (A/B);
    //muestra el resultado
        alert("El resultado de la suma es: " + S);
        alert("El resultado de la resta es: " + R);
        alert("El resultado de la multiplicacion es: " + M)
        alert("El resultado de la resta es: " + R)
    }
    function cuadradoNumero(){
        //explicacion del  algoritmo
        alert ("Algoritmo que potencia al cuadrado un numero ingresado por el usuario")
        //Declaracion de variables necesarias 
        let A = 0;
        let C = 0;
        //capturamos los datos
        A=parseInt(prompt("ingrese el numero: "));
        //realizamos la operacion 
        C = (A*A);
        //muestra el resultado 
            alert("El cuadrado del numero es: " + C ); 
    }
    function areaTriangulo(){
        //explicacion del  algoritmo
    alert ("Algoritmo que halla el area de un triangulo con 2 numeros ingresados por el usuario")
        //Declaracion de variables necesarias 
        let A = 0;
        let B = 0;
        let C = 0;
        //capturamos los datos
        A=parseInt(prompt("ingrese el valor de la base del triangulo: "));       
        B=parseInt(prompt("ingrese el valor de la altura del triangulo: "));
        //realizamos la operacion 
        C = (A*B/2);
        //muestra el resultado 
        alert("El area del triangulo es: " + C ); 
    }
    function convercionMedidas(){
        // Explicación del algoritmo
        alert("Algoritmo que define las pulgadas, los kilómetros y los milímetros");

        // Declaración de variables necesarias
        let C = 0, M = "", F = 0;

        // Capturamos los datos
        C = parseInt(prompt("Ingrese un valor: "));
        M = prompt("Ingrese la medida: (in, Km, mm)");

        if (M === "in") {
            alert(C + " pulgadas en Km = " + (C / 39370));
            alert(C + " pulgadas en mm = " + (C * 25.4));
        } else if (M === "Km") {
            alert(C + " Kilometros en in = " + C * 39370);
            alert(C + " Kilometros en mm = " + C * 1000000);
        } else if (M === "mm") {
            alert(C + " milimetros en in = " + C / 25.4);
            alert(C + " milimetros en Km = " + C / 1000000);
        }
    }
    function numeroMayor(){
        //explicacion del  algoritmo
        alert ("Algoritmo que muestra como resultado el numero mayor de dos numeros ingresados por el usuario")
        //Declaracion de variables necesarias 
        let A = 0;
        let B = 0;
        //capturamos los datos
        A=parseInt(prompt("ingrese el primer valor: "));  
        B=parseInt(prompt("ingrese el segundo valor: "));  
        //realizamos la operacion 
        if (A>B){
        //muestra el resultado 
            alert("El numero mayor es " + A );
        }
        else{
        //muestra el resultado de la suma 
        alert("El numero mayor es " + B );
        }
    }
    function numeroMenor() {
        // Explicación del algoritmo
        alert("Algoritmo que muestra como resultado el número menor de tres números ingresados por el usuario");

        // Capturamos los datos
        let A = parseInt(prompt("Ingrese el primer valor: "));
        let B = parseInt(prompt("Ingrese el segundo valor: "));
        let C = parseInt(prompt("Ingrese el tercer valor: "));

        // Realizamos la operación 
        if (A < B && A < C)
            // Muestra el resultado 
            alert("El número menor es " + A);
        else if (B < A && B < C)
            // Muestra el resultado 
            alert("El número menor es " + B);
        else if (C < A && C < B)
            // Muestra el resultado 
            alert("El número menor es " + C);
        else if (A === B || A === C || B === C)
            // Muestra el resultado 
            alert("Ingresó dos números iguales por favor ingrese numeros diferentes");
    }

    function promedio(){
        //explicacion del  algoritmo
    alert ("Algoritmo que determina si un estdainte aprobo o reprobo la materia de algoritmia tteniendo en cuneta que el total son 7 notas entre 1 y 10")
        //Declaracion de variables necesarias 
        let A = 0, B = 0, C = 0, D = 0, F = 0, G = 0, H = 0, P = 0;

        //capturamos los datos
        A=parseInt(prompt("ingrese la primera nota: "));  
        B=parseInt(prompt("ingrese la segunda nota: "));  
        C=parseInt(prompt("ingrese la tercera nota: "));  
        D=parseInt(prompt("ingrese la cuarta nota: ")); 
        F=parseInt(prompt("ingrese la quinta nota: ")); 
        G=parseInt(prompt("ingrese la sexta nota: ")); 
        H=parseInt(prompt("ingrese la septima nota: ")); 
        //realizamos la operacion 
        P=((A+B+C+D+F+G+H)/7);
        if (P>=6){
            alert("El promedio es " + P +" Aprobo" );
        }
        else if (P<6){
            alert("El promedio es " + P + " Reprobo");
        }
    }        
    function descuento() {
        // Explicacion del algoritmo
        alert("Algoritmo que aplica descuento según el número de kilos comprados");

        // Declaración de variables necesarias
        let K, V, S, D, T;

        // Capturamos los datos
        K = parseInt(prompt("Ingrese el número de Kg: "));
        V = parseInt(prompt("Ingrese el valor de las manzanas: "));
        S = K * V;

        alert("El subtotal es " + S);

        // Realizamos la operación
        if (K <= 2) {
            D = 0;
            T = S; // No resta el descuento del subtotal
            alert("No se aplicó ningún descuento, el total es " + T);
        } 
        else if (K >= 3 && K <= 5) {
            D = S * 0.1;
            T = S - D; // Resta el descuento del subtotal
            alert("Se aplicó un descuento del 10%, el total es " + T);
        } 
        else if (K >= 6 && K <= 10) {
            D = S * 0.15;
            T = S - D;
            alert("Se aplicó un descuento del 15%, el total es " + T);
        } 
        else if (K >= 11) {
            D = S * 0.2;
            T = S - D;
            alert("Se aplicó un descuento del 20%, el total es " + T);
        }    
    }
        function salario(){
            //explicacion del  algoritmo
        alert ("Algoritmo que calcula las horas trabajadas semanales de un trabajador")
        //Declaracion de variables necesarias 
            let L, MA , MI, J , V , S, D, T, X = 0;
        //capturamos los datos
        L=parseInt(prompt("ingrese el total de horas trabajadas el lunes, si no trabajo ese dia ingrese 0: "));  
        MA=parseInt(prompt("ingrese el total de horas trabajadas el martes, si no trabajo ese dia ingrese 0: "));  
        MI=parseInt(prompt("ingrese el total de horas trabajadas el miercoles, si no trabajo ese dia ingrese 0: "));  
        J=parseInt(prompt("ingrese el total de horas trabajadas el jueves, si no trabajo ese dia ingrese 0: "));  
        V=parseInt(prompt("ingrese el total de horas trabajadas el viernes, si no trabajo ese dia ingrese 0: "));  
        S=parseInt(prompt("ingrese el total de horas trabajadas el sabado, si no trabajo ese dia ingrese 0: "));  
        D=parseInt(prompt("ingrese el total de horas trabajadas el domingo, si no trabajo ese dia ingrese 0: "));  
        //realizamos la operacion 
        T=(L+MA+MI+J+V+S+D);
        Horas = 12500;
        Extras = 18000;
        if (T <= 40){
            alert("El total de horas trabajadas es: " + T + "y el total devengado es $"+ T * Horas);
        }
        else if (T > 40){
            X = T-40;
            alert("El total de horas trabajadas es: " + T )
            alert("Valor a pagar por 40 horas = $"+ (Horas*40) + " + " +X+" horas extras = $" + (X*Extras));    
            alert("El total devengado es $"+ ((40 * Horas) +(X*Extras)));
        }
    }

    function calcularPrecio(Kilo) {
        alert("Algoritmo que calcula precio final por kilo");
    
        let descuento = 0;
        let precioPorKilo =0;
    
        if (Kilo >= 0 && Kilo <= 2) {
            descuento = 0;
        } else if (Kilo >= 3 && Kilo <= 5) {
            descuento = 0.1;
        } else if (Kilo >= 6 && Kilo <= 10) {
            descuento = 0.15;
        } else if (Kilo >= 11) {
            descuento = 0.2;
        }
    
        let precioTotal = Kilo * precioPorKilo;
        let montoDescuento = precioTotal * descuento;
        let precioFinal = precioTotal - montoDescuento;
    
        return precioFinal;
    }

