
var cities = [
	3715,
	6972,
	3758,
	7021,
	8191,
	8190,
	8188
]

var cityName = [];
var cityAqi = [];

$( document ).ready(function() {
	for (var i = 0; i < cities.length; i++) {
		console.log(i);
		console.log(cities[i]);
		showStation(cities[i]);
	}
	setTimeout(function(){
		fetchAqi()
	}, 2000);
});

function fetchAqi(){
	for (var i = 0 ; i < cities.length; i++) {
		if (cityAqi[i] == 'undefined') {
			$('#aqi').append('<tr><td><span class="fa fa-map-marker-alt" style="opacity: 0.3;"></span>&nbsp; '+cityName[i]+'</td><td>pending</td></tr>');
		}else {
			$('#aqi').append('<tr><td><span class="fa fa-map-marker-alt" style="opacity: 0.3;"></span>&nbsp; '+cityName[i]+'</td><td>'+colorize(cityAqi[i])+'</td></tr>');
		}
	}
}
function showStation(station) {
	$.getJSON("https://api.waqi.info/feed/@"+station+"/?token=1b394c2768e78fcad42f4845dc3180f97dc19812",function(result){
		
		cityName.push(result.data.city.name);
		console.log(result.data.aqi);
		cityAqi.push(result.data.aqi);
	});
}


var city = $("#city option:selected").val();
var scity = city;
$("#city").change(function(){
    city = $("#city option:selected").val();
    scity = city;
});
function getAQI(){
	$.getJSON("https://api.waqi.info/feed/@"+scity+"/?token=1b394c2768e78fcad42f4845dc3180f97dc19812",function(result){
		
		
		console.log(result.data.city.name);
		console.log(result.data.aqi);

		var percent = (result.data.aqi / 500) * 100;
		$("#meter").css('width', percent+'%');
		
		$("#aqiv").html(result.data.aqi);
		var color = "#fff";
		if (result.data.aqi >= 200) {
			$("#l-aqi").html("Very Unhealthy");
			color = "#660099";
		}
		else if (result.data.aqi >= 101) {
			$("#l-aqi").html("partially unhealthy");
		}
		else if (result.data.aqi >= 0) {
			color = "#ffde33";
			$("#l-aqi").html("Moderate");
		}
		else {
			$("#l-aqi").html(" ");
		}
		$("#meter").css('background', color);
		if (result.data.aqi == null || result.data.aqi == '-') {
			$("#aqiv").html("currently unavailable");
			$("#meter").css('width', '0%');
			$("#meter").css('background', 'white');
		}
	});
}


function colorize(aqi) {
	var x;
	if (aqi >=0 ) {
		x = '<span class="fa fa-stream" style="opacity: 0.3;"></span>&nbsp; <span style="background:#f5f5f5;font-size: 16px;color:#009966;padding: 5px 10px;font-weight:700;border-radius:2px;margin-right:5px;">'
		+aqi+
		'</span><span style="background:#009966;color:#fff;padding: 5px 10px;font-weight:700;border-radius:2px;">'
		+'Good'+
		'</span>';
	}
	if (aqi >=51 ) {
		x = '<span class="fa fa-stream" style="opacity: 0.3;"></span>&nbsp; <span style="background:#f5f5f5;font-size: 16px;color:#4a4a4a;padding: 5px 10px;font-weight:700;border-radius:2px;margin-right:5px;">'
		+aqi+
		'</span><span style="background:#ffde33;color:#000000;padding: 5px 10px;font-weight:700;border-radius:2px;">'
		+'Moderate'+
		'</span>';
	}
	if (aqi >=101 ) {
		x = '<span class="fa fa-stream" style="opacity: 0.3;"></span>&nbsp; <span style="background:#f5f5f5;font-size: 16px;color:#ff9933;padding: 5px 10px;font-weight:700;border-radius:2px;margin-right:5px;">'
		+aqi+
		'</span><span style="background:#ff9933;color:#000000;padding: 5px 10px;font-weight:700;border-radius:2px;">'
		+'Partly Unhealthy'+
		'</span>';
	}
	if (aqi >=151 ) {
		x = '<span class="fa fa-stream" style="opacity: 0.3;"></span>&nbsp; <span style="background:#f5f5f5;font-size: 16px;color:#cc0033;padding: 5px 10px;font-weight:700;border-radius:2px;margin-right:5px;">'
		+aqi+
		'</span><span style="background:#cc0033;color:#fff;padding: 5px 10px;font-weight:700;border-radius:2px;">'
		+'Unhealthy'+
		'</span>';
	}
	if (aqi >=201 ) {
		x = '<span style="background:#f5f5f5;font-size: 16px;color:#660099;padding: 5px 10px;font-weight:700;border-radius:2px;margin-right:5px;">'
		+aqi+
		'</span><span style="background:#660099;color:#fff;padding: 5px 10px;font-weight:700;border-radius:2px;">'
		+'Very Unhealthy'+
		'</span>';
	}
	if (aqi >=301 ) {
		x = '<span class="fa fa-stream" style="opacity: 0.3;"></span>&nbsp; <span style="background:#f5f5f5;font-size: 16px;color:#7e0023;padding: 5px 10px;font-weight:700;border-radius:2px;margin-right:5px;">'
		+aqi+
		'</span><span style="background:#7e0023;color:#fff;padding: 5px 10px;font-weight:700;border-radius:2px;">'
		+'Hazardous'+
		'</span>';
	}
	return x;

}



function fetchNew(){
	$('#pol-wrap').append('<div class="progress list-city"><div class="progress-bar" role="progressbar"' + 
		' style="width: 80%; background: red;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> ' + 
		'<p><span style="float:left ;">ITO, Delhi</span>' +
		'<span style="float:right ;">162, Very Unhealthy</span> ' +
		'</p></div></div> ')
}