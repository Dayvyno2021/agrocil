import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Homepage from './pages/homepage/Homepage';
import Box from '@mui/material/Box';
import About from "./pages/aboutpage/About";
import Invest from "./pages/investpage/Invest";
import Register from "./pages/registerpage/Register";
import Login from "./pages/loginpage/Login";
import Product from "./pages/productpage/Product";
import Payment from "./pages/paymentpage/Payment";
import Investment from "./pages/investmentpage/Investment";
import Downline from "./pages/downlinepage/Downline";
import Order from "./pages/orderpage/Order";
import Profile from "./pages/profile/Profile";
import Referral from "./pages/referralpage/Referral";
import AdminInvestors from "./pages/admininvestotor/AdminInvestors";
import AdminInvestments from "./pages/admininvestments/AdminInvestments";
import AdminReferPayouts from "./pages/adminreferpayout/AdminReferPayouts";
import AdminProducts from "./pages/adminproducts/AdminProducts";
import UpdateUser from "./pages/updateuser/UpdateUser";
import AdminEditUser from "./pages/admin-edit-user/AdminEditUser";
import CreateNew from "./pages/create-new-page/CreateNew";
import UpdateSingleProduct from "./pages/update-product-page/UpdateProduct";
import UpdateOrder from "./pages/admin-update-order/UpdateOrder";
import EditRefPayout from "./pages/edit-ref-payout/EditRefPayout";
import Notify from "./pages/notificationpage/Notify";
import AdminUpdatePK from "./pages/admin-update-package/AdminUpdatePK";
import PackagePage from "./pages/packages/PackagePage";
import Guide from "./pages/guidpage/Guide";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import PayType from "./pages/PayType";
import Fincra from "./pages/Fincra";


function App() {
  return (
    <Box className="App" sx={{bgcolor: 'FFF6E6'}}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/invest" element={<Invest/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/payment/:id" element={<Payment/>} />
        <Route path="/order/:id" element={<Order/>} />
        <Route path="/invest/:id" element={<Product/>} />
        <Route path="/profile/" element={<Profile/>} />
        <Route path="/investment" element={<Investment/>} />
        <Route path="/downline/:id" element={<Downline/>} />
        <Route path="/referral/:id" element={<Referral/>} />
        <Route path="/admin/investors" element={<AdminInvestors/>} />
        <Route path="/admin/products" element={<AdminProducts/>} />
        <Route path="/contactus" element={<h1>Contact Us</h1>} />
        <Route path="/admin/investments/:id" element={<AdminInvestments/>} />
        <Route path="/admin/investments" element={<AdminInvestments/>} />
        <Route path="/admin/ref-payouts" element={<AdminReferPayouts/>} />
        <Route path="/admin/ref-payouts/:id" element={<EditRefPayout/>} />
        <Route path="/update-profile" element={<UpdateUser/>} />
        <Route path="/update-profile/:id" element={<AdminEditUser/>} />
        <Route path="/create-new-product" element={<CreateNew/>} />
        <Route path="/update-product/:id" element={<UpdateSingleProduct/>} />
        <Route path="/update-order/:id" element={<UpdateOrder/>} />
        <Route path="/notify" element={<Notify/>} />
        <Route path="/admin-update-package" element={<AdminUpdatePK/>} />
        <Route path="/admin/packages" element={<PackagePage/>} />
        <Route path="/guide" element={<Guide/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/forget-password" element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/pay-type/:id" element={<PayType/>} />
        <Route path="/fincra/:id" element={<Fincra/>} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
