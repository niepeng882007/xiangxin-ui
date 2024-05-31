import { Input } from 'antd'
import { InputProps } from 'antd/lib'
// import CommonTheme from '../theme/common-theme'
import classnames from 'classnames'
import styles from './input.module.css'

export interface XInputProps extends InputProps {
  mini?: boolean
}

const XInput: React.FC<XInputProps> = (props: XInputProps) => {
  const { mini, ...rest } = props
  const small = props.size === 'small'
  const large = props.size === 'large'

  return (
    // <CommonTheme>
    <Input
      {...rest}
      className={classnames({
        [styles.mini]: mini,
        [styles.small]: small,
        [styles.large]: large,
      })}
    />
    // </CommonTheme>
  )
}

export default XInput
