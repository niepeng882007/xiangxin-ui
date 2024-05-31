import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import XInput from './input'

const meta = {
  title: '基础组件/XInput',
  component: XInput,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FXwAWEp4d2w3XB08lIFd57u%2F%25E7%259B%25B4%25E6%2592%25AD%25E6%258E%25A7%25E4%25BB%25B6%25E6%2595%25B4%25E7%2590%2586%3Fnode-id%3D13-12642%26t%3DoOLwGg4EwAtyc6Qw-1',
    },
  },

  args: { mini: true },
} satisfies Meta<typeof XInput>

export default meta
type Story = StoryObj<typeof meta>

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
