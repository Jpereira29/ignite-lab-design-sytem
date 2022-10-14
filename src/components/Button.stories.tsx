import { IButtonProps, Button } from "./Button"
import { Meta, StoryObj } from "@storybook/react"

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Create account",
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio"
            }
        }

    }
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {}
