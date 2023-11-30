import googleImage from '../assets/google.svg'
import style from './GoogleImage.module.css'

function GoogleImage() {
    return (
        <>
        <img src={googleImage} alt="Logo Google" className={style.imagemGoogle} />
        </>
    )
}

export default GoogleImage