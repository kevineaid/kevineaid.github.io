
var cities = [
	2553, //ananc VIhar #1
	10708, //Mundka #1
	3760, //Shivajinagar Pune #1
	8673, //lalbagh lucknow #2
	8188, //Talkatora #3
	7021, //Kolkata #4
	6971, //Sector 16A, Faridaba #4
	9290, //DTU, Delhi #4
	8181, //Dwarka, Delhi #4
	8186, //Sanjay Plc, Agra #4
	7021
]


var cityName = [];
var cityAqi = [];

$( document ).ready(function() {
	setTimeout(function() {
		getAQI('Mundka, Delhi', 10708);
	}, 100);
	setTimeout(function() {
		getAQI('Anand Vihar, Delhi', 3760);
	}, 300);
	setTimeout(function() {
		getAQI('Lalbagh, Lucknow', 8673);
	}, 600);
	setTimeout(function() {
		getAQI('Shivajinagar, Pune', 2553);
	}, 300);
	setTimeout(function() {
		getAQI('Talkatora, Lucknow', 8188);
	}, 900);
	setTimeout(function() {
		getAQI('Kolkata', 7021);
	}, 900);
	setTimeout(function() {
		getAQI('Faridaba', 6971);
	}, 900);
	setTimeout(function() {
		getAQI('DTU, Delhi', 9290);
	}, 900);
	setTimeout(function() {
		getAQI('Dwarka, Delhi', 8181);
	}, 900);
	setTimeout(function() {
		getAQI('Sanjay Plc, Agra', 8186);
	}, 900);
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
function getAQI(name, xcity){
	$.getJSON("https://api.waqi.info/feed/@"+xcity+"/?token=1b394c2768e78fcad42f4845dc3180f97dc19812",function(result){
		
		
		console.log(result.data.city.name);
		console.log(result.data.aqi);
		var aqi = result.data.aqi;
		var per = (aqi / 400) * 100;
		var percent = 'calc('+per+'%' + ' + 30px)';
		var colorz = "#fff";
		var affect = '';
		var colorfont = '#fff';

		if (result.data.aqi <= 50) {
			affect = 'Good';
			//green
			colorz = "#00b150";
		}
		else if (result.data.aqi <=  100) {
			affect = 'Satisfactory';
			//light green
			colorz = "#8fd153";
		}
		else if (result.data.aqi <= 200) {
			affect = 'Moderate';
			//yellow
			colorz = "#fffd03";
			colorfont = '#000';
		}
		else if (result.data.aqi <= 300) {
			affect = 'Poor';
			//yellow
			colorz = "#fdc100";
			colorfont = '#000';
		}
		else if (result.data.aqi <= 400) {
			affect = 'Very Poor';
			//yellow
			colorz = "#fe000a";
		}
		else {
			affect = 'Severe';
			//yellow
			colorz = "#fe000a";
		}


		if (result.data.aqi == null || result.data.aqi == '-') {
			$('#top10').append('<div class="progress list-city"> '+
	  		' <div class="progress-bar" role="progressbar" style="width: '+ 50% +'; background: '+ colorz +'; color: '+ colorfont +';max-width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> ' +
	        ' <p><span style="float:left ;">'+ name +'</span> ' +
			' <span style="float:right ;">'+ aqi +', '+ affect +'</span> ' +
			' </p></div></div> ');
		}
		else {
			$('#top10').append('<div class="progress list-city"> '+
	  		' <div class="progress-bar" role="progressbar" style="width: '+ percent +'; background: '+ colorz +'; color: '+ colorfont +';max-width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> ' +
	        ' <p><span style="float:left ;">'+ name +'</span> ' +
			' <span style="float:right ;">'+ aqi +', '+ affect +'</span> ' +
			' </p></div></div> ');
		}

		
	});
}

function getAQIN(){
	console.log(document.URL);
	city = $("#city option:selected").val();
	var z = 'https://aqicn.org/?city=Delhi/' + city + '&widgetscript&size=xxl';
	$('#aqi-wrapper').remove('.aqi-js');
	$('#aqi-wrapper').append('<div class="aqi-js">'+
		' <script type="text/javascript" src="' + z + '"></script> ' +
		'</div>');
	/*$('#aqi-wrapper').load('https://aqicn.org/?city=Delhi/' + city + '&widgetscript&size=xxl');
		$('#aqi-wrapper').getScript( "https://aqicn.org/?city=Delhi/' + city + '&widgetscript&size=xxl" )
	  .done(function( script, textStatus ) {
	    console.log( textStatus );
	  })
	  .fail(function( jqxhr, settings, exception ) {
	    $( "div.log" ).text( "Triggered ajaxError handler." );
	});*/
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