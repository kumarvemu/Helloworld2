import './App.css';
import Search from './Components/Payments-UI/Search';
import Transactions from './Components/Payments-UI/Transactions';
import PageHeader from './Components/Payments-UI/PageHeader';
import FindATransaction from './Components/Payments-UI/FindATransaction';
import NewTransaction from './Components/Payments-UI/NewTransaction';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Components/Payments-UI/PageNotFound';
import { Provider } from 'react-redux';
import paymentsStore from './Components/Payments-UI/store';
import ViewTransaction from './Components/Payments-UI/ViewTransaction';
import ProtectedRoute from './Components/Payments-UI/ProtectedRoute';
import Login from './Components/Payments-UI/Login';


function App() {

  return (
    <Provider store={paymentsStore}>
    <BrowserRouter>
    <div className="App">
      
      <PageHeader/>
    
        <Routes>
          <Route path="/login" element= {<Login />} />
          <Route path="/find" element = {
            <ProtectedRoute component={<FindATransaction />} roles={["USER", "MANAGER"]} />
          } />
          <Route path="/find/:orderId" element = {<ProtectedRoute component={<FindATransaction />} roles={["USER", "MANAGER"]} />} />
          <Route path="/view/:id" element = {<ProtectedRoute component={<ViewTransaction />} roles={["USER", "MANAGER"]} />} />
          <Route path="/find" element = {<ProtectedRoute component={<FindATransaction />} roles={["USER", "MANAGER"]} />} />

          <Route
           path="/new" 
           element = {<ProtectedRoute component={<NewTransaction />}  roles={["MANAGER"]} /> } 
          />

          <Route
           path="/edit/:id" 
           element = {<ProtectedRoute component={<NewTransaction />}  roles={["MANAGER"]} /> } 
          />
         
          <Route path="/" element={<h1>Welcome to the application</h1>} />
          <Route path="*" element={<PageNotFound />} />  
        </Routes>
        
      </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;