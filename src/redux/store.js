import { createStore } from "redux";
import rootReducer from "./reducers";

// redux devtool을 크롬에서 사용가능하게 하는 코드
// window.devToolsExtension ? window.devToolsExtension() : undefined를 추가해줘야 함
export default createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);
