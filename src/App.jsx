import './App.css'
import {Todo} from "./components/Todo.jsx";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";

let theme = createTheme({
    palette:{
        primary:{
            main:'#FE6666',
        },
        secondary:{
            main: '#F7F1F1',
        },
    },
});
theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
        <div>
            <Todo />
        </div>
    </ThemeProvider>
  )
}
export default App
