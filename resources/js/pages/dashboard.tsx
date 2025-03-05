import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Award, BarChart3, BookOpen, Calendar, ChevronRight, Clock, MapPin, MoreHorizontal, Target, TrendingUp, Trophy, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    // Sample data for upcoming tournaments
    const upcomingTournaments = [
        {
            id: 1,
            title: 'Monthly FIDE Rated Tournament',
            date: 'March 15, 2025',
            location: 'Double Bishop Academy, Bangkok',
            registrationOpen: true,
            type: 'Rapid',
        },
        {
            id: 2,
            title: 'Thailand Youth Championship',
            date: 'April 5-6, 2025',
            location: 'Central Plaza, Bangkok',
            registrationOpen: true,
            type: 'Standard',
        },
        {
            id: 3,
            title: 'International School Chess League',
            date: 'April 20, 2025',
            location: 'SISB School, Bangkok',
            registrationOpen: false,
            type: 'Blitz',
        },
    ];

    // Sample student progress data
    const studentProgress = [
        {
            id: 1,
            name: 'Alex Wong',
            avatar: '/asset/image/student1.jpg',
            rating: 1245,
            ratingChange: +35,
            progress: 78,
            lastClass: 'Advanced Opening Strategies',
            nextClass: 'March 5, 2025',
        },
        {
            id: 2,
            name: 'Sara Miller',
            avatar: '/asset/image/student2.jpg',
            rating: 1120,
            ratingChange: +15,
            progress: 65,
            lastClass: 'Endgame Fundamentals',
            nextClass: 'March 3, 2025',
        },
        {
            id: 3,
            name: 'Tom Parker',
            avatar: '/asset/image/student3.jpg',
            rating: 1380,
            ratingChange: -8,
            progress: 92,
            lastClass: 'Tournament Preparation',
            nextClass: 'March 7, 2025',
        },
        {
            id: 4,
            name: 'Mai Tanaka',
            avatar: '/asset/image/student4.jpg',
            rating: 1056,
            ratingChange: +42,
            progress: 45,
            lastClass: 'Basic Tactics',
            nextClass: 'March 4, 2025',
        },
    ];

    // Sample chess stats
    const chessStats = {
        totalStudents: 138,
        activeClasses: 14,
        averageRating: 1230,
        tournamentWins: 37,
        studentsInTournaments: 42,
        growthRate: 18,
        totalGraduates: 86,
        nationalTeamMembers: 8,
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Chess Academy Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                            <Users className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{chessStats.totalStudents}</div>
                            <p className="text-muted-foreground text-xs">
                                <span className="text-green-500">+{chessStats.growthRate}%</span> from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                            <TrendingUp className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{chessStats.averageRating}</div>
                            <p className="text-muted-foreground text-xs">FIDE/National Rating Average</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tournament Wins</CardTitle>
                            <Trophy className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{chessStats.tournamentWins}</div>
                            <p className="text-muted-foreground text-xs">
                                <span className="text-green-500">{chessStats.studentsInTournaments}</span> students in competitions
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">National Players</CardTitle>
                            <Award className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{chessStats.nationalTeamMembers}</div>
                            <p className="text-muted-foreground text-xs">Students in Thailand National Team</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="grid gap-4 md:grid-cols-7">
                    {/* Left Column - 4/7 width */}
                    <div className="space-y-4 md:col-span-4">
                        {/* Student Progress */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Student Progress</CardTitle>
                                    <Button variant="outline" size="sm">
                                        View All
                                    </Button>
                                </div>
                                <CardDescription>Recent activity from your students</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {studentProgress.map((student) => (
                                        <div key={student.id} className="flex items-center">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={student.avatar} alt={student.name} />
                                                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="ml-4 flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm leading-none font-medium">{student.name}</p>
                                                    <div className="flex items-center">
                                                        <span className="text-sm font-medium">{student.rating}</span>
                                                        <span
                                                            className={`ml-1 text-xs ${student.ratingChange >= 0 ? 'text-green-500' : 'text-red-500'}`}
                                                        >
                                                            {student.ratingChange >= 0 ? `+${student.ratingChange}` : student.ratingChange}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-muted-foreground">Last: {student.lastClass}</span>
                                                    <span className="text-muted-foreground flex items-center">
                                                        <Clock className="mr-1 h-3 w-3" />
                                                        {student.nextClass}
                                                    </span>
                                                </div>
                                                <Progress value={student.progress} className="mt-2 h-2" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <p className="text-muted-foreground text-xs">Showing 4 of {chessStats.totalStudents} students</p>
                            </CardFooter>
                        </Card>

                        {/* Student Profiles */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Student Profiles</CardTitle>
                                <CardDescription>View and manage student information</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="active">
                                    <TabsList className="mb-4">
                                        <TabsTrigger value="active">Active</TabsTrigger>
                                        <TabsTrigger value="recent">Recent</TabsTrigger>
                                        <TabsTrigger value="all">All Profiles</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="active" className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {studentProgress.slice(0, 4).map((student) => (
                                                <div key={student.id} className="flex items-center space-x-4 rounded-md border p-4">
                                                    <Avatar>
                                                        <AvatarImage src={student.avatar} />
                                                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 space-y-1">
                                                        <p className="text-sm leading-none font-medium">{student.name}</p>
                                                        <div className="text-muted-foreground flex items-center text-xs">
                                                            <Target className="mr-1 h-3 w-3" />
                                                            <span>Rating: {student.rating}</span>
                                                        </div>
                                                    </div>
                                                    <Button variant="ghost" size="icon">
                                                        <ChevronRight className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                        <Button variant="outline" className="w-full">
                                            View All Profiles
                                        </Button>
                                    </TabsContent>
                                    <TabsContent value="recent">
                                        <div className="flex items-center justify-center py-8">
                                            <p className="text-muted-foreground">No recent changes to student profiles</p>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="all">
                                        <div className="flex items-center justify-center py-8">
                                            <Button>Browse Student Directory</Button>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - 3/7 width */}
                    <div className="space-y-4 md:col-span-3">
                        {/* Upcoming Tournaments */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Upcoming Tournaments</CardTitle>
                                <CardDescription>Events in the next 30 days</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {upcomingTournaments.map((tournament) => (
                                        <div key={tournament.id} className="rounded-lg border p-3">
                                            <div className="flex items-start justify-between">
                                                <h4 className="text-sm font-medium">{tournament.title}</h4>
                                                <Badge variant={tournament.registrationOpen ? 'default' : 'outline'}>
                                                    {tournament.registrationOpen ? 'Registration Open' : 'Coming Soon'}
                                                </Badge>
                                            </div>
                                            <div className="mt-2 space-y-1">
                                                <div className="text-muted-foreground flex items-center text-xs">
                                                    <Calendar className="mr-1 h-3 w-3" />
                                                    {tournament.date}
                                                </div>
                                                <div className="text-muted-foreground flex items-center text-xs">
                                                    <MapPin className="mr-1 h-3 w-3" />
                                                    {tournament.location}
                                                </div>
                                                <div className="text-muted-foreground flex items-center text-xs">
                                                    <BookOpen className="mr-1 h-3 w-3" />
                                                    {tournament.type} Format
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-2">
                                                <Button size="sm" variant="outline">
                                                    Details
                                                </Button>
                                                {tournament.registrationOpen && <Button size="sm">Register</Button>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    View Tournament Calendar
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Chess Stats */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Chess Statistics</CardTitle>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CardDescription>Academy performance overview</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-muted-foreground text-xs">Active Classes</p>
                                        <p className="text-2xl font-bold">{chessStats.activeClasses}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-muted-foreground text-xs">Students in Tournaments</p>
                                        <p className="text-2xl font-bold">{chessStats.studentsInTournaments}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-muted-foreground text-xs">Total Graduates</p>
                                        <p className="text-2xl font-bold">{chessStats.totalGraduates}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-muted-foreground text-xs">Growth Rate</p>
                                        <p className="text-2xl font-bold text-green-600">+{chessStats.growthRate}%</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h4 className="mb-3 text-sm font-medium">Student Rating Distribution</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-xs">
                                            <span>Beginner (800-1000)</span>
                                            <span>42%</span>
                                        </div>
                                        <Progress value={42} className="h-2" />

                                        <div className="flex items-center justify-between text-xs">
                                            <span>Intermediate (1000-1400)</span>
                                            <span>35%</span>
                                        </div>
                                        <Progress value={35} className="h-2" />

                                        <div className="flex items-center justify-between text-xs">
                                            <span>Advanced (1400-1800)</span>
                                            <span>18%</span>
                                        </div>
                                        <Progress value={18} className="h-2" />

                                        <div className="flex items-center justify-between text-xs">
                                            <span>Expert (1800+)</span>
                                            <span>5%</span>
                                        </div>
                                        <Progress value={5} className="h-2" />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full" size="sm">
                                    <BarChart3 className="mr-2 h-4 w-4" />
                                    View Detailed Analytics
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
