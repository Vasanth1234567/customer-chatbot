// import React from 'react';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// // import Switch from 'react-router'
// import Chatbot from './components/Chatbot';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <nav>
        
//       </nav>
//       <Routes>
//         <Route path="/" component={Chatbot} />
//         <Route path="/dashboard" component={Dashboard} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import Dashboard from './components/Dashboard'
function App() {
  return (
    <Router>
      {/* <nav>
        
       </nav> */}
       <Routes>
         <Route path="/" element={<Chatbot/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
     </Router>
  )
}

export default App