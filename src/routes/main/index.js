import Home from 'views/main/Home';
import VehicleList from 'views/main/VehicleList';

const contextPath = '/main/';

const mainRoutes = [
    {
        path: contextPath + 'home',
        name: '메인 페이지',
        icon: 'IoMdShare',
        component: Home
    },
    {
        name: '차량 조회',
        icon: undefined,
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
        icon: undefined,
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