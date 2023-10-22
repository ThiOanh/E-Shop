import { LOCATIONS } from '../constants/index';
import Form from '../components/Form';
import WishlistPage from '../pages/wishList';
import Contact from './../components/contact';
import Main from 'components/main';
import ProductDetail from 'components/productDetail';
import Layout from 'components/layout';

export const routers = [
      { path: LOCATIONS.SIGN_UP, name: "Sign up Page", element: <Form/> },
      {
        path: LOCATIONS.HOME_PAGE,
        name: "Layout",
        element: <Layout />,
        children: [
          { isRoot: true, name: "Home", element: <Main /> },
          // { path: LOCATIONS.PRODUCT_DETAILS, name: "Play List", element: <ProductDetail /> },
          { path: LOCATIONS.CONTACT_PAGE, element: <Contact/> },
          { path: LOCATIONS.WISHLIST_PAGE, element: <WishlistPage/> },
        //   { path: LOCATIONS.FORM, name: "Form Register", element: <FormPage /> },
        //   { path: LOCATIONS.TAB  , name: "Tab", element: <TabPage /> },
        //   { path: LOCATIONS.SLIDE, name: "Slider", element: <SliderPage /> },
        //   { path: LOCATIONS.MY_PROFILE, name: "My Profile", element: <Profile /> },
        ]
      },]