function celsiusToFarenheit(celsius){
    let farenheit = (celsius*9/5)+32;
    console.log(`Celsius ${celsius} converted to Farenheit: ${farenheit}`);
}

function farenheitToCelsius(farenheit){
    let celsius = (farenheit-32)*5/9;
    console.log(`Farenheit ${farenheit} converted to Celsius: ${celsius}`);
}

celsiusToFarenheit(60)
farenheitToCelsius(45)