import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { Config } from '../types/config.type'
import { supportRoutes } from '../routes'
import { config } from '../lib/config'

export type SupportProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Support: NextPage<SupportProps> = props => {
  const { urls } = props
  const {
    typeformUrl,
    supportUrls: { discordNemetonUrl, discordTicketUrl },
    docsUrls: { nodesUrl }
  } = urls

  const [{ path: faqPath }] = supportRoutes

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container" id="support-page">
          <h1>Support page</h1>
          <p>For any help please consult these links for answers:</p>
          <ul>
            <li>
              <a href={nodesUrl} rel="noreferrer" target="_blank">
                Nodes & Validators Guide
              </a>
            </li>
            <br />
            <li>
              <Link href={faqPath}>FAQ</Link>
            </li>
            <br />
            <li>
              OKP4 Discord server:
              <ul>
                <li>
                  <a href={discordNemetonUrl} rel="noreferrer" target="_blank">
                    Nemeton program
                  </a>
                </li>
                <li>
                  <a href={discordTicketUrl} rel="noreferrer" target="_blank">
                    Request ticket
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SupportProps> = async () => ({
  props: {
    ...config
  }
})

export default Support
