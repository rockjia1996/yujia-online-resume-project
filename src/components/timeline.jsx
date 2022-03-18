const Timeline = (props) => {
  const { content: contentArray } = props;

  let placeContent = () => {
    const placedContent = contentArray.map((item, index) => {
      const placement = index % 2 ? "timeline-left" : "timeline-right";
      return (
        <div className={`container ${placement}`}>
          <div className="content">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        </div>
      );
    });
    return placedContent;
  };
  return <div className="timeline">{placeContent()}</div>;
};

export default Timeline;
