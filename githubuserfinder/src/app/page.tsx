'use client'
import styles from './page.module.css'
import Image from 'next/image'
import TextField from './components/textfield'
import { useEffect, useState } from 'react'
import Profile from './components/profile'
import {searchForUser} from './utils/fetchuser'


export default function Home() {

  const [userQuery, setUserQuery] = useState('');
  const [user, setUser] = useState<User>();

  useEffect(() => {
    // let getUser = async () => setUser(await searchForUser(userQuery) as User);
    // getUser();
    const timeOut = setTimeout(async () =>  setUser(await searchForUser(userQuery) as User), 1000);
    return () => clearTimeout(timeOut);
  }, [userQuery]);

  function handleInputChange(inputValue : string) : void{
    setUserQuery(inputValue);
  }

  return (
    <main className={styles.main}>
      <div className={styles.flexColoumn}>
          <div>
            <h1 data-testid="main-heading">Github User Finder</h1>
            <Image src="/github-mark.svg" width={200} height={200} alt="Github-logo"/>
          </div>
           <div>
            <TextField query={userQuery} event={handleInputChange}>Input Github username here</TextField>
          </div>
      </div>
      <Profile user={user}/>
    </main>
  )
}