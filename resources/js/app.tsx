import './types/globals.d.ts';

import type { PageProps } from '@inertiajs/core';
import { createInertiaApp } from '@inertiajs/react';
import type { ResolvedComponent } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

// `noPropertyAccessFromIndexSignature` mengharuskan bracket notation untuk index signatures
const appName: string = import.meta.env['VITE_APP_NAME'];

void createInertiaApp<PageProps>({
    title: (title: string): string => `${title} - ${appName}`,

    /**
     * `resolvePageComponent` menghasilkan `Promise<{ default: ResolvedComponent }>`.
     * Cast ke `Promise<ResolvedComponent>` aman karena Inertia menangani modul `.default`
     * secara internal di runtime — ini adalah gap di type definitions library.
     */
    resolve: (name: string): Promise<ResolvedComponent> =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob<{ default: ResolvedComponent }>('./Pages/**/*.tsx'),
        ) as unknown as Promise<ResolvedComponent>,

    setup({ el, App, props }): void {
        if (el === null) {
            throw new Error(
                'Root element #app tidak ditemukan. Pastikan @inertia ada di layout blade.',
            );
        }
        createRoot(el).render(<App {...props} />);
    },
});
