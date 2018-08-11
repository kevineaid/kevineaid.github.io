$(document).ready(function(){
    var rand_numb = Math.floor(Math.random() * 2) + 1 ;

    setTimeout(function () {
    	console.log(rand_numb);
    	$(".bg-popup-wrap").fadeIn(500);
    	var classname = "#popup" + rand_numb;
    	setTimeout(function(){$(classname).fadeIn(400);}, 300);
    },3500);

    $(".bg-popup-wrap").click(function(){
    	$(".bg-popup-wrap").fadeOut(500);
    	$("#popup2").fadeOut(500);
    	$("#popup1").fadeOut(500);
    });
    $(".popup-close").click(function(){
    	$(".bg-popup-wrap").fadeOut(500);
    	$("#popup2").fadeOut(500);
    	$("#popup1").fadeOut(500);
    });



    
});

var ctx = document.getElementById("tokenDist").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Bounty", "Bonus & Reserve", "Advisors & Partners",  "Project Team","Private Sale, Pre-ICO & ICO"],
    datasets: [{
    label: '# of Votes',
    data: [2.5, 2.5, 3, 10, 82],
    backgroundColor: [
        '#5e4cb8',
        '#9349c0',
        '#2556a8',
        '#e35582',
        '#2fbcd7'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 0
    }]
  },
  options: {
    legend: {
      display: false
    }
  }
});

var ctx1 = document.getElementById("usesFund").getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ["Legal and Financial", "Headquarters Land Development", "Partnership",  "Admins and Advisors", "Sales and Marketing", "Team, IT and Research Development"],
    datasets: [{
    label: '# of Votes',
    data: [3.5, 6, 7, 13.5, 30, 40],
    backgroundColor: [
        '#6f1fc1',
        '#5e4cb8',
        '#9349c0',
        '#2556a8',
        '#e35582',
        '#2fbcd7'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 0
    }]
  },
  options: {
    legend: {
      display: false
    }
  }
});