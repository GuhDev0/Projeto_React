import Link from 'next/link'
import Image from 'next/image'
import LogoOtica from '/public/logo.png'
import style from './Topo.module.css'
export default function Topo(){
    return(
        <div className={style.header}>
            <div className={style.containerHeader}>
                <div className={style.container_Img}>
                    <Image  src={LogoOtica} alt='logo-otica' className={style.img_logo} />
                </div>
                <ul className={style.navBar}>
                    <li><Link >Produtos</Link></li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}