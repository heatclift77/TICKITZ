import { Route} from 'react-router-dom';

const AdminRoute = ({component:Component, ...rest})=>{
    return(
        <Route {...rest} render={(props)=><Component {...props}/>}  />
    )
}

export default AdminRoute