export const LOCATIONS = {
    // Admin
    // ADMIN: '/admin',
    // AD_CATEGORY:'/admin/categories',
    // AD_SUPPLIER:'/admin/suppliers',
    // AD_PRODUCTS:'/admin/products',
    // AD_CUSTOMER:'/admin/customers',
    //User
    HOME_PAGE: '/',
    // LOGIN: '/login',
    PRODUCTS: '/products',
    PRODUCT_DETAILS:'/products/:id',

}

export const carouselResponsive = {
    superLargeDesktop: {
        breakpoint: { max: 10000, min: 3000 },
        items: 4, //total items displayed in 1 frame
        slidesToSlide: 1, //total items in the next frame
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1199, min: 992 },
        items: 3,
        slidesToSlide: 1,
    },
    smallTablet: {
        breakpoint: { max: 991, min: 768 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
        slidesToSlide: 1,
        centerMode: true,
    },
}
export const carouselCategoriesResponsive = {
    superLargeDesktop: {
        breakpoint: { max: 10000, min: 3000 },
        items: 6, //total items displayed in 1 frame
        slidesToSlide: 1, //total items in the next frame
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 6,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1199, min: 992 },
        items: 5,
        slidesToSlide: 1,
    },
    smallTablet: {
        breakpoint: { max: 991, min: 768 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 767, min: 400 },
        items: 2,
        slidesToSlide: 1,
    },

    smallMobile: {
        breakpoint: { max: 399, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
}