function getdata() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () { 
        if (xhttp.readyState == 4 && xhttp.status == 200) {   // value 4 - means the load is complete ##  200 Code informs about successful processing of the request.
            processResult(xhttp);
        }
    }
    xhttp.open("GET", "Data.json", true);   // async: true (asynchronous) or false (synchronous)
    xhttp.send();
}
// This function process teh content of JSON file.     
function processResult(xhttp) {
    var jsonText = xhttp.responseText;        // Get JSON text.     
    dataObj = JSON.parse(jsonText);   // convert the response text to JSON object.
}

function prePaid(){
    var arr = ["Data:","Voice:","Price:","Subscrition Period:"]
    for(var i=0;i<dataObj.Services.Mobile_Services.PrePaid.length;i++){
        console.log(dataObj.Services.Mobile_Services.PrePaid[1].Data);
    }
}
getdata();
prePaid();