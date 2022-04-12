import { InputSearch } from "../../components/InputSearch/InputSearch";

import "./home.scss";

export const Home: React.FC = () => {
  return (
    <>
      <main className="homeMain">
        <article className="infoArticle">
          <h2 className="infoTitle">Choose your ideal home!</h2>
          <p className="infoDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            accusamus doloribus veniam consectetur reiciendis, ratione illo
            eveniet ut inventore ducimus numquam atque blanditiis id
            necessitatibus aspernatur cupiditate est architecto ullam.
          </p>
        </article>
        <InputSearch />
      </main>
    </>
  );
};
