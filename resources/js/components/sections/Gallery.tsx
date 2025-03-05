import { Camera, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const GallerySection = () => {
    // Sample gallery items - replace with your actual images and descriptions
    const galleryItems = [
        {
            id: 1,
            image: '/asset/gallery/gallery1.jpg',
            title: 'Thailand Junior Championship 2023',
            description: 'Our students proudly represented Double Bishop at the national level competition.',
        },
        {
            id: 2,
            image: '/asset/gallery/gallery2.jpg',
            title: 'International School Tournament',
            description: 'Students from Double Bishop won top positions at the annual international school chess championship.',
        },
        {
            id: 3,
            image: '/asset/gallery/gallery3.jpg',
            title: 'Master Class with GM Rolly',
            description: 'Special training session with our chess master helped students develop advanced strategies.',
        },
        {
            id: 4,
            image: '/asset/gallery/gallery4.jpg',
            title: 'Bangkok Chess Open',
            description: 'Double Bishop students showcasing their skills at the prestigious Bangkok Chess Open.',
        },
        {
            id: 5,
            image: '/asset/gallery/gallery5.jpg',
            title: 'Youth Chess Development Program',
            description: 'Nurturing young talent through our specialized youth development program.',
        },
    ];

    // For the main carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const touchStartX = useRef<number>(0);

    // For the thumbnail carousel
    const [startIndex, setStartIndex] = useState(0);
    const thumbnailsToShow = 3; // Number of thumbnails visible at once

    useEffect(() => {
        // Auto-advance carousel
        timeoutRef.current = setTimeout(() => {
            handleNext();
        }, 5000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex]);

    const handlePrev = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const handleNext = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const handleThumbnailClick = (index: number) => {
        if (isTransitioning || index === currentIndex) return;

        setIsTransitioning(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setCurrentIndex(index);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        // If the swipe is significant enough (more than 50px)
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swipe left - go to next
                handleNext();
            } else {
                // Swipe right - go to previous
                handlePrev();
            }
        }
    };

    const scrollThumbnailsLeft = () => {
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    const scrollThumbnailsRight = () => {
        setStartIndex((prev) => Math.min(galleryItems.length - thumbnailsToShow, prev + 1));
    };

    return (
        <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-[#0A1535] to-[#0D1B44] py-20">
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

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="mb-2 inline-block">
                        <div className="mb-3 flex items-center justify-center">
                            <Trophy className="mr-2 h-8 w-8 text-yellow-400" />
                            <Camera className="h-8 w-8 text-yellow-400" />
                        </div>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Our <span className="text-yellow-400">Success</span> Gallery
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        Celebrating the achievements and memorable moments of Double Bishop Chess Academy students and events
                    </p>
                </div>

                {/* Main Carousel */}
                <div className="mx-auto mb-12 max-w-5xl">
                    <div className="relative overflow-hidden rounded-xl border border-blue-900/30 bg-[#112046] shadow-2xl">
                        {/* Main Image */}
                        <div className="relative aspect-video w-full overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                            <div
                                className={`absolute inset-0 flex transition-transform duration-500 ease-in-out ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {galleryItems.map((item) => (
                                    <div key={item.id} className="relative min-w-full">
                                        {/* Display a placeholder div if image path is not available */}
                                        {item.image ? (
                                            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-blue-900/50">
                                                <div className="p-4 text-center">
                                                    <Camera className="mx-auto mb-4 h-16 w-16 text-yellow-400 opacity-50" />
                                                    <p className="text-gray-300">Image of {item.title}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1535] via-transparent to-transparent"></div>

                                        {/* Caption */}
                                        <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                                            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                                            <p className="text-sm text-gray-300">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Indicators */}
                            <div className="absolute right-0 bottom-0 left-0 flex justify-center p-4">
                                <div className="flex gap-2">
                                    {galleryItems.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleThumbnailClick(index)}
                                            className={`h-2 rounded-full transition-all ${
                                                currentIndex === index ? 'w-8 bg-yellow-400' : 'w-2 bg-white/50 hover:bg-white/80'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="relative mt-6">
                        <div className="flex items-center justify-center">
                            <button
                                onClick={scrollThumbnailsLeft}
                                disabled={startIndex === 0}
                                className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full ${
                                    startIndex === 0 ? 'bg-blue-900/20 text-gray-500' : 'bg-blue-900/40 text-white hover:bg-blue-900/60'
                                }`}
                                aria-label="Scroll thumbnails left"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            <div className="mx-2 flex max-w-md space-x-2 overflow-hidden">
                                {galleryItems.slice(startIndex, startIndex + thumbnailsToShow).map((item, index) => {
                                    const actualIndex = startIndex + index;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => handleThumbnailClick(actualIndex)}
                                            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all ${
                                                currentIndex === actualIndex
                                                    ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-[#0A1535]'
                                                    : 'opacity-70 ring-1 ring-white/10 hover:opacity-100'
                                            }`}
                                            aria-label={`View ${item.title}`}
                                        >
                                            {item.image ? (
                                                <img src={item.image} alt={`Thumbnail for ${item.title}`} className="h-full w-full object-cover" />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-blue-900/50">
                                                    <Camera className="h-6 w-6 text-gray-400" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                onClick={scrollThumbnailsRight}
                                disabled={startIndex >= galleryItems.length - thumbnailsToShow}
                                className={`ml-2 flex h-8 w-8 items-center justify-center rounded-full ${
                                    startIndex >= galleryItems.length - thumbnailsToShow
                                        ? 'bg-blue-900/20 text-gray-500'
                                        : 'bg-blue-900/40 text-white hover:bg-blue-900/60'
                                }`}
                                aria-label="Scroll thumbnails right"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
