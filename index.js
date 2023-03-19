require("dotenv").config();

const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search';
const API_URL_ANALYZE = (id) => `https://api.thedogapi.com/v1/images/${id}/analysis`;
const API_URL_FAV = 'https://api.thedogapi.com/v1/favourites';
const API_URL_FAV_DELETE = (id) => `https://api.thedogapi.com/v1/favourites/${id}`;

console.log("The Script Running");

const spanError = document.getElementById('error')
const reload_button = document.getElementById('recargar');
const save_button = document.getElementById('save');

var load = async function loadRandomPerros() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Load Random Dogs')

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
        
    img1.src = data[0].url;

    img1.alt = data[0].id;
    
    return img1;
  }
}

async function FavouriteDog(id, key) {
    const res = await fetch(API_URL_FAV, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'X-API-KEY' : key
      },
        body: JSON.stringify({
        image_id: id
        })
    });
  
   const data = await res.json();
   console.log('Favorite')
   console.log(data)
   
  }

reload_button.addEventListener("click", () => {
    load();
})

save_button.addEventListener("click", () => {
  const img1 = document.getElementById('img1');
  FavouriteDog(img1.alt, process.env.THE_DOG_API_KEY);
  loadFavouriteDogs(process.env.THE_DOG_API_KEY);
})

async function loadFavouriteDogs(key) {
  const res = await fetch(API_URL_FAV, {
    headers: {
      'Content-Type' : 'application/json',
      'X-API-KEY' : key
    }
  });
  const data = await res.json();

  console.log("Objeto con datos de los perros favoritos.");

  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    const section = document.getElementById('favoriteDogs')
    section.innerHTML = "";

    const h2 = document.createElement('h2');
    const h2Text = document.createTextNode('Favourite Dogs');
    h2.appendChild(h2Text);
    section.appendChild(h2);

    data.forEach(dog => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('Sacar al dog de favoritos');

      img.src = dog.image.url;
      img.width = 350;
      btn.appendChild(btnText);
      btn.onclick = () => deleteFavouriteDog(dog.id, process.env.THE_DOG_API_KEY);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}

async function deleteFavouriteDog(id, key) {
  const res = await fetch(API_URL_FAV_DELETE(id), {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json',
      'X-API-KEY' : key
    }
  });
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log('Perro eliminado de favoritos')
    loadFavouriteDogs(process.env.THE_DOG_API_KEY);
  }
}


load();
loadFavouriteDogs(process.env.THE_DOG_API_KEY);



// const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
// const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
// const API_URL_FAVOTITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=c08d415f-dea7-4a38-bb28-7b2188202e46`;

// const spanError = document.getElementById('error')

// async function loadRandomMichis() {
//   const res = await fetch(API_URL_RANDOM);
//   const data = await res.json();
//   console.log('Random')
//   console.log(data)

//   if (res.status !== 200) {
//     spanError.innerHTML = "Hubo un error: " + res.status;
//   } else {
//     const img1 = document.getElementById('img1');
//     const img2 = document.getElementById('img2');
//     const btn1 = document.getElementById('btn1');
//     const btn2 = document.getElementById('btn2');
    
//     img1.src = data[0].url;
//     img2.src = data[1].url;

//     btn1.onclick = () => saveFavouriteMichi(data[0].id);
//     btn2.onclick = () => saveFavouriteMichi(data[1].id);
//   }
// }

// async function loadFavouriteMichis() {
//   const res = await fetch(API_URL_FAVOTITES);
//   const data = await res.json();
//   console.log('Favoritos')
//   console.log(data)

//   if (res.status !== 200) {
//     spanError.innerHTML = "Hubo un error: " + res.status + data.message;
//   } else {
//     const section = document.getElementById('favoriteMichis')
//     section.innerHTML = "";

//     const h2 = document.createElement('h2');
//     const h2Text = document.createTextNode('Michis favoritos');
//     h2.appendChild(h2Text);
//     section.appendChild(h2);

//     data.forEach(michi => {
//       const article = document.createElement('article');
//       const img = document.createElement('img');
//       const btn = document.createElement('button');
//       const btnText = document.createTextNode('Sacar al michi de favoritos');

//       img.src = michi.image.url;
//       img.width = 150;
//       btn.appendChild(btnText);
//       btn.onclick = () => deleteFavouriteMichi(michi.id);
//       article.appendChild(img);
//       article.appendChild(btn);
//       section.appendChild(article);
//     });
//   }
// }

// async function saveFavouriteMichi(id) {
//   const res = await fetch(API_URL_FAVOTITES, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       image_id: id
//     }),
//   });
//   const data = await res.json();

//   console.log('Save')
//   console.log(res)

//   if (res.status !== 200) {
//     spanError.innerHTML = "Hubo un error: " + res.status + data.message;
//   } else {
//     console.log('Michi guardado en favoritos')
//     loadFavouriteMichis();
//   }
// }

// async function deleteFavouriteMichi(id) {
//   const res = await fetch(API_URL_FAVOTITES_DELETE(id), {
//     method: 'DELETE',
//   });
//   const data = await res.json();

//   if (res.status !== 200) {
//     spanError.innerHTML = "Hubo un error: " + res.status + data.message;
//   } else {
//     console.log('Michi eliminado de favoritos')
//     loadFavouriteMichis();
//   }
// }

// loadRandomMichis();
// loadFavouriteMichis();