import Form from "./Form";
import classes from "./Main.module.scss";
import Display from "./Display";
import Attribution from "./Attribution";

const Main = () => {
  return (
    <main className={classes.main}>
      <section>
        <Form />
        <Display />
        <Attribution />
      </section>
    </main>
  );
};

export default Main;
