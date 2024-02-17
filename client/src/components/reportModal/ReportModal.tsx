import {useState} from "react";
import './reportModal.css';
import Input from "../withValidationInput/Input";
import {FieldTypes, fieldValidation} from "../../utils/fieldValidation";

interface IProps {
    closeModal: () => void
}

interface IFormValidation {
    value: string
    isValid: boolean
    errMessage: string
}

const ReportModal: React.FC<IProps> = ({closeModal}) => {

    const ValueInitState: IFormValidation = {
        value: '',
        isValid: true,
        errMessage: ''
    }

    const [form, setForm] = useState<{ [key in FieldTypes]: IFormValidation }>({
        name: ValueInitState,
        email: ValueInitState,
        cellphone: ValueInitState,
        review: ValueInitState
    });

    const clearForm = () => setForm({
        name: ValueInitState,
        email: ValueInitState,
        cellphone: ValueInitState,
        review: ValueInitState
    })

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const keys = Object.keys(form) as FieldTypes[];
        let formErr = false;
        keys.forEach(key => {
            const err = fieldValidation({fieldType: key, field: form[key].value});
            if(err) {
                formErr = true;
                setForm(prev => ({
                    ...prev,
                    [key]: {...prev[key], errMessage: err}
                }))
            }
        })
        if(formErr) return;
        clearForm()
        closeModal();
        console.log(form);
    }

    return (
        <div
            className={'modal-content'}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                    clearForm();
                }}
                className={'modal-content__bg'}/>
            <form className={'report-form'} onSubmit={submitHandler}>
                <h3>Form</h3>
                <Input
                    value={form.name.value}
                    onChange={e => setForm(prev => ({
                        ...prev,
                        name: {...ValueInitState, value: e.target.value}
                    }))}
                    placeholder={'Name'}
                    errorMessage={form.name.errMessage}
                    className={'report-form__input'}
                />
                <Input
                    value={form.email.value}
                    onChange={e => setForm(prev => ({
                        ...prev,
                        email: {...ValueInitState, value: e.target.value}
                    }))}
                    placeholder={'Email'}
                    errorMessage={form.email.errMessage}
                    className={'report-form__input'}
                />
                <Input
                    value={form.cellphone.value}
                    onChange={e => setForm(prev => ({
                        ...prev,
                        cellphone: {...ValueInitState, value: e.target.value}
                    }))}
                    placeholder={'Cellphone'}
                    errorMessage={form.cellphone.errMessage}
                    className={'report-form__input'}
                />
                <textarea
                    value={form.review.value}
                    onChange={e => setForm(prev => ({
                        ...prev,
                        review: {...ValueInitState, value: e.target.value}
                    }))}
                    placeholder={'Review 10 or more symbols'}
                    className={'report-form__review' + (form.review.errMessage ? '_invalid' : '')}/>
                <button type={"submit"} className={'report-form__submit-button'}>Submit</button>
            </form>
        </div>
    );
};

export default ReportModal;