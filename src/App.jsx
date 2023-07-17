import { ConfigProvider } from "antd";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./components/first-section/HeroSection";
import CardsSection from "./components/second-section/CardsSection";
import CarouselSection from "./components/third-section/CarouselSection";
import "./App.css";

function App() {
  return (
    <>
      <ConfigProvider direction="rtl">
        <MainLayout>
          <HeroSection />
          <CardsSection />
          <CarouselSection />
        </MainLayout>
      </ConfigProvider>
    </>
  );
}

export default App;
