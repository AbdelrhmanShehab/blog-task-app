// src/app/[locale]/components/LanguageSwitcher.tsx
'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (locale: string) => {
        // Remove current locale from pathname if present
        const newPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
        router.push(`/${locale}${newPath}`);
    };

    return (
        <div className="flex gap-2">
            <button onClick={() => switchLanguage('en')}>EN</button>
            <button onClick={() => switchLanguage('ar')}>AR</button>
        </div>
    );
}