import styles from './Header.module.css'
import logo from '../../assets/img/onnetTalentLogo.png'

interface HeaderProps{
    text1:string,
    text2:string,
    link1:string,
    link2:string
}


export function Header(props:HeaderProps){
    return(
        <div className={styles.divHeader}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.about}>
                <span>
                    <a href={props.link1} className={styles.link}>{props.text1}</a>
                </span>
                <span>
                    <a href={props.link2} className={styles.link}>{props.text2}</a>
                </span>
            </div>
        </div>
    )
}