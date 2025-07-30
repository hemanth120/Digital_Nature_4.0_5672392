import { useParams } from "react-router-dom";
import TrainerMock from './TrainerMock';
const TrainerDetails =()=>
{ 
    const {id} = useParams();
    const trainer = TrainerMock.find(t=>t.TrainerId===id)
    if(!trainer)
    {
        return <h2>Trainer not found</h2>
    }
    return(
        <div>
             <h2>Trainer Details</h2>
            <p><strong>{trainer.Name} ({trainer.Technology})</strong> </p>
            <p> {trainer.Email}</p>
            <p> {trainer.Phone}</p>
           
            <ul> {trainer.Skills.map((skill,index)=>
                    <li key={index}>{skill}</li>
            )}</ul>
        </div>
    )
}
export default TrainerDetails;
