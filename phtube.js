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
        <a onclick="categoryCard('${name.category_id}')" class="tab bg-gray-200 text-black text-lg px-8 md:px-5  mx-4 rounded-sm">${name?.category}</a>
        `
        nameContainer.appendChild(h2)
    })
}

const categoryCard = async(categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const value = await response.json();
    const info = value.data
     console.log(info)

     if(info.length > 0){

        const cardContainer = document.getElementById('card-container')
        cardContainer.textContent =''
         info.forEach(card =>{
            // console.log(card)
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card card-compact  bg-base-100 shadow-xl rounded-xl">
            <figure><img class="h-52" src="${card.thumbnail}" alt="Shoes" /></figure>

           
            <div class="flex justify-end"> 
            <p class=" relative bottom-9 mr-4 max-w-fit p-2 text-xs text-white  ">
            ${ card?.others?.posted_date ? ` 
            <span>${Math.floor(card?.others?.posted_date / 3600)} </span>hrs <span> ${Math.floor((card?.others?.posted_date % 3600) / 60)}</span> minite
            ` : ''}
            </p> 
            </div>
            
            <div class="card-body flex flex-row gap-3">
                <div class="">
                    <img class="rounded-full w-16 h-16" src="${card?.authors[0]?.profile_picture}" alt="">
                </div>

                <div>
                    <h2 class="text-lg font-bold">${card?.title}></h2>
    
                    <div class="flex flex-row items-center gap-2">
                    <h6 class="text-gray-600 my-1">${card?.authors[0]?.profile_name} </h6> 
                    <span>  ${card?.authors[0]?.verified ? '<img src="./logo/fi_10629607.svg" alt="">' : ''}</span>
                    </div>
                   
                    <p class="text-gray-600 ">${card?.others?.views} views</p>  
                </div>
            </div>
        </div>
            
            `
            cardContainer.appendChild(div)
            const cardContainer22 = document.getElementById('card-container22')
            cardContainer22.textContent = ''
         })
     } 
     else {
        // clear the card
        const cardContainer = document.getElementById('card-container')
        cardContainer.innerHTML = ''
        
        const cardContainer22 = document.getElementById('card-container22')
        cardContainer22.textContent = ''
        const div2 = document.createElement('div');
        div2.innerHTML = `
        <div class="flex justify-center mb-6"><img src="./logo/Icon.png" alt=""></div>
            <h1 class="text-center font-bold text-xl">Oops!! Sorry, There is no <br> content here</h1>
        `
        cardContainer22.appendChild(div2)
     }
}


categoryName();
categoryCard('1000');

document.getElementById('blog-window').addEventListener('click', ()=>{
    window.location.href = 'blog.html'
})


