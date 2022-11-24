
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './component/recipe/recipe';

function App() {

  const APP__ID = "9ac8d99e";
  const APP__Key = "8e6a5f12649212787caad18034498731";

  const [data,setData] = useState('');
  const [apidata,setApiData] = useState([]);
  const [query,setQuery] = useState('');
  console.log(apidata)

  const  queryFun = (e) => {
      e.preventDefault();
      setQuery(data)

  }
  useEffect(()=>{

    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP__ID}&app_key=${APP__Key}`
    )
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
    setApiData(data.hits)
    })

  },[query])

  return (
    <div className="App">
      <form className='search-form' onSubmit={queryFun}>
        <input type='text' className='search-bar' value={data} onChange={(e)=> setData(e.target.value)}></input>
        <button className='search-btn'>Search</button>
      </form>
      <div className='recipe'>
       {
        apidata.map((rec)=>{
          return <Recipe 
          title={rec.recipe.label}
          image={rec.recipe.image}
          ingredients={rec.recipe.ingredients}
          key={rec.recipe.calories}/>
        })
       }</div>
    </div>
  );
}

export default App;
