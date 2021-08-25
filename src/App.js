
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  let [country, setCountry] = useState([])
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=> setCountry(data))
  },[])

  
  let info =[ 
    {
    img: 'https://avatars.githubusercontent.com/u/67427360?v=4',
    name: "Mainuddin Sani",
    designation: "Front-End Developer",
    company: "ITclan BD",
    address: "Saha kabir Mazar Road",
  },
    {
    img: 'https://via.placeholder.com/150png/09f/fff',
    name: "Fahad",
    designation: "Back-End Developer",
    company: "ITclan BD",
    address: "Saha kabir Mazar Road",
  },
    {
    img: 'https://via.placeholder.com/150png/09f/fff',
    name: "Robius Sani",
    designation: "Software Engineer",
    company: "ITclan BD",
    address: "Saha kabir Mazar Road",
  },
]
  return (
    <div className="App">
      <header className="App-header">
        <div className="card-main">
          {/* {
            info.map((user,index)=> {
              console.log(user);
              return <Card key={index} userData={user}></Card>
            })
          } */}
          {
            country.map((countryInfo, index)=> {
              console.log(countryInfo.name);
              return <Card key={index} userData={countryInfo}></Card>
            })
          }
          {/* <CountryData></CountryData> */}
        {/* <Card name={info.name} designation={info.designation} company={info.company} address={info.address}></Card> */}
        </div>
      </header>
    </div>
  );
}



function Card(props){
  // console.log(props);
  let styleCard = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    background: '#f7f7f7',
    padding: '10px',
    textAlign: 'center',
  }
  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  }

  return(
    <div className="card" style={styleCard}>
        <img style={imgStyle} src={props.userData.flag} alt="image" />
        <h5>{props.userData.name}</h5>
        <h6>{props.userData.capital}</h6>
    </div>
  )
}

export default App;
