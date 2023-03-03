import { Footer } from '../../components/Footer/footer'
import styles from './Login.module.css'
import { InputArea } from '../../components/InputArea/InputArea'
import logo from '../../assets/img/onnetTalentLogo.png'
import gif from '../../assets/gif/emprego.gif'
import { Button } from '../../components/Button/Button'
import React, { FormEvent } from 'react'

export function Login() {


    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log('Usuário Logou')

    }

    return (
        <div className={styles.login}>
            <div className={styles.loginMain}>
                <div className={styles.leftLogin}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <img src={gif} alt="gif do emprego" className={styles.gif} />
                </div>
                <div className={styles.rightLogin}>

                    <form onSubmit={handleSubmit} action="/home" className={styles.inputsArea}>
                        <h1>Login</h1>
                        <InputArea title="Digite seu E-mail:" color={'blue'} placeholder={'Email'} type={'text'}></InputArea>
                        <InputArea title="Digite sua senha:" color={'blue'} placeholder={'Teste'} type={'password'}></InputArea>
                        <Button color='colorBlue' text='Entrar' link='/home'></Button>
                    </form>


                </div>
            </div>
            <div className={styles.footer}>
                <Footer textColor='#F0F8FF'></Footer>
            </div>

        </div>


    )
}