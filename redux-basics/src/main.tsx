import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { App } from "./App"
import { store } from "./app/store"
import "./index.css"

const container = document.getElementById("root")

// 2. ACTION - ПРЕДУСМАТРИВАЕМ ВСЕ ВОЗМОЖНЫЕ ДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ, ЧТО ОН МОЖЕТ СДЕЛАТЬ

// A
const addToCart = () => {
  return {
    type: "ADD_TO_CART"
  }
}

// B
const removeItem = () => {
  return {
    type: "REMOVE_ITEM"
  }
}

// C
const changeNumber = () => {
  return {
    type: "CHANGE_NUMBER"
  }
}

// 3. REDUCER - ЩПИСАНИЕ КАК НАШИ НАМЕРЕНИЯ СОВЕРШИТЬ ДЕЙСТВИЯ ПОМЕНЯЮТ СОСТОЯНИЕ

const cart = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return state + 1;

    case 'REMOVE_ITEM':
      return state - 1;
  }
}

// DISPATCH - 



if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
