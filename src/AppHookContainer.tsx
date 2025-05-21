import App from "./App";
import { AppRouter } from '../AppRouter'

function AppHookContainer(){
    return (
        <AppRouter>
            <App />
        </AppRouter>
    )
}

export default AppHookContainer;