import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from 'views/main/Home';
import Alerts from 'views/main/Alerts';
import Badges from 'views/main/Badges';
import Buttons from 'views/main/Buttons';
import Charts from 'views/main/Charts';
import Tables from 'views/main/Tables';
import Tabs from 'views/main/Tabs';

import FontAwesome from 'views/main/FontAwesome';
import Ionicons from 'views/main/Ionicons';
import Material from 'views/main/Material';
import Typicons from 'views/main/Typicons';
import GithubOcticons from 'views/main/GithubOcticons';
import Feather from 'views/main/Feather';

import { FiPackage, FiFile, FiImage } from 'react-icons/fi';
import NoticeList from 'views/main/pages/NoticeList';
import NoticeDetail from '../../views/main/pages/NoticeDetail';

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
        icon: FiPackage,
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
        name: 'Icons',
        icon: FiImage,
        sidebar: true,
        subRoutes: [
            {
                path: contextPath + 'icons/fontAwesome',
                name: 'Font Awesome',
                component: FontAwesome,
                sidebar: true
            },
            {
                path: contextPath + 'icons/ionicons',
                name: 'Ionicons',
                component: Ionicons,
                sidebar: true
            },
            {
                path: contextPath + 'icons/material',
                name: 'Material',
                component: Material,
                sidebar: true
            },
            {
                path: contextPath + 'icons/typicons',
                name: 'Typicons',
                component: Typicons,
                sidebar: true
            },
            {
                path: contextPath + 'icons/githubOcticons',
                name: 'Github Octicons',
                component: GithubOcticons,
                sidebar: true
            },
            {
                path: contextPath + 'icons/feather',
                name: 'Feather',
                component: Feather,
                sidebar: true
            }
        ]
    },
    {
        name: 'Pages',
        icon: FiFile,
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
            },
            {
                path: contextPath + 'pages/noticeList',
                name: 'Notice',
                component: NoticeList,
                sidebar: true
            },
            {
                path: contextPath + 'pages/noticeDetail/:id',
                name: 'NoticeDetail',
                component: NoticeDetail,
                sidebar: false
            }
        ]
    }
]

export default mainRoutes;