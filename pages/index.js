import Layout from "../components/layout";
import useWindowSize from "../hooks/useWindowSize";
import CONST from'../constants/index';
import Sidebar from "../components/col-sidebar";
import Main from "../components/col-main";
import Extra from "../components/col-extra";


export default function Home() {
    const size = useWindowSize();

    return (
        <Layout>
            <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
            <Main>{size.width}</Main>
            {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
        </Layout>
    )
}
