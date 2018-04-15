/**
 * GitHub Api interface
 * An interface to fetch GitHub User data
 * 
 * @version 0.0.1
 * @author  RMS
 * @license MIT
 * 
 */

class GitHub {
  constructor() {
    this.client_id = 'ecddaefd3c62af8f1afa';
    this.client_secret = 'b89001bbce81f57f6caec46c68ce466a55628d4e';
    this.repos_per = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // API URL Templates
    const profile_url = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const repos_url = `https://api.github.com/users/${user}/repos?per_page=${this.repos_per}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
    
    // API fetch response
    const profileResponse = await fetch(profile_url);
    const reposResponse = await fetch(repos_url);
    
    // Returned data from API Reponse - in json format
    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    // Return to app origin as an Object
    return {
      profile: profileData,
      repos: reposData
    }
  }
}
