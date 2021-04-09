import React, {useState} from "react";
import style from './col-sidebar.module.css';
import cn from 'classnames';
import Navigation from "../navigation/navigation";
import ThemeButton from "../theme-button/theme-button";
import ProfileBox from "../profile-box/profile-box";
import TweetPopup from "../tweet-popup/tweet-popup";
import {Tweet} from '../icons'

const ColSidebar = ({flat}) => {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className={cn(style.sidebar)}>
            <Navigation flat={flat}/>

            <div className={style.tweet}>
                <ThemeButton onClick={() => {setShowPopup(true)}} big full={!flat}>{flat ? <Tweet/> : "Tweet"}</ThemeButton>
            </div>

            {showPopup && <TweetPopup setShowPopup={setShowPopup}/>}

            <div className={style.profile}>
                <ProfileBox flat={flat}/>
            </div>
        </div>

    )
}
export default ColSidebar;