import BtnIcon from "../ui/BtnIcon";
import { useAppStore } from "../store/appStore";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { title } = props;
  const { theme, setAside } = useAppStore();

  return (
    <div className="app-header">
      <h1>{title}</h1>
      <BtnIcon
        areaLabel="Калькулятор металла"
        classname="calcMetalIcon"
        to="/"
        type="navlink"
      />
      <BtnIcon
        areaLabel="Калькулятор краски"
        classname="calcSprayIcon"
        to="/paint"
        type="navlink"
        dataTestId="calc-paint"
      />
      <BtnIcon
        areaLabel="Меню"
        classname={`menuIcon ${theme ? "active" : ""}`}
        handler={() => setAside()}
      />
    </div>
  );
};

export default Header;
