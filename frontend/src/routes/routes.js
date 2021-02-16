import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importação dos Componentes
import Homepage from '../pages/homepage'

import Login from '../pages/login/login'
import Register from '../pages/login/register'

import UserList from '../pages/userList'
import UserPage from '../pages/userpage'
import AddUser from '../pages/addUser'
import EditUser from '../pages/editUser'

import PendingOrders from '../pages/orderPending'
import ClosedOrders from '../pages/orderClosed'

import ProductList from '../pages/productList'
import ProductPage from '../pages/productPage'
import AddProduct from '../pages/addProduct'
import EditProduct from '../pages/editProduct'

import OrderList from '../pages/orderList'

import Cart from '../pages/cart'

function Routes () {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <Route path="/users" component={UserList} />
                <Route path="/user/page/:id" component={UserPage} />
                <Route path="/user/add" component={AddUser} />
                <Route path="/user/edit/:id" component={EditUser} />
                <Route path="/user/orders/pending" component={PendingOrders} />
                <Route path="/user/orders/closed" component={ClosedOrders} />

                <Route path="/products" component={ProductList} />
                <Route path="/product/page/:id" component={ProductPage} />
                <Route path="/product/add" component={AddProduct} />
                <Route path="/product/edit/:id" component={EditProduct} />
                
                <Route path="/orders" component={OrderList} />

                <Route path="/cart" component={Cart} />

            </Switch>
        </Router>
    )
}

export default Routes;