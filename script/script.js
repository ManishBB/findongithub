function callAPI(){
    let x = document.getElementById("myBtn").value;
    let url = "https://api.github.com/users/" + x;

    fetch(url)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
        document.getElementById("profileImage").src = data.avatar_url;
        document.getElementById("profilename").innerText = data.name;
        document.getElementById("profileAbout").innerText = data.bio;
    })

}