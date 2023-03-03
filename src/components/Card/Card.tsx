import styles from './Card.module.css'

interface CardProps{
    text:string,
    path:string,
    link:string
}


export function Card(props:CardProps) {
    return(
        <a href={props.link} className={styles.link}>
        <div className={styles.card}>
            <img src={props.path} alt="Imagem" className={styles.img}/>
            <span className={styles.text}>{props.text}</span>
        </div>
        </a>
    )
}