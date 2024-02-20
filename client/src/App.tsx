import {Route, Routes} from "react-router";
import Main from "./pages/main/Main";
import User from "./pages/user/User";
import {AppRoutes} from "./utils/appRoutes";
import {BrowserRouter} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoutes.USER + '/:id'} element={<User/>}/>
                    <Route path={AppRoutes.MAIN} element={<Main/>}/>
                    <Route path={AppRoutes.TEST} element={<Main/>} />
                    <Route path={AppRoutes.HELP} element={<Main/>}/>
                    <Route path={AppRoutes.ORDER} element={<Main/>}/>
                    <Route path={AppRoutes.SETTINGS} element={<Main/>}/>
                    <Route path={AppRoutes.APPOINTMENT} element={<Main/>}/>
                    <Route path={AppRoutes.PAYMENT} element={<Main/>}/>
                    <Route path={AppRoutes.MESSAGE} element={<Main/>}/>
                </Routes>
                <Sidebar/>
                <BurgerMenu />
            </BrowserRouter>
        </div>
    );
}

export default App;
