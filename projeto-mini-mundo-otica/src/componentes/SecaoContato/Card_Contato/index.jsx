import Card from '@/componentes/SecaoProduto/Cards/card'
import styles from './Card.module.css'
import Image from "next/image"
import LogoLocal from '/public/local.png'
import LogoTel from '/public/telefone.png'
import LogoEmail from  '/public/email.png'
export default function Card_Contato(){
    return(
        <div className={styles.container_card}>
            <div className={styles.Card}>
                <i><Image src={LogoLocal} alt='logo_local'/></i>
                <p>Nova Iguaçu, RJ</p>
            </div>
            <div className={styles.Card}>
                <i><Image src={LogoTel} alt='logo_tel'/> </i>
                <p>(21) 9999-9999</p>
            </div >
            <div className={styles.Card}>
                <i><image src={LogoEmail} alt='logo_email'/></i>
                <p>contato@oticavida.com</p>
            </div>
        </div>
    )
}