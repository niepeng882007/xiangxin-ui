import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import XInput from './input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: '基础组件/XInput',
    component: XInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FXwAWEp4d2w3XB08lIFd57u%2F%25E7%259B%25B4%25E6%2592%25AD%25E6%258E%25A7%25E4%25BB%25B6%25E6%2595%25B4%25E7%2590%2586%3Fnode-id%3D13-12642%26t%3DoOLwGg4EwAtyc6Qw-1',
        },
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // resize: 'none',
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { mini: true },
} satisfies Meta<typeof XInput>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MiniInput: Story = {
    args: {
        mini: true,
        placeholder: 'please input',
        size: 'middle',
    },
}

export const SearchInput: Story = {
    args: {
        mini: false,
        size: 'small',
        placeholder: 'please input',
        prefix: <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />,
        suffix: <Button type="link">搜索</Button>,
    },
}

export const TextTagInput: Story = {
    args: {
        mini: false,
        size: 'small',
        placeholder: 'please input',
        prefix: <span style={{ color: 'rgba(0,0,0,.45)', fontSize: 14 }}>用户名</span>,
    },
}
