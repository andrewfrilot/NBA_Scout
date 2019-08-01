function buildFacts(newYear){

var panelnba = d3.select("#nbacard");
    panelnba.html("");

    d3.csv("../static/data/ncaa_model_in.csv").then((nbaplayers) => {
    var filteredDatanba = nbaplayers.filter(nbaplayers => nbaplayers.YearDrafted === newYear);

    if (typeof(filteredDatanba) === 'undefined')
    {
      panelnba.append("h4").text(`NBA`);
    }
    else
    {
    var sorted_pk_nba = filteredDatanba.sort(function(first, second) {
      return first.Pk - second.Pk;
  
     }); 
     panelnba.append("h4").html(`<hr class="hr_for_cards"><br></br>`+ `${sorted_pk_nba[0].Player}<br></br>`);
     panelnba.append("h4").html(` <br></br><strong>Actual Pick<\strong><br></br>` + `${sorted_pk_nba[0].Pk}`);
     panelnba.append("h4").html(`<br></br><strong>Projected Pick<\strong><br></br>` + `${sorted_pk_nba[0].ProjectedPk}`);

     panelnba.append("h4").html(`<hr class="hr_for_cards"><br></br>`+ `${sorted_pk_nba[1].Player}<br></br>`);
     panelnba.append("h4").html(` <br></br><strong>Actual Pick<\strong><br></br>` + `${sorted_pk_nba[1].Pk}`);
     panelnba.append("h4").html(`<br></br><strong>Projected Pick<\strong><br></br>` + `${sorted_pk_nba[1].ProjectedPk}`);

     panelnba.append("h4").html(`<hr class="hr_for_cards"><br></br>`+ `${sorted_pk_nba[2].Player}<br></br>`);
     panelnba.append("h4").html(` <br></br><strong>Actual Pick<\strong><br></br>` + `${sorted_pk_nba[2].Pk}`);
     panelnba.append("h4").html(`<br></br><strong>Projected Pick<\strong><br></br>` + `${sorted_pk_nba[2].ProjectedPk}`);

     
    }
  });
}

  function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#sport-picker");
  
    // Use the list of sample names to populate the select options
    d3.csv("../static/data/NBA_years.csv").then((listedyears) => {
        listedyears.forEach((year) => {
          selector
          .append("option")
           .text(year.year)
          .property("value", year.year);
        });
  
      // Use the first sample from the list to build the initial plots
      const firstYear = listedyears[0]; console.log(firstYear);
        buildFacts(firstYear.year);
    });
  }
  
  function optionChanged(newYear) {
    // Fetch new data each time a new sample is selected
        buildFacts(newYear); console.log(newYear);
  }
  
  // Initialize the dashboard
  init();
