import type { Meta, StoryObj } from '@storybook/react'
import XTextarea from './textarea'
import TextAssociateBtn from './components/text-associate-btn'

const meta = {
  title: '基础组件/XTextarea',
  component: XTextarea,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FXwAWEp4d2w3XB08lIFd57u%2F%25E7%259B%25B4%25E6%2592%25AD%25E6%258E%25A7%25E4%25BB%25B6%25E6%2595%25B4%25E7%2590%2586%3Fnode-id%3D13-12642%26t%3Dm3kcsV67PtqEGX6k-1',
    },
  },

  args: { resize: 'none' },
} satisfies Meta<typeof XTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const WithButton: Story = {
  args: {
    resize: 'none',
    maxLength: 100,
    initValue: 'initValue',
    placeholder: 'please input',
    children: <TextAssociateBtn />,
  },
}
