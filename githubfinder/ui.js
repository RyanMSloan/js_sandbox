/**
 * User Interface
 * An interface to display GitHub User data
 * 
 * @version 0.0.1
 * @author  RMS
 * @license MIT
 * 
 */

class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  /**
   * - Displays profile data - child of #profile
   * @param {user} user 
   */
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  /**
   * 
   * @param {*} repos 
   */
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  /**
   * - Clears profile data - child of #profile
   */
  clearProfile() {
    this.profile.innerHTML = '';
  }

  /**
   * - Addes or Removes alert, checks if active
   * @param {*} bool show
   * @param {*} string style 
   */
  showAlert(show, css) {
    const input = document.querySelector('.form-control').classList;
    if(show && input.contains(css) === false) {
      input.add(css);
    } else if(!show && input.contains(css)) {
      input.remove(css);
    }
  }
}