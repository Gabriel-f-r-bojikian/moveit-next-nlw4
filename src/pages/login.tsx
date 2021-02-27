import { LoginBox } from "../components/LoginBox";
import styles from "../styles/pages/Login.module.css";
export default function Login() {
  return (
    <div className={styles.container}>
      <img src="logo-gradient.svg" alt=""/>
      <LoginBox />
    </div>
  )
}