import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import { useState, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

// styles
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const q = queryParams.get("q");
  const [isPending, setIsPending] = useState(false);
  const [recipies, setRecipies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const qry = query(
      collection(projectFirestore, "recipies"),
      where("title", ">=", q),
      where("title", "<=", `${q}\uF7FF`)
    );
    const unsub = onSnapshot(
      qry,
      (snapshot) => {
        console.log(snapshot);
        if (snapshot.empty) {
          setError("No recipies to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          setRecipies(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [q]);

  return (
    <div>
      <h2 className="page-title">recipies including "{q}" in their title</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipies.length && <RecipeList recipies={recipies} />}
    </div>
  );
}
