import './userItem.css';
import {User} from "../../api/api";
import {useNavigate} from "react-router";
import {AppRoutes} from "../../utils/appRoutes";

const UserItem: React.FC<{user: User}> = ({user}) => {
    const {id, city, bday, avatar, name, phone, email} = user;
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(AppRoutes.USER + '/' + id)}
            className={'user-item'}>
            <img
                className={'user-item__avatar'}
                src={process.env.REACT_APP_API_URL + '/' + avatar}
                alt={'User img'}/>
            <span className={'user-item__name'}>{name}</span>
            <span className={'user-item__bday'}>{new Date(bday.toString()).toDateString()}</span>
            <span className={'user-item__phone'}>{phone}</span>
            <span className={'user-item__email'}>{email}</span>
            <span className={'user-item__city'}>{city}</span>
        </div>
    );
};

export default UserItem;