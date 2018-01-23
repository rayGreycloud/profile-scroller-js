// Profile Scroller - iterator mini project
// Dummy data in lieu of API
const data = [
  {
    name: 'Anakin Skywalker',
    age: 22,
    gender: 'male',
    lookingFor: 'female',
    location: 'Coruscant',
    image: 'https://randomuser.me/api/portraits/men/99.jpg'
  },
  {
    name: 'Padme Amidala',
    age: 27,
    gender: 'female',
    lookingFor: 'male',
    location: 'Naboo',
    image: 'https://randomuser.me/api/portraits/women/99.jpg'
  },
  {
    name: 'Yoda',
    age: 877,
    gender: 'male',
    lookingFor: 'any',
    location: 'Coruscant',
    image: 'https://randomuser.me/api/portraits/men/9.jpg'
  }  
];
// Load data into iterator
const profiles = profileIterator(data);

// Call first profile 
nextProfile();

// Event listener for button
document.getElementById('next').addEventListener('click', nextProfile);

// Get next profile and generate display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined)  {
    const { name, age, gender, lookingFor, location, image } = currentProfile;    
    
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group" style="list-style:none;">
        <li class="list-group-item">Name: ${name}</li>
        <li class="list-group-item">Age: ${age}</li>
        <li class="list-group-item">Gender: ${gender}</li>
        <li class="list-group-item">Looking For: ${lookingFor}</li>
        <li class="list-group-item">Location: ${location}</li>
      </ul>
    `;
    
    document.getElementById('imageDisplay').innerHTML = `
      <img src=${image} >
    `;
  } else {
    // No more profiles, start over
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  
  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], 
          done: false } : 
        { done: true }
    }
  };
}
