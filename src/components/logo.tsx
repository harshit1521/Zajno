type LogoProps = {
    className?: string
}

export default function Logo({ className = 'block h-auto w-full' }: LogoProps) {
    return (
        <img
            src="/logo.svg"
            alt="Zajno"
            draggable={false}
            className={`select-none ${className}`}
        />
    )
}