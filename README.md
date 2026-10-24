# Laratia

Aplikasi web berbasis **Laravel** + **Inertia.js** + **React** + **TypeScript**.

Inertia.js menjadi jembatan antara Laravel di sisi server dan React di sisi client — tanpa perlu membangun API terpisah. Laravel menangani routing dan data, React menangani tampilan.

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Backend | Laravel 13 |
| Frontend | React 19 + TypeScript |
| Bridge | Inertia.js |
| Styling | Tailwind CSS v4 |
| Build Tool | Vite |

---

## Cara Menjalankan

### Prasyarat

- PHP >= 8.5
- Composer
- Node.js + npm

### Instalasi

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm install
```

### Development

Jalankan dua terminal sekaligus:

```bash
# Terminal 1 — Laravel
php artisan serve

# Terminal 2 — Vite (HMR)
npm run dev
```

### Production

```bash
npm run build
php artisan config:cache
php artisan route:cache
```

> **Catatan:** Pastikan file `public/hot` tidak ada di production. File ini ditinggalkan Vite dev server dan menyebabkan halaman blank jika server dev tidak berjalan.

---

## Struktur Frontend

```
resources/js/
├── app.tsx          # Entry point Inertia + React
├── types/
│   └── globals.d.ts # Definisi tipe global (shared props, env)
└── Pages/
    └── Home.tsx     # Contoh halaman
```

Setiap file di `Pages/` otomatis di-resolve oleh Inertia. Untuk menambah halaman baru:

1. Buat file `resources/js/Pages/NamaHalaman.tsx`
2. Return dari route Laravel: `Inertia::render('NamaHalaman', ['prop' => $value])`

---

## Menambah Shared Props

Shared props adalah data yang tersedia di **semua** halaman (contoh: data user yang sedang login).

Edit `app/Http/Middleware/HandleInertiaRequests.php`:

```php
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        'auth' => [
            'user' => $request->user(),
        ],
    ];
}
```

Lalu daftarkan di `resources/js/types/globals.d.ts`:

```ts
export interface SharedProps {
    auth: {
        user: { id: number; name: string; email: string } | null;
    };
}
```

---

## Konfigurasi Virtual Host (Laragon)

Jika menggunakan virtual host HTTPS (misal `https://casbref.fun`), Vite dev server perlu dikonfigurasi agar tidak terjadi CORS error. Konfigurasi sudah tersedia di `vite.config.js` menggunakan sertifikat SSL Laragon.
