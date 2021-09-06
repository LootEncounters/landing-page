// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Layout({
    children,
}: {
    children: ReactElement | ReactElement[];
}) {
    return (
        <div>
            {/* Meta */}
            <Head />
            {/* Top header */}
            <Header />

            {/* Page content */}
            <div className={styles.content}>{children}</div>
            {/* Bottom footer */}
            <Footer />
        </div>
    );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
    return (
        <HTMLHead>
            {/* Primary Meta Tags */}
            <title>Loot Encounters | Coming Soon</title>
            <meta name="title" content="Encounters" />
            <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="manifest" href="/images/favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />

            <meta
                name="description"
                content="Encounters is a project based on loot project and its derivatives, namely characters."
            />

            {/* OG + Faceook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://www.lootencounters.com/" />
            <meta property="og:title" content="Encounters" />
            <meta
                property="og:description"
                content="Encounters is a project based on loot project and its derivatives, namely characters."
            />
            <meta property="og:image" content="http://lootencounters.com/meta.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://www.lootencounters.com/" />
            <meta property="twitter:title" content="Encounters" />
            <meta
                property="twitter:description"
                content="Encounters is a project based on loot project and its derivatives, namely characters."
            />
            <meta property="twitter:image" content="http://www.lootencounters.com/meta.png" />

            {/* Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </HTMLHead>
    );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header() {
    // Collect current path for active links
    const { pathname } = useRouter();
    // All links
    const links = [
        { name: "FAQ TBD", path: "/" },
    ];

    return (
        <div className={styles.header}>
            {/* Main logo */}
            <div className={styles.header__logo}>
                <Link href="/">
                    <a>Encounters</a>
                </Link>
            </div>

            {/* Navigation */}
            <div className={styles.header__links}>
                <ul>
                    {links.map(({ name, path }, i) => {
                        // For each link, render link
                        return (
                            <li key={i}>
                                <Link href={path}>
                                    <a
                                        className={
                                            pathname === path
                                                ? // Active class if pathname matches current path
                                                styles.header__links_active
                                                : undefined
                                        }
                                    >
                                        {name}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            {/* Footer content to go here */}
        </div>
    );
}