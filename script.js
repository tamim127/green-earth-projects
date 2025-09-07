const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json)=>displyCategories(json.categories));
};

const displyCategories = (categories) => {
    console.log(categories);

    const caterogiesContainer = document.getElementById("categories-container");
    caterogiesContainer.innerHTML="";

    for (let categori of categories){
     
        const categoriDiv = document.createElement("div");
        categoriDiv.innerHTML =`
        <div class="cursor-pointer p-2 rounded-lg transition hover:bg-green-300 ">
          <h2 class="font-medium"> ${categori.category_name} </h2>
        </div>
      `

        caterogiesContainer.append(categoriDiv);
    }
    

};

loadCategories();



// card funtionalities:


const loadAllPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json)=>displyAllPlants(json.plants));
};

const displyAllPlants = (allPlants) => {
    console.log(allPlants);

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML="";

    for (let plant of allPlants){
     
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML =`<div class="cart-btn card bg-base-100 ">
          <figure class="px-5 pt-5">
            <img  src="${plant.image}" alt=""
              class="rounded-xl w-[312px] h-[187px]" />
          </figure>
          <div class=" items-center text-left p-5 space-y-2">
            <h1 class=" font-semibold text-[14px] text-left ">${plant.name}</h1>
            <p class="text-[12px]">${plant.description}</p>
            <div class="flex justify-between">
              <p class="bg-[#DCFCE7] text-[#15803D] rounded-3xl text-[14px] px-3 py-2">${plant.category}</p>
              <p class="font-semibold text-[14px]">৳${plant.price}</p>
            </div>
            <div class="card-actions">
              <button
                class="btn text-white bg-[#15803d] text-[16px] rounded-3xl outline-0 shadow-0 mt-4 transition duration-500 transform hover:scale-103 w-full">Add
                to Cart</button>
            </div>
          </div>
        </div>
      `

        cardContainer.append(cardDiv);
    }
    

};

loadAllPlants();



