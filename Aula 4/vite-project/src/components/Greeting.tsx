type Props = {
  data: {
    name: string;
  };
};

export const Greeting: React.FC<Props> = ({ data }) => {
  return <div style={style.title}>Hello {data.name}</div>;
};

const style = {
  title: {
    fontSize: "50px",
  },
};
