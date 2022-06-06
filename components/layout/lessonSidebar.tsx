interface Props {
  curriculum: string[];
}

const LessonSidebar = ({ curriculum }: Props) => {
  return (
    <div className="offcanvas offcanvas-start" id="lessonSidebar">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title">Lessons</h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
        {curriculum.map((chapter) => (
          <div
            key={chapter}
            className="ps-4 pe-4 mb-3 bg-secondary rounded text-white"
          >
            {chapter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonSidebar;
