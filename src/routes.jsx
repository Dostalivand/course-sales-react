import Index from "./pages/Index/Index"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import CryptoEducation from "./pages/CategoryInfo/CryptoEducation"
import BitcoinTrainingCourse from "./pages/CourseInfo/BitcoinTrainingCourse"
import AltcoinTrainingCourse from "./pages/CourseInfo/AltcoinTrainingCourse"
import DeFiTrainingCourse from "./pages/CourseInfo/DeFiTrainingCourse"


const routes = [
    { path: '/', element: <Index /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/crypto-education', element: <CryptoEducation /> },
    { path: '/crypto-education/bitcoin-training-course', element: <BitcoinTrainingCourse /> },
    { path: '/crypto-education/altcoin-training-course', element: <AltcoinTrainingCourse /> },
    { path: '/crypto-education/DeFi-training-course', element: <DeFiTrainingCourse /> },
]

export default routes