import React from 'react';
import styles from './InputArea.module.css'



interface InputProps{
    title: string,
    color: string,
    placeholder: string,
    type:string
}



export function InputArea(props: InputProps) {

    return (
        <div className={styles.inputArea}>
            <p className={styles.title}>{props.title}</p>
            
                <label>
                    <input type={props.type} name="name" placeholder={props.placeholder} className={styles.input}/>
            
                </label>
            
        </div>
    )

}