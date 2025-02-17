import { useMemo } from "react";

type Props = {
  list: Array<string>;
  filter: string;
};

const NameList = ({ list, filter }: Props) => {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.includes(filter));
  }, [list, filter]);

  return (
    <div>
      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
