// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

const recipeDiv = document.getElementById('recipe-container');
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipeObject => {
        const {recipes} = recipeObject;
        //console.log(recipes)

        for (const recipe of recipes) {
            const div = document.createElement('div');
            div.classList.add('div-container');
            const divInfoPartOne = document.createElement('div');
            const divInfoPartTwo = document.createElement('div');
            const divInfoPartThree = document.createElement('div');

            divInfoPartOne.innerText = `
                       "id": ${recipe.id},
                       "name": ${recipe.name}`

            const ulIngredients = document.createElement('ul');
            ulIngredients.style = `
                    list-style-type: disc;
                    padding-left: 40px;
                    font-size: 14px;
                    line-height: 1.8;
            `;
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ulIngredients.appendChild(li);
            });

            divInfoPartTwo.innerText =`
                       "instructions": ${recipe.instructions},
                       "prepTimeMinutes":${recipe.prepTimeMinutes}, 
                       "cookTimeMinutes":${recipe.cookTimeMinutes},
                       "servings":${recipe.servings},
                       "difficulty":${recipe.difficulty},
                       "cuisine": ${recipe.cuisine},
                       "caloriesPerServing": ${recipe.caloriesPerServing},
                       "tags":${recipe.tags},
                       "userId":${recipe.userId}`

                        const img = document.createElement('img');
                            img.src = recipe.image;
                            img.alt = recipe.name;
                            img.style = `
                                width: 100%;
                                max-width: 600px;
                                border-radius: 10px;
                                margin: 20px 0;
                                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                            `;

            divInfoPartThree.innerText =`
                       "rating":${recipe.rating},
                       "reviewCount":${recipe.reviewCount},
                       "mealType":${recipe.mealType} `

            div.append(divInfoPartOne, ulIngredients, divInfoPartTwo,img,divInfoPartThree);
            recipeDiv.appendChild(div);

        }
    });