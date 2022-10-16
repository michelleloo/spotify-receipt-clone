import {signIn} from 'next-auth/react';
import styles from '../styles/pages/login.module.scss';
export default function Login() {
    const handleLogin = () => {
        signIn('spotify', {callbackUrl: 'http://localhost:3000/'})
    };
    return(
        <div className={styles.loginPage}>
            <h2 className={styles.loginTitle}>Welcome</h2>
            <button onClick={handleLogin} className={styles.loginButton}>Login</button>
        </div>
    );
}