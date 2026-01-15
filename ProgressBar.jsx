const { useState } = React;
const progressRoot = ReactDOM.createRoot(document.getElementById("progressroot"));

function ProgressBar() {
  const [progress, setProgress] = useState(10);

  const AddProgress = () => {
    if (progress > 90) {
      setProgress(100);
    } else {
      setProgress((p) => p + 10);
    }
  };

  const ReduceProgress = () => {
    if (progress < 10) {
      setProgress(0);
    } else {
      setProgress((p) => p - 10);
    }
  };

  return (
    <div>
      <h1>Progress Bar</h1>
      <div
        style={{
          width: "500px",
          height: "40px",
          backgroundColor: "#bebebe",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div
          key={progress}
//by adding key when key changes rreact will remove these childs and add after changes(recongliation)
          style={{
            width: `${progress}%`,
            height: "40px",
            backgroundColor: "blue",
            borderRadius: "10px",
          }}
        ></div>
        <p
          style={{
            position: "relative",
            top: -50,
            bottom: 0,
            left: 220,
            right: 0,
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {progress}%
        </p>
      </div>
      <div style={{ display: "flex", margin: "10px" }}>
        <button type="button" style={{ margin: "10px" }} onClick={ReduceProgress}>
          -10%
        </button>
        <button  style={{ margin: "10px" }} onClick={AddProgress}>
          +10%
        </button>
      </div>
    </div>
  );
}

progressRoot.render(<ProgressBar />);
