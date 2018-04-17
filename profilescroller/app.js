const data = [
  {
    name: 'Chris James',
    age: 18,
    gender: 'male',
    lookingFor: 'female',
    location: 'Portland ME',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Krista Tersh',
    age: 38,
    gender: 'female',
    lookingFor: 'male',
    location: 'Westbrook ME',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Billy Bob',
    age: 28,
    gender: 'male',
    lookingFor: 'female',
    location: 'Poland ME',
    image: 'https://randomuser.me/api/portraits/men/95.jpg'
  },
  {
    name: 'Lucifer Morningstar',
    age: 36,
    gender: 'male',
    lookingFor: 'female',
    location: 'Portland ME',
    image: 'https://randomuser.me/api/portraits/men/73.jpg'
  },
  {
    name: 'Amanda Huffington',
    age: 26,
    gender: 'female',
    lookingFor: 'male',
    location: 'Green ME',
    image: 'https://randomuser.me/api/portraits/women/25.jpg'
  }
];

// Vars
const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event listener
document.getElementById('next').addEventListener('click', nextProfile);


// Next functio
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
    `;

    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
      </ul>
    `;
  } else {
    // End of profile list
    window.location.reload();
  }
  
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
        { value: profiles[nextIndex++], done: false } :
        { done: true } 
    }
  };
}