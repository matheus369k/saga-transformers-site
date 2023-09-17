import styles from './Container.module.css'
 
function Container({ children, backGroundImgCustom, backGroundCustom }) {
    return (
        <div className={`${styles.container} ${styles[backGroundCustom]} ${styles[backGroundImgCustom]}`}>
            {children}
        </div>
    )
}

export default Container