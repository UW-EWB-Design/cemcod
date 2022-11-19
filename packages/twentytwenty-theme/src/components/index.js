import { connect, Global, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import FontFaces from "./styles/font-faces";
import Header from "./header";
import Archive from "./archive";
import Loading from "./loading";
import Post from "./post";
import SkipLink from "./styles/skip-link";
import MetaTitle from "./page-meta-title";
import PageError from "./page-error";
import Home from "./home/home";
import Programs from "./programs/programs";
import Projects from "./projects/projects";
import OurWork from "./our-work/our-work";
import NewsAndUpdates from "./news-and-updates/news-and-updates";
import SuccessStories from "./success-stories/success-stories";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log("data", data);
  return (
    <>
      {/* Add global styles for the whole site, like body or a's or font-faces. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors)} />
      <FontFaces />

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>
        {/* Add the header of the site. */}
        <Header />
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main id="main">
          <Switch>
            <Loading when={data.isFetching} />
            <Home when={data.isHome}/> 
            <OurWork when={data.route === "/our-work/"} />
            <Programs when={data.route === "/programs/"} />
            <Projects when={data.route === "/projects/"} />
            <NewsAndUpdates when={data.route === "/news/"} />
            <SuccessStories when={data.route === "/stories/"} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
        <Footer />
      </div>

    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  display: block;
`;
