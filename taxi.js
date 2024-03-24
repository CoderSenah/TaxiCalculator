function CalcTotal() {
    var amount = parseFloat(document.getElementById("Cost").value);
    var seatN = parseFloat(document.getElementById("numbOfSeat").value);


    var DriverTotalAmount = amount * seatN;

    document.getElementById("DriverTotalAmount").innerHTML = DriverTotalAmount.toFixed(2);

}

function GetT() {
    var paidAmount = parseFloat(document.getElementById("paid").value);
    var seatsOccupied = parseFloat(document.getElementById("seatOccupied").value);
    var amount = parseFloat(document.getElementById("Cost").value);


    var GetTotal = seatsOccupied * amount;
    var Change = paidAmount - GetTotal;


    document.getElementById("GetTotal").innerHTML = "Cash: R" + GetTotal.toFixed(2);
 


    if (Change < 0) {
        document.getElementById("Change").innerHTML = "Short: R" + Change.toFixed(2)/-1;
    } 
    else if (Change == 0) {
        document.getElementById("Change").innerHTML = "No Change";
    }
    else {
        document.getElementById("Change").innerHTML = "Chamge: R" + Change.toFixed(2);
    }

}


function Get2T() {
    var paidAmount2 = parseFloat(document.getElementById("paid2").value);
    var seatsOccupied2 = parseFloat(document.getElementById("seatOccupied2").value);
    var amount = parseFloat(document.getElementById("Cost").value);


    var GetTotal2 = seatsOccupied2 * amount;
    var Change2 = paidAmount2 - GetTotal2;


    document.getElementById("GetTotal2").innerHTML = "Cash: R" + GetTotal2.toFixed(2);
 


    if (Change2 < 0) {
        document.getElementById("Change2").innerHTML = "Short: R" + Change2.toFixed(2)/-1;
    } 
    else if (Change2 == 0) {
        document.getElementById("Change2").innerHTML = "No Change";
    }
    else {
        document.getElementById("Change2").innerHTML = "Change: R" + Change2.toFixed(2);
    }

}

function Get3T() {
    var paidAmount3 = parseFloat(document.getElementById("paid3").value);
    var seatsOccupied3 = parseFloat(document.getElementById("seatOccupied3").value);
    var amount = parseFloat(document.getElementById("Cost").value);


    var GetTotal3 = seatsOccupied3 * amount;
    var Change3 = paidAmount3 - GetTotal3;


    document.getElementById("GetTotal3").innerHTML = "Cash: R" + GetTotal3.toFixed(2);
 


    if (Change3 < 0) {
        document.getElementById("Change3").innerHTML = "Short: R" + Change3.toFixed(2)/-1;
    } 
    else if (Change3 == 0) {
        document.getElementById("Change3").innerHTML = "No Change";
    }
    else {
        document.getElementById("Change3").innerHTML = "Change : R" + Change3.toFixed(2);
    }

}

function Get4T() {
    var paidAmount4 = parseFloat(document.getElementById("paid4").value);
    var seatsOccupied4 = parseFloat(document.getElementById("seatOccupied4").value);
    var amount = parseFloat(document.getElementById("Cost").value);


    var GetTotal4 = seatsOccupied4 * amount;
    var Change4 = paidAmount4 - GetTotal4;


    document.getElementById("GetTotal4").innerHTML = "Cash: R" + GetTotal4.toFixed(2);
 


    if (Change4 < 0) {
        document.getElementById("Change4").innerHTML = "Short: R" + Change4.toFixed(2)/-1;
    } 
    else if (Change4 == 0) {
        document.getElementById("Change4").innerHTML = "No Change";
    }
    else {
        document.getElementById("Change4").innerHTML = "Change: R" + Change4.toFixed(2);
    }

}


 
  







