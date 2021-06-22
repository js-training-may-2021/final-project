import './Spinner.css';

export const Spinner = () => {
  return (
    <div className="overlay">
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};
