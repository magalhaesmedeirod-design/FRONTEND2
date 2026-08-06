import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {

    const menu = ['/', '/sobre', '/contato']
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link href={menu[0]}>Home</Link></li>
                    <li><Link href={menu[1]}>Sobre</Link></li>
                    <li><Link href={menu[2]}>Contato</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}