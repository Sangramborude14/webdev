// convert routes into lazy-loaded routes
import {lazy,Suspense} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import App from './App';
import Button from './Button';
import { useState } from 'react';



const DigitalClock = lazy(() => import("./DigitalClock"));
// React download the code only needed


const HeavyComponent = lazy(() => import('./HeavyComponent'));

function CodeSplit(){
    return (
        <div>
            <h1>My Project</h1>
        
        {/* Loading component */}
        <Suspense fallback={<div>Loading Component....</div>}>
            <HeavyComponent/>
        </Suspense>
        </div>
      
    )
}

// Route Based Code Splitting

const Home = lazy(() => import("./App"));
const About  = lazy(() => import("./Button"));
const Dashboard = lazy(() => import("./Card"));

function RouteSplit(){
return(
    <Router>
        <Suspense fallback={<div className='spinner'>Loading Page....</div>}>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/about' element={<Button/>}/>
            <Route path='/dashboard' element={<Card/>}/>

        </Routes>
        </Suspense>

    </Router>
)
}

// Conditional Based Code Splitting
const HeavyChart = lazy(() => import('./Counter'));

function Analytics(){
    const [showChart,setShowChart] = useState(false);

    return (
        <div>
            <button onClick={() =>  setShowChart(true)}>
                View Analytics Chart
            </button>
            {showChart && (
                <Suspense fallback={<div> Loading Chart ... </div>}>
                    <HeadersChart/>
                </Suspense>
            )}
        </div>
    )
}

