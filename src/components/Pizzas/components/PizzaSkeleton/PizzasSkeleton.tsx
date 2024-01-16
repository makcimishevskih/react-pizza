import ContentLoader from 'react-content-loader';

const PizzasSkeleton = () => {
  return (
    <>
      <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* CIRCLE */}
        <circle cx="140" cy="130" r="125" />
        {/* CENTER */}
        <rect x="0" y="275" rx="8" ry="8" width="280" height="32" />
        <rect x="0" y="320" rx="8" ry="8" width="280" height="88" />
        {/* DOUBLE BOTTOM*/}
        <rect x="0" y="420" rx="8" ry="8" width="100" height="45" />
        <rect x="130" y="420" rx="8" ry="8" width="150" height="45" />
      </ContentLoader>
    </>
  );
};
export default PizzasSkeleton;
