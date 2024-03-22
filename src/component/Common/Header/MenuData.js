export const MenuData = [
  {
    name: "Home",
    href: "#!",
    children: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Contact Us",
        href: "/contact-two",
      },
      {
        name: "Frequently Questions",
        href: "/faqs",
      },
    ],
  },
  {
    name: "Shop",
    href: "#!",
    mega_menu: true,
    children: [
      {
        name: "Shop Layouts",
        children: [
          {
            name: "Shop",
            href: "/shop",
          },
        ],
      },
      {
        name: "Other Pages",
        children: [
          {
            name: "Cart View One",
            href: "/cart",
          },

          {
            name: "Empty Cart",
            href: "/empty-cart",
          },
          {
            name: "Checkout View One",
            href: "/checkout-one",
          },

          {
            name: "Wishlist",
            href: "/wishlist",
          },

          {
            name: "Order Tracking",
            href: "/order-tracking",
          },
          {
            name: "Order Complete",
            href: "/order-complete",
          },
        ],
      },
    ],
  },
  {
    name: "Pages",
    href: "#!",
    children: [
      {
        name: "Order Success",
        href: "/order-success",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Login",
        href: "/login",
      },
      {
        name: "404 Error",
        href: "/error",
      },
      {
        name: "Chat",
        href: "/chatroom",
      },
      {
        name: "Verification",
        href: "/verification/1",
      },
      {
        name: "Item Not Found",
        href: "/item-not-found",
      },
      {
        name: "Seller Registeration",
        href: "/seller-register",
      },
    ],
  },
  {
    role: "vender",
    name: "Dashboard",
    href: "#!",
    children: [
      {
        name: "Dashboard",
        href: "/my-account",
        role: "customer",
      },
      {
        name: "Orders",
        href: "/my-account/customer-order",
        role: "customer",
      },
      {
        name: "Address",
        href: "/my-account/customer-address",
        role: "customer",
      },
      {
        name: "Profile",
        href: "/my-account/customer-account-details",
        role: "customer",
      },
      {
        name: "Dashboard",
        href: "/vendor-dashboard",
        role: "vendor",
      },
      {
        name: "Products",
        href: "/vendor/all-product",
        role: "vendor",
      },
      {
        name: "Orders",
        href: "/vendor/all-order",
        role: "vendor",
      },
      {
        name: "Profile",
        href: "/vendor/vendor-profile",
        role: "vendor",
      },
      {
        name: "Add Products",
        href: "/vendor/add-products",
        role: "vendor",
      },
      {
        name: "Settings",
        href: "/vendor/vendor-setting",
        role: "vendor",
      },
    ],
  },
];
