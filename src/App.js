import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import loadable from "./component/Common/loader/loadable";
import Loading from "./component/Common/loader";
import pMinDelay from "p-min-delay";

const ShopGrid = loadable(() => pMinDelay(import("./page/shop"), 250), {
  fallback: <Loading />,
});
const ProductDetails = loadable(
  () => pMinDelay(import("./page/product/index"), 250),
  { fallback: <Loading /> }
);
const Cart = loadable(() => pMinDelay(import("./page/cart/index"), 250), {
  fallback: <Loading />,
});
const EmptyCarts = loadable(
  () => pMinDelay(import("./page/cart/empty-cart"), 250),
  { fallback: <Loading /> }
);
const CheckoutOne = loadable(
  () => pMinDelay(import("./page/checkout/index"), 250),
  { fallback: <Loading /> }
);
const WishLists = loadable(
  () => pMinDelay(import("./page/shop/wishList"), 250),
  { fallback: <Loading /> }
);
const About = loadable(() => pMinDelay(import("./page/about"), 250), {
  fallback: <Loading />,
});
const OrderComplete = loadable(
  () => pMinDelay(import("./page/order/order-complete"), 250),
  { fallback: <Loading /> }
);
const OrderTracking = loadable(
  () => pMinDelay(import("./page/order/order-tracking"), 250),
  { fallback: <Loading /> }
);
const OrderSuccesses = loadable(
  () => pMinDelay(import("./page/order/order-success"), 250),
  { fallback: <Loading /> }
);

const Vendor = loadable(() => pMinDelay(import("./page/vendor/"), 250), {
  fallback: <Loading />,
});
const AllProducts = loadable(
  () => pMinDelay(import("./page/vendor/all-product"), 250),
  { fallback: <Loading /> }
);
const AllOrders = loadable(
  () => pMinDelay(import("./page/vendor/all-order"), 250),
  { fallback: <Loading /> }
);
const VendorProfile = loadable(
  () => pMinDelay(import("./page/vendor/vendor-profile"), 250),
  { fallback: <Loading /> }
);
const AddProducts = loadable(
  () => pMinDelay(import("./page/vendor/add-products"), 250),
  { fallback: <Loading /> }
);
const VendorSetting = loadable(
  () => pMinDelay(import("./page/vendor/vendor-setting"), 250),
  { fallback: <Loading /> }
);
const MyAccounts = loadable(() => pMinDelay(import("./page/my-account"), 250), {
  fallback: <Loading />,
});
const CustomerOrder = loadable(
  () => pMinDelay(import("./page/my-account/customer-order"), 250),
  { fallback: <Loading /> }
);
const CustomerAddress = loadable(
  () => pMinDelay(import("./page/my-account/customer-address"), 250),
  { fallback: <Loading /> }
);
const CustomerAccountDetails = loadable(
  () => pMinDelay(import("./page/my-account/customer-account-details"), 250),
  { fallback: <Loading /> }
);
const AccountEdit = loadable(
  () => pMinDelay(import("./page/vendor/account-edit"), 250),
  { fallback: <Loading /> }
);
const Login = loadable(() => pMinDelay(import("./page/login"), 250), {
  fallback: <Loading />,
});
const Register = loadable(() => pMinDelay(import("./page/register"), 250), {
  fallback: <Loading />,
});
const Error = loadable(() => pMinDelay(import("./page/error"), 250), {
  fallback: <Loading />,
});
const PrivacyPolicy = loadable(
  () => pMinDelay(import("./page/privacy-policy"), 250),
  { fallback: <Loading /> }
);
const Faqs = loadable(() => pMinDelay(import("./page/faqs"), 250), {
  fallback: <Loading />,
});
const ContactTwo = loadable(
  () => pMinDelay(import("./page/contact/contact-two"), 250),
  { fallback: <Loading /> }
);
const ScrollToTop = loadable(
  () => pMinDelay(import("./component/Common/ScrollToTop"), 250),
  { fallback: <Loading /> }
);
const Fashion = loadable(() => pMinDelay(import("./page/"), 250), {
  fallback: <Loading />,
});
const Chatroom = loadable(() => pMinDelay(import("./page/chatroom"), 250), {
  fallback: <Loading />,
});
const Verification = loadable(
  () => pMinDelay(import("./page/verification"), 250),
  {
    fallback: <Loading />,
  }
);
const itemNotFound = loadable(
  () => pMinDelay(import("./page/itemNotFound"), 250),
  {
    fallback: <Loading />,
  }
);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Fashion} />
            <Route path="/shop" exact component={ShopGrid} />
            <Route
              path="/product-details-one/:id"
              exact
              component={ProductDetails}
            />
            <Route path="/cart" exact component={Cart} />
            <Route path="/empty-cart" exact component={EmptyCarts} />
            <Route path="/checkout-one" exact component={CheckoutOne} />
            <Route path="/wishlist" exact component={WishLists} />
            <Route path="/order-complete" exact component={OrderComplete} />
            <Route path="/order-tracking" exact component={OrderTracking} />
            <Route path="/about" exact component={About} />
            <Route path="/order-success" exact component={OrderSuccesses} />
            <Route path="/vendor-dashboard" exact component={Vendor} />
            <Route path="/vendor/all-product" exact component={AllProducts} />
            <Route path="/vendor/all-order" exact component={AllOrders} />
            <Route
              path="/vendor/vendor-profile"
              exact
              component={VendorProfile}
            />
            <Route path="/vendor/add-products" exact component={AddProducts} />
            <Route
              path="/vendor/vendor-setting"
              exact
              component={VendorSetting}
            />
            <Route path="/my-account" exact component={MyAccounts} />
            <Route
              path="/my-account/customer-order"
              exact
              component={CustomerOrder}
            />

            <Route
              path="/my-account/customer-address"
              exact
              component={CustomerAddress}
            />
            <Route
              path="/my-account/customer-account-details"
              exact
              component={CustomerAccountDetails}
            />
            <Route path="/account-edit" exact component={AccountEdit} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
            <Route path="/faqs" exact component={Faqs} />
            <Route path="/contact-two" exact component={ContactTwo} />
            <Route path="/chatroom" exact component={Chatroom} />
            <Route path="/verification/:id" exact component={Verification} />
            <Route path="/item-not-found" component={itemNotFound} />
            <Route exact component={Error} />
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  );
};

export default App;
