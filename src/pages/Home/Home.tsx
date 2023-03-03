import styles from './Home.module.css'
import {Header} from '../../components/Header/Header'
import {Identifier} from '../../components/identifier/Identifier'
import { Button } from '../../components/Button/Button'
import {Card} from '../../components/Card/Card'
import { Footer } from '../../components/Footer/footer'

import newRegister from '../../assets/gif/homeGifs/newRegister.gif'
import viewRegisters from '../../assets/gif/homeGifs/viewRegisters.gif'
import curriculum from '../../assets/gif/homeGifs/curriculum.gif'
import interview from '../../assets/gif/homeGifs/interview.gif'
import settings from '../../assets/gif/homeGifs/settings.gif'

console.log(newRegister)

export function Home(){
    return(
        
        <div className={styles.homeScreen}>
            <Header text1='About' text2='Exit'link1='#' link2='#'></Header>
            <div className={styles.homeMain}>
                <div className={styles.firstSection}>
                    <Identifier name='Daniel Gomes Januario Júnior' sector='Desenvolvimento'></Identifier>
                    <Button color='blue' text='Nova Entrevista' link='/home'></Button>
                </div>
                <div className={styles.cards}>
                    <Card path={newRegister} text='Novo Cadastro' link='#'></Card>
                    <Card path={viewRegisters} text='Visualizar Cadastros' link='#'></Card>
                    <Card path={curriculum} text='Currículos' link='#'></Card>
                    <Card path={interview} text='Entrevistas' link='#'></Card>
                    <Card path={settings} text='Configurações' link='#'></Card>
                    
                    
                    
                </div>
                <div className={styles.footer}>
                    <Footer textColor='white'></Footer>
                </div>
                
            </div>
        </div>
    )

}