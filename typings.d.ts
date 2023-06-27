type Person = {
    name: string
    role: string
    imageUrl: string
}

type FAQ = {
    question: string
    answer: string
}

type NavItem = {
    title: string
    href: string
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
