import { ReactElement, forwardRef, useState, useEffect, useCallback } from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input/TextArea'
import styles from './textarea.module.css'
import cx from 'classnames'

export interface TextareaProps extends TextAreaProps {
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'
    children?: ReactElement
    initValue?: string
}

const { TextArea } = Input

const XTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function XTextarea(props, ref) {
    const { resize, children, maxLength = 100, initValue, ...rest } = props
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')

    const isError = value?.length > maxLength

    const handleTextareaChange = useCallback(e => {
        setValue(e.target.value)
    }, [])

    useEffect(() => {
        console.log('initValue====', initValue)

        setValue(initValue!)
    }, [initValue])

    return (
        <div
            className={cx(styles.aiTextArea, {
                focus,
                isError,
            })}
        >
            <TextArea
                value={value}
                ref={ref}
                style={{
                    resize,
                    height: 150,
                    position: 'relative',
                }}
                onChange={handleTextareaChange}
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => {
                    setFocus(false)
                }}
                {...rest}
            />
            <div className={styles.bottomWrap}>
                {children}
                <span
                    style={{
                        color: '#C4C4C4',
                    }}
                >
                    <span
                        style={{
                            color: value?.length > maxLength ? '#F1343A' : '#C4C4C4',
                        }}
                    >
                        {value?.length || 0}
                    </span>
                    /{maxLength}
                </span>
            </div>
        </div>
    )
})

export default XTextarea
