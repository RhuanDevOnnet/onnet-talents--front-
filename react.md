Componentes utilizados: 

React 
Vite 
typescript: criar o arquivo index.d.ts para reconhecer imagens .img
declare module '*png'
declare module '*jpg'


CssModules{
    nome do css : objeto.module.css

    importação do mesmo: 
    import styles from './objeto.module.css'

    usar estilos : 
    classname={styles.nomeAlias}

    --------
    Para utilizar cssModules no typescript, devemos criar um modulo chamado index.d.ts e colocar a linha 
    declare module '*.css' {
    const content: Record<string, string>;
    export default content; 
    }

------

scss 
sass

 


