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
getdata();

function postPaid(){
    var arr = ["Data:","Voice:","Price:","Subscrition Period:"]
    var select = document.querySelectorAll('.mobile__card')
    for(var i=0;i<select.length;i++){
        select[i].innerHTML =""
    }
    for(var i=0;i<dataObj.Services.Mobile_Services.PostPaid.length;i++){
        var j=0
        select[i].innerHTML+= "<h3>"+dataObj.Services.Mobile_Services.PostPaid[i].Name+"</h3>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Data+"</p\n>"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Voice+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Price+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Time+"</p>\n"
        select[i].innerHTML+="<div class=\"sub__btn--right\"><button class=\"subscription__btn\">Subscribe</button></div>"      
    }
    
    
}
function prePaid(){
    var arr = ["Data:","Voice:","Price:","Subscrition Period:"]
    var select = document.querySelectorAll('.mobile__card');
    for(var i=0;i<select.length;i++){
        select[i].innerHTML =""
    }
    for(var i=0;i<dataObj.Services.Mobile_Services.PrePaid.length;i++){
        var j=0
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PrePaid[i].Data+"</p\n>"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PrePaid[i].Voice+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PrePaid[i].Price+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PrePaid[i].Time+"</p>\n"
        select[i].innerHTML+="<div class=\"sub__btn--right\"><button class=\"subscription__btn\">Subscribe</button></div>"      
    }
    

}
function tv(){
    var arr = ["Data:","Voice:","Price:","Subscrition Period:"]
    var select = document.querySelectorAll('.mobile__card')
    for(var i=0;i<select.length;i++){
        select[i].innerHTML =""
    }
    for(var i=0;i<dataObj.Services.Mobile_Services.PostPaid.length;i++){
        var j=0
        select[i].innerHTML+= "<h3>"+dataObj.Services.Mobile_Services.PostPaid[i].Name+"</h3>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Data+"</p\n>"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Voice+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Price+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Time+"</p>\n"
        select[i].innerHTML+="<div class=\"sub__btn--right\"><button class=\"subscription__btn\">Subscribe</button></div>"      
    }
    
    
}
function wifi(){
    var arr = ["Data:","Voice:","Price:","Subscrition Period:"]
    var select = document.querySelectorAll('.mobile__card')
    for(var i=0;i<select.length;i++){
        select[i].innerHTML =""
    }
    for(var i=0;i<dataObj.Services.Mobile_Services.PostPaid.length;i++){
        var j=0
        select[i].innerHTML+= "<h3>"+dataObj.Services.Mobile_Services.PostPaid[i].Name+"</h3>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Data+"</p\n>"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>\n"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Voice+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Price+"</p>\n"
        select[i].innerHTML+="<h3>"+arr[j++]+"</h3>"
        select[i].innerHTML+="<p>"+dataObj.Services.Mobile_Services.PostPaid[i].Time+"</p>\n"
        select[i].innerHTML+="<div class=\"sub__btn--right\"><button class=\"subscription__btn\">Subscribe</button></div>"      
    }
    
    
}







// postPaidBtn = document.querySelector('.postpaid__btn')

// postPaidBtn.addEventListener('click', function(){
//     postPaid();
// },{ once: true })
