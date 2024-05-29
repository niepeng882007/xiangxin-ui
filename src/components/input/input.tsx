import { Input } from 'antd'
import { InputProps } from 'antd/lib'
import CommonTheme from '../theme/common-theme'
import cx from 'classnames'
import styles from './input.module.css'

export interface XInputProps extends InputProps {
    mini?: boolean
}

const XInput: React.FC<XInputProps> = (props: XInputProps) => {
    const { mini, ...rest } = props

    return (
        <CommonTheme>
            <Input {...rest} className={cx({ [styles.mini]: mini })} />
        </CommonTheme>
    )
}

export default XInput
