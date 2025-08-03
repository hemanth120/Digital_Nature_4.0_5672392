import {Routes, BrowserRouter,Route, Link} from 'react-router-dom';
import TrainerDetails from './TrainerDetails'
function TrainerList ({trainers})
{
    
    return(
            <div>
                <h3>Trainer List</h3>
              
                <div>
                <ul>{trainers.map((trainer,index)=>
                    <li key={index}>
                        <Link to={`/trainers/${trainer.TrainerId}`}>{trainer.Name}</Link>
                    </li>)}
                </ul>
</div>
            </div>
    )

}
export default TrainerList;