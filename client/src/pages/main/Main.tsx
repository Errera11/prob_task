import {useEffect, useState} from "react";
import {api} from "../../api/api";
import {useAppDispatch, useTypedSelector} from "../../store/hooks";
import {userAC} from "../../store/userSlice";
import UserTable from "../../components/UserTable/UserTable";
import './main.css';
import SearchBar from "../../components/searchBar/SearchBar";
import Input from "../../components/Input/Input";

const Main = () => {

    const users = useTypedSelector(state => state.user.users);
    const dispatch = useAppDispatch();
    const {setUsers} = userAC;
    const [sortOptions, setSortOptions] = useState({
        customerName: '',
        invoiceId: '',
        startDate: '',
        endDate: ''
    })

    useEffect(() => {
        api.getUsers({})
            .then(response => dispatch(setUsers(response.data.items)));
    }, [])

    return (
        <div className={'main'}>
            <div className={'main__search-bar'}>
                <SearchBar />
            </div>
            <h2 className={'main__title'}>Clients information</h2>
            <div className={'main__sort-options'}>
                <div className={'main__sort-options-field'}>
                    <span className={'main__sort-options-field-name'}>Customer</span>
                    <Input
                        value={sortOptions.customerName}
                        placeholder={'Enter customer name'}
                        onChange={e => setSortOptions({
                            ...sortOptions,
                            customerName: e.target.value
                        })} />
                </div>
                <div className={'main__sort-options-field'}>
                    <span className={'main__sort-options-field-name'}>Invoice ID</span>
                    <Input
                        value={sortOptions.invoiceId}
                        placeholder={'Enter Invoice ID'}
                        onChange={e => setSortOptions({
                            ...sortOptions,
                            invoiceId: e.target.value
                        })} />
                </div>
                <div className={'main__sort-options-field'}>
                    <span className={'main__sort-options-field-name'}>Start Date</span>
                    <Input
                        value={sortOptions.startDate}
                        placeholder={'Start Date'}
                        onChange={e => setSortOptions({
                            ...sortOptions,
                            startDate: e.target.value
                        })} />
                </div>
                <div className={'main__sort-options-field main__sort-options-field_last'}>
                    <span className={'main__sort-options-field-name'}>End Date</span>
                    <Input
                        value={sortOptions.endDate}
                        placeholder={'End Date'}
                        onChange={e => setSortOptions({
                            ...sortOptions,
                            endDate: e.target.value
                        })} />
                </div>
            </div>
            <div className={'main__table'}>
                <UserTable users={users}/>
            </div>
        </div>
    );
};

export default Main;

