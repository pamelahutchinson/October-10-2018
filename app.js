
let dishList = document.getElementById("dishList");
let starters = document.getElementById("starters")

let completed = ''

for(let i = 0; i < dishes.length; i++){
    if (dishes[i].course == "Starters"){
        let dishItem = `
        <li>
            <label>${dishes[i].title}</label>
            <div>
            <p>${dishes[i].description} - ${dishes[i].price}</p>
            <img src="${dishes[i].imageURL}"></img>
            
            </div>
            

        </li>
    `
    completed += dishItem
    
    }
    // 
    
    // let dish = dishes[i]

    // let dishItem = `
    // <li>
    //     <h2>Starters</h2>
    //     <label>${dish.title}</label>
    //     <p>${dish.description} - ${dish.price}</p>
    //     <img src="${dish.imageURL}">

    // </li>
    // `
    // starters.insertAdjacentHTML('beforeend',dishItem)
}
starters.innerHTML = completed