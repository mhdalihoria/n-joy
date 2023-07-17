import { ConfigProvider } from "antd";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./components/first-section/HeroSection";
import "./App.css";
import CardsSection from "./components/second-section/CardsSection";

function App() {
  return (
    <>
      <ConfigProvider direction="rtl">
        <MainLayout>
          <HeroSection />
          <CardsSection />
        </MainLayout>
      </ConfigProvider>
    </>
  );
}

export default App;
