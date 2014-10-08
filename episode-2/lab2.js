// each function gets its own scope

function lab() {
  var vehicle = 'car';
  log(vehicle);

  if ( vehicle === 'car' ) {
    var vehicle = 'minivan';
    log(vehicle);
  }

  log(vehicle);

  function fly() {
    var vehicle = 'airplane';
    log(vehicle);
  }

  fly();

}

lab();
