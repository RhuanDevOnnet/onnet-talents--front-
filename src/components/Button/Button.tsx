//import styles from './Button.module.css'
//import cx from 'classnames'

//interface buttonProps{
  //  text:string,
    //color:string
//}

//export function Button(props:buttonProps) {

  // const style:string = 'styles.containerBtn, styles.'+ `${props.color}`
   //console.log(style)
    //return (
      //  <div className={cx(
        //   styles.containerBtn, styles.`${props.color}`
            
        //)}>
            
          //  <p className={styles.txt}></p>
        
        //</div>

   // )
//}

import './styles.css'

interface buttonProps{
    text:string,
    color:string,
    link:string
    
    
}


export function Button(props:buttonProps) {

   const style:string = 'containerBtn '+`${props.color}`
   
  
    return (
        <button formAction={props.link}  className={style} >
            <p className="txt">{props.text}</p>
        </button>

    )
}