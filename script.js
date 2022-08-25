const e1 = document.getElementById('entry')

const generateCarouselItem = (item,index)=>{
    if(index===0){
        return `<div class="carousel-item active">
        <img src="${item.imageUrl}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>${item.fullName}</h5>
            <p>${item.title}</p>
        </div>
    </div>`
    }

    return `<div class="carousel-item">
        <img src="${item.imageUrl}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>${item.fullName}</h5>
            <p>${item.title}</p>
        </div>
    </div>`
}



const getData = async ()=>{
    const res = await fetch('https://thronesapi.com/api/v2/Characters')
    const data = await res.json()
    console.log(data)
    var innerHTML = ''
    data.forEach((item,index)=> {
        innerHTML = innerHTML + generateCarouselItem(item,index)
    });
    innerHTML
    e1.innerHTML = innerHTML
}

getData()