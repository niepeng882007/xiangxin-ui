import { ReactElement } from 'react'
import { TextAreaProps } from 'antd/lib/input/TextArea'
import { Button, Popover } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons'

export interface TextareaProps extends TextAreaProps {
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'
    children?: ReactElement
    initValue?: string
}

const TextAssociateBtn: React.FC = () => {
    return (
        <div>
            <Popover
                trigger={['click']}
                content={
                    <div className="popoverContent">
                        <div className="header">
                            {/* <div>文本联想</div> */}
                            <Button>文本联想</Button>
                            <CloseCircleFilled />
                        </div>
                        <div
                            style={{
                                maxHeight: 300,
                                overflow: 'scroll',
                            }}
                            className="content"
                        >
                            8888
                        </div>
                        <div className="bottom">
                            <Button>换一个</Button>
                            <Button type="primary">应用文本联想</Button>
                        </div>
                    </div>
                }
                placement="left"
            >
                <div
                    style={{
                        width: 56,
                    }}
                >
                    <Button
                        style={{
                            padding: 0,
                            height: 22,
                        }}
                        type="link"
                    >
                        文本联想
                    </Button>
                </div>
            </Popover>
        </div>
    )
}

export default TextAssociateBtn
