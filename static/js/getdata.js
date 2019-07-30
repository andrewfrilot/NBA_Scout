// Load CSV with data

d3.csv("static/data/ncaa_model_na.csv").then((data) => {
    console.log(data[0])
});


// Get and set data for year selected function
function getData(y){
    var yearValue = document.getElementById("year").value;
    
    
}