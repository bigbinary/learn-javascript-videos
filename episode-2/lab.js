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
    log(vehicle);
  }

  log(vehicle);

  fly();

  log(vehicle);

}

lab();

