
import React from "react";
import styles from './MyComponent.module.css';

const ContentTabs = (props) =>{
    return(
            <fieldset className={styles.box}>
                Tab {props.selecttab} content is showing here
            </fieldset>
        
    );
}
export default ContentTabs;