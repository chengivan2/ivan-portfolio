import Script from "next/script";

export const metadata = {
  title: "Ivan the Dev - Your Personal Geek",
  description: "I know what we're gonna do today!",
  creator: "Ivan the Dev",
  publisher: "Ivan the Dev",
  openGraph: {
    title: "Ivan the Dev - Your Personal Geek",
    description: "I know what we're gonna do today!",
    url: "https://ivanthedev.pro",
    siteName: "Ivan the Dev's portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/doqbnfais/image/upload/v1712724943/Ivan%20the%20Dev%20assets/images/ivan-the-dev-logo-bg_aopgre.png",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*Google tag (gtag.js)*/}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LV8R00ZBTJ"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LV8R00ZBTJ');
            `,
          }}
        />
        {/* Google tag (gtag.js)  */}

        {/* DEVICONS */}

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        {/* DEVICONS */}

        {/* Mailchimp subscription integration code */}

        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!(function(c,h,i,m,p){
      m=c.createElement(h),p=c.getElementsByTagName(h)[0],
      m.async=1;m.src=i;p.parentNode.insertBefore(m,p)
    })(document,"script","https://chimpstatic.com/mcjs-connected/js/users/22c749094c84d8d5b92e488e6/d92b41a646e3550beb7f8a16f.js");`,
          }}
        />

        {/* Mailchimp subscription integration code */}
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
