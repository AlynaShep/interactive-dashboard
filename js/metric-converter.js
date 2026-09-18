let conversion_output;


function metricConverter(val, conversionType) {
    var newval;
    if (conversionType === "in to cm") {
        newval = val * 2.54;
        conversion_output = val + " inches is " + newval.toFixed(2) + " centimeters";
    } else if (conversionType === "ft to cm") {
        newval = val * 30.48;
        conversion_output = val + " feet is " + newval.toFixed(2) + " centimeters";
    } else if (conversionType === "yd to m") {
        newval = val * 0.91;
        conversion_output = val + " yards is " + newval.toFixed(2) + " meters";
    } else if (conversionType === "mi to km") {
        newval = val * 1.61;
        conversion_output = val + " miles is " + newval.toFixed(2) + " kilometers";
    } else if (conversionType === "cm to in") {
        newval = val * 0.39;
        conversion_output = val + " centimeters is " + newval.toFixed(2) + " inches";
    } else if (conversionType === "cm to ft") {
        newval = val * 0.0328;
        conversion_output = val + " centimeters is " + newval.toFixed(2) + " feet";
    } else if (conversionType === "m to yd") {
        newval = val * 1.09;
        conversion_output = val + " meters is " + newval.toFixed(2) + " yards";
    } else if (conversionType === "km to mi") {
        newval = val * 0.62;
        conversion_output = val + " kilometers is " + newval.toFixed(2) + " miles";
    } else {
        conversion_output = "Something went wrong";
        return;
    }
    newval = parseInt(newval * 100) / 100; // Rounds to 2 decimal points

    document.getElementById("conversion-output").innerHTML = conversion_output;
}



document.getElementById("convert-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input and parse to float
    var value = document.getElementById("value").value;
    value = parseFloat(value);


    var selectElement = document.getElementById("conversions");
    var x = selectElement.selectedIndex;
    var conversion = document.getElementsByTagName("option")[x].value;

    metricConverter(value, conversion);
});