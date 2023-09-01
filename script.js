const videoDB = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos1 = data.data;
    displayVideo(videos1);
    

}

const displayVideo = videos1 => {
    videos1.forEach(videos2 =>{
        console.log(videos2);
    })
}

videoDB();