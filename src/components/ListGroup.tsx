import { useState } from "react";

interface Props {
  sehirler: string[];
  baslik: string;
  onSelectItem: (sehir: string) => void;
}

function ListGroup({ sehirler, baslik, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/*Fragment kısayolu*/}
      <h1>{baslik}</h1>
      {
        sehirler.length === 0 && (
          <p>Şehir Bulunamadı!</p>
        ) /*JavaScript'te true && 'Mosh' => 'Mosh' döndürür. false && 'Mosh' => false döndürür*/
      }
      <ul className="list-group">
        {sehirler.map((sehir, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={sehir}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(sehir);
            }}
          >
            {sehir}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
