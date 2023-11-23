import { ReactElement } from 'react';
import styles from './profile.module.css'
export default function({user} : {user : User | undefined}){
    
    if(user != undefined){
        return(
            <div className={styles.drawer}>
                <div>
                    <h2>{user.login}</h2>
                    <p>Name: {(user.name != null) ? user.name : "Not Available"}</p>
                    <p>Email: {(user.email != null) ? user.email : "Not Available"}</p>
                    <p>Company: {(user.company != null) ? user.company : "Not Available"}</p>
                    <p>Hirable: {(user.hirable != null) ? user.hirable : "Not Available"}</p>
                    <p>Bio: {(user.bio != null) ? user.bio : "Not Available"}</p>
                    <a href={user.html_url} target='_blank'>Check out {user?.login} full profile!</a>
                </div>
            </div>
        )
    }else{
        return(
            <p>
                No User Found
            </p>
        )
    }

}