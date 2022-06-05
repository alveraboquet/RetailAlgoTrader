interface Props {
  curriculum: string[];
}

const LessonSidebar = ({ curriculum }: Props) => {
  return (
    <div className="offcanvas offcanvas-start" id="lessonSidebar">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title">Heading</h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        {curriculum.map((chapter) => (
          <div
            key={chapter}
            className="ps-4 pe-4 mb-3 bg-secondary rounded text-white w-75 mx-auto"
          >
            {chapter}
          </div>
        ))}
        <button className="btn btn-secondary" type="button">
          A Button
        </button>
      </div>
    </div>
  );
};

export default LessonSidebar;
