import { LOCATIONS } from 'constants/index';
import Layout from 'components/layout';
import Main from 'components/main';
export const routers = [
  //   { path: LOCATIONS.LOGIN, name: "Login Page", element: <Login /> },
  {
    path: LOCATIONS.HOME_PAGE,
    name: "Layout",
    element: <Layout />,
    children: [
      { isRoot: true, name: "Home", element: <Main /> },
      //   { path: LOCATIONS.PLAY_LIST, name: "Play List", element: <PlayList /> },
      //   { path: LOCATIONS.FORM, name: "Form Register", element: <FormPage /> },
      //   { path: LOCATIONS.TAB, name: "Tab", element: <TabPage /> },
      //   { path: LOCATIONS.SLIDE, name: "Slider", element: <SliderPage /> },
      //   { path: LOCATIONS.MY_PROFILE, name: "My Profile", element: <Profile /> },
    ]
  },]

export const unAuthRouter = [ //router khi chưa đăng nhập
  // { path: LOCATIONS.LOGIN, name: "Login", element: <LoginPage /> },
];
