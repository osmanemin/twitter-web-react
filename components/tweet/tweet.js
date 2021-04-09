import style from './tweet.module.css';
import Photo from "../photo/photo";

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import IconButton from "../button/icon";
import * as Icon from "../icons";

const Tweet = ({photo, name, slug, text, datetime, children}) => {
    return(
        <article className={style.tweet}>

            <div className={style.avatar}>
                <Photo/>
            </div>

            <div className={style.body}>

                <header className={style.header}>
                    <span className={style.name}>{name}</span> <span>@{slug}</span> ·{' '}
                    <span>{formatDistanceToNowStrict(datetime)}</span>
                </header>

                <div className={style.content}>{text}</div>

                <footer className={style.footer}>

                    <div className={style.footerButton}>
                        <IconButton className={style.actionButton}>
                            <Icon.Reply/>
                        </IconButton>
                        <span>5</span>
                    </div>

                    <div className={style.footerButton}>
                        <IconButton className={style.actionButton}>
                            <Icon.Retweet/>
                        </IconButton>
                        <span>12</span>
                    </div>

                    <div className={style.footerButton}>
                        <IconButton className={style.actionButton}>
                            <Icon.Like/>
                        </IconButton>
                    </div>

                    <div className={style.footerButton}>
                        <IconButton className={style.actionButton}>
                            <Icon.Share/>
                        </IconButton>
                    </div>
                </footer>
            </div>
        </article>
    )
}
export default Tweet;