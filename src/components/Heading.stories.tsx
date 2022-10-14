import { IHeadingProps, Heading } from "./Heading"
import { Meta, StoryObj } from "@storybook/react"

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        childrem: "Lorem ipsum",
        size: "md"
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio"
            }
        }

    }
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {}
export const Small: StoryObj<IHeadingProps> = {
    args: {
        size: "sm"
    }
}

export const Large: StoryObj<IHeadingProps> = {
    args: {
        size: "lg"
    }
}

export const CustomComponent: StoryObj<IHeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                type: null
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    },
}
