function convertUnits() {
    var unit = document.getElementById("unitSelect").value;
    var value = parseFloat(document.getElementById("inputValue").value);

    // Verifica si el valor es un número válido
    if (isNaN(value)) {
        value = 0;
    }

    var kilometers, meters, miles, feet;

    switch (unit) {
        case "kilometers":
            kilometers = value;
            meters = value * 1000;
            miles = value * 0.621371;
            feet = value * 3280.84;
            break;
        case "meters":
            kilometers = value / 1000;
            meters = value;
            miles = value * 0.000621371;
            feet = value * 3.28084;
            break;
        case "miles":
            kilometers = value / 0.621371;
            meters = value * 1609.34;
            miles = value;
            feet = value * 5280;
            break;
        case "feet":
            kilometers = value / 3280.84;
            meters = value / 3.28084;
            miles = value / 5280;
            feet = value;
            break;
    }

    // Actualiza los resultados
    document.getElementById("kilometersResult").textContent = kilometers.toFixed(2);
    document.getElementById("metersResult").textContent = meters.toFixed(2);
    document.getElementById("milesResult").textContent = miles.toFixed(2);
    document.getElementById("feetResult").textContent = feet.toFixed(2);
}
