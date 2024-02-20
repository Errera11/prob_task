import './sidebar.css';
import {useLocation, useNavigate} from "react-router";
import {AppRoutes} from "../../utils/appRoutes";
import {useTypedSelector} from "../../store/hooks";
import SidebarButton from "../sidebardButton/SidebarButton";
import grid from '../../assets/grid.svg';
import envelope from '../../assets/envelope.svg';
import gear from '../../assets/gear.svg';
import wallet from '../../assets/wallet2.svg';
import bag from '../../assets/bag.svg';
import calendar from '../../assets/calendar-week.svg';
import check from '../../assets/clipboard-check.svg';
import question from '../../assets/question-circle.svg';

const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {currentUser} = useTypedSelector(state => state.user)

    return (
        <nav className={'nav'}>
            <span className={'nav__title'}>Sales.</span>
            <div className={'nav__content'}>
                <div className={'nav__content-main'}>
                    <SidebarButton
                        icon={grid}
                        onClick={() => navigate(AppRoutes.MAIN)}
                        isActive={location.pathname.length <= 1}
                        value={'Dashboard'}/>
                    <SidebarButton
                        icon={check}
                        onClick={() => navigate(AppRoutes.TEST)}
                        isActive={location.pathname.includes(AppRoutes.TEST)}
                        value={'Lab test'}/>
                    <SidebarButton
                        icon={calendar}
                        onClick={() => navigate(AppRoutes.APPOINTMENT)}
                        isActive={location.pathname.includes(AppRoutes.APPOINTMENT)}
                        value={'Appointment'}/>
                    <SidebarButton
                        icon={bag}
                        onClick={() => navigate(AppRoutes.ORDER)}
                        isActive={location.pathname.includes(AppRoutes.ORDER)}
                        value={'Medicine Order'}/>
                    <SidebarButton
                        icon={envelope}
                        onClick={() => navigate(AppRoutes.MESSAGE)}
                        isActive={location.pathname.includes(AppRoutes.MESSAGE)}
                        value={'Message'}/>
                    <SidebarButton
                        icon={wallet}
                        onClick={() => navigate(AppRoutes.PAYMENT)}
                        isActive={location.pathname.includes(AppRoutes.PAYMENT)}
                        value={'Payment'}/>
                    <SidebarButton
                        icon={gear}
                        onClick={() => navigate(AppRoutes.SETTINGS)}
                        isActive={location.pathname.includes(AppRoutes.SETTINGS)}
                        value={'Settings'}/>
                </div>
                <div className={'nav__content-footer'}>
                    <SidebarButton
                        icon={question}
                        onClick={() => navigate(AppRoutes.HELP)}
                        isActive={location.pathname.includes(AppRoutes.HELP)}
                        value={'Help'}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;