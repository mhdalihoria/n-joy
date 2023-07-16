import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider direction="rtl">
        <MainLayout>
          <div>something</div>
        </MainLayout>
      </ConfigProvider>
    </>
  );
}

export default App;
