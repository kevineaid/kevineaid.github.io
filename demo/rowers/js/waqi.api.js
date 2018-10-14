
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
	8674, //IGSC patna india
	8185, //Manali, Chennai
	3763, //Katra, Pune
	10114, //ikhlasa.
	8682 //Chandrapur.
]


var cityName = [];
var cityAqi = [];
var cityObj = [];

$( document ).ready(function() {
	$('.aqiwidget-xxl').css('overflow', 'visible');
	$('.aqiwidget-xxl').css('height', 'auto');
	$('.aqi-graph-img').css('max-width', 'none');



	
		showStation('Mundka, Delhi', 10708);
	
	
		showStation('Anand Vihar, Delhi', 3760);
	
	
		showStation('Lalbagh, Lucknow', 8673);
	
	
		showStation('Shivajinagar, Pune', 2553);
	
	
		showStation('Talkatora, Lucknow', 8188);
	
	
		//showStation('Kolkata', 7021);
	
	
		showStation('Faridaba', 6971);
	
	
		showStation('DTU, Delhi', 9290);
	
	
		showStation('Dwarka, Delhi', 8181);
	
	
		//showStation('Sanjay Plc, Agra', 8186);
	
		showStation('IGSC, Patna', 8674);

		showStation('Manali, Chennai', 8185);

		//showStation('Katraj, Pune', 3763);
		//showStation('Chandrapur', 8682);

	/*for (var i = 0 ; i <= cityObj.length; i++) {
		console.log(cityObj[i].city);
		console.log(cityObj[i].aqi);
	}*/

	
	


	setTimeout(function(){
		console.log(cityName);
		console.log(cityAqi);
		console.log(cityObj);
	}, 2000);

	setTimeout(function(){
		function compare(a,b) {
		  if (b.aqi < a.aqi)
		    return -1;
		  if (b.aqi > a.aqi)
		    return 1;
		  return 0;
		}

		$('.loading-aqi').fadeOut(300);
   		cityObj.sort(compare);
		
		console.log(cityObj);
		console.log(cityObj[0].city);

		for (var i = 0; i <= cityObj.length; i++) {
			if (i<=4) {
				getAQI(cityObj[i].city, cityObj[i].aqi, 'left');	
			}
			else {
				getAQI(cityObj[i].city, cityObj[i].aqi, 'right');	
			}
		}
		
	}, 3000);

	
});

function showStation(city, station) {
	$.getJSON("https://api.waqi.info/feed/@"+station+"/?token=1b394c2768e78fcad42f4845dc3180f97dc19812",function(result){
		
		cityName.push(result.data.city.name);
		//console.log(result.data.city.name);
		cityAqi.push(result.data.aqi);
		//console.log(result.data.aqi);
	 	cityObj.push({
	        city: city,
	        aqi: result.data.aqi
	    });
	});
}



function getAQI(name, aqi, pos){
		var aqi = aqi;
		var per = (aqi / 400) * 100;
		var percent = 'calc('+per+'%' + ' + 30px)';
		var colorz = "#fff";
		var affect = '';
		var colorfont = '#fff';

		if (aqi <= 50) {
			affect = 'Good';
			//green
			colorz = "#00b150";
		}
		else if (aqi <=  100) {
			affect = 'Satisfactory';
			//light green
			colorz = "#8fd153";
		}
		else if (aqi <= 200) {
			affect = 'Moderate';
			//yellow
			colorz = "#fffd03";
			colorfont = '#000';
		}
		else if (aqi <= 300) {
			affect = 'Poor';
			//yellow
			colorz = "#fdc100";
			colorfont = '#000';
		}
		else if (aqi <= 400) {
			affect = 'Very Poor';
			//yellow
			colorz = "#fe000a";
		}
		else {
			affect = 'Severe';
			//yellow
			colorz = "rgb(192, 0, 0)";
		}

		if (pos == 'left') {
			if (aqi == null || aqi == '-') {
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
		}
		else {
			if (aqi == null || aqi == '-') {
				$('#top102').append('<div class="progress list-city"> '+
		  		' <div class="progress-bar" role="progressbar" style="width: '+ 50% +'; background: '+ colorz +'; color: '+ colorfont +';max-width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> ' +
		        ' <p><span style="float:left ;">'+ name +'</span> ' +
				' <span style="float:right ;">'+ aqi +', '+ affect +'</span> ' +
				' </p></div></div> ');
			}
			else {
				$('#top102').append('<div class="progress list-city"> '+
		  		' <div class="progress-bar" role="progressbar" style="width: '+ percent +'; background: '+ colorz +'; color: '+ colorfont +';max-width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> ' +
		        ' <p><span style="float:left ;">'+ name +'</span> ' +
				' <span style="float:right ;">'+ aqi +', '+ affect +'</span> ' +
				' </p></div></div> ');
			}
		}
		

		
}

var city = $("#city option:selected").val();
var scity = city;
$("#city").change(function(){
    city = $("#city option:selected").val();
    scity = city;
});

function getAQIS(){

	$.getJSON("https://api.waqi.info/feed/@"+scity+"/?token=1b394c2768e78fcad42f4845dc3180f97dc19812",function(result){
	
		var aqi = result.data.aqi;
		var per = (aqi / 400) * 100;
		var percent = per+'%';
		var colorz = "#fff";
		var affect = '';
		var colorfont = '#fff';

		if (aqi <= 50) {
			affect = 'Good';
			//green
			colorz = "#00b150";
		}
		else if (aqi <=  100) {
			affect = 'Satisfactory';
			//light green
			colorz = "#8fd153";
		}
		else if (aqi <= 200) {
			affect = 'Moderate';
			//yellow
			colorz = "#fffd03";
			colorfont = '#000';
		}
		else if (aqi <= 300) {
			affect = 'Poor';
			//yellow
			colorz = "#fdc100";
			colorfont = '#000';
		}
		else if (aqi <= 400) {
			affect = 'Very Poor';
			//yellow
			colorz = "#fe000a";
		}
		else {
			affect = 'Severe';
			//yellow
			colorz = "rgb(192, 0, 0)";
		}


		if (aqi == null || aqi == '-') {
			$('#meter').css('width', '0%');
			$('#meter').css('background', colorz);
			$('#aqiv').html('Temporary Unavailable');
			$('#l-aqi').html('unknown');
		}
		else {
			$('#meter').css('width', percent);
			$('#meter').css('background', colorz);
			$('#aqiv').html(aqi);
			$('#l-aqi').html(affect);
		}
	});

		

		
}

function getAQIN(){
	city = $("#city option:selected").val();
	var z = 'api/api-' + city + '.js';
	$('.aqi-js').remove();
	/*$('#aqi-wrapper').append('<div class="aqi-js">'+
		' <script type="text/javascript" src="' + z + '"></script> ' +
		'</div>');*/
	/*$.getScript( z, function( data, textStatus, jqxhr ) {
  		console.log( data ); // Data returned
	  	console.log( textStatus ); // Success
	  	console.log( jqxhr.status ); // 200
	  	console.log( "Load was performed." );
	});*/
	$('#aqi-wrapper').load(z);
	/*$('#aqi-wrapper').remove('.aqi-js');
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