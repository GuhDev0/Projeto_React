import Image from 'next/image'
import Img_atendimento from '/public/atendimento.png'
import Img_loja from '/public/loja.png'
import styles from './Card.module.css'
export default function CardSobre() {
    return (
        <div className={styles.container_informacoes}>
            <div className={styles.card_info}>
                <Image src={Img_atendimento} alt='img_atendimento' />
                <span>
                    <h3>Nossas Filiais</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </span>
            </div>

            <div className={styles.container_informacoes}>
                <Image src={Img_loja} alt='img_loja' />
                <span>
                    <h3>Atendimento flexível</h3>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </span>
            </div>
        </div>
    )
}


