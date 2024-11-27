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

    // Obtener datos de Ergast Developer API
    loadData.addEventListener('click', function() {
        dataContainer.innerHTML = '<p>Cargando datos...</p>'; // Mostrar mensaje de carga

        const randomData = Math.floor(Math.random() * 3); // Generar un número aleatorio entre 0 y 2
        const seasons = [2020, 2021, 2023, 2024]; // Temporadas a filtrar
        const randomSeason = seasons[Math.floor(Math.random() * seasons.length)]; // Seleccionar una temporada aleatoria

        switch(randomData) {
            case 0:
                // Obtener datos de pilotos
                fetch(`https://ergast.com/api/f1/${randomSeason}/driverStandings.json`)
                    .then(response => response.json())
                    .then(data => {
                        const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                        const randomIndex = Math.floor(Math.random() * standings.length);
                        const driver = standings[randomIndex].Driver;
                        dataContainer.innerHTML = `
                            <p><strong>Piloto (${randomSeason}):</strong> ${driver.givenName} ${driver.familyName}</p>
                            <p><strong>Nacionalidad:</strong> ${driver.nationality}</p>
                            <p><strong>Constructor:</strong> ${standings[randomIndex].Constructors[0].name}</p>
                            <p><strong>Puntos (${randomSeason}):</strong> ${standings[randomIndex].points}</p>
                        `;
                    })
                    .catch(error => {
                        dataContainer.innerHTML = '<p>Hubo un error al obtener los datos de los pilotos.</p>';
                    });
                break;
            case 1:
                // Obtener datos de campeonatos
                fetch(`https://ergast.com/api/f1/${randomSeason}/driverStandings/1.json`)
                    .then(response => response.json())
                    .then(data => {
                        const champion = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
                        dataContainer.innerHTML = `
                            <p><strong>Campeón de ${randomSeason}:</strong> ${champion.givenName} ${champion.familyName}</p>
                        `;
                    })
                    .catch(error => {
                        dataContainer.innerHTML = '<p>Hubo un error al obtener los datos del campeón actual.</p>';
                    });
                break;
            case 2:
                // Obtener datos de circuitos
                fetch(`https://ergast.com/api/f1/${randomSeason}/circuits.json`)
                    .then(response => response.json())
                    .then(data => {
                        const circuits = data.MRData.CircuitTable.Circuits;
                        const randomIndex = Math.floor(Math.random() * circuits.length);
                        const circuit = circuits[randomIndex];
                        dataContainer.innerHTML = `
                            <p><strong>Circuito:</strong> ${circuit.circuitName}</p>
                            <p><strong>Localización:</strong> ${circuit.Location.locality}, ${circuit.Location.country}</p>
                        `;
                    })
                    .catch(error => {
                        dataContainer.innerHTML = '<p>Hubo un error al obtener los datos del circuito.</p>';
                    });
                break;
        }
    });
});