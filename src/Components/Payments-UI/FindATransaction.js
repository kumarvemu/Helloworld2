import { Fragment,useState } from "react";
import { useParams } from "react-router";

import Transactions from './Transactions';
import Search from "./Search";

const FindATransaction = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const params = useParams();
    if (params.orderId != null && params.orderId !== searchTerm) {
        setSearchTerm(params.orderId);
    }

    return ( <Fragment>
                <Search setSearchTerm={setSearchTerm} />
                <Transactions searchTerm={searchTerm} />
            </Fragment>);
}

export default FindATransaction;