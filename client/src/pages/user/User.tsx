import './user.css';
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {api} from "../../api/api";
import {useAppDispatch, useTypedSelector} from "../../store/hooks";
import {userAC} from "../../store/userSlice";
import ReportModal from "../../components/reportModal/ReportModal";

const User = () => {

    const params = useParams();
    const dispatch = useAppDispatch();
    const {setCurrentUser} = userAC;
    const currentUser = useTypedSelector(state => state.user.currentUser);
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        params['id'] && api.getUserById({id: params['id']})
            .then((response) => dispatch(setCurrentUser(response.data)))
    }, [])

    return (
        <div className={'main'}>
            <div className={'user-info'}>
                <img
                    className={'user-info__avatar'}
                    src={process.env.REACT_APP_API_URL + '/' + currentUser.avatar}
                    alt={'User img'}
                />
                <div className={'user-info__detailed'}>
                    <span>{currentUser.name}</span>
                    <span>{currentUser.email}</span>
                    <span>{currentUser.phone}</span>
                    <span>{new Date(currentUser.bday).toDateString()}</span>
                    <span>{currentUser.city}</span>
                </div>
            </div>
            <button
                className={'report-btn'}
                onClick={() => setIsModal(!isModal)}>Send report
            </button>
            {isModal && <ReportModal
                closeModal={() => setIsModal(false)}/> }
        </div>
    );
};

export default User;