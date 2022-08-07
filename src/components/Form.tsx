type FormProps = {
  getPhotoData: (e: any) => void;
  setWord: any;
};

const Form = ({ setWord, getPhotoData }: FormProps) => {
  return (
    <form>
      <input
        type="text"
        name="keyword"
        placeholder="e.g. cat"
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="submit" onClick={getPhotoData}>
        Search
      </button>
    </form>
  );
};

export default Form;
