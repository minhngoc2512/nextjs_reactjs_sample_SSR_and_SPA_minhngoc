import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta charSet={'utf-8'}/>
                <title>Next Demo</title>
                <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                <link rel='stylesheet' type='text/css' href='/static/index.css' />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}