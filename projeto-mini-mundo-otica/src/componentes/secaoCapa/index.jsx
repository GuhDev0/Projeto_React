import styles from './SecaoCapa.module.css'
import ImgCapa from '/public/capa.png'
import Image from 'next/image'

export default function Capa(){
    return(
        <div className={styles.capa}>
            <div className={styles.container_capa_text}>
                <p>Preços baixos e</p>
                <h1>Óculos de grau e de sol</h1>
                <p>Você só encontra aqu</p>
            </div>
        </div>
    )
} 