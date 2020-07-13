var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

function handleNext(){
    var day = document.getElementById('date').value;
    var month= document.getElementById('month').value;
    var year = document.getElementById('year').value;

    console.log("dsfdfs"+ day +month+ year);

    var d =new Date();
    var y=d.getFullYear().toString();
    var m=d.getMonth().toString();
    var d=d.getDay().toString();


var s=month+"/"+day+"/"+year;
var s1=m+"/"+d+"/"+y;

var aa=date_diff_indays(s, s1);
console.log("fgg"+aa);

if(aa<=4768)
{
    document.getElementById("date").style.borderColor = "red";
    document.getElementById("month").style.borderColor = "red";
    document.getElementById("year").style.borderColor = "red";
}else{
    document.getElementById("date").style.borderColor = "black";
    document.getElementById("month").style.borderColor = "black";
    document.getElementById("year").style.borderColor = "black";
}
}

document.getElementById('next').onclick = handleNext;