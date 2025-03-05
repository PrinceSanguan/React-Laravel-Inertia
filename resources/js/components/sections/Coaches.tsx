import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, Medal, Quote, Trophy } from 'lucide-react';

const CoachesSection = () => {
    const coaches = [
        {
            id: 'parondo',
            name: 'NM Rolly Parondo',
            title: 'National Master & Coach',
            image: '/asset/image/rolly.png',
            bio: 'This page highlights NM Rolly Parondo, a dedicated chess master and coach at Double Bishop Chess Academy. With extensive experience in both playing and coaching, he has contributed significantly to chess education in the Philippines and Thailand. His expertise and professional achievements make him a valuable mentor for aspiring chess players.',
            achievements: [
                'Member of the Professional Chess Trainers of the Philippines since 2016',
                'More than 8 years of experience in teaching chess',
                'Experienced Chess Coach in both the Philippines and Thailand',
                'Chess Player Member of Bangkok Chess Club',
                'Professional Chess Player',
                'Affiliated with the National Chess Federation of the Philippines',
                'Consistent winner of various chess tournaments inside and outside Thailand',
            ],
        },
        {
            id: 'causo',
            name: 'FM Deniel Causo',
            title: 'FIDE Master & Head Coach',
            image: '/asset/image/daniel.png',
            bio: 'The coaching team at Double Bishop Chess Academy consists of highly experienced individuals who are not only accomplished chess players but also bring extensive coaching expertise. Their passion for chess goes beyond just teaching the intricacies of the game; they create an inspiring atmosphere where students can gain insights from professional players. The academy ensures a dynamic and enriching learning experience.',
            quote: '"Coaching is the art of unlocking potential, igniting passion, and guiding individuals to discover the extraordinary within themselves."',
            achievements: [
                'Head Coach of Double Bishop Chess Academy',
                'More than 15 years of experience as a Chess Coach (from beginner to master level)',
                '10 years of experience teaching ECA (Extra-Curricular Activity) chess in international schools in Thailand',
                'Member of Bangkok Chess Club and National Chess Federation of the Philippines',
                'Professional Chess Player',
                'Consistent winner of multiple chess tournaments inside and outside Thailand',
            ],
        },
        {
            id: 'julie',
            name: 'Julie Ann Causo',
            title: 'Coach',
            image: '/asset/image/julie.png',
            bio: 'Julie Ann Causo is a highly experienced chess coach and professional player with over 15 years of expertise in training students from beginner to master level. She has spent a decade teaching chess as part of Extra-Curricular Activity (ECA) programs in international schools across Thailand, shaping the skills of young chess enthusiasts. As a dedicated member of the Bangkok Chess Club and the National Chess Federation of the Philippines, she has consistently demonstrated excellence both as a competitor and mentor. Her deep passion for chess, combined with her extensive coaching background, makes her a valuable asset in developing strategic thinking and competitive skills in her students.',
            achievements: [
                'A professional Chess Player',
                'More than 15 years of experience as a Chess Coach (from beginner to master level)',
                '10 years of experience teaching ECA (Extra-Curricular Activity) chess in international schools in Thailand',
                'Member of Bangkok Chess Club and National Chess Federation of the Philippines',
                'Professional Chess Player',
                'Consistent winner of multiple chess tournaments inside and outside Thailand',
            ],
        },
    ];

    return (
        <section id="coaches" className="bg-gradient-to-b from-[#0D1B44] to-[#0A1535] py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Learn from <span className="text-yellow-400">World-Class</span> Coaches
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        Our expert coaches bring decades of experience to help you master the game at any level. Get personalized training from
                        Thailand's finest chess minds.
                    </p>
                </div>

                {/* Coaches Cards - Vertical Stack */}
                <div className="mx-auto max-w-4xl space-y-16">
                    {coaches.map((coach, index) => (
                        <div key={coach.id} className={`flex flex-col items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            {/* Coach Image */}
                            <div className="w-full md:w-2/5">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square w-full">
                                        <img src={coach.image} alt={coach.name} className="h-full w-full object-cover object-center" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B44]/80 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                                            <h3 className="text-2xl font-bold text-white">{coach.name}</h3>
                                            <p className="text-yellow-400">{coach.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Coach Details */}
                            <div className={`w-full md:w-3/5 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                                <Card className="mt-6 overflow-hidden border-none bg-[#112046] shadow-xl md:mt-0">
                                    <div className="p-6">
                                        <Tabs defaultValue="about" className="w-full">
                                            <TabsList className="mb-6 w-full bg-blue-900/30">
                                                <TabsTrigger
                                                    value="about"
                                                    className="flex-1 data-[state=active]:bg-blue-800 data-[state=active]:text-white"
                                                >
                                                    About
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="achievements"
                                                    className="flex-1 data-[state=active]:bg-blue-800 data-[state=active]:text-white"
                                                >
                                                    Achievements
                                                </TabsTrigger>
                                            </TabsList>

                                            {/* About Tab */}
                                            <TabsContent value="about" className="text-white">
                                                <div className="prose prose-lg prose-invert max-w-none">
                                                    <p className="leading-relaxed text-gray-300">{coach.bio}</p>
                                                </div>

                                                {coach.quote && (
                                                    <div className="relative mt-6 rounded-lg bg-blue-900/30 p-5">
                                                        <Quote className="absolute -top-4 -left-4 h-16 w-16 text-yellow-400/20" />
                                                        <p className="relative z-10 pl-2 leading-relaxed text-white italic">{coach.quote}</p>
                                                    </div>
                                                )}
                                            </TabsContent>

                                            {/* Achievements Tab */}
                                            <TabsContent value="achievements" className="text-white">
                                                <h3 className="mb-5 text-xl font-bold text-yellow-400">Career Highlights</h3>
                                                <ul className="space-y-4">
                                                    {coach.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            {i < 2 ? (
                                                                <Trophy className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                                                            ) : i < 4 ? (
                                                                <Medal className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                                                            ) : (
                                                                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                                                            )}
                                                            <span className="leading-relaxed text-gray-300">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </TabsContent>
                                        </Tabs>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoachesSection;
