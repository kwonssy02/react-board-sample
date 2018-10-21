import Home from 'views/main/Home';
import VehicleList from 'views/main/VehicleList';
import { Server, Terminal, Compass } from 'react-feather';

const contextPath = '/main/';

const mainRoutes = [
    {
        path: contextPath + 'home',
        name: '메인 페이지',
        icon: Server,
        component: Home
    },
    {
        name: '차량 조회',
        icon: Terminal,
        subRoutes: [
            {
                path: contextPath + 'vehicleList',
                name: '차량 조회회',
                component: VehicleList
            }
        ]
    },
    {
        name: '차량 조333회',
        icon: Compass,
        subRoutes: [
            {
                path: contextPath + 'vehicleList44442',
                name: '차량 44',
                component: VehicleList
            }
        ]
    },
]

export default mainRoutes;