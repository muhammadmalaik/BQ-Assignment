let InputData = document.getElementById('input');
let Showrepo = document.getElementById('showRepo');

let searchData = async () => {
    let apiUrl = `https://api.github.com/users/${InputData.value}`;

    let fetchData = await fetch(apiUrl);
    let response = await fetchData.json();

    console.log(response);
    return showData(response)
}

let showData = (data) => {
    Showrepo.innerHTML = `<div>
    <div>
    <img src="${data.avatar_url}" alt="${data.login}">
    </div>  
    <div>
        <h2>${data.name || 'No name provided'}</h2>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
    </div>
</div>`
};
