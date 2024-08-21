import AuctionPage from "./renderer/pages/AuctionPage";
import MainPage from "./renderer/pages/MainPage";
import AppRouter from "./routes/AppRouter";
import "./styles/tailwind.css";
import "./styles/swiper.css";
import "./styles/mine_css.css";
import "./styles/custom.css";
function App() {
    return (
        <>
            <AppRouter />
        </>
    );
}

export default App;
