import styles from './page.module.css';

export default function Sobre() {
    let msg = 'Entre em contato: ';
    let cont = 0;
    const somar() => {
        cont++;
        console.log(cont);
    }
    return (
        <main>
            <h1>Contato</h1>
            <p>{msg}</p>
            <p>{cont}</p>
            <buttonon onClicl={somar()}>Somar</buttonon>
        </main>
    )
}