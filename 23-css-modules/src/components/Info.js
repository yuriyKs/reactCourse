import './Info.css'
import styles from './Info.module.css'

console.log(styles)

function Info() {
  return (
    <div className={styles.info}>
      <h1>Info comp</h1>
      <h2>H2 in Info components </h2>
      <button className={styles.myOtherButton}>CLICK</button>
    </div>
  )
}

export default Info
