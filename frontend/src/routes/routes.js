import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importação dos Componentes
import Homepage from '../pages/homepage'
import Login from '../pages/login/login'
import Register from '../pages/addUser'
import UserList from '../pages/admin/userList'

function Routes () {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/userlist" component={UserList} />
            </Switch>
        </Router>
    )
}

export default Routes;