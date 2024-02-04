const api = "/api/";

const apiRoutes = {

    // authentication api

    login: api + 'auth/login',

    registration: api + 'auth/registration',

    forget: api + 'auth/forget',

    reset: api + 'auth/reset',

    // slider api

    sliderCreate: api + 'slider/create',

    sliderList: api + 'slider/list',

    sliderSingle: api + 'slider/single',

    sliderUpdate: api + 'slider/update',

    sliderDelete: api + 'slider/delete',

    // category api

    categoryCreate: api + 'category/create',

    categoryList: api + 'category/list',

    categorySingle: api + 'category/single',

    categoryUpdate: api + 'category/update',

    categoryDelete: api + 'category/delete',

    // product api

    productCreate: api + 'product/create',

    productList: api + 'product/list',

    productSingle: api + 'product/single',

    productUpdate: api + 'product/update',

    productDelete: api + 'product/delete',

    // product review api

    productReviewCreate: api + 'review/create',

    productReviewList: api + 'review/list',

    productReviewSingle: api + 'review/single',

    productReviewUpdate: api + 'review/update',

    productReviewDelete: api + 'review/delete',

    // package api

    packageCreate: api + 'package/create',

    packageList: api + 'package/list',

    packageSingle: api + 'package/single',

    packageUpdate: api + 'package/update',

    packageDelete: api + 'package/delete',

    // order api

    orderCreate: api + 'order/create',

    orderList: api + 'order/list',

    orderSingle: api + 'order/single',

    orderUpdate: api + 'order/update',

    orderDelete: api + 'order/delete',

    // blog api

    blogCreate: api + 'blog/create',

    blogList: api + 'blog/list',

    blogSingle: api + 'blog/single',

    blogUpdate: api + 'blog/update',

    blogDelete: api + 'blog/delete',

    // blog review api

    blogReviewCreate: api + 'blog/review/create',

    blogReviewList: api + 'blog/review/list',

    blogReviewSingle: api + 'blog/review/single',

    blogReviewUpdate: api + 'blog/review/update',

    blogReviewDelete: api + 'blog/review/delete',

    // contact api

    contactCreate: api + 'contact/create',

    contactList: api + 'contact/list',

    contactSingle: api + 'contact/single',

    contactUpdate: api + 'contact/update',

    contactDelete: api + 'contact/delete',

}

export default apiRoutes;
