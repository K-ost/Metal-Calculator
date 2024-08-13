import { useResultStore } from "../store/resultStore";

type FooterProps = {
  children: React.ReactNode;
};

const Footer = (props: FooterProps): JSX.Element => {
  const { children } = props;
  const { results } = useResultStore();
  const weight = results.length && results[0].weight;

  return (
    <div className="appbox appbox-footer">
      <div className="appbox-total">
        <b>{weight ? weight : "---"}</b>, кг
      </div>
      {children}
    </div>
  );
};

export default Footer;
