import axios from 'axios';

export const getAllStrains = () => {
  // let url = `https://terp-backend-develop.onrender.com/api/strains`

  let url = `https://terp-backend-develop.onrender.com/api/products?populate[0]=product_terpenes.terpene&populate[1]=product_cannabinoids.cannabinoid&populate[2]=effects.effect&populate[3]=flavors.flavor&populate[4]=aromas.aroma`;

  let ourHeader = {Authorization: 'Bearer ac907442ffe1b2868c8c794867ae480ca47b51cbee003999c66058014aa5b894da8192363d65fa44e9d8c3a8368b0182cb1e8a19bb680e996efb37c045b323e05a31c9642af25d9e2d64aff0bd0278337c63591bb45be1728e84f16855fa347178b660188cb038011c893d0b94d3f38968faf34aba6b98eb31a55668578b49b8'}

  let response = axios.get(url, {headers: ourHeader})

  return response
}

//   //https://terp-backend-develop.onrender.com/api -> make into "rootURL"
//   // let url = `https://terp-backend-develop.onrender.com/api/strains/?filters[name][$containsi]=${searchInput}`
//   // let url = `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=xUoI1JmR6Bufafw2f3ZRJOQZUbAcO5L9`

//   return fetch(url)
//     .then(response => {
//       if(!response.ok) {
//         throw new Error('Oopsies! Something went wrong 🤡')
//       } else {
//         return response.json()
//       }
//     })


// export default getAllStrains;