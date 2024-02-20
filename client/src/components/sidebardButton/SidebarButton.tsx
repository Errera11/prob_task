import './sidebarButton.css';
import colors from '../../assets/vars.scss';

interface IProps {
    onClick?: () => void
    value: string
    isActive: boolean
    icon?: string
}

const SidebarButton: React.FC<IProps> = ({icon, onClick, value, isActive}) => {

    return (
        <div
            onClick={() => onClick && onClick()}
            className={'sidebar-button'}>
            {isActive && <div className={'sidebar-button__border'} style={{color: colors.activeNavButton}}/>}
            <div
                style={{
                    mask: `url(${icon})`,
                    WebkitMaskImage: `url(${icon})`,
                    backgroundColor: (isActive ? colors.activeNavButton : 'black')
                }}
                 className={'sidebar-button__icon'}/>
            <input
                type={'button'}
                value={value}
                className={'sidebar-button__btn'}
                style={{ color: isActive && colors.activeNavButton}}
            />
        </div>
    );
};

export default SidebarButton;