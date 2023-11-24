import styles from './profile.module.css'
import Image from 'next/image'
export default function Profile({user} : {user : User | undefined}){
    
    if(user != undefined){
        return(
            <div className={styles.drawer}>
                <div>
                    <h2 data-testid="profile-heading">{user.login} information</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Current Company
                                </th>
                                <th>
                                    Hirable
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>
                                        {(user.name != null) ? user.name : "Not Available"}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {(user.email != null) ? user.email : "Not Available"}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {(user.company != null) ? user.company : "Not Available"}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {(user.hirable != null) ? user.hirable : "Not Available"}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Profile Bio</h2>
                    <div>
                        <p>
                            {(user.bio != null) ? user.bio : "Not Available"}
                        </p>
                    </div>
                    <a href={user.html_url} target='_blank'>Click here to check out {user?.login} full profile!</a>
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.drawer}>
                <div>
                    <h2>
                        No User Found
                    </h2>
                    <Image src="/no_user.webp" width={200} height={200} alt="Github-logo"/>
                </div>
            </div>
        )
    }

}