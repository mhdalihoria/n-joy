import { ConfigProvider } from "antd";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./components/first-section/HeroSection";
import CardsSection from "./components/second-section/CardsSection";
import CarouselSection from "./components/third-section/CarouselSection";
import DownloadAppSection from "./components/fourth-section/DownloadAppSection";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";

function App() {
  const [isEnglish, setIsEnglish] = useState(true)
  return (
    <>
      <ConfigProvider direction={isEnglish ? "ltr" : "rtl"}>
        <MainLayout setIsEnglish={setIsEnglish} isEnglish={isEnglish}>
          <ParallaxProvider>
            <HeroSection isEnglish={isEnglish}/>
            <CardsSection />
            <CarouselSection />
            <DownloadAppSection isEnglish={isEnglish}/>
          </ParallaxProvider>
        </MainLayout>
      </ConfigProvider>
    </>
  );
}

export default App;
