import styles from './Container.module.css'
 
function Container({ children, backGroundImgCustom, backGroundCustom, textClassCustom }) {
    return (
        <div className={`${styles.container} ${styles[backGroundCustom]} ${styles[backGroundImgCustom]} ${styles[textClassCustom]}`}>
            {children}
        </div>
    )
}

export default Container