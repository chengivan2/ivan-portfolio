export const metadata = {
  title: "About Ivan the Dev - Your Personal Geek",
  description: "Hey. Start by reading about me on this page.",
  creator: "Ivan the Dev",
  publisher: "Ivan the Dev",
  openGraph: {
    title: "About Ivan the Dev - Your Personal Geek",
    description: "Hey. Start by reading about me on this page.",
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

export default function AboutLayout({ children }) {
  return (
    <html lang="en">    
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
