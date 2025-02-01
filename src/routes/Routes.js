import { HashRouter, Route, Routes } from 'react-router-dom';
import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import About from '../components/About';
import Contact from '../components/Contact';
import Pricing from '../components/Subscriptions';
import SignUp from '../components/SignUp';
import Logout from '../components/Logout';
import Designs from '../components/Designs';
import Customize from '../components/Customize';
import Faq from '../components/Faq';
import Newsletter from '../components/Newsletter';
import Workshops from '../components/Workshops';
import Blog from '../components/Blog';

const AppRoutes = () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/customize" element={<Customize/>}/>
            <Route path="/designs" element={<Designs/>}/>
            <Route path="/aboutus" element={<About/>}/>
            {/* <Route path="/login" element={<SignIn/>}/> */}
            {/* <Route path="/logout" element={<Logout/>}/> */}
            {/* <Route path="/signup" element={<SignUp/>}/> */}
            {/* <Route path="/contact" element={<Contact/>}/> */}
            {/* <Route path="/subscriptions" element={<Pricing/>}/> */}
            {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
            {/* <Route path="/newsletter" element={<Newsletter/>}/> */}
            {/* <Route path="/faqs" element={<Faq/>}/> */}
            {/* <Route path="/workshops" element={<Workshops/>}/> */}
            {/* <Route path="/blog" element={<Blog/>}/> */}
        </Routes>
    </HashRouter>
};

export default AppRoutes;
