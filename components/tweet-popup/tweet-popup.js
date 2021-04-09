import React from "react";
import style from './tweet-popup.module.css';
import Photo from "../photo/photo";
import ThemeButton from "../theme-button/theme-button";
import {Cancel} from "../icons";
import IconButton from "../button/icon";
import Stack from "../stack/stack";

const TweetPopup = ({setShowPopup}) => {


    return (
        <div className={style.overlay}>
            <div className={style.popup}>
                <div className={style.avatar}>
                    <Photo/>
                </div>
                <div className={style.body}>

                    <textarea className={style.textarea} name="" rows="6" placeholder={"Yaz bişiler"}/>

                    <Stack gap={20} className={style.footer}>
                        <IconButton onClick={()=>{setShowPopup(false)}} className={style.cancel}>
                            <Cancel/>
                        </IconButton>
                        <ThemeButton>Tweet</ThemeButton>
                    </Stack>
                </div>
            </div>
        </div>
    )
}
export default TweetPopup;