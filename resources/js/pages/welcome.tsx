import AboutSection from '@/components/sections/About';
import CoachesSection from '@/components/sections/Coaches';
import Footer from '@/components/sections/Footer';
import GallerySection from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import PlayersSection from '@/components/sections/Player';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Double Bishop Chess Club | Premier Chess Academy in Thailand">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <meta
                    name="description"
                    content="Join Double Bishop Chess Club, Thailand's premier chess academy. Learn from expert coaches, participate in tournaments, and improve your chess skills at all levels."
                />
                <meta
                    name="keywords"
                    content="chess, chess club, chess thailand, chess academy thailand, bangkok chess, learn chess thailand, chess lessons, double bishop chess"
                />
                <meta property="og:title" content="Double Bishop Chess Club | Thailand's Premier Chess Academy" />
                <meta
                    property="og:description"
                    content="Learn chess from Thailand's leading chess academy with programs for all skill levels and ages."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://doublebishopchess.com" />
            </Head>

            {/* Main container */}
            <div className="relative min-h-screen overflow-hidden bg-[#0D1B44] text-white">
                {/* Chess piece background pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-10">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                fontSize: `${Math.random() * 5 + 2}rem`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                        >
                            {['♔', '♕', '♖', '♗', '♘', '♙'][Math.floor(Math.random() * 6)]}
                        </div>
                    ))}
                </div>

                {/* Navbar Component */}
                <Navbar />

                {/* Hero Section Component */}
                <Hero />

                {/* Coaches Section Component */}
                <CoachesSection />

                {/* About Us Section Component */}
                <AboutSection />

                {/* Gallery Section Component */}
                <GallerySection />

                {/* Player Section Component */}
                <PlayersSection />

                {/* Footer Section Component */}
                <Footer />
            </div>
        </>
    );
}
