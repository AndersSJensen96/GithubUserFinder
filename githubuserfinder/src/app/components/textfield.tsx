import styles from './textfield.module.css'
export default function({children, event, query} : {children : string, event : any, query : string}){
  return(
    <>
        <input type='text' className={styles.inputField} placeholder={children} value={query} onChange={(e) => {event(e.target.value)}}/>
    </>
  )
}