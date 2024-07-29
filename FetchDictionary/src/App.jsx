
import { useState, useEffect } from 'react';
const App = () => {
  const [photos, setPhotos] = useState([]);


  const url = "https://jsonplaceholder.typicode.com/photos"
  
  const fetchApiData = async (url)=>{
    const  res = await fetch(url);
    const  data = await res.json();
    console.log(data)
    return data;

   }


 
  useEffect(() => {
     const loadData = async ()=>{
       const photoData = await fetchApiData(url)
       setPhotos(photoData)
     }
     loadData()
     } , []
  )
   function changeToBlackColor (){

   }
  return (
    <>
     <div style={{margin:'200px' , backgroundColor:'black' , justifyContent:'center',alignItems:'c'}}>
      
      {photos.map((photo) => (
        <div  className='card' key={photo.id} style={{margin:'3px'}}>
             <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
             <button onClick={changeToBlackColor} style={{backgroundColor:'white'}}>change to black color</button>
        </div>
        
      ))}
      
     
    </div>
    </>
   
  );
};
export default App;