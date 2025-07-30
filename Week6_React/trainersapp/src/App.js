import TrainerList from './TrainerList';
import TrainerMock from './TrainerMock'
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TrainerDetails from './TrainerDetails';
const App = ()=>
{
    return(
        <div>
        <BrowserRouter>

        <div>
               <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/trainers'>Show Trainers</Link></li>
                </ul>
                </nav>
        
        </div>
        <Routes>


            <Route path = '/' element={<Home/>}/>
                <Route path ='/trainers' element={<TrainerList trainers={TrainerMock}/>}/>
               <Route path = {"/trainers/:id"} element = {<TrainerDetails/>}/>
        </Routes>
        </BrowserRouter>
          
        </div>
    )
}
export default App;