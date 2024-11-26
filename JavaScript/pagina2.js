document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('d_K3sWTx_5HbLV2a3');

    const subscriptionForm = document.getElementById('subscriptionForm');
    const subscriptionMessage = document.getElementById('subscriptionMessage');
    const loadImage = document.getElementById('loadImage');
    const imageContainer = document.getElementById('imageContainer');
    const loadData = document.getElementById('loadData');
    const dataContainer = document.getElementById('dataContainer');

    // Enviar correo de suscripción
    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        emailjs.send('service_zjsadj6', 'template_ktnsfbi', {
            firstName: firstName,
            lastName: lastName
        }).then(function(response) {
            subscriptionMessage.style.color = 'green';
            subscriptionMessage.textContent = 'Suscripción exitosa. Revisa tu correo.';
        }).catch(function(error) {
            subscriptionMessage.style.color = 'red';
            subscriptionMessage.textContent = 'Hubo un error al enviar el correo.';
        });
    });

    // Cargar imagen de Flickr
    loadImage.addEventListener('click', function() {
        const apiKey = '901045d09eed25cc92047d654dc1d083'; // Reemplaza con tu clave de API de Flickr
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=formulaone&format=json&nojsoncallback=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const photos = data.photos.photo;
                const randomIndex = Math.floor(Math.random() * photos.length);
                const photo = photos[randomIndex];
                const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                imageContainer.innerHTML = `<img src="${imageUrl}" alt="F1 Image">`;
            })
            .catch(error => {
                imageContainer.textContent = 'Hubo un error al cargar la imagen.';
            });
    });

    // Obtener datos de Ergast Developer API
    loadData.addEventListener('click', function() {
        fetch('https://ergast.com/api/f1/current/driverStandings.json')
            .then(response => response.json())
            .then(data => {
                const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                const randomIndex = Math.floor(Math.random() * standings.length);
                const driver = standings[randomIndex].Driver;
                dataContainer.innerHTML = `
                    <p>Nombre: ${driver.givenName} ${driver.familyName}</p>
                    <p>Nacionalidad: ${driver.nationality}</p>
                    <p>Constructor: ${standings[randomIndex].Constructors[0].name}</p>
                    <p>Puntos: ${standings[randomIndex].points}</p>
                `;
            })
            .catch(error => {
                dataContainer.textContent = 'Hubo un error al obtener los datos.';
            });
    });
});