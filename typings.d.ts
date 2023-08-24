type Person = {
    name: string
    role: string
    imageUrl: string
}

type FAQ = {
    icon?: Icon
    question: string
    answer: string
}

type NavItem = {
    title: string
    href: string
    svg?: any
}

type LinkProps = {
    href: string
    title: string
    variant?: "dark" | "white"
}

type Hotel = {
    name: string
    href: string
    distance: string
    time: string
}
