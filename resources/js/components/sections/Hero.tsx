import { Button } from '@/components/ui/button';

const Hero = () => {
    return (
        <div id="hero" className="relative z-10 container mx-auto flex min-h-screen px-4 py-12">
            <div className="my-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                    <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                        Master the Game at <span className="text-yellow-400">Thailand's Premier</span> Chess Academy
                    </h1>
                    <p className="max-w-xl text-lg text-gray-300 md:text-xl">
                        From beginners to advanced players, our expert coaches will help you develop strategic thinking and elevate your chess skills
                        to the next level.
                    </p>
                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                        <Button size="lg" className="bg-yellow-500 px-8 font-bold text-[#0D1B44] hover:bg-yellow-400">
                            Start Your Journey
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                            View Programs
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4 pt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    src={`/asset/image/hero-image${i}.jpg`}
                                    alt={`User ${i}`}
                                    className="h-10 w-10 rounded-full border-2 border-[#0D1B44] object-cover"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-300">
                            Join <span className="font-bold text-white">500+</span> chess enthusiasts in Thailand
                        </p>
                    </div>
                </div>
                <div className="relative w-full lg:max-w-[550px]">
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg md:aspect-square">
                        <img
                            src="/asset/image/chess-event.png"
                            alt="Chess training session"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
                        <span className="absolute bottom-4 left-4 rounded bg-black/50 px-2 py-1 text-sm text-white">
                            Chess training session at Double Bishop
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
