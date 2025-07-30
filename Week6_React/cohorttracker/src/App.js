
import './App.css';
import { CohortsData} from './Cohort'
import CohortDetails from './CohortDetails'; 
import './CohortDetails.module.css'

function App() {
 
  return (
  <div>
    <h1>Cohorts Details</h1>
    {CohortsData.map(cohort => <CohortDetails cohort={cohort}/>)}
  </div>
  );
}

export default App;
