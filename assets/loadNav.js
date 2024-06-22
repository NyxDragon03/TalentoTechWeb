document.addEventListener('DOMContentLoaded', function() {

    fetch('../assets/navbar.html')
    .then(Response => {
        return Response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.log('Error: ', error))
})