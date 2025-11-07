import { useEffect } from "react";

const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    let scrollPosition = 0;

    if (isLocked) {
      // Save scroll position
      scrollPosition = window.pageYOffset;

      // Lock body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      // Get stored scroll position
      const y = document.body.style.top;

      // Restore body styles
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";

      // Restore scroll position
      window.scrollTo(0, parseInt(y || "0") * -1);
    }
  }, [isLocked]);
};

export default useLockBodyScroll;
