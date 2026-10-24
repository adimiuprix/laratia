import type { PageProps } from '@inertiajs/core';
import { Head } from '@inertiajs/react';
import type { JSX } from 'react';

interface HomeProps extends PageProps {
    appName: string;
}

type TechItem = {
    readonly label: string;
};

const TECH_STACK: readonly TechItem[] = [
    { label: 'Laravel' },
    { label: 'Inertia.js' },
    { label: 'React' },
    { label: 'TypeScript' },
    { label: 'Tailwind CSS' },
    { label: 'Vite' },
] as const;

export default function Home({ appName }: HomeProps): JSX.Element {
    return (
        <>
            <Head title="Home" />

            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md w-full text-center px-6">

                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-semibold text-gray-900 mb-3">
                        {appName}
                    </h1>
                    <p className="text-gray-500 text-lg mb-8">
                        Laravel + Inertia.js + React + TypeScript sudah berjalan.
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex justify-center gap-3 flex-wrap mb-10">
                        {TECH_STACK.map(({ label }: TechItem): JSX.Element => (
                            <span
                                key={label}
                                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm"
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="https://inertiajs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                        Baca Dokumentasi Inertia
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
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
        </>
    );
}
