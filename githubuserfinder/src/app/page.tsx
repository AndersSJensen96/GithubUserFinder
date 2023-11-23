'use client'
import styles from './page.module.css'
import Image from 'next/image'
import TextField from './components/textfield'
import { useEffect, useState } from 'react'
import Profile from './components/profile'


export default function Home() {

  const [userQuery, setUserQuery] = useState('');
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const timeOut = setTimeout(() => searchForUser(userQuery),1000);
    return () => clearTimeout(timeOut);
  }, [userQuery]);

  function handleInputChange(inputValue : string) : void{
    setUserQuery(inputValue);
  }

  async function searchForUser(query : string){
    if(query != ''){
      try {
        let url : string = `https://api.github.com/users/${query}`;
      
        const response = await fetch(url);
        const responseUser = await response.json();
        if(!responseUser.hasOwnProperty('id')){
          setUser(undefined);
        }else{
          setUser(responseUser as User);
        }
        
      } catch (error) {
        setUser(undefined)
        console.log(error)
      }
    }else{
      setUser(undefined)
    }
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.flexColoumn}>
          <div>
            <h1>Github User Finder</h1>
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