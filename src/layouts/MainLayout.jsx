import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "../components/Navbar/Navbar";
import PropTypes from "prop-types";
import "./MainLayoutStyling.css";
import CustomFooter from "../components/Footer/CustomFooter";

const MainLayout = ({ children }) => {
  const contentStyle = {
    textAlign: "center",
    minHeight: "55vh",
    lineHeight: "120px",
    color: "black",
    backgroundColor: "#fff",
  };

  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
    height: "200px",
    padding: 0
  };
  return (
    <Layout>
      <Header className={"header"}>
        <Navbar />
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
};

export default MainLayout;
