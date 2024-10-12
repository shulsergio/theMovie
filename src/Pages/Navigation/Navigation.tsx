import css from "./Navigation.module.css";
import Container from "../../components/Container/Container";

const Navigation = () => {
  return (
    <>
      <Container>
        <header className={css.header}>
          <div className={css.box}></div>
        </header>
      </Container>
    </>
  );
};

export default Navigation;
