import React from "react";
import style from './profile-box.module.css';
import Photo from "./photo";
import {ArrowBottom} from "./icons";
import Button from "./button";
import TextBody from "./text-body";

const ProfileBox = ({name = "Osman Emin USTA", slug = "oeu"}) => {
    return (
        <Button className={style.box}>
            <Photo/>
            <div className={style.body}>
                <TextBody>{name}</TextBody>
                <TextBody className={style.slug}>@{slug}</TextBody>
            </div>
            <ArrowBottom className={style.icon}/>
        </Button>

    )
}
export default ProfileBox;