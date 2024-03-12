export const metadata = {
    title: 'Ivan the Dev - I know what we are gonna do today',
    description: 'I know what we are gonna do today',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <head>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-X3LLCSPT9G"></script>
                <script>

                    window.dataLayer = window.dataLayer || [];
                    function gtag() {dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-X3LLCSPT9G');

                </script>
                <link rel="favicon" type="image/svg+xml" href="./src/assets/images/ivan-the-dev-logo-svg.svg" />

                {/* DEVICONS */}
                <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
                {/* DEVICONS */}
            </head>

            <body>
                <div id="root">{children}</div>
            </body>

        </html>
    )
}