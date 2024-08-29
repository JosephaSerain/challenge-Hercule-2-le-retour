/**
 * @property {object} vote - The number of votes
 * @property {Array} activities - All the activities
 */




const base = {
  
    vote: {
      hercule: 120,
      cesar: 53,
    },
    activities: [
      {
        author: 'Hercule',
        finished: true,
        title: 'Le lion de Némée',
      },
      {
        author: 'Hercule',
        finished: false,
        title: 'La biche de Cérynie',
      },
      {
        author: 'Jules César',
        finished: true,
        title: 'Conquête de la Gaule',
      },
      {
        author: 'Hercule',
        finished: true,
        title: 'Le sanglier d\'Erymanthe',
      },
      {
        author: 'Hercule',
        finished: true,
        title: 'L\'hydre de Lerne',
      },
    ],
    /**
     * Give current hour
     * @returns {number} The current hour
     */
    getHour: function() {
      const date = new Date();
      return date.getHours();
    },
    /**
     * Write the best friend in the document
     * @param {string} name - The name of the best friend
     */
    setBestFriend: function(name) {
      document.querySelector('#best-friend').textContent = name;
    },
    /**
     * Show one task
     * @param {number} number - The task number
     */
    displayWork: function() {
      const works = document.querySelectorAll('.panel--work');
      works.forEach((work) => {
          work.classList.remove('hidden');
      });
  },
    /**
     * Write all friends
     * @param {Array} friends - The list of friend's name
     */
    printFriends: function(friends) {
      const listElem = document.getElementById('friends');
      listElem.classList.remove('hidden');
      if (!friends || !Array.isArray(friends)) {
        listElem.innerHTML = '<li class="red">Tu as bien appelé <code>printFriends</code> mais tu ne sembles pas avoir passé de tableau en argument</li>';
      }
      else {
        friends.forEach((friend) => {
          const newElem = document.createElement('li');
          newElem.className = 'tags__item';
          newElem.innerHTML = friend;
          listElem.appendChild(newElem);
        });
      }
    },
    /**
     * Write profile data
     * @param {object} profil - Profile data
     */
    fillProfil: function(profil) {
      const listElem = document.getElementById('profil');
      listElem.classList.remove('hidden');
      if (!profil || typeof profil !== 'object') {
        listElem.innerHTML = '<li class="red">Tu as bien appelé <code>fillProfil</code> mais tu ne sembles pas avoir passé d\'objet en argument</li>';
      }
      else {
        if (
          profil.name === undefined
          || profil.inRelationship === undefined
          || profil.job === undefined
          || profil.department === undefined
          || profil.arm === undefined
          || profil.age === undefined
        ) {
          listElem.innerHTML = '<li class="yellow">Pour un meilleur affichage essaye de respecter les noms de propriétés donnés dans l\'énoncé et n\'oublie aucune propriété</li>';
        }
        else if (
          typeof profil.name !== 'string'
          || typeof profil.inRelationship !== 'boolean'
          || typeof profil.job !== 'string'
          || typeof profil.age !== 'number'
          || (typeof profil.department !== 'number' && typeof profil.department !== 'string')
          || typeof profil.arm !== 'number') {
          listElem.innerHTML = '<li class="yellow">Ça fonctionne mais certains types de valeurs ne sont pas idéalement choisis</li>';
        }
        for (const key in profil) {
          const newElem = document.createElement('li');
          newElem.className = 'tags__item';
          let text;
          switch (key) {
            case 'inRelationship':
              text = profil[key] ? 'En couple' : 'Célibataire';
              break;
            case 'age':
              text = profil[key] + ' ans';
              break;
            case 'department':
              text = 'Vit actuellement dans le ' + profil[key];
              break;
            case 'arm':
              text = profil[key] + 'cm de tour de bras';
              break;
            default:
              text = profil[key];
          }
          newElem.innerHTML = text;
          listElem.appendChild(newElem);
        }
      }
    },
    displayAvailability : function(){
      
      const availabilityElem = document.getElementById("availability");
      const currentHour = base.getHour();
      if (currentHour >= 8 && currentHour <= 20) {
        availabilityElem.textContent = "Disponible";
  
      } else {
        availabilityElem.textContent = "Indisponible";
        availabilityElem.classList.add = "off";
      }
    },
    generatePseudo: function(firstName, departmentNumber) {
      return `${firstName}-du-${departmentNumber}`;
  },
  
  
     
  
    init : function (){
      base.fillProfil(Hercule);
      base.printFriends(herculeFriends);
      base.setBestFriend(herculeFriends[0]);
      base.displayWork();
      base.displayAvailability();
      const pseudo = base.generatePseudo(Hercule.name, Hercule.departement);
      const profilNameElem = document.getElementById('profil-name');
      if (profilNameElem) {
          profilNameElem.textContent = pseudo;
      } else {
          console.error('Element with id "profil-name" not found.');
      }
      
      const contactForm = document.getElementById('contact');
          if (contactForm) {
              contactForm.addEventListener('submit', function(event) {
                  // Empêcher l'actualisation de la page
                  event.preventDefault();
  
                  // Afficher une boîte de dialogue en alerte
                  alert('Hercule ne souhaite pas être dérangé.');
              });
          } else {
              console.error('Element with id "contact" not found.');
          }
  
      
      
  
    },
    
  };
  
  document.addEventListener("DOMContentLoaded", base.init);