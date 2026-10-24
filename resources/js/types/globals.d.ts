import type { PageProps as InertiaPageProps } from '@inertiajs/core';

/**
 * Shared props yang selalu ada di setiap halaman (di-inject via HandleInertiaRequests::share).
 * Tambahkan properti baru di sini setiap kali menambah shared data di middleware.
 */
export interface SharedProps {
    // contoh: auth: { user: User | null };
    // contoh: flash: { success: string | null; error: string | null };
}

/**
 * Augment Inertia's PageProps sehingga semua halaman otomatis memiliki SharedProps.
 */
declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, SharedProps {}
}

/**
 * Tipe environment variables Vite — hanya yang sudah di-define di .env dengan prefix VITE_.
 * Augments the ImportMetaEnv provided by vite/client.
 */
interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
}
