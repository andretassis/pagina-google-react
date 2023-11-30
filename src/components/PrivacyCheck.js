import shield from '../assets/shield.svg'
import style from './PrivacyCheck.module.css'

function PrivacyCheck() {
    return (
        <div className={style.privacy}>
            <img src={shield} alt="Privacidade" />
            <p>Faça o Check-up de privacidade</p>
        </div>
    )
}

export default PrivacyCheck