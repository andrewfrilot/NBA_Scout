<html lang="en">
    <head>
        <meta charset="utf-8">
        <style>
            table {
                border-collapse: collapse;
                border: 2px black solid;
                font: 12px sans-serif;
            }

            td {
                border: 1px black solid;
                padding: 5px;
            }
        </style>
    </head>
    <body>
        <!-- <script src="http://d3js.org/d3.v3.min.js"></script> -->
        <script src="d3.min.js?v=3.2.8"></script>

        <script type="text/javascript"charset="utf-8">
            Promise.all([
  d3.csv("draft.csv"),
]).then(function(data) {
  console.log(data[0][0])  // first row of draft
});

        </script>
    </body>
</html>