import MainSlideComponent from "../components/Main/MainSlideComponent"
import MainContentComponent from "../components/Main/MainContentComponent"
const MainContainer = () => {
  return (
    <>
      <main className="relative flex-grow border-b-2" style={{ minHeight: "0px", height: "auto" }}>
        <MainSlideComponent />
        <MainContentComponent/>
      </main>
    </>
  );
};

export default MainContainer;
