import StiriliziranaKartica from "./StiriliziranaKartica";

const ListaKartica = ({ kartica }) => {
  if (!kartica || kartica.length === 0) {
    return <p>NEma sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <StiriliziranaKartica item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListaKartica;
