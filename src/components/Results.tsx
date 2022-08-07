type ResultsProps = {
  photo: any;
};

const Results = ({ photo }: ResultsProps) => {
  return (
    <div className="photo-list">
      {photo.map((singleData: any) => (
        <a href="{singleData.links.html}">
          <img src={singleData.urls.regular} alt={singleData.alt_description} />
        </a>
      ))}
    </div>
  );
};

export default Results;
