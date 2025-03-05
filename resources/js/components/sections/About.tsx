const AboutSection = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-[#0A1535] to-[#0D1B44] py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        About <span className="text-yellow-400">Double Bishop</span> Chess Academy
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">Nurturing chess champions of tomorrow in the heart of Thailand</p>
                </div>

                {/* Chess pieces background effect */}
                <div className="pointer-events-none absolute inset-0 opacity-5">
                    {Array.from({ length: 10 }).map((_, index) => (
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

                <div className="relative z-10 mx-auto max-w-6xl">
                    {/* Main about us card */}
                    <div className="mb-12 rounded-xl bg-[#112046] p-8 shadow-xl">
                        <h3 className="mb-4 text-2xl font-bold text-yellow-400">About us</h3>
                        <p className="mb-4 leading-relaxed text-gray-300">
                            Double Bishop Chess Academy is a Chess School located in Bangkok. A legitimate member of the Thailand Chess Association.
                            With our experienced international trainers and coaches, we provide the best programs and facilities for tomorrow's Chess
                            Champion. Double Bishop teaches all levels from beginner to a master level.
                        </p>
                        <p className="mb-4 leading-relaxed text-gray-300">
                            We also organize Monthly Rated Chess Tournament sanctioned by the World Chess Federation (FIDE) to improve and develop
                            student's individual skills.
                        </p>
                        <p className="leading-relaxed text-gray-300">
                            Many students of Double Bishop are a part of the national team of Thailand competing in many international events.
                        </p>
                    </div>

                    {/* Three equal columns: Vision, Mission, QR Code */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Vision Card */}
                        <div className="flex flex-col rounded-xl bg-[#112046] p-6 shadow-xl">
                            <h3 className="mb-3 text-xl font-bold text-yellow-400">Vision</h3>
                            <div className="flex flex-1 items-center">
                                <p className="leading-relaxed text-gray-300 italic">
                                    "Providing and spreading the best quality of competitive sports, beauty of arts and sophistication of sciences in
                                    the world of chess."
                                </p>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="flex flex-col rounded-xl bg-[#112046] p-6 shadow-xl">
                            <h3 className="mb-3 text-xl font-bold text-yellow-400">Mission</h3>
                            <div className="flex flex-1 items-center">
                                <p className="leading-relaxed text-gray-300">
                                    To cultivate future champions in school and life through learning and playing chess. By applying chess in real
                                    life, the character that a single player can adopt will bring them to success.
                                </p>
                            </div>
                        </div>

                        {/* QR Code Card */}
                        <div className="flex flex-col items-center rounded-xl bg-[#112046] p-6 shadow-xl">
                            <h3 className="mb-3 text-xl font-bold text-yellow-400">Connect With Us</h3>
                            <div className="flex flex-1 flex-col items-center justify-center">
                                <div className="mb-3 rounded-lg bg-white p-2">
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.facebook.com/PrinceSanguan"
                                        alt="QR Code to DBCA Facebook Page"
                                        className="h-32 w-32"
                                    />
                                </div>
                                <p className="text-center font-medium text-white">Scan to Visit DBCA Facebook Page!</p>
                                <a
                                    href="https://www.facebook.com/PrinceSanguan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300"
                                >
                                    facebook.com/PrinceSanguan
                                    <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Core Values Section */}
                    <div className="mt-12 rounded-xl bg-[#112046] p-8 shadow-xl">
                        <h3 className="mb-6 text-center text-2xl font-bold text-yellow-400">CORE VALUES</h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-lg bg-blue-900/30 p-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-[#0D1B44]">
                                        D
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-white">Decisive</h4>
                                        <p className="text-sm text-gray-300">Making strategic choices with confidence</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg bg-blue-900/30 p-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-[#0D1B44]">
                                        B
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-white">Brave</h4>
                                        <p className="text-sm text-gray-300">Facing challenges with courage and determination</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg bg-blue-900/30 p-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-[#0D1B44]">
                                        C
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-white">Creative</h4>
                                        <p className="text-sm text-gray-300">Finding innovative solutions to complex problems</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg bg-blue-900/30 p-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-[#0D1B44]">
                                        A
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-white">Analytical</h4>
                                        <p className="text-sm text-gray-300">Developing structured thinking and critical analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
