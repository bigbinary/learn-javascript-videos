// JavaScript does not support block scoping

function lab() {

  var vehicle = 'car';
  log(vehicle);

  if ( vehicle === 'car' ) {
    var vehicle = 'minivan';
    log(vehicle);
  }

  log(vehicle);

}

lab();
