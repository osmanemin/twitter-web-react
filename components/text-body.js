import style from './text-body.module.css'
import cn from 'classnames';

function TextBody({bold = false, children, className, ...props}) {
    return (
        <span className={cn(style.body, bold && style.bold, className)} {...props}>
            {children}
        </span>
    )
}

export default TextBody;