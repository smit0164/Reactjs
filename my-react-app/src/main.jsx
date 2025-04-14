import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// 👇 Log the JSX object for <StrictMode><App /></StrictMode>
// const jsxElement = (
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// The JSX const jsxElement = (<StrictMode><App /></StrictMode>); is transformed into:
// javascript
// const jsxElement = React.createElement(StrictMode, null, React.createElement(App, null));
// This creates a React element, a plain JavaScript object (not yet the virtual DOM). It looks like:
// {
//   $$typeof: Symbol(react.element),
//   type: StrictMode,
//   props: {
//     children: {
//       $$typeof: Symbol(react.element),
//       type: App,
//       props: {},
//       key: null,
//       ref: null
//     }
//   },
//   key: null,
//   ref: null
// }
createRoot(document.getElementById('root')).render(  <StrictMode>
  <App />
</StrictMode>);
