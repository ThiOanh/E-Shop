import { LOCATIONS } from 'constants/index';
import Layout from 'components/layout';
import Main from 'components/main';
import AboutPage from 'pages/about';
import ProductDetail from 'components/productDetail';
import Cart from 'components/Cart/index';
import Checkout from 'components/checkout/index';
import WishlistPage from 'pages/wishList';
import Contact from 'components/contact';
import Form from 'components/Form';
import Page404 from 'components/404';


export const routers = [
      { path: LOCATIONS.SIGN_UP, element: <Form/> },
      { path: LOCATIONS.PAGE_404, element: <Page404/> },
    {
        path: LOCATIONS.HOME_PAGE,
        name: "Layout",
        element: < Layout/> ,
        children: [
            { isRoot: true, name: "Home", element: < Main/> },
            { path: LOCATIONS.ABOUT_PAGE, name: "About", element: < AboutPage/> },
            { path: LOCATIONS.PRODUCT_DETAILS, element: < ProductDetail/> },
            { path: LOCATIONS.CART, element: < Cart/> },
            { path: LOCATIONS.CHECKOUT, element: < Checkout/> },
            { path: LOCATIONS.CONTACT_PAGE, element: <Contact/> },
          { path: LOCATIONS.WISHLIST_PAGE, element: <WishlistPage/> },

            //   { path: LOCATIONS.FORM, name: "Form Register", element: <FormPage /> },
            //   { path: LOCATIONS.TAB, name: "Tab", element: <TabPage /> },
            //   { path: LOCATIONS.SLIDE, name: "Slider", element: <SliderPage /> },
            //   { path: LOCATIONS.MY_PROFILE, name: "My Profile", element: <Profile /> },

        ]
    },
]
