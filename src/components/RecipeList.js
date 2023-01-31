import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Trashcan from "../assets/trashcan.svg";
import { projectFirestore } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import "./RecipeList.css";

export default function RecipeList({ recipies }) {
  const { mode } = useTheme();

  if (recipies.length === 0) {
    return <div className="error">No recipies to load...</div>;
  }

  const handleClick = (id) => {
    deleteDoc(doc(projectFirestore, "recipies", id));
  };

  return (
    <div className="recipe-list">
      {recipies.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipies/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            onClick={() => handleClick(recipe.id)}
            src={Trashcan}
            alt="delete icon"
          />
        </div>
      ))}
    </div>
  );
}
