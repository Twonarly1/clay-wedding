import { ComponentProps, ForwardedRef, forwardRef } from "react"
import clsx from "clsx"
import { ButtonContent } from "./button-content"
import type { Props as ButtonContentProps } from "./button-content"

type IntrinsicAnchorProps = ComponentProps<"a">
type IntrinsicButtonProps = ComponentProps<"button">

type CommonProps = {
    variant?: "default" | "dark" | "white" | "footer"
} & ButtonContentProps

type AnchorProps = {
    as: "a"
    href: IntrinsicAnchorProps["href"]
} & CommonProps

type ButtonProps = {
    as?: "button"
    href?: never
    isDisabled?: boolean
    isLoading?: boolean
    onClick?: IntrinsicButtonProps["onClick"]
    type?: IntrinsicButtonProps["type"]
    name?: IntrinsicButtonProps["name"]
    id?: IntrinsicButtonProps["id"]
} & CommonProps

function isAnchor(props: Props): props is AnchorProps {
    return (props as AnchorProps).as === "a"
}

export type Props = AnchorProps | ButtonProps

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(function Button(
    { ...props },
    ref,
) {
    const { children, variant = "default" } = props

    if (!("as" in props)) {
        props.as = "button"
    }

    const className = clsx("transition-colors text-center flex items-center justify-center", {
        "flex cursor-pointer items-center space-x-2 text-xl font-light sm:text-2xl":
            variant === "default",
        "rounded-full border border-transparent bg-fern_green p-3 px-8 text-center text-white hover:border-fern_green hover:bg-white hover:text-fern_green":
            variant === "dark",
        "rounded-full border border-fern_green bg-white p-3 px-8 text-fern_green hover:border-fern_green hover:bg-fern_green hover:text-white":
            variant === "white",
        "w-full text-center font-light text-sm hover:font-bold sm:w-32 sm:text-left":
            variant === "footer",
    })

    if (isAnchor(props)) {
        const { href } = props
        const isExternalLink = href?.startsWith("http")

        const anchorProps: IntrinsicAnchorProps = {
            className,
            href,
        }

        if (isExternalLink) {
            anchorProps["rel"] = "noopener noreferrer"
            anchorProps["target"] = "_blank"
        }

        return (
            <a {...anchorProps} ref={ref as ForwardedRef<HTMLAnchorElement>}>
                <ButtonContent>{children}</ButtonContent>
            </a>
        )
    }

    const { isDisabled, isLoading, onClick, name, type = "button" } = props

    return (
        <button
            name={name}
            className={clsx(className)}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            ref={ref as ForwardedRef<HTMLButtonElement>}
            type={type}
        >
            <ButtonContent isLoading={isLoading}>{children}</ButtonContent>
        </button>
    )
})
