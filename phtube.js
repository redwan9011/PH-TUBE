const categoryName = async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json();
    const names = data.data
    // console.log(names)

    const nameContainer = document.getElementById('name-container')
    names.forEach(name =>{
        // console.log(name)
        const h2 = document.createElement('h2');
        h2.innerHTML = `
        <a onclick="categoryCard('${name.category_id}')" class="tab bg-gray-200 text-black text-lg px-5  mx-4 rounded-sm">${name?.category}</a>
        `
        nameContainer.appendChild(h2)
    })
}

const categoryCard = async(categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const value = await response.json();
    const info = value.data
     console.log(info)


    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent =''
     info.forEach(card =>{
        // console.log(card)
        const div = document.createElement('div')
        div.innerHTML = `

        <div class="card card-compact  bg-base-100 shadow-xl rounded-xl">
        <figure><img class="" src="${card.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body flex flex-row gap-3">
            <div class="">
                <img class="rounded-full w-16 h-16" src="${card?.authors[0]?.profile_picture}" alt="">
            </div>
            <div>
                <h2 class="text-lg font-bold">${card?.title}></h2>
                <h6 class="text-gray-600 my-1">${card?.authors[0]?.profile_name}</h6>
                <p class="text-gray-600 ">${card?.others?.views} views</p>  
            </div>
        </div>
    </div>
        
        `
        cardContainer.appendChild(div)
     })


     
}


categoryName();
categoryCard('1000');


// if(info.length > 0){

// }