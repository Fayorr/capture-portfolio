import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  // Scroll on pathname change
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // Scroll on page reload
  useEffect(() => {
    window.addEventListener("load", scrollToTop);
    return () => window.removeEventListener("load", scrollToTop);
  }, []);

  return null;
};

export default ScrollTop;