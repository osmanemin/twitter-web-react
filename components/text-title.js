import style from './text-title.module.css'
import cn from 'classnames';

function TextTitle({bold = true, children}) {
    return <h2 className={cn(style.titleBold, bold && style.bold )}>{children}</h2>
}

export default TextTitle;