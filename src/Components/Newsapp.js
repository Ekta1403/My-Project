import React, { useState, useEffect} from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india"); 
    const [newsData, setNewsData] = useState(null)
    const API_KEY ="5bd295de460b495b9a7197998355e2b6";

    const getData = async() =>{

        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    useEffect(()=>{
        getData()
    },[])


    const handleInput =(e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const userInput = (event) =>{
        setSearch(event.target.value)
    }


  return (
    <div>
        <nav> 
            <div>
                <h1> Trendy News</h1>
            </div>
            <ul>
                <h3> All News Trendy </h3>
                
            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay updated with Trendy News</p>
        </div>
        <div className='caetgoryBtn'>
            <button onClick={userInput} value="Sports">Sports</button>
            <button onClick={userInput} value="Polities">Polities </button>
            <button onClick={userInput} value="Entertainment">Entertainment</button>
            <button onClick={userInput} value="Health">Health</button>
            <button onClick={userInput} value="Fitness">Fitness</button>
           
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null} 
        </div>
    </div>
  )
}

export default Newsapp