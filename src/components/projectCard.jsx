import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowRestore } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  const { cardImage, cardDescription, cardFooter } = props;
  return (
    <div className="card-panel">
      <img className="descriptive-image" src={cardImage} />
      <div className="descriptive-summary">
        <h4>{cardDescription.title}</h4>
        <p>{cardDescription.content}</p>
      </div>
      <div className="project-card-footer">
        <a className="card-footer-link border-button-left" href={cardFooter[0]}>
          <FontAwesomeIcon icon={faCode} />
        </a>

        <a
          className="card-footer-link border-button-right"
          href={cardFooter[1]}
        >
          <FontAwesomeIcon icon={faWindowRestore} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
