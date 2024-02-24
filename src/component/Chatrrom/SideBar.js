import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();
  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-3">
        <div className="dashboard_tab_button h-75 overflow-auto">
          <ul role="tablist" className="nav flex-column dashboard-list">
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor-dashboard" ? "active" : null
                }
              >
                Chat 1
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/all-product" ? "active" : null
                }
              >
                Chat 2
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/all-order" ? "active" : null
                }
              >
                Chat 3
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/vendor-profile"
                    ? "active"
                    : null
                }
              >
                Chat 4
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/add-products" ? "active" : null
                }
              >
                Chat 5
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/vendor-setting"
                    ? "active"
                    : null
                }
              >
                Chat 6
              </Link>
            </li>

            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/vendor-setting"
                    ? "active"
                    : null
                }
              >
                Chat 6
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/vendor-setting"
                    ? "active"
                    : null
                }
              >
                Chat 6
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={
                  location.pathname === "/vendor/vendor-setting"
                    ? "active"
                    : null
                }
              >
                Chat 6
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
