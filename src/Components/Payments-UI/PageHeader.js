import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu';
import      './PageHeader.css' 

const PageHeader = (props) => {

    const username = useSelector( state => state.user.name) ;

    const dispatch = useDispatch();

    const logout = () => dispatch({ type : "logout" });

    return(
        <div className="pageHeader">
        <h1>Payments Application</h1>
        <Menu setSelectedPage={props.setSelectedPage} />
        {username !== "" &&  <p>Current user : {username}  
        <button onClick={logout}>logout</button> </p> }
        </div>
    )

};

export default PageHeader;