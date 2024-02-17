import './sidebar.css';
import {useLocation, useNavigate} from "react-router";
import {AppRoutes} from "../../utils/appRoutes";
import {useTypedSelector} from "../../store/hooks";

const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {currentUser} = useTypedSelector(state => state.user)

    return (
        <nav className={'nav'}>
            <span className={'nav__title'}>Dashboard</span>
            <input
                onClick={() => navigate(AppRoutes.MAIN)}
                className={'nav__button' + ' ' + (location.pathname.length <= 1 ? 'nav__button_active' : '')}
                type={'button'}
                value={'Main page'}/>
            <input
                onClick={!!currentUser.id ? () => navigate(AppRoutes.USER + '/' + currentUser.id) : () => {}}
                className={'nav__button' + ' ' + (location.pathname.includes(AppRoutes.USER) ? 'nav__button_active' : '')}
                type={'button'}
                value={'User'} />
        </nav>
    );
};

export default Sidebar;