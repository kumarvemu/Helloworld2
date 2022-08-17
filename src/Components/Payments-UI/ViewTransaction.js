import { useNavigate, useParams } from "react-router";
import { getPayment } from "./Datafunctions";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const ViewTransaction = () => {

    const emptyTransaction = { orderId: "", date : new Date().toISOString().slice(0,10) , country: "",
        amount : "", currency: "", taxCode : "", taxRate : "", type : ""}

    const [transaction, setTransaction] = useState(emptyTransaction);
    const user = useSelector(state => state.user);

    const navigate = useNavigate();

    const params = useParams();
    useEffect( () => {
    getPayment(user.username, user.password, params.id)
        .then( response => {
            if (response.status === 200) {
                setTransaction(response.data);
            }
            else {
                console.log("Something went wrong ", response.status);
            }
        } )
        .catch( error => console.log("error occurred", error)) ;
    }, [] );

    const dispatch = useDispatch();

    const edit = () => {
        dispatch({type: "set-transaction-to-edit", value : transaction});
        navigate("/edit/" + params.id);
    }
    
    return (
        <Fragment>
            <h2>View transaction {transaction.id} </h2>
            <table className="transactionsTable" >
                <tbody>
                    <tr><th>Order Id</th><td>{transaction.orderId}</td></tr>
                    <tr><th>Date</th><td>{transaction.date}</td></tr>
                    <tr><th>Country</th><td>{transaction.country}</td></tr>
                    <tr><th>Currency</th><td>{transaction.currency}</td></tr>
                    <tr><th>Amount</th><td>{transaction.amount}</td></tr>
                    <tr><th>Tax Rate</th><td>{transaction.taxRate}</td></tr>
                    <tr><th>Tax Code</th><td>{transaction.taxCode}</td></tr>
                    <tr><th>Type</th><td>{transaction.type}</td></tr>
                </tbody>
            </table>
            {user.role === "MANAGER" && <button onClick={edit}>edit</button> }
        </Fragment>
    );
}

export default ViewTransaction;