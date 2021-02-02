import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importação dos Componentes
import Homepage from '../pages/homepage'
import Login from '../pages/login/login'
import Register from '../pages/register'

import UserList from '../pages/admin/userList'
import AddUser from '../pages/admin/addUser'
import ProductList from '../pages/admin/productList'
import AddProduct from '../pages/admin/addProduct'
import OrderList from '../pages/admin/orderList'

function Routes () {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                //admin routes
                <Route path="/userlist" component={UserList} />
                <Route path="/adduser" component={AddUser} />
                <Route path="/products" component={ProductList} />
                <Route path="/addproduct" component={AddProduct} />
                <Route path="/orders" component={OrderList} />

                //user routes

            </Switch>
        </Router>
    )
}

export default Routes;