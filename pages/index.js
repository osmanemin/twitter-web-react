import Layout from "../components/layout/layout";
import Tweet from "../components/tweet/tweet";


export default function Home() {

    return (
        <Layout>
            <Tweet name="Osman Emin USTA"
                   slug="oeu"
                   text={`
                   tweet atalım
                   
                                arada boşluk olsun
                   
                   
                   
                   ehe`}
                   datetime={new Date()}>
                </Tweet>
        </Layout>
    )
}
