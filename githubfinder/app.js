// APP
// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;


// search users input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userInput = e.target.value;
  if(userInput !== '') {
    // make http request
    github.getUser(userInput)
      .then(data => {
        if(data.profile.message !== 'Not Found') {
          // Show Profile & Repos
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
          // Removes Alert on input if active
          ui.showAlert(false, 'bg-secondary');
        } else {
          // Clear Profile
          ui.clearProfile();
          // Show Alert - user not found (input bg to red)
          ui.showAlert(true, 'bg-secondary');
        }
      });
  } else {
    // Clear Profile
    ui.clearProfile();
    // Removes Alert on input if active
    ui.showAlert(false, 'bg-secondary');
  }
});