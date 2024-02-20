import './burgerMenu.css';
import {useState} from "react";
import {useNavigate} from "react-router";
import {AppRoutes} from "../../utils/appRoutes";
import {useTypedSelector} from "../../store/hooks";

const BurgerMenu = () => {

    const [isBurger, setIsBurger] = useState(false);
    const navigate = useNavigate();
    const {currentUser} = useTypedSelector(state => state.user);

    const SomeMenu = () => <div className={'burger-nav'}>
        <div className={'burger-nav__btns-group'}>
            <span className={'burger-nav__btns-group-item'} onClick={() => {
                setIsBurger(prev => !prev);
                navigate(AppRoutes.MAIN)
            }}>
                Main
            </span>
            <span className={'burger-nav__btns-group-item'} onClick={() => {
                setIsBurger(prev => !prev);
                currentUser.id && navigate(AppRoutes.USER + '/' + currentUser.id);
            }}>
                User
            </span>
            <span onClick={() => setIsBurger(prev => !prev)} className={'burger-nav__btns-group-item'}>
                Close menu
            </span>
        </div>
    </div>

    return (
        <div className={'burger'}>
            <div className={'burger-btn'} onClick={() => setIsBurger(prev => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            {isBurger && SomeMenu()}
        </div>
    );
};

export default BurgerMenu;