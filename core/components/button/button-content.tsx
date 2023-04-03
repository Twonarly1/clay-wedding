import clsx from "clsx"
import React from "react"
import { CircleNotch, Icon } from "../../icons"

export type Props = {
    children: React.ReactNode
    iconLeft?: Icon
    isLoading?: boolean
}

export function ButtonContent({ children, iconLeft, isLoading }: Props) {
    const IconLeft = isLoading ? CircleNotch : iconLeft

    return (
        <div className="flex items-center space-x-2">
            {IconLeft ? (
                <IconLeft
                    className={clsx("mr-2 h-4 w-4", {
                        "animate-spin": isLoading,
                    })}
                />
            ) : null}
            <span>{children}</span>
        </div>
    )
}
