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
            <Tweet name="Osman Emin USTA"
                   slug="oeu"
                   text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
A adipisci, debitis delectus eos eum excepturi fugiat inventore laboriosam mollitia
natus non officia, quis quisquam ratione repellat reprehenderit sapiente sunt veniam?`}
                   datetime={new Date()}>
            </Tweet>
        </Layout>
    )
}
