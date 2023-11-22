import styles from './page.module.css'
import Image from 'next/image'
import TextField from './components/textfield'
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
          <Image src="/github-mark.svg" width={200} height={200} alt="Github-logo"/>
          <TextField fieldPlaceholder="Input Github username here"/>
      </div>
    </main>
  )
}
