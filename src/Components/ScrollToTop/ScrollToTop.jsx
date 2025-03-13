import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // هر بار که مسیر تغییر کرد، صفحه به بالا اسکرول شود

    return null;
};

export default ScrollToTop;
