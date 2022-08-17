import axios from "axios";

const basicAuthHeader = (username, password) => {
    console.log(btoa(`${username}:${password}`));
    return {'Authorization' : 'Basic ' + btoa(`${username}:${password}`)}
}

export const getAllPaymentsAxiosVersion = (username, password) => {
    
    const paymentsPromise = axios({ url :"http://localhost:8080/api/payment/",
         method: "GET", headers: {...basicAuthHeader(username, password), 'Accept': 'application/json' } });
        
    return paymentsPromise;
}

export const addNewPayment = (username, password, payment) =>  {
    return axios({ url : "http://localhost:8080/api/payment/", 
    method : "POST", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : payment } );
}

export const updatePayment = (username, password, id, data) =>  {
    return axios({ url : "http://localhost:8080/api/payment/" + id, 
    method : "PUT", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : data } );
}

export const getPayment = (username, password, id) => {
    return axios(
        {url : `http://localhost:8080/api/payment/${id}`,
        method: "GET",
        headers : {...basicAuthHeader(username, password), 'Accept': 'application/json'}
        }


        )
}

export const login = (username, password) => {
    return axios(
        {url : "http://localhost:8080/api/login",
        method: "POST",
        headers : { ...basicAuthHeader(username,password) , 'Accept': 'application/json', 'Content-Type' : 'application/json' },
        data : {"username" : username}
    }) ;
}