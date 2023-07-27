import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "../components/Navbar/Navbar";
import PropTypes from "prop-types";
import "./MainLayoutStyling.css";
import CustomFooter from "../components/Footer/CustomFooter";

const MainLayout = ({ children, setIsEnglish, isEnglish }) => {
  const contentStyle = {
    color: "black",
    backgroundColor: "#fff",
  };

  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
    height: "200px",
    padding: 0,
  };
  return (
    <Layout>
      <Header className={"header"}>
        <Navbar setIsEnglish={setIsEnglish} isEnglish={isEnglish}/>
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  setIsEnglish: PropTypes.bool.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};

export default MainLayout;
