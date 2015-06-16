function httpRequest(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result){
    result = JSON.parse(result);
    var list = result.list;
    var table = '<table class="table table-striped table-hover"><tr><th><i class="fa fa-calendar fa-lg"></i> Date</th><th><i class="fa fa-sun-o fa-lg"></i> Weather</th><th><i class="fa fa-arrow-down fa-lg"></i> Min</th><th><i class="fa fa-arrow-up fa-lg"></i> Max</th></tr>';
    for(var i in list)
    {
        var d=new Date(list[i].dt*1000);
        table +='<tr>';
        table +='<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';
        table +='<td>'+list[i].weather[0].description+'</td>';
        table +='<td>'+Math.round(list[i].temp.min-274)+' *C</td>';
        table +='<td>'+Math.round(list[i].temp.max-274)+' *C</td>';
        table +='</tr>';
    }
    table +='</table>';
    document.getElementById('weather').innerHTML=table;
}

var city = localStorage.city;
city = city?city:'beijing';
var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+',china&lang=zh_cn';
httpRequest(url,showWeather);