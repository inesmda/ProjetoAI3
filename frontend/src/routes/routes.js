import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importação dos Componentes
import Login from '../pages/login/login'
import Register from '../pages/login/register'
import Homepage from '../pages/homepage'

import UserList from '../pages/admin/userList'
import AddUser from '../pages/admin/addUser'
import ProductList from '../pages/admin/productList'
import AddProduct from '../pages/admin/addProduct'
import EditProduct from '../pages/admin/editProduct'
import OrderList from '../pages/admin/orderList'

import UserPage from '../pages/user/userpage'
import Cart from '../pages/user/cart'
import EditUser from '../pages/user/editUser'
import PendingOrders from '../pages/user/orderPending'
import ClosedOrders from '../pages/user/orderClosed'

function Routes () {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={ Homepage } />

                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />

                //admin routes
                <Route path="/users" component={ UserList } />
                <Route path="/user/add" component={ AddUser } />
                <Route path="/products" component={ ProductList } />
                <Route path="/product/add" component={ AddProduct } />
                <Route path="/product/edit" component={ EditProduct } />
                <Route path="/orders" component={ OrderList } />

                //user routes
                <Route path="/user" component={ UserPage } />
                <Route path="/cart" component={ Cart } />
                <Route path="/user/edit" component={ EditUser } />
                <Route path="/user/orders/pending" component={ PendingOrders } />
                <Route path="/user/orders/closed" component={ ClosedOrders } />

            </Switch>
        </Router>
    )
}

export default Routes;