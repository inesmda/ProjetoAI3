import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importação dos Componentes
import Homepage from '../pages/homepage'
import Login from '../pages/login/login'
import Register from '../pages/login/register'

import UserList from '../pages/admin/userList'
import AddUser from '../pages/admin/addUser'
import ProductList from '../pages/admin/productList'
import AddProduct from '../pages/admin/addProduct'
import EditProduct from '../pages/admin/editProduct'
import OrderList from '../pages/admin/orderList'

import UserPage from '../pages/user/userpage'
import Cart from '../pages/user/cart'

function Routes () {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                //admin routes
                <Route path="/users" component={UserList} />
                <Route path="/user/add" component={AddUser} />
                <Route path="/products" component={ProductList} />
                <Route path="/product/add" component={AddProduct} />
                <Route path="/editproduct" component={EditProduct} />
                <Route path="/orders" component={OrderList} />

                //user routes
                <Route path="/user" component={UserPage} />
                <Route path="/cart" component={Cart} />

            </Switch>
        </Router>
    )
}

export default Routes;