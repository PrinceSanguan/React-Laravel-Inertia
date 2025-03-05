import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import { Gamepad2, Home, Images, Info, Mail, Menu, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            // Close menu if open
            if (isMenuOpen) setIsMenuOpen(false);

            // Add a small delay before scrolling to ensure menu has closed
            setTimeout(
                () => {
                    // Get the navbar height to offset the scroll position
                    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                },
                isMenuOpen ? 300 : 0,
            );
        }
    };

    const navItems = [
        { name: 'Home', icon: Home, href: '#hero' },
        { name: 'Coaches', icon: Users, href: '#coaches' },
        { name: 'About Us', icon: Info, href: '#about' },
        { name: 'Gallery', icon: Images, href: '#gallery' },
        { name: 'Players', icon: Gamepad2, href: '#players' },
        { name: 'Contact Us', icon: Mail, href: '#contactus' },
    ];

    return (
        <>
            {/* Spacer div to prevent content from being hidden behind the navbar */}
            <div className="h-20"></div>

            <nav
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D1B44] shadow-lg' : 'bg-[#0D1B44]/80 backdrop-blur-sm'}`}
            >
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img src="/asset/image/chess-logo.png" alt="Double Bishop Logo" className="mr-2 h-14 w-14 object-contain md:h-16 md:w-16" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white md:text-2xl">Double Bishop</span>
                            <span className="hidden text-xs font-medium text-yellow-300 sm:block">Chess Academy</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="font-medium transition-colors hover:text-yellow-300"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <Link href={route('login')}>
                            <Button className="bg-yellow-500 px-5 font-semibold text-[#0D1B44] hover:bg-yellow-400">Join Now</Button>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-blue-800/60 text-white hover:bg-blue-700">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full border-none bg-gradient-to-b from-[#1A237E] to-[#0D1B44] p-0 text-white sm:w-80"
                            >
                                <div className="flex h-full flex-col">
                                    {/* Menu Header */}
                                    <div className="flex items-center justify-between border-b border-white/10 p-6">
                                        <div className="flex items-center">
                                            <img src="/asset/image/chess-logo.png" alt="Double Bishop Logo" className="h-12 w-12 object-contain" />
                                            <div className="ml-3 flex flex-col">
                                                <span className="text-lg font-bold">Double Bishop</span>
                                                <span className="text-xs text-yellow-300">Chess Academy</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="flex flex-1 flex-col space-y-1 p-6">
                                        {navItems.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="flex items-center gap-3 rounded-lg px-4 py-3.5 transition-colors hover:bg-white/10 hover:text-yellow-300"
                                                onClick={(e) => handleNavClick(e, item.href)}
                                            >
                                                <item.icon className="h-5 w-5 text-yellow-400" />
                                                <span className="text-lg">{item.name}</span>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Menu Footer */}
                                    <div className="border-t border-white/10 p-6">
                                        <Button
                                            className="w-full bg-yellow-500 py-6 text-lg font-bold text-[#0D1B44] hover:bg-yellow-400"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Join Now
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
