import styles from './button.module.css'
import { ButtonProps } from './button'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
    const mode = primary ? 'primary' : 'secondary'
    return (
        <button
            type="button"
            className={[styles.storybookButton, styles[size], styles[mode], 'colorRed'].join(' ')}
            style={{ backgroundColor }}
            {...props}
            onClick={() => {
                console.log('test')
            }}
        >
            {label}
        </button>
    )
}
