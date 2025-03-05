import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ChevronDown, ChevronUp, Flag, Star, TrendingUp, User } from 'lucide-react';
import { useState } from 'react';

const PlayersSection = () => {
    const [expandedPlayer, setExpandedPlayer] = useState<string | null>(null);

    const players = [
        {
            id: 'prin',
            name: 'IM Prin Laohawirapap',
            title: 'International Master',
            subtitle: 'THAILAND NUMBER 1 PLAYER',
            image: '/asset/player/player1.jpg',
            quote: '"EVERY MASTER WAS ONCE A BEGINNER." — Irving Chernev',
            peakRating: '2353',
            achievements: [
                "Thailand's First International Master",
                "Thailand's Youngest FIDE Master",
                "Thailand's Youngest Champion (Open)",
                'Champion (Standard) - Thailand SEA Games (Qualifying) 2021',
                'Dream Team Player of FIDE Olympiad 2020 (Online, Division 4) with Perfect Board Results',
                'Champion - Thailand Rapid Chess Championship (Qualifying) 2020',
                'Champion (U14, Rapid) - Eastern Asia Youth Chess Championship 2019',
                '1st Runner-up (U14, Standard) - Eastern Asia Youth Chess Championship 2018',
                'Best Chess Player (2018) - Nominated by Sport Authority of Thailand',
            ],
            representations: [
                '2023 FIDE World Cup',
                '2023 Asian Indoor & Martial Arts Games',
                '2022 FIDE Olympiad',
                '2022 Asian Games (China)',
                '2021 FIDE Olympiad (Online)',
                '2021 SEA Games (Vietnam)',
                '2020 FIDE Olympiad (Online)',
                '2019 World Youth U16 Olympiad (Turkey)',
                '2019 Youth Sports Games (Russia)',
                '2018 World Youth U16 Olympiad (Turkey)',
                '2017 World Youth U16 Olympiad (India)',
            ],
        },
        {
            id: 'natrada',
            name: 'Natrada Kaewwattha',
            title: 'National Player',
            image: '/asset/player/player2.jpg',
            achievements: [
                'Winner (Junior) Thailand Team Chess Championship 2019',
                '1st Runner-up (G14) Thailand Youth Chess Championship 2019',
                'Winner (G16) 61st Thailand Rapid Chess Championship 2020',
                '1st Runner-up (G12) 15th Thailand Youth Chess Championships 2020',
                '1st Runner-up (G14) 16th Thailand Youth Chess Championships 2021',
                '2nd Runner-up (Open) The Thailand Team Chess Championships 2021',
                'Participant in Online World Youth Mind Sports Fair 2021',
                'Winner (G16) The 17th Thailand Junior Chess Championship 2022',
                '2nd Place (Standard G16 Team) The 6th Eastern Asia Youth Chess Championships 2022',
                'Winner (Open) The Thailand Team Chess Championships 2022',
                'Represented Thailand in Asian Youth Chess Championships 2022',
                '1st Runner-up (G16) 18th Thailand Youth Chess Championship 2023',
                'Winner (Open) 10th 61st Anniversary Rapid Chess Championship 2023',
                '2nd Runner-up (G18 Rapid Team) The 21st ASEAN+ Age Group Chess Championships 2023',
                'Represented Thailand in FIDE World Youth U16 Chess Olympiad Eindhoven 2023',
                'Represented Thailand in FIDE World Youth Chess Championship (Montesilvano) 2023',
                'Best Lady (Open) Thailand Rapid Chess Championship 2023',
                '1st Runner-up (G16) Competition between schools organized by the Department of Physical Education',
            ],
        },
        {
            id: 'shin',
            name: 'Shin JingJang',
            title: 'National Player',
            image: '/asset/player/player3.jpg',
            achievements: [
                '44th Olympiad Chennai (National Team) 2022',
                'World Youth Chess Championship 2019 (Represented Thailand for players under 16)',
                'World Youth U-16 Chess Olympiad (Chosen player for Thailand Youth Olympiad Team)',
                'Junior Winner Blue Chevaliers Open 2022 - Phuket',
                'Asian Amateur Chess Championship 2017 - Open',
                '2nd Runner-up Thailand Junior Chess Championship 2018 (U-12)',
                'Winner SISB International School Rapid Chess Championship Tournament 2018',
                'Winner 6th BPS Chess Championship - U12 Open',
                '1st Runner-up Thailand Amateur Championship 2019 U16',
                'SEA Games Blitz Chess Qualifier 2019, Preliminary Rounds, Bangkok (Men)',
                '1st Runner-up Thailand Pattaya Open 2019 Under 16',
                'Thailand Team Chess Championship 2019 (Double Bishop Junior)',
                '2nd Runner-up Thailand National Chess Championships 2020 U14',
                '5th Rapid International School Chess Championship 2020 Open (3rd Place)',
                '2nd Runner-up 5th Blitz International School Chess Championship 2020 Open',
                '2nd Runner-up Central Chess On Tour 2020 (Nonthaburi) Open',
                '2nd Runner-up Central Chess On Tour 2020 (Pattaya) Open',
                'Champion of the Champ Rapid & Simultaneous Central Chess On Tour 2020 Open',
                'SEA Games Qualifying 2021 Standard Open',
                'SEA Games Qualifying 2021 Rapid Open',
                'SEA Games Qualifying 2021 Blitz Open (4th Place) (1st and 2nd place represented Thailand in SEA Games 2021)',
                'Winner 16th Thailand Junior Chess Championship 2021 U-16 (National Champion)',
                'Winner Thailand Youth Chess Championship 2022 U16 (1st Place) (U-16 Back-to-Back National Champion)',
                'Thailand Qualifying Round for Olympiad (Men - 4th Place, Top 5 represented Thailand in the 44th Olympiad)',
                '14th Asian School Chess Championship 2018 Under 13 Open',
                '4th Singapore Amateur Chess Championships 2018',
                'Laos International Open Chess Championship 2018',
            ],
        },
    ];

    const toggleExpand = (playerId: string) => {
        setExpandedPlayer(expandedPlayer === playerId ? null : playerId);
    };

    return (
        <section id="players" className="relative overflow-hidden bg-gradient-to-b from-[#0D1B44] to-[#0A1535] py-20">
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
                    <div className="mb-2 inline-block rounded-full bg-blue-900/30 p-2">
                        <Star className="h-8 w-8 text-yellow-400" />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Our <span className="text-yellow-400">Top</span> Players
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        Meet the exceptional players who represent Double Bishop Chess Academy and Thailand on the world stage
                    </p>
                </div>

                {/* Players Showcase - Horizontal Cards */}
                <div className="mx-auto max-w-6xl space-y-12">
                    {players.map((player) => (
                        <div
                            key={player.id}
                            className={`transform overflow-hidden rounded-xl bg-gradient-to-r from-[#112046] to-[#1A237E] shadow-xl transition-all duration-300 ${
                                expandedPlayer === player.id ? 'ring-2 ring-yellow-400' : 'hover:translate-y-[-5px]'
                            }`}
                        >
                            <div className="md:flex">
                                {/* Player Image - Left Side */}
                                <div className="relative md:w-1/3">
                                    <div className="relative aspect-square w-full overflow-hidden bg-blue-900/50">
                                        {player.image ? (
                                            <img src={player.image} alt={player.name} className="h-full w-full object-cover object-top" />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center">
                                                <User className="h-32 w-32 text-blue-200/20" />
                                            </div>
                                        )}
                                        {/* Title banner */}
                                        <div className="absolute top-6 left-0 bg-yellow-500 px-4 py-1 font-semibold text-[#0D1B44] shadow-lg">
                                            {player.title}
                                        </div>
                                    </div>
                                </div>

                                {/* Player Info - Right Side */}
                                <div className="p-6 md:w-2/3 md:p-8">
                                    {/* Player Name and Title */}
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                                        {player.subtitle && <p className="font-semibold text-yellow-400">{player.subtitle}</p>}
                                    </div>

                                    {/* Quote if available */}
                                    {player.quote && (
                                        <div className="mb-4 border-l-4 border-yellow-500/50 pl-4 text-gray-300 italic">{player.quote}</div>
                                    )}

                                    {/* Rating if available */}
                                    {player.peakRating && (
                                        <div className="mb-4 flex items-center">
                                            <Badge className="bg-blue-800 text-white">
                                                <TrendingUp className="mr-1 h-3.5 w-3.5" />
                                                PEAK FIDE RATING: {player.peakRating}
                                            </Badge>
                                        </div>
                                    )}

                                    {/* Key Achievements */}
                                    <div className="mb-4">
                                        <div className="mb-2 flex items-center">
                                            <Award className="mr-2 h-5 w-5 text-yellow-400" />
                                            <h4 className="text-lg font-semibold text-white">
                                                {player.id === 'prin' ? 'REMARKABLE ACHIEVEMENT' : 'Key Achievements'}
                                            </h4>
                                        </div>

                                        <ul className="space-y-1.5 text-gray-300">
                                            {player.achievements
                                                .slice(0, expandedPlayer === player.id ? player.achievements.length : 3)
                                                .map((achievement, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="mr-2 text-yellow-400">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                        </ul>

                                        {player.achievements.length > 3 && (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleExpand(player.id)}
                                                className="mt-2 text-yellow-400 hover:bg-blue-900/30 hover:text-yellow-300"
                                            >
                                                {expandedPlayer === player.id ? (
                                                    <>
                                                        Show Less <ChevronUp className="ml-1 h-4 w-4" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show More <ChevronDown className="ml-1 h-4 w-4" />
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </div>

                                    {/* National Team Representations if available */}
                                    {player.representations && expandedPlayer === player.id && (
                                        <div className="mt-6">
                                            <div className="mb-2 flex items-center">
                                                <Flag className="mr-2 h-5 w-5 text-yellow-400" />
                                                <h4 className="text-lg font-semibold text-white">THAILAND NATIONAL PLAYER</h4>
                                            </div>

                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                                {player.representations.map((event, index) => (
                                                    <div key={index} className="flex items-center rounded-md bg-blue-900/30 px-3 py-1.5">
                                                        <span className="mr-2 text-yellow-400">•</span>
                                                        <span className="text-sm text-gray-300">{event}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Banner */}
                            <div
                                className={`flex cursor-pointer items-center justify-between bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 px-6 py-2`}
                                onClick={() => toggleExpand(player.id)}
                            >
                                <span className="text-sm font-medium text-white">
                                    {expandedPlayer === player.id ? 'Click to collapse' : 'Click to see full profile'}
                                </span>
                                {expandedPlayer === player.id ? (
                                    <ChevronUp className="h-4 w-4 text-yellow-400" />
                                ) : (
                                    <ChevronDown className="h-4 w-4 text-yellow-400" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlayersSection;
