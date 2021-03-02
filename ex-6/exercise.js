function volume_sphere() {
  var volume;
  var radius = document.getElementById('radius').value;

  // This is how you calculate the volume of the sphere
  radius = Math.abs(Number(radius));
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false

}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
