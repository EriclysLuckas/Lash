import styleGallery from "../GalleryLashs/GalleryLashs.module.css";
import GalleryLashsJson from "../GalleryLashs/GalleryLashs.json";
import { useState } from 'react'; // Certifique-se de importar useState



export default function GalleryLashs() {



  const [typeSelected,setTypeSelected ] = useState("Brasileiro")
  const handleTypeClick = (type) =>{
    setTypeSelected(type)
  }

  const imgFilter = typeSelected ? GalleryLashsJson.filter((item) => item.name === typeSelected) : []
  const uniqueTypes = Array.from(new Set(GalleryLashsJson.map(item => item.name)));


  return(
    <section className ={styleGallery.sectionGallery} id ="resultados">
      <div className ={styleGallery.titleGallery}>
        <h1>Resultados </h1>
      </div>
      <div className ={styleGallery.screenGallery}>
        <div className = {styleGallery.typesGallery}>
        {uniqueTypes.map(type => {
            const item = GalleryLashsJson.find(item => item.name === type); // Pega o primeiro item correspondente ao tipo

            return (
              <span
                key={type}
                onClick={() => handleTypeClick(type)}
                className={type === typeSelected ? styleGallery.selectedType : ''}
              >
                <p className={styleGallery.typesSlashsP}>{type}</p>
                {item && <img src={item.min} alt={type} />}
              </span>
            );
          })}
        

        </div>

        <div className = {styleGallery.contentGallery}>
          
          {imgFilter.length > 0 && (
            imgFilter.map((galleryItem) => (
              <img
              className = {styleGallery.imgGallery}
              key={galleryItem.id}
              src={galleryItem.img}
              alt={galleryItem.name} 
            />              ))

          )}
        </div>

      </div>


    </section>
  )
  
}