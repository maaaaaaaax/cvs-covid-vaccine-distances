function myFunction() {

    // Access the current sheet and data per https://developers.google.com/apps-script/guides/sheets
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
  
    // Print the cities
    for (var i = 1; i < data.length; i++)
    {
      // Logger.log(data[i][0]);
      // Logs how long it would take to walk from Times Square to Central Park.
      var directions = Maps.newDirectionFinder()
        .setOrigin('1585 Charleston Rd, Mountain View, CA 94043')
        .setDestination(data[i][0])
        .getDirections();
      // Logger.log(directions.routes[0].legs[0].duration.text);
      // Logger.log(directions.routes[0].legs[0]['distance']['text']);
  
      // Set the distance, in miles
      var row_number = (i + 1).toString();
      var distance_grid = 'C'.concat(row_number);
      var distance_cell = sheet.getRange(distance_grid);
      distance_cell.setValue(directions.routes[0].legs[0]['distance']['text']);      
  
      // Set the distance, in hours and minutes
      var duration_grid = 'D'.concat(row_number);
      var duration_cell = sheet.getRange(duration_grid);
      duration_cell.setValue(directions.routes[0].legs[0].duration.text);    
    }
  }
  