import styles from './page.module.css'
import Image from 'next/image'
import TextField from './components/textfield'
import Button from './components/button'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flexColoumn}>
          <div>
            <h1>Github User Finder</h1>
            <Image src="/github-mark.svg" width={200} height={200} alt="Github-logo"/>
          </div>
           <div>
            <TextField fieldPlaceholder="Input Github username here"/>
            <Button><Image src="/magnifying-glass.svg" width={0} height={0} className={styles.searchImage} alt="Magnifying glass"/></Button>
          </div>
          
      </div>
    </main>
  )
}
