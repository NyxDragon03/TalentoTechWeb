document.addEventListener('DOMContentLoaded', function() {

    fetch('https://nyx-project.vercel.app/navbar.html')
    .then(Response => {
        return Response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.log('Error: ', error))
})