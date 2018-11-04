import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from 'views/main/Home';
import Alerts from 'views/main/Alerts';
import Badges from 'views/main/Badges';
import Buttons from 'views/main/Buttons';
import Charts from 'views/main/Charts';
import Icons from 'views/main/Icons';
import Tables from 'views/main/Tables';
import Tabs from 'views/main/Tabs';
import { Package, File } from 'react-feather';

const contextPath = '/main/';

const mainRoutes = [
    {
        path: contextPath +'home',
        name: 'Home',
        component: Home,
        sidebar: false
    },
    {
        name: 'Components',
        icon: Package,
        sidebar: true,
        subRoutes: [
            {
                path: contextPath + 'components/alerts',
                name: 'Alerts',
                component: Alerts,
                sidebar: true
            },
            {
                path: contextPath + 'components/badges',
                name: 'Badges',
                component: Badges,
                sidebar: true
            },
            {
                path: contextPath + 'components/buttons',
                name: 'Buttons',
                component: Buttons,
                sidebar: true
            },
            {
                path: contextPath + 'components/charts',
                name: 'Charts',
                component: Charts,
                sidebar: true
            },
            {
                path: contextPath + 'components/icons',
                name: 'Icons',
                component: Icons,
                sidebar: true
            },
            {
                path: contextPath + 'components/tables',
                name: 'Tables',
                component: Tables,
                sidebar: true
            },
            {
                path: contextPath + 'components/tabs',
                name: 'Tabs',
                component: Tabs,
                sidebar: true
            }
        ]
    },
    {
        name: 'Pages',
        icon: File,
        sidebar: true,
        subRoutes: [
            {
                path: contextPath + 'pages/signIn',
                name: 'Sign In',
                component: () => <Redirect to="/auth/signIn"/>,
                sidebar: true
            },
            {
                path: contextPath + 'pages/404',
                name: '404 Not Found',
                component: () => <Redirect to="/notFound"/>,
                sidebar: true
            }
        ]
    }
]

export default mainRoutes;