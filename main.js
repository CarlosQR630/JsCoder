const dama1 = 20000;
const dama2 = 21000;
const dama3 = 22000;

const cab1 = 19500;
const cab2 = 20500;
const cab3 = 21500;

const uni1 = 26000;
const uni2 = 27000;
const uni3 = 28000;

const impuesto = 1.21;
const descuento = 0.1;

const cuota3 = 0.1
const cuota6 = 0.15
const cuota9 = 0.2


const subtotalProductos = (x,y) => x*y;
const iva = (a, b) => a * b;
const pagoEfectivo = (c,d) => c-(c*d);
const pagoTarjeta = (e,f) => e+(e*f);
const cuotasIndividual = (g,h) => (g/h);



let producto = prompt("Ingrese -d- para damas, -c- para caballeros o -u- para unisex");

if (producto ==="d"){
    let modeloDama = prompt("Ingrese Modelo: a, b , c.      Escriba ESC para salir.");
    while (modeloDama != "ESC"){
        switch (modeloDama){
            case "a":
                modeloDama = dama1;
                let cantidad1 = parseInt(prompt("Ingrese cantidad:"));
                let subtotal1 = subtotalProductos(cantidad1,modeloDama);
                let precioIva1 = iva(subtotal1,impuesto);
                let formaPago1 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                if (formaPago1 === "e"){
                    let precioFinal1 = iva((pagoEfectivo(subtotal1,descuento)),impuesto);
                    alert(`Precio anterior: ${precioIva1}   Precio final Efectivo: ${precioFinal1} `);
                }else {
                    while (formaPago1 != "ESC"){
                        switch (formaPago1){
                            case "mp":
                                alert(`Precio Final: ${precioIva1}`);
                            break;

                            case "t":
                                let cantCuotas1 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                switch (cantCuotas1){
                                    case 3:
                                        let precioTarjeta3 = pagoTarjeta(subtotal1,cuota3);
                                        let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                        let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas1);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota3} C/U.`);

                                    break;

                                    case 6:
                                        let precioTarjeta6 = pagoTarjeta(subtotal1,cuota6);
                                        let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                        let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas1);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota6} C/U.`);

                                    break;

                                    case 9:
                                        let precioTarjeta9 = pagoTarjeta(subtotal1,cuota9);
                                        let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                        let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas1);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota9} pesos C/U.`);

                                    break;

                                    default:
                                        alert("Operación inválida");
                                    break;                                                                   

                                }
                            break;

                            default:
                                alert("comando incorrecto");
                            break;

                        }

                        formaPago2 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");

                        
                    }
                    
                }

            break;
            
            case "b":
                modeloDama = dama2;
                let cantidad2 = parseInt(prompt("Ingrese cantidad:"));
                let subtotal2 = subtotalProductos(cantidad2,modeloDama);
                let precioIva2 = iva(subtotal2,impuesto);
                let formaPago2 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                if (formaPago2 === "e"){
                    let precioFinal2 = iva((pagoEfectivo(subtotal2,descuento)),impuesto);
                    alert(`Precio anterior: ${precioIva2}   Precio final Efectivo: ${precioFinal2} `);
                }else {
                    while (formaPago2 != "ESC"){
                        switch (formaPago2){
                            case "mp":
                                alert(`Precio Final: ${precioIva2}`);
                            break;

                            case "t":
                                let cantCuotas2 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                switch (cantCuotas2){
                                    case 3:
                                        let precioTarjeta3 = pagoTarjeta(subtotal2,cuota3);
                                        let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                        let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas2);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota3} C/U.`);

                                    break;

                                    case 6:
                                        let precioTarjeta6 = pagoTarjeta(subtotal2,cuota6);
                                        let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                        let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas2);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota6} C/U.`);

                                    break;

                                    case 9:
                                        let precioTarjeta9 = pagoTarjeta(subtotal2,cuota9);
                                        let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                        let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas2);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota9} pesos C/U.`);

                                    break;

                                    default:
                                        alert("Operación inválida");
                                    break;                                                                   

                                }
                            break;

                            default:
                                alert("comando incorrecto");
                            break;

                        }

                        formaPago2 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");

                        
                    }
                
                }
                
            break;

            case "c":
                modeloDama = dama3;
                let cantidad3 = parseInt(prompt("Ingrese cantidad:"));
                let subtotal3 = subtotalProductos(cantidad3,modeloDama);
                let precioIva3 = iva(subtotal3,impuesto);
                let formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                if (formaPago3 === "e"){
                    let precioFinal3 = iva((pagoEfectivo(subtotal3,descuento)),impuesto);
                    alert(`Precio anterior: ${precioIva3}   Precio final Efectivo: ${precioFinal3} `);
                }else {
                    while (formaPago3 != "ESC"){
                        switch (formaPago3){
                            case "mp":
                                alert(`Precio Final: ${precioIva3}`);
                            break;

                            case "t":
                                let cantCuotas3 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                switch (cantCuotas3){
                                    case 3:
                                        let precioTarjeta3 = pagoTarjeta(subtotal3,cuota3);
                                        let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                        let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas3);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota3} C/U.`);

                                    break;

                                    case 6:
                                        let precioTarjeta6 = pagoTarjeta(subtotal3,cuota6);
                                        let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                        let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas3);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota6} C/U.`);

                                    break;

                                    case 9:
                                        let precioTarjeta9 = pagoTarjeta(subtotal3,cuota9);
                                        let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                        let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas3);
                                        
                                        alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota9} pesos C/U.`);

                                    break;

                                    default:
                                        alert("Operación inválida");
                                    break;                                                                   

                                }
                            break;

                            default:
                                alert("comando incorrecto");
                            break;

                        }

                        formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");

                        
                    }
                
                }
            break;

            default:
                alert("modelo incorrecto");
            break;
        }

        modeloDama = prompt("Ingrese Modelo: a, b , c.      (ESC)finalizar compra ")
    }
}else {
    if (producto === "c"){
        let modeloCaballero = prompt("Ingrese Modelo: a, b , c.      Escriba (ESC) para salir.");
        while (modeloCaballero != "ESC"){
            switch (modeloCaballero){ 
                case "a":
                    modeloCaballero = cab1;
                    let cantidad1 = parseInt(prompt("Ingrese cantidad:"));
                    let subtotal1 = subtotalProductos(cantidad1,modeloCaballero);
                    let precioIva1 = iva(subtotal1,impuesto);
                    let formaPago1 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                    if (formaPago1 === "e"){
                        let precioFinal1 = iva((pagoEfectivo(subtotal1,descuento)),impuesto);
                        alert(`Precio anterior: ${precioIva1}   Precio final Efectivo: ${precioFinal1} `);
                    }else {
                        while (formaPago1 != "ESC"){
                            switch (formaPago1){
                                case "mp":
                                    alert(`Precio Final: ${precioIva1}`);
                                break;
    
                                case "t":
                                    let cantCuotas1 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                    switch (cantCuotas1){
                                        case 3:
                                            let precioTarjeta3 = pagoTarjeta(subtotal1,cuota3);
                                            let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                            let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas1);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota3} C/U.`);
    
                                        break;
    
                                        case 6:
                                            let precioTarjeta6 = pagoTarjeta(subtotal1,cuota6);
                                            let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                            let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas1);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota6} C/U.`);
    
                                        break;
    
                                        case 9:
                                            let precioTarjeta9 = pagoTarjeta(subtotal1,cuota9);
                                            let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                            let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas1);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota9} pesos C/U.`);
    
                                        break;
    
                                        default:
                                            alert("Operación inválida");
                                        break;                                                                   
    
                                    }
                                break;
    
                                default:
                                    alert("comando incorrecto");
                                break;
    
                            }
    
                            formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
    
                            
                        }
                    
                    }

                break;

                case "b":
                    modeloCaballero = cab2;
                    let cantidad2 = parseInt(prompt("Ingrese cantidad:"));
                    let subtotal2 = subtotalProductos(cantidad2,modeloCaballero);
                    let precioIva2 = iva(subtotal2,impuesto);
                    let formaPago2 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                    if (formaPago2 === "e"){
                        let precioFinal2 = iva((pagoEfectivo(subtotal2,descuento)),impuesto);
                        alert(`Precio anterior: ${precioIva2}   Precio final Efectivo: ${precioFinal2} `);
                    }else {
                        while (formaPago2 != "ESC"){
                            switch (formaPago2){
                                case "mp":
                                    alert(`Precio Final: ${precioIva2}`);
                                break;
    
                                case "t":
                                    let cantCuotas2 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                    switch (cantCuotas2){
                                        case 3:
                                            let precioTarjeta3 = pagoTarjeta(subtotal2,cuota3);
                                            let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                            let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas2);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota3} C/U.`);
    
                                        break;
    
                                        case 6:
                                            let precioTarjeta6 = pagoTarjeta(subtotal2,cuota6);
                                            let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                            let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas2);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota6} C/U.`);
    
                                        break;
    
                                        case 9:
                                            let precioTarjeta9 = pagoTarjeta(subtotal2,cuota9);
                                            let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                            let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas2);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota9} pesos C/U.`);
    
                                        break;
    
                                        default:
                                            alert("Operación inválida");
                                        break;                                                                   
    
                                    }
                                break;
    
                                default:
                                    alert("comando incorrecto");
                                break;
    
                            }
    
                            formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
    
                            
                        }
                    
                    }

                break;

                case "c":
                    modeloCaballero = cab3;
                    let cantidad3 = parseInt(prompt("Ingrese cantidad:"));
                    let subtotal3 = subtotalProductos(cantidad3,modeloCaballero);
                    let precioIva3 = iva(subtotal3,impuesto);
                    let formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                    if (formaPago3 === "e"){
                        let precioFinal3 = iva((pagoEfectivo(subtotal3,descuento)),impuesto);
                        alert(`Precio anterior: ${precioIva3}   Precio final Efectivo: ${precioFinal3} `);
                    }else {
                        while (formaPago3 != "ESC"){
                            switch (formaPago3){
                                case "mp":
                                    alert(`Precio Final: ${precioIva3}`);
                                break;
    
                                case "t":
                                    let cantCuotas3 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                    switch (cantCuotas3){
                                        case 3:
                                            let precioTarjeta3 = pagoTarjeta(subtotal3,cuota3);
                                            let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                            let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas3);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota3} C/U.`);
    
                                        break;
    
                                        case 6:
                                            let precioTarjeta6 = pagoTarjeta(subtotal3,cuota6);
                                            let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                            let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas3);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota6} C/U.`);
    
                                        break;
    
                                        case 9:
                                            let precioTarjeta9 = pagoTarjeta(subtotal3,cuota9);
                                            let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                            let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas3);
                                            
                                            alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota9} pesos C/U.`);
    
                                        break;
    
                                        default:
                                            alert("Operación inválida");
                                        break;                                                                   
    
                                    }
                                break;
    
                                default:
                                    alert("comando incorrecto");
                                break;
    
                            }
    
                            formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
    
                            
                        }
                    
                    }

                break;

                default:
                    alert("modelo incorrecto");
                break;
            }
            modeloCaballero = prompt("Ingrese Modelo: a, b , c.      Escriba (ESC) para salir.");

        }

    }else{
        if (producto === "u"){
            let modeloUnisex = prompt("Ingrese Modelo: a, b , c.      Escriba (ESC) para salir.");
            while (modeloUnisex != "ESC"){
                switch (modeloUnisex){ 
                    case "a":
                        modeloUnisex = uni1;
                        let cantidad1 = parseInt(prompt("Ingrese cantidad:"));
                        let subtotal1 = subtotalProductos(cantidad1,modeloUnisex);
                        let precioIva1 = iva(subtotal1,impuesto);
                        let formaPago1 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                        if (formaPago1 === "e"){
                            let precioFinal1 = iva((pagoEfectivo(subtotal1,descuento)),impuesto);
                            alert(`Precio anterior: ${precioIva1}   Precio final Efectivo: ${precioFinal1} `);
                        }else {
                            while (formaPago1 != "ESC"){
                                switch (formaPago1){
                                    case "mp":
                                        alert(`Precio Final: ${precioIva1}`);
                                    break;
        
                                    case "t":
                                        let cantCuotas1 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                        switch (cantCuotas1){
                                            case 3:
                                                let precioTarjeta3 = pagoTarjeta(subtotal1,cuota3);
                                                let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                                let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas1);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota3} C/U.`);
        
                                            break;
        
                                            case 6:
                                                let precioTarjeta6 = pagoTarjeta(subtotal1,cuota6);
                                                let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                                let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas1);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota6} C/U.`);
        
                                            break;
        
                                            case 9:
                                                let precioTarjeta9 = pagoTarjeta(subtotal1,cuota9);
                                                let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                                let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas1);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas1} cuotas de ${valorCuota9} pesos C/U.`);
        
                                            break;
        
                                            default:
                                                alert("Operación inválida");
                                            break;                                                                   
        
                                        }
                                    break;
        
                                    default:
                                        alert("comando incorrecto");
                                    break;
        
                                }
        
                                formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
        
                                
                            }
                        
                        }
    
                    break;
    
                    case "b":
                        modeloUnisex = uni2;
                        let cantidad2 = parseInt(prompt("Ingrese cantidad:"));
                        let subtotal2 = subtotalProductos(cantidad2,modeloUnisex);
                        let precioIva2 = iva(subtotal2,impuesto);
                        let formaPago2 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                        if (formaPago2 === "e"){
                            let precioFinal2 = iva((pagoEfectivo(subtotal2,descuento)),impuesto);
                            alert(`Precio anterior: ${precioIva2}   Precio final Efectivo: ${precioFinal2} `);
                        }else {
                            while (formaPago2 != "ESC"){
                                switch (formaPago2){
                                    case "mp":
                                        alert(`Precio Final: ${precioIva2}`);
                                    break;
        
                                    case "t":
                                        let cantCuotas2 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                        switch (cantCuotas2){
                                            case 3:
                                                let precioTarjeta3 = pagoTarjeta(subtotal2,cuota3);
                                                let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                                let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas2);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota3} C/U.`);
        
                                            break;
        
                                            case 6:
                                                let precioTarjeta6 = pagoTarjeta(subtotal2,cuota6);
                                                let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                                let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas2);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota6} C/U.`);
        
                                            break;
        
                                            case 9:
                                                let precioTarjeta9 = pagoTarjeta(subtotal2,cuota9);
                                                let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                                let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas2);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas2} cuotas de ${valorCuota9} pesos C/U.`);
        
                                            break;
        
                                            default:
                                                alert("Operación inválida");
                                            break;                                                                   
        
                                        }
                                    break;
        
                                    default:
                                        alert("comando incorrecto");
                                    break;
        
                                }
        
                                formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
        
                                
                            }
                        
                        }
    
                    break;
    
                    case "c":
                        modeloUnisex = uni3;
                        let cantidad3 = parseInt(prompt("Ingrese cantidad:"));
                        let subtotal3 = subtotalProductos(cantidad3,modeloUnisex);
                        let precioIva3 = iva(subtotal3,impuesto);
                        let formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
                        if (formaPago3 === "e"){
                            let precioFinal3 = iva((pagoEfectivo(subtotal3,descuento)),impuesto);
                            alert(`Precio anterior: ${precioIva3}   Precio final Efectivo: ${precioFinal3} `);
                        }else {
                            while (formaPago3 != "ESC"){
                                switch (formaPago3){
                                    case "mp":
                                        alert(`Precio Final: ${precioIva3}`);
                                    break;
        
                                    case "t":
                                        let cantCuotas3 = parseInt(prompt("Imgrese cantidad de cuotas: (3), (6), (9) "));
                                        switch (cantCuotas3){
                                            case 3:
                                                let precioTarjeta3 = pagoTarjeta(subtotal3,cuota3);
                                                let precioFinalTarjeta3 = iva(precioTarjeta3, impuesto);
                                                let valorCuota3 = cuotasIndividual(precioFinalTarjeta3,cantCuotas3);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta3} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota3} C/U.`);
        
                                            break;
        
                                            case 6:
                                                let precioTarjeta6 = pagoTarjeta(subtotal3,cuota6);
                                                let precioFinalTarjeta6 = iva(precioTarjeta6, impuesto);
                                                let valorCuota6 = cuotasIndividual(precioFinalTarjeta6,cantCuotas3);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta6} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota6} C/U.`);
        
                                            break;
        
                                            case 9:
                                                let precioTarjeta9 = pagoTarjeta(subtotal3,cuota9);
                                                let precioFinalTarjeta9 = iva(precioTarjeta9, impuesto);
                                                let valorCuota9 = cuotasIndividual(precioFinalTarjeta9,cantCuotas3);
                                                
                                                alert(`El monto final de su compra es de: ${precioFinalTarjeta9} pesos a pagar en: ${cantCuotas3} cuotas de ${valorCuota9} pesos C/U.`);
        
                                            break;
        
                                            default:
                                                alert("Operación inválida");
                                            break;                                                                   
        
                                        }
                                    break;
        
                                    default:
                                        alert("comando incorrecto");
                                    break;
        
                                }
        
                                formaPago3 = prompt("Forma de pago:      Teclee:(e)Efectivo con 10% descuento,       Teclee:(mp)MercadoPago ,          Teclee:(t) Tarjeta Débito/Crédito          (ESC)finalizar compra ");
        
                                
                            }
                        
                        }
    
                    break;
    
                    default:
                        alert("modelo incorrecto");
                    break;
                }
                modeloUnisex = prompt("Ingrese Modelo: a, b , c.      Escriba (ESC) para salir.");
    
            }
        }else{
            alert("Comando incorrecto");
        }
    

    }
}