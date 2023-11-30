import style from './Button.module.css'

function Button() {
    return (
        <div className={style.btn}>
            <button>Pesquisa Google</button>
            <button>Estou com sorte</button>
        </div>
    )
}

export default Button