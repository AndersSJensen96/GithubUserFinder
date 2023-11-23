import styles from './button.module.css'
export default function({children} : {children : any}){
    return(
        <button className={styles.searchButton}>
            {children}
        </button>
    )
}