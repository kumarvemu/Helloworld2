import { Link } from "react-router-dom";
import {useNavigate} from 'react-router';

const TransactionRow = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/view/${props.id}`);
    }

    
    return <tr id={props.id} >
           <td>{props.id}</td>
           <td>{props.orderId}</td>
           <td>{props.date}</td>
           <td>{props.country}</td>
           <td>{props.currency}</td>
           <td>{props.amount}</td>
           <td>
           <button onClick={handleClick}>view</button>
           <Link to={`/view/${props.id}`}>view</Link> </td>
           </tr>

}

export default TransactionRow;
