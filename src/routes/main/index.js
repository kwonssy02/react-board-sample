import React from 'react';
import { Redirect } from 'react-router-dom';
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
        name: 'Components',
        icon: Package,
        subRoutes: [
            {
                path: contextPath + 'components/alerts',
                name: 'Alerts',
                component: Alerts
            },
            {
                path: contextPath + 'components/badges',
                name: 'Badges',
                component: Badges
            },
            {
                path: contextPath + 'components/buttons',
                name: 'Buttons',
                component: Buttons
            },
            {
                path: contextPath + 'components/charts',
                name: 'Charts',
                component: Charts
            },
            {
                path: contextPath + 'components/icons',
                name: 'Icons',
                component: Icons
            },
            {
                path: contextPath + 'components/tables',
                name: 'Tables',
                component: Tables
            },
            {
                path: contextPath + 'components/tabs',
                name: 'Tabs',
                component: Tabs
            }
        ]
    },
    {
        name: 'Pages',
        icon: File,
        subRoutes: [
            {
                path: contextPath + 'pages/signIn',
                name: 'Sign In',
                component: () => <Redirect to="/auth/signIn"/>
            },
            {
                path: contextPath + 'pages/404',
                name: '404 Not Found',
                component: () => <Redirect to="/notFound"/>
            }
        ]
    }
]

export default mainRoutes;