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
        const email = document.getElementById('email').value;

        emailjs.send('service_zjsadj6', 'template_0zqovl8', {
            firstName: firstName,
            lastName: lastName,
            email: email
        }).then(function(response) {
            subscriptionMessage.style.color = 'green';
            subscriptionMessage.textContent = 'Suscripción exitosa. Revisa tu correo.';
            subscriptionForm.reset(); // Limpiar el formulario después de una suscripción exitosa
        }).catch(function(error) {
            subscriptionMessage.style.color = 'red';
            subscriptionMessage.textContent = 'Hubo un error al enviar el correo.';
        });
    });

    // Cargar imagen de Flickr
    loadImage.addEventListener('click', function() {
        const apiKey = '901045d09eed25cc92047d654dc1d083';
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

    // Obtener datos de Max Verstappen en las temporadas 2021, 2022, 2023 y 2024
    loadData.addEventListener('click', function() {
        dataContainer.innerHTML = '<p>Cargando datos...</p>'; // Mostrar mensaje de carga

        const seasons = [2021, 2022, 2023, 2024]; // Temporadas a filtrar
        const randomSeason = seasons[Math.floor(Math.random() * seasons.length)]; // Seleccionar una temporada aleatoria

        fetch(`https://ergast.com/api/f1/${randomSeason}/drivers/max_verstappen/driverStandings.json`)
            .then(response => response.json())
            .then(data => {
                const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
                const driver = standings.Driver;
                dataContainer.innerHTML = `
                    <p><strong>Piloto (${randomSeason}):</strong> ${driver.givenName} ${driver.familyName}</p>
                    <p><strong>Nacionalidad:</strong> ${driver.nationality}</p>
                    <p><strong>Constructor:</strong> ${standings.Constructors[0].name}</p>
                    <p><strong>Puntos (${randomSeason}):</strong> ${standings.points}</p>
                    <p><strong>Posición en el Campeonato:</strong> ${standings.position}</p>
                `;
            })
            .catch(error => {
                dataContainer.textContent = 'Hubo un error al cargar los datos.';
            });
    });
});