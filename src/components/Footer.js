import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.containerPais}>
                <p>Brasil</p>
            </div>
            
            <div className={style.containerInfo}>
                <div className={style.containerAbout}>
                    <ul>
                        <li>Sobre</li>
                        <li>Publicidade</li>
                        <li>Negócios</li>
                        <li>Como funciona a Pesquisa</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Privacidade</li>
                        <li>Termos</li>
                        <li>Configurações</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer