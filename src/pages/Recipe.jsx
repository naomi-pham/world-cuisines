import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/Recipe/List'
import RecipeCard from '../components/Card/RecipeCard'
import Collapse from '../components/Collapse/Collapse'
import { Link } from 'react-router-dom'

const Recipe = () => {

    const [recipes, setRecipes] = useState({})

    let params = useParams()

    useEffect(() => {
        getRecipe(params.name)
    }, [params.name]) 

    function getRecipe(name) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals[0])
            })
    }

    return (
        <div id={recipes.idMeal} className='text-left'>
            <RecipeCard>
                <div className="bg-base-100">
                    <h2><span className='mr-2'><i class='bx bxs-bowl-hot' ></i></span>{recipes.strMeal}</h2>
                </div>
            </RecipeCard>
            
            <RecipeCard>
                <div className="flex gap-8 sm:flex-row flex-col rounded-3xl">
                    <img className='sm:rounded-l-2xl sm:rounded-tr-none sm:w-1/3 sm:h-52 rounded-t-2xl' src={recipes.strMealThumb} />
                    <div className="flex flex-col place-content-end pb-8 gap-6 sm:px-0 p-4">
                        <div className="prose prose-sm sm:prose-base flex gap-6">
                            <h3>Cuisine: <span className='badge badge-info ml-1'>{recipes.strArea}</span></h3>
                            <h3>Category: <span className='badge badge-success ml-1'>{recipes.strCategory}</span></h3>
                        </div>
                        <div className='flex gap-5'>
                            <a className='btn btn-ghost btn-active' target="_blank" href={recipes.strSource}>Recipe source</a>
                            <a className='btn btn-ghost btn-active' target="_blank" href={recipes.strYoutube}>Youtube</a>
                        </div>
                    </div>
                </div> 
            </RecipeCard>

            <RecipeCard>
                <Collapse title="Ingredients">
                    <List recipes={recipes} />
                </Collapse>
                <Collapse title="Instructions">
                    <ol>
                        {recipes.strInstructions?.split("\r\n").map((str, index) => <li key={index}>{str}</li>)}
                    </ol>
                </Collapse>
            </RecipeCard>
        </div>
    )
}

export default Recipe