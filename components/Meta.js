import Head from 'next/head'

const Meta = ({ children, title, description, url, image }) => {

    const pageTitle = title || "Chilitime Design";
    const img = image || "/assets/ChilitimeDesign-preview.png";

    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#13212a" />
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />

            <meta property="og:site_name" content="Chilitime Design" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={img} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:card" content="summary_large_image" />

            <title>{pageTitle}</title>

            { children }
        </Head>
    );
};

export default Meta;
