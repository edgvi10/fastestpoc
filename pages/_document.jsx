import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const theme = process.env.NEXT_PUBLIC_THEME ?? "bootstrap.min.css";

        return (
            <Html>
                <Head>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Rubik:wght@400;600&display=swap" rel="stylesheet" />

                    <link href="/plugins/fontawesome/css/fontawesome.min.css" rel="stylesheet" />
                    <link href="/plugins/fontawesome/css/light.min.css" rel="stylesheet" />
                    <link href="/plugins/fontawesome/css/brands.min.css" rel="stylesheet" />

                    <link href={`/plugins/bootstrap/${theme}`} rel="stylesheet" />

                    <script href={`/plugins/bootstrap/bootstrap.bundle.min.js`}></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument