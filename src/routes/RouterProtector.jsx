import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const AuthRoute =  ({element})=>{
    const {isAuthenticate} = useSelector((state)=> state.auth);
    if(isAuthenticate){
        return <Navigate to={`/`} replace />;
    }
    console.log('dfdfdf')
    return element;
}

export const PrivateRoute = ({element})=>{
    const {isAuthenticate} = useSelector((state)=> state.auth);
    if(!isAuthenticate){
        return <Navigate to={`/signin`} replace />;
    }

    return element;
}

