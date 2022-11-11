import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard, Landingpage, Pasbandara } from './pages'
import { Survey } from './section';
import { QEvaluation1, QEvaluation2 } from './section/Evaluation';
import { QBehaviour1, QBehaviour2, QBehaviour3, QBehaviour4, QBehaviour5 } from './section/ServiceBehavior';
import { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8 } from './section/ServiceQuality';
import LottieAnimation from './components/LottieAnimation'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/survey' element={<Survey />}/>
        <Route path='/survey-done' element={<LottieAnimation />}/>

        <Route path='/service-quality/question/1' element={<Question1 />} />
        <Route path='/service-quality/question/2' element={<Question2 />} />
        <Route path='/service-quality/question/3' element={<Question3 />} />
        <Route path='/service-quality/question/4' element={<Question4 />} />
        <Route path='/service-quality/question/5' element={<Question5 />} />
        <Route path='/service-quality/question/6' element={<Question6 />} />
        <Route path='/service-quality/question/7' element={<Question7 />} />
        <Route path='/service-quality/question/8' element={<Question8 />} />

        <Route path='/service-behaviour/question/1' element={<QBehaviour1 />} />
        <Route path='/service-behaviour/question/2' element={<QBehaviour2 />} />
        <Route path='/service-behaviour/question/3' element={<QBehaviour3 />} />
        <Route path='/service-behaviour/question/4' element={<QBehaviour4 />} />
        <Route path='/service-behaviour/question/5' element={<QBehaviour5 />} />
        
        <Route path='/evaluation/question/1' element={<QEvaluation1 />} />
        <Route path='/evaluation/question/2' element={<QEvaluation2 />} />

        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/Pasbandara' element={<Pasbandara />}/>

        {/* <RefreshRoute path='/myComponent' redirectionPath='/' /> */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;
