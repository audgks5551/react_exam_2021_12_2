import { useState } from "react";

const App = () => {
  const [text, setText] = useState("안녕하세요."); // 수정하기 전의 텍스트 or 수정모드 상태에서 수정완료를 눌렀을 때 저장되는 텍스트
  const [editMode, setEditMode] = useState(false); // 수정모드변경은 true, 수정모드해제는 false
  const [savedText, setSavedText] = useState(text); // 수정모드변경버튼을 누르는 순간 저장되는 텍스트

  let content = (
    <div>
      {text}
      <button
        onClick={() => {
          setEditMode(true); // 수정모드변경 버튼을 눌렀을 때 editMode변수 안에 true가 담긴다. 그러면 content변수 안에 있는 내용이 바뀜
          setSavedText(text); // 수정취소를 할 경우 원래 상태로 다시 돌아와야하기 때문에 클릭하는 순간에 수정 전의 텍스트를 저장
        }}
      >
        수정모드변경
      </button>
    </div>
  );

  if (editMode) {
    content = (
      <div className="App">
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setText(value); // 텍스트가 계속 반영이 된다.
          }}
          value={text}
        />
        <button
          onClick={() => {
            setEditMode(false); // 수정완료가 되었을 때 다시 수정모드변경버튼으로 돌아가야하기 때문에 EditMode변수에 false 저장
            setText(text); // 수정이 완료가 되었으므로 적힌 텍스트를 저장
          }}
        >
          수정완료
        </button>
        <button
          onClick={() => {
            setText(savedText); // 수정취소를 누르게 되면 이전의 텍스트를 가져와야 하므로 savedText변수에 있는 값을 text에 저장
            setEditMode(false); // 수정취소를 하면 다시 수정모드변경 버튼으로 돌아가야 하기 때문에 editMode변수에 false 저장
          }}
        >
          수정취소
        </button>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default App;
