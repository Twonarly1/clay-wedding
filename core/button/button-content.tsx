export type Props = {
    children: React.ReactNode
    isLoading?: boolean
}

export function ButtonContent({ children, isLoading }: Props) {
    return (
        <div className="flex items-center space-x-2">
            <span>{children}</span>
        </div>
    )
}
