const map = L.map('map').setView([-25.52914277080509, -49.23061870705763], 15 )

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.52914277080509, -49.23061870705763])
    .addTo(map)
    .bindPopup('Curitiba')
    .openPopup()

const maps = document.getElementById("map")

maps.addEventListener("click",function(){
  window.open('https://www.google.com.br/maps/place/R.+M%C3%A1rio+Colombo,+104+-+Alto+Boqueir%C3%A3o,+Curitiba+-+PR,+81770-374/@-25.5291863,-49.2331185,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcfa442eb88c7d:0x386d2e1256e82973!8m2!3d-25.5291912!4d-49.2305436!16s%2Fg%2F11fpnnyl_g?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D')
})    