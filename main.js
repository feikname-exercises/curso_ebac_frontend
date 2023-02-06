document.addEventListener('DOMContentLoaded', function() {
    // https://api.github.com/users/username/
    let elemento = function(id) {
        return document.getElementById(id)
    }

    const avatar = elemento('avatar')
    const name = elemento('name')
    const username = elemento('username')
    const repos = elemento('numbers-of-repos')
    const followers = elemento('number-of-followers')
    const following = elemento('number-of-following')
    const link = elemento('link')

    // o @username sem o @
    const endpoint = `https://api.github.com/users/${username.innerText.substring(1)}`

    fetch(endpoint)
    .then(function(res) {
        return res.json()
    })
    .then(function(json) {
        avatar.src = json.avatar_url
        name.innerText = json.name
        username.innerText = json.login
        repos.innerText = json.public_repos
        followers.innerText = json.followers
        following.innerText = json.following
        link.href = json.html_url
    })
    .catch(function(e) {
        alert('Ocorreu um erro ao carregado os dados do perfil')
    })
})