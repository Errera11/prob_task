export enum FieldTypes {
    NAME = 'name',
    EMAIL = 'email',
    CELLPHONE = 'cellphone',
    REVIEW = 'review'
}

interface IProps {
    fieldType: FieldTypes
    field: string
}

export const fieldValidation = ({fieldType, field}: IProps): string | undefined => {
        switch (fieldType) {
            case FieldTypes.NAME:
                if(field.length < 3) return 'Write correct name!';
                break;
            case FieldTypes.CELLPHONE:
                if(field.length !== 6 || !Number(field)) return 'Phone number must contain 6 digits! E.g.: 123456';
                break;
            case FieldTypes.EMAIL:
                if(!field.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || field.length < 3) return 'Email must be email!';
                break;
            case FieldTypes.REVIEW:
                if(field.length < 10) return 'Review must be more detailed! (greater than 10 symbols)';
                break;
            default:
                return undefined;
        }
}