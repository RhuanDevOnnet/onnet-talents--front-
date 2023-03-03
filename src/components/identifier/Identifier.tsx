import styles from './Identifier.module.css'
import profile from '../../assets/img/profile.png'

interface IdentifierProps{
    name:string,
    sector:string
}

export function Identifier(props:IdentifierProps){
return(
    <div className={styles.identifierScreen}>
        <img src={profile} alt="profile picture" className={styles.profilePhoto} />
        <div className={styles.personalInformation}>
            <span className={styles.name}>{props.name}</span>
            <span className={styles.sector}>{props.sector}</span>
        </div>
    </div>
)
}