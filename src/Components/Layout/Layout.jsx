import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initFlowbite } from "flowbite";

function Layout({ children }) {
    const location = useLocation(); // مسیر فعلی رو دریافت کن

    useEffect(() => {
        initFlowbite(); // مقداردهی اولیه Flowbite بعد از هر تغییر مسیر
    }, [location]); // در هر تغییر مسیر اجرا بشه

    return <div>{children}</div>;
}

export default Layout;
