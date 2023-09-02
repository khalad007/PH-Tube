// fetching card data 
const videoDB = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos1 = data.data;
    displayVideo(videos1);
    // console.log(videos1);


}

// fetching all catagory data 
// fetching all catagory data 
// fetching all catagory data 

const catagoryDB = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catagory1 = data.data;
    displayCatagory(catagory1);
    // console.log(catagory1);


}
catagoryDB();

//.................................... all catagory bUTTON section 

const displayCatagory = catagory1 => {
    // console.log(catagory1);

    const catagoryContainer = document.getElementById('catagory-container');
    catagory1.forEach(catagory2 => {
        console.log(catagory2);

        // create a div 
        const catagoryCard = document.createElement('div');
        catagoryCard.classList = `items-center text-center mt-5 mb-8`;

        // set innerhtml
        catagoryCard.innerHTML = `
        <button onclick="handleLoadCategories('${catagory2.category_id}')" class="h-10 rounded-lg w-36 bg-gray-300">${catagory2.category}</button>
        `;

        // appendChild 

        catagoryContainer.appendChild(catagoryCard);
    })

};
const handleLoadCategories = async (catagory2) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagory2}`);
    const data = await res.json();

    console.log(data.data);
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = "";

    data.data.forEach((details) => {
        console.log(details);
        const div = document.createElement('div');
        div.classList = `mb-10 ml-6 card w-72 bg-gray-100 shadow-xl`;
          // 3 inner html set
          div.innerHTML = `
          <figure><img  class="h-52" src="${details.thumbnail}" alt="Shoes" /></figure>
              <div class="card-body flex-row items-center">
              <img class="w-9 h-9 rounded-full" src=${details.authors[0].profile_picture} alt="">
                  <p>${details.title}</p>
                  
              </div>
              <div class="ml-[75px] grid grid-cols-2 justify-center text-xs">
                  <h4>${details.authors[0].profile_name}</h4><span>${(details.authors[0].verified === false) ? "" : `<img src="photos/fi_10629607.svg"`}</span>
              </div>
              <h5 class="ml-[75px] text-xs mb-3 pt-3">${details.others.views} views</h5>
          `;
          videoContainer.appendChild(div);

    })
    
}


handleLoadCategories(1000);


// card body section .....////.......//.........////.........///............./////...........//............//////

// const displayVideo = videos1 => {
//     // console.log(videos1);

//     const videoContainer = document.getElementById('video-container');

//     videos1.forEach(videos2 => {
//         console.log(videos2);

//         //2 create a div
//         const videoCard = document.createElement('div');
//         videoCard.classList = `mb-10 ml-6 card w-72 bg-gray-100 shadow-xl`;

//         // 3 inner html set
//         videoCard.innerHTML = `
//         <figure><img  class="h-52" src="${videos2.thumbnail}" alt="Shoes" /></figure>
//             <div class="card-body flex-row items-center">
//                 <img class="w-9 h-9 rounded-full" src=${videos2.authors[0].profile_picture} alt="">
//                 <p>${videos2.title}</p>
                
//             </div>
//             <div class="ml-[75px] grid grid-cols-2 justify-center text-xs">
//                 <h4>${videos2.authors[0].profile_name}</h4><span>${(videos2.authors[0].verified === false) ? "" : `<img src="photos/fi_10629607.svg"`}</span>
//             </div>
//             <h5 class="ml-[75px] text-xs mb-3 pt-3">${videos2.others.views} views</h5>
//         `;

//         videoContainer.appendChild(videoCard);

//     });

// }

// videoDB();

// sort-by-view ..................sort-by-view .....................sort-by-view.............. sort-by-view ......sort-by-view ...

// const sortByView = document.getElementById('sort-by-view');

// document.getElementById('sort-by-view').addEventListener('click',function sortByView(){
//     document.body.style.backgroundColor = 'pink';

//    })

// const sortByView = sortByView => {
//     // console.log(sortByView);
//     document.getElementById('sort-by-view').addEventListener('click', function () {
//         document.body.style.backgroundColor = 'pink';
//         // console.log(sortByView);

//     });

// }
