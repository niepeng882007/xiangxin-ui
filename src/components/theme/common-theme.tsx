import { ConfigProvider } from 'antd'

export interface ICommonTheme {
  children: React.ReactNode
}

export const GlobalTheme = {
  controlHeight: 40,
  controlHeightSM: 32,
  controlHeightLG: 48,
  borderRadius: 8,
  borderRadisuSM: 6,
  borderRadiusLG: 8,
  fontSize: 14,
  colorPrimary: '#00b96b', // test
}

export const InputTheme = {
  paddingInlineSM: 12,
  paddingInline: 16,
  paddingInlineLG: 16,
  algorithm: true,
}

const CommonTheme: React.FC<ICommonTheme> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: GlobalTheme,
        components: {
          Input: InputTheme,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default CommonTheme
