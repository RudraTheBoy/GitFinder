const accFinder = document.querySelector(".userSearch");
const userInput = document.querySelector(".searchTxt");
let img = document.createElement("img");
let userpic = document.querySelector(".userimg");
const accname = document.querySelector(".name");
const gitHubName = document.querySelector(".githubusername");
const joinDate = document.querySelector(".date");
const bio = document.querySelector(".userinfo_bio");
const repos = document.querySelector(".fact_repo_amt");
const followers = document.querySelector(".fact_followers_amt");
const following = document.querySelector(".fact_following_amt");
const locations = document.querySelector(".locations");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const copy = document.querySelector(".blogImg");

function gitHub_User() {
  const url = `https://api.github.com/users/${userInput.value}`;
  fetch(url).then((res) =>
    res.json().then((result) => {
      console.log(result);
      img.src = result.avatar_url;
      userpic.appendChild(img);
      userpic.style.border = "none";

      const dateData = result.created_at.slice(
        0,
        result.created_at.length - 10
      );
      accname.innerHTML = result.name;
      gitHubName.innerHTML = result.login;
      joinDate.innerHTML = dateData;
      bio.innerHTML = result.bio;
      repos.innerHTML = result.public_repos;
      followers.innerHTML = result.followers;
      following.innerHTML = result.following;
      locations.innerHTML = result.location;
      twit.innerHTML = result.twitter_username;
      websites.innerHTML = result.blog;
      companies.innerHTML = result.company;

      // Gives a different type of output if the socials or the bio is blank
      if (locations.innerHTML === "" || locations.innerHTML === null) {
        locations.innerHTML = "No data available";
        locations.style.color = "#808080";
      } else {
        locations.innerHTML = result.location;
        locations.style.color = "#fff";
      }
      if (twit.innerHTML === "" || twit.innerHTML === null) {
        twit.innerHTML = "No data available";
        twit.style.color = "#808080";
      } else {
        twit.innerHTML = result.twitter_username;
        twit.style.color = "#fff";
      }
      if (websites.innerHTML === "" || websites.innerHTML === null) {
        websites.innerHTML = "No data available";
        websites.style.color = "#808080";
      } else {
        websites.innerHTML = result.blog;
        websites.style.color = "#fff";
      }
      if (companies.innerHTML === "" || companies.innerHTML === null) {
        companies.innerHTML = "No data available";
        companies.style.color = "#808080";
      } else {
        companies.innerHTML = result.company;
        companies.style.color = "#fff";
      }
      if (bio.innerHTML === "" || bio.innerHTML === null) {
        bio.innerHTML = "No bio available for this user :C";
        bio.style.color = "#808080";
      } else {
        bio.innerHTML = result.bio;
        bio.style.color = "#fff";
      }
      if (accname.innerHTML === "" || accname.innerHTML === null) {
        accname.innerHTML = "No name :[";
        accname.style.color = "#808080";
      } else {
        accname.innerHTML = result.name;
        accname.style.color = "#fff";
      }
      copy.addEventListener("click", () => {
        const textarea = document.createElement("textarea");
        const blogId = result.blog;
        if (!blogId) {
          return;
        }
        textarea.value = blogId;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      });
    })
  );
}

document.addEventListener("keydown", (event) => {
  var key = event.keyCode;
  if (key == 13) {
    gitHub_User();
  }
});
accFinder.addEventListener("click", gitHub_User);
