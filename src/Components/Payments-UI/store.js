import { configureStore } from "@reduxjs/toolkit";

const initialState = { countries : [] , lastFetch : null ,
    user:{username : "", password: "", role : "", name : ""}, 
    transactions : [],
    transactionToEdit : {}};

const paymentsReducer = (state = initialState, action) => {
   // {type : "clear-down"}   - remove all data back to initial state
   // {type : "refresh-countries", value : []} - update the countris + set the value of last fetch
   // {type : "login", value :{username : "", password: "", role : "", name : ""} }
   // {type : "store-transactions", value :[trans]}

   if (action.type === "clear-down") {
       return initialState;
   }
   else if (action.type === "refresh-countries") {
       return {...state, countries : action.value , lastFetch : new Date().getTime()}
   }
   else if (action.type === "login") {
       return {...state, user : action.value}
   }
   else if (action.type === "logout") {
       return {...state, user : {username : "", password: "", role : "", name : ""}}
   }
   else if (action.type === "save-transactions") {
       return {...state, transactions : action.value, lastFetch : new Date().getTime()}
   }
   else if (action.type === "set-transaction-to-edit") {
       return {...state, transactionToEdit : action.value}
   }
   else {
       console.log("unknown redux action " + action.type);
       return state;
   }

}

// npm install redux react-redux
//const store = createStore(paymentsReducer);

// npm install @reduxjs/toolkit react-redux
const paymentsStore = configureStore({reducer : paymentsReducer});

export default paymentsStore;