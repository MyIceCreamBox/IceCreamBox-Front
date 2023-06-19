import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './mainpage/mainpage';
import Page404 from './etc/page404';
import Login from './login/login';
import SignUp from './login/signup';
import LoggedInMainpage from './loggedInMainpage/loggedInMainpage';
import MyPage from './mypage/mypage';
import SelectIcecreamPage from './sendpage/screens/SelectIcecream'
import WriteLetterPage from './sendpage/screens/WriteLetterScreen'
import ConfigLetterScreenPage from './sendpage/screens/ConfigLetterScreen'
import FinshSendPage from './sendpage/screens/FinshSendScreen'
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen
        name="Page404"
        component={Page404}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoggedInMainpage"
        component={LoggedInMainpage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Logout"
        component={MainPage}
        options={{ headerShown: false }}
      />

       <Stack.Screen
        name="SelectIcecreamPage"
        component={SelectIcecreamPage}
        options={{ headerShown: false }} 
      />
      {/* WriteLetterPage : 2 of sendpage */}
      <Stack.Screen
        name="WriteLetterPage"
        component={WriteLetterPage}
        options={{ headerShown: false }} 
      />
      {/* ConfigLetterScreenPage: 3 of sendpage */}
      <Stack.Screen
        name="ConfigLetterScreenPage"
        component={ConfigLetterScreenPage}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="FinshSendPage"
        component={FinshSendPage}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
