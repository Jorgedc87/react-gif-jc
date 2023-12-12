import GifCard from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <h2>Cargando...</h2>}
        {
          images.map((image) => 
            <GifCard 
              key={image.id} 
              { ...image }
            />
          )
        }
      </div>

    </>
  )
}

export default GifGrid