import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("studyTasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: "AWS S3 버킷 만들기", done: false },
      { id: 2, text: "GitHub Actions 설정하기", done: false },
      { id: 3, text: "README.md 작성하기", done: false },
    ];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.done).length;
  const totalCount = tasks.length;
  const progress =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <main className="container">
      <section className="card">
        <p className="badge">AWS S3 + GitHub Actions CI/CD</p>
        <h1>공부 체크리스트</h1>
        <p className="description">
          오늘 해야 할 공부를 추가하고 완료 여부를 체크하는 간단한 React 웹앱입니다.
        </p>

        <div className="progress-box">
          <div className="progress-text">
            <span>진행률</span>
            <strong>{progress}%</strong>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>
            완료 {completedCount}개 / 전체 {totalCount}개
          </p>
        </div>

        <div className="input-row">
          <input
            type="text"
            placeholder="예: GitHub Actions 시연 영상 촬영하기"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") addTask();
            }}
          />
          <button onClick={addTask}>추가</button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? "done" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
              </label>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;