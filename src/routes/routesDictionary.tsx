import AllServices from '../screens/AllServices';
import MyServices from '../screens/MyServices';
import Map from '../screens/Map';

export const routesList:{ key: string, title: string, name: any,
  component: any, icon: string }[] = [
    {
      key: 'AllServices',
      title: 'Servicios',
      name: 'AllServices',
      component: AllServices,
      icon: 'list',
    },
    {
      key: 'MyServices',
      title: 'Mis servicios',
      name: 'MyServices',
      component: MyServices,
      icon: 'clipboard',
    },
    {
      key: 'Map',
      title: 'Mapa',
      name: 'Map',
      component: Map,
      icon: 'map-marker',
    },
  ];

export default {};
