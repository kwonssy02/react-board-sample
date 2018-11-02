import Alerts from 'views/main/Alerts';
import Badges from 'views/main/Badges';
import Buttons from 'views/main/Buttons';
import Tables from 'views/main/Tables';
import Tabs from 'views/main/Tabs';
import { Terminal } from 'react-feather';

const contextPath = '/main/';

const mainRoutes = [
    {
        name: 'Components',
        icon: Terminal,
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
    }
]

export default mainRoutes;