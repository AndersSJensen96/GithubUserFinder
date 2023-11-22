import styles from './textfield.module.css'
export default function({fieldPlaceholder} : {fieldPlaceholder : any}){
  return(
    <>
        <input className={styles.inputField} placeholder={fieldPlaceholder}/>
    </>
  )
}