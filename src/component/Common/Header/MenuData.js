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
        name: "Vendor Dashboard",
        href: "/vendor-dashboard",
      },
      {
        name: "Order Success",
        href: "/order-success",
      },
      {
        name: "Customer Dashboard",
        href: "/my-account",
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
    ],
  },
];
