const videoDB = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos1 = data.data;
    displayVideo(videos1);
    // console.log(videos1);


}

const displayVideo = videos1 => {
    // console.log(videos1);

    const videoContainer = document.getElementById('video-container');

    videos1.forEach(videos2 => {
        console.log(videos2);

        //2 create a div
        const videoCard = document.createElement('div');
        videoCard.classList = `mb-10 ml-6 card w-72 bg-gray-100 shadow-xl`;

        // 3 inner html set
        videoCard.innerHTML = `
        <figure><img  class="h-52" src="${videos2.thumbnail}" alt="Shoes" /></figure>
            <div class="card-body flex-row items-center">
                <img class="w-9" src="photos/Ellipse 1.svg" alt="">
                <p>${videos2.title}</p>
                
            </div>
            <div class="ml-[75px] grid grid-cols-2">
                <h4>${videos2.authors[0].profile_name}</h4><span>Thik img</span>
            </div>
            <h5 class="ml-[75px]">${videos2.others.views} views</h5>
        `;

        videoContainer.appendChild(videoCard);
        
    });

}

videoDB();


// const videoContainer = document.getElementById('video-container');
// videos1.forEach(videos2 => {
//     console.log(videos2);


//     const videoCard = document.createElement('div');
//     videoCard.classList = `card w-96 bg-gray-400 shadow-xl`;
//     videoCard.inneHTML = `
//     <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//         <div class="card-body flex-row">
//             <img class="w-9" src="photos/Ellipse 1.svg" alt="">
//             <p>If a dog chews shoes whose shoes does he choose?</p>
            
//         </div>
//         <div class="ml-[75px] flex-row">
//             <h4>Name</h4><span>Thik img</span>
//         </div>
//         <h5 class="ml-[75px]">View</h5>
//         `;


//         videoContainer.appendChild(videoCard);
// })