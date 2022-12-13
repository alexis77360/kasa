import { useParams } from 'react-router-dom'
import apart from "../datas/data.json";
import Slider from '../components/Slider';



const Apartment = () => {
    const { apartmentId } = useParams()
   
    //? On récupère l'id de l'appartement dans l'url et on le compare à l'id de l'appartement dans le tableau d'appartements
    const logement = apart.find((apart) => apart.id === apartmentId)
    console.log(logement.pictures)

    return(

        <main className='main'>
            
            <Slider images={logement.pictures} />


        

        </main>

 
    )
}

export default Apartment