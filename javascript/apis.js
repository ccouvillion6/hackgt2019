
// var apiKey = config.API_KEY;

var apiKey = "&key=22288ecb29f58cd9c62ce51ee6f846deb39d442d";

var SAIPEurl = "https://api.census.gov/data/timeseries/poverty/saipe?"

var lookingFor = "get=NAME,SAEMHI_PT,SAEPOVRTALL_PT";

var state = "&for=state";

var time = "&time=2017";

var queryURL = SAIPEurl + lookingFor + state + time + apiKey;


$("#submit").click(function(event) {
    var stateVal = document.getElementById('stateBox').value;
    console.log(stateVal);
});


$.ajax({
  url: queryURL,
  method: "GET"
})


.then(function(response){

    console.log(response);

    console.log(response[1]);

    for(var i = 0; i < response.length; i++){
        console.log(response[i][0]);
    
        if (response[i][0] == stateVal){
            console.log(response[i][1]);
        }

    }

   


  

});

