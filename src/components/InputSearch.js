import style from './InputSearch.module.css'
import searchIcon from '../assets/icon-search.svg'
import keyboardIcon from '../assets/keyboard.svg'
import micIcon from '../assets/mic.svg'

function InputSearch() {
    return (
        <>
       <div className={style.googleSearchBar}>
            <img src={searchIcon} alt="Lupa" className={style.searchIcon} />
            <input type="text" className={style.input}/>
            <img src={keyboardIcon} alt="Teclado" className={style.keyboardIcon} />
            <img src={micIcon} alt="Microfone" className={style.microphoneIcon} />
        </div>
        </>
    )
}

export default InputSearch