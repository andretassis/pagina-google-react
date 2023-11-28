import maisApps from '../assets/mais-apps.svg'
import user from '../assets/user.svg'
import style from './Header.module.css'

function Header() {
    
    return (
        <div className={style.header}>
            <p>Gmail</p>
            <p>Imagens</p>
            <img src={maisApps} alt='Mais Apps' />
            <img src={user} alt='User' className="user"/>
        </div>
    )
}

export default Header