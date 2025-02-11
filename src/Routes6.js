import React from "react"
import AuthLayout6 from "./AuthPages6/AuthLayout6"
import Login6 from "./AuthPages6/Login6"
import Blog6 from "./Blog6"
import Contact6 from "./ContactPages6/Contact6"
import ContactLayout6 from "./ContactLayout6"
import Admins from "./ContactPages6/Admins"
import Blog404 from "./ContactPages6/Contact404"
import Post from "./ContactPages6/Post"
import Staffs from "./ContactPages6/Staffs"
import Home6 from "./Home6"
import HomeLayout6 from "./HomeLayout6"
import Page6404 from "./Page6404"
import Profile6 from "./Profile6"
import PrivateRoutes6 from "./PrivateRoute6"

const routes = [
    {
        path: '/',
        name: 'home',
        element:<HomeLayout6></HomeLayout6>,
        children: [
            {
                index: true,
                name: 'index',
                element: <Home6></Home6>
            },
            {
                path: '/contact',
                name: 'contact',
                element:<ContactLayout6></ContactLayout6>,
                children: [
                    {
                        index: true,
                        name: 'index',
                        element: <Contact6></Contact6>
                    },
                    {
                        path: 'admins',
                        name: 'admins',
                        element:<Admins></Admins>
                    },
                    {
                        path: 'staffs',
                        name: 'staffs',
                        element:<Staffs></Staffs>
                    },
                    {
                        path: 'post/:url',
                        name: 'post',
                        element:<Post></Post>
                    },
                    {
                        path: '*',
                        name: 'notFound',
                        element:<Blog404></Blog404>
                    }
                ]
            },
            {
                path: '/blog',
                name: 'blog',
                element: <Blog6></Blog6>
            },
            {
                path: '/profile',
                name: 'profile',
                element: <PrivateRoutes6><Profile6></Profile6></PrivateRoutes6>
            },
            {
                path: '*',
                name: 'notFound',
                element:<Page6404></Page6404>
            }
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        element:<AuthLayout6></AuthLayout6>,
        children: [
            {
                path: 'login',
                name: 'login',
                element: <Login6></Login6>
            },
        ]
    }
]

export default routes