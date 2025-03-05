import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contactus" className="relative border-t-4 border-yellow-500/50 bg-gradient-to-b from-[#0D1B44] to-[#0A1535] pt-16 pb-6">
            {/* Chess piece background pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-5">
                {Array.from({ length: 15 }).map((_, index) => (
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

            {/* Subtle top divider pattern */}
            <div className="absolute top-0 right-0 left-0 h-2 bg-yellow-500/20"></div>
            <div className="absolute top-2 right-0 left-0 h-1 bg-yellow-500/10"></div>

            <div className="container mx-auto px-4">
                <div className="relative">
                    <h2 className="mb-12 pb-4 text-center text-3xl font-bold text-white md:text-4xl">
                        <span className="text-yellow-400">Contact</span> Us
                        <div className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 transform bg-yellow-500/50"></div>
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Logo Column */}
                    <div className="flex flex-col items-center lg:col-span-4 lg:items-start">
                        <div className="mb-6 flex flex-col items-center text-center lg:items-start lg:text-left">
                            <img src="/asset/image/chess-logo.png" alt="Double Bishop Chess Academy Logo" className="mb-4 h-32 w-32 object-contain" />
                            <h3 className="text-2xl font-bold text-white">DOUBLE BISHOP</h3>
                            <p className="text-yellow-400">CHESS ACADEMY</p>
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="lg:col-span-8">
                        <div className="mb-10 text-center lg:text-left">
                            <p className="mb-6 leading-relaxed text-gray-300">
                                If you're interested in partnering with us for your after-school activities and would like to explore our top-tier
                                teachers to initiate the journey of creating and discovering chess prodigies, please message us. We are committed to
                                building a vibrant, healthy, and competitive chess environment in your school.
                            </p>
                            <p className="leading-relaxed text-gray-300">
                                For further inquiries or to get in touch, feel free to reach us through the following contact information:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {/* Email */}
                            <div className="flex flex-col items-center md:items-start">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/60">
                                    <Mail className="h-6 w-6 text-yellow-400" />
                                </div>
                                <h4 className="mb-2 text-sm font-semibold text-yellow-400">EMAIL</h4>
                                <a
                                    href="mailto:doublebishopchess@gmail.com"
                                    className="text-center text-white transition-colors hover:text-yellow-300 md:text-left"
                                >
                                    doublebishopchess@gmail.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col items-center md:items-start">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/60">
                                    <Phone className="h-6 w-6 text-yellow-400" />
                                </div>
                                <h4 className="mb-2 text-sm font-semibold text-yellow-400">PHONE</h4>
                                <a href="tel:+66851335841" className="text-white transition-colors hover:text-yellow-300">
                                    +66 85 133 5841
                                </a>
                                <a href="tel:+66631062102" className="text-white transition-colors hover:text-yellow-300">
                                    +66 63 106 2102
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex flex-col items-center md:items-start">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/60">
                                    <MapPin className="h-6 w-6 text-yellow-400" />
                                </div>
                                <h4 className="mb-2 text-sm font-semibold text-yellow-400">ADDRESS</h4>
                                <a
                                    href="https://maps.google.com/?q=9+Chaloem+Phrakiat+Ratchakan+Thi+9+Soi+30,+Nong+Bon,+Prawet,+Bangkok+10250"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center text-white transition-colors hover:text-yellow-300 md:text-left"
                                >
                                    <span className="mb-1 block font-semibold">DOUBLE BISHOP CHESS ACADEMY</span>
                                    <span className="block">9 Chaloem Phrakiat Ratchakan Thi 9 Soi 30,</span>
                                    <span className="block">Nong Bon, Prawet, Bangkok 10250</span>
                                    <span className="mt-2 inline-flex items-center text-xs text-yellow-400">
                                        View on Google Maps
                                        <ExternalLink className="ml-1 h-3 w-3" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider - More distinct */}
                <div className="my-8 h-px w-full bg-white/20" />

                {/* Bottom Credits */}
                <div className="-mx-4 mt-8 flex flex-col items-center justify-between rounded-t-lg bg-[#071029] px-4 py-4 md:flex-row">
                    <p className="mb-4 text-sm text-gray-500 md:mb-0">
                        © {new Date().getFullYear()} Double Bishop Chess Academy. All rights reserved.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                        <span>Created by</span>
                        <a
                            href="https://psanguan.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 text-yellow-400 transition-colors hover:text-yellow-300"
                        >
                            StudentWebSolution
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
