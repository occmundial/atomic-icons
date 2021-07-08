/* eslint-disable @next/next/no-sync-scripts */
import Document, {
  Head, Main, NextScript, Html, DocumentContext
} from 'next/document'
import { SheetsRegistry, JssProvider } from 'react-jss'
import { patchSharing } from "@module-federation/nextjs-mf";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <JssProvider registry={registry}>
            <App {...props} />
          </JssProvider>
        ),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      )
    }
  }

  render() {
    return (
      <Html lang="en">
        {patchSharing()}
        {/* <script src="http://localhost:3001/_next/static/chunks/webpack.js" />
        <script src="http://localhost:3001/_next/static/runtime/remoteEntry.js" /> */}
        <Head>
          <meta charSet="utf-8" />
          {this.props.styles}
          <link rel="icon" type="image/x-icon" href="https://cdn-h4.occ.com.mx/images/common/favicon.png" />
          <link rel="stylesheet" href="https://cdn-h4.occ.com.mx/fonts/stylesheet.css" />
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