import style from './tweet.module.css';
import Photo from "../photo/photo";

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

const Tweet = ({photo, name, slug, text, datetime, children}) => {
    return(
        <article className={style.tweet}>

            <div className={style.avatar}>
                <Photo/>
            </div>

            <div className={style.body}>

                <header className={style.header}>
                    {name} @{slug} · {formatDistanceToNowStrict(datetime)}
                </header>

                <div className={style.content}>{text}</div>

                <footer className={style.footer}>
                    footer
                </footer>
                {children}
            </div>
        </article>
    )
}
export default Tweet;