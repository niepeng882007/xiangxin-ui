import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FEyGGOF0iMLcyw0wCbsI6xw%2F%25E4%25BA%2591%25E7%259B%25B4%25E6%2592%25AD2023%25E9%259C%2580%25E6%25B1%2582%25E8%25AE%25BE%25E8%25AE%25A1%25E6%2596%25B9%25E6%25A1%2588%3Fnode-id%3D1592%253A233086%26t%3DQ0BE0btkJAyxOHy3-1',
        },
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
}

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
}

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
}
