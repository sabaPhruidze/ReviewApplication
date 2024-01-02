import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="AboutStack" component={AboutStack} />
    </Drawer.Navigator>
  );
}
