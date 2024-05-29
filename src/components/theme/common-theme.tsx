import { ConfigProvider } from 'antd'

export interface ICommonTheme {
    children: React.ReactNode
}

export const GlobalTheme = {
    fontSize: 14,
    controlHeight: 40,
    controlHeightSM: 32,
    controlHeightLG: 48,
}

export const InputTheme = {
    ...GlobalTheme,
    paddingInlineSM: 12,
    paddingInline: 16,
    paddingInlineLG: 16,
    algorithm: true,
}

export const ButtonTheme = {
    ...GlobalTheme,
}

export const SeekToken = {
    borderRadius: 8,
    colorPrimary: '#00b96b', // test
}

const CommonTheme: React.FC<ICommonTheme> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: SeekToken,
                components: {
                    Input: InputTheme,
                    Button: ButtonTheme,
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default CommonTheme
