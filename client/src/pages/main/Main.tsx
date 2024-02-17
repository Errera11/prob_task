import {useEffect} from "react";
import {api} from "../../api/api";
import {useAppDispatch, useTypedSelector} from "../../store/hooks";
import {userAC} from "../../store/userSlice";
import UserTable from "../../components/UserTable/UserTable";

const Main = () => {

    const users = useTypedSelector(state => state.user.users);
    const dispatch = useAppDispatch();
    const {setUsers} = userAC;

    useEffect(() => {
        api.getUsers({})
            .then(response => dispatch(setUsers(response.data.items)));
    }, [])

    return (
        <div className={'main'}>
            <h2 className={'main__title'}>Clients information</h2>
            <UserTable users={users}/>
        </div>
    );
};

export default Main;

