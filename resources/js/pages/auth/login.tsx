import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface LoginForm {
    [key: string]: any; // Fix for type constraint
    email: string;
    password: string;
    remember: boolean;
    userType: string;
}

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
        userType: 'parent',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D1B44] to-[#0A1535] p-4">
            {/* Chess piece background pattern */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5">
                {Array.from({ length: 15 }).map((_, index) => (
                    <div
                        key={index}
                        className="absolute"
                        style={{
                            top: `${Math.random() * 90}%`, // Prevent overflowing
                            left: `${Math.random() * 90}%`,
                            fontSize: `${Math.random() * 5 + 2}rem`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    >
                        {['♔', '♕', '♖', '♗', '♘', '♙'][Math.floor(Math.random() * 6)]}
                    </div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-md">
                <Head title="Log in" />

                {/* Logo */}
                <div className="mb-8 flex flex-col items-center">
                    <img src="/asset/image/chess-logo.png" alt="Double Bishop Chess Academy Logo" className="mb-2 h-24 w-24 object-contain" />
                    <h1 className="text-2xl font-bold text-white">Double Bishop</h1>
                    <span className="text-sm text-yellow-400">Chess Academy </span>
                </div>

                {/* Login Card */}
                <div className="rounded-xl bg-[#112046] p-8 shadow-2xl">
                    <h2 className="mb-6 text-center text-xl font-semibold text-white">Log in to your account</h2>

                    {status && (
                        <div className="mb-6 rounded-md border border-green-500/50 bg-green-500/20 p-3 text-center text-sm font-medium text-green-400">
                            {status}
                        </div>
                    )}

                    <form className="flex flex-col gap-6" onSubmit={submit}>
                        <div className="grid gap-5">
                            {/* User Type Selection */}
                            <div className="grid gap-2">
                                <Label htmlFor="userType" className="text-white">
                                    I am a
                                </Label>
                                <RadioGroup
                                    defaultValue={data.userType}
                                    onValueChange={(value: string) => setData('userType', value)}
                                    className="flex space-x-2"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="parent" id="parent" className="border-yellow-400 text-yellow-400" />
                                        <Label htmlFor="parent" className="text-white">
                                            Parent
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="coach" id="coach" className="border-yellow-400 text-yellow-400" />
                                        <Label htmlFor="coach" className="text-white">
                                            Coach
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Email */}
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-white">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                    className="border-blue-800 bg-blue-900/30 text-white placeholder:text-gray-400"
                                />
                                <InputError message={errors.email} />
                            </div>

                            {/* Password */}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password" className="text-white">
                                        Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={route('password.request')}
                                            className="ml-auto text-sm text-yellow-400 hover:text-yellow-300"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                    className="border-blue-800 bg-blue-900/30 text-white placeholder:text-gray-400"
                                />
                                <InputError message={errors.password} />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    checked={data.remember}
                                    onCheckedChange={(checked) => setData('remember', checked as boolean)}
                                    className="border-blue-800 data-[state=checked]:border-yellow-500 data-[state=checked]:bg-yellow-500"
                                />
                                <Label htmlFor="remember" className="text-white">
                                    Remember me
                                </Label>
                            </div>

                            {/* Login Button */}
                            <Button
                                type="submit"
                                className="mt-4 w-full bg-yellow-500 text-[#0D1B44] hover:bg-yellow-400"
                                tabIndex={4}
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Log in
                            </Button>
                        </div>

                        {/* Register Link */}
                        <div className="text-center text-sm text-gray-300">
                            Don't have an account?{' '}
                            <TextLink href={route('register')} className="text-yellow-400 hover:text-yellow-300" tabIndex={5}>
                                Sign up
                            </TextLink>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Double Bishop Chess Academy. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
