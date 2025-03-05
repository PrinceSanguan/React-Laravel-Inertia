export default function AppLogo() {
    return (
        <div className="flex items-center">
            {/* Logo Image */}
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <img src="/asset/image/chess-logo.png" alt="Double Bishop Chess Academy Logo" className="size-5" />
            </div>

            {/* Text */}
            <div className="ml-2 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Double Bishop Chess Academy</span>
            </div>
        </div>
    );
}
