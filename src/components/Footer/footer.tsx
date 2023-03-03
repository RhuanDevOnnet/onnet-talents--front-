import styles from './styles.module.css';
import logo from './../../assets/img/onnetLogo.png'

interface FooterProps{
    textColor:string
}

export function Footer(props:FooterProps) {


    return (
        <div className={styles.footer}>
            <p style={{color:props.textColor}}>OnNet Telecom</p>
            <p style={{color:props.textColor}}>Copyright © 2023 - Todos os direitos reservados</p>
            <img src={logo} alt="logo" className={styles.logo} />
        </div>
    )
}



