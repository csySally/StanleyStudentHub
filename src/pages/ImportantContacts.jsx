import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import backgroundPic from "../assets/images/contacts-background.jpeg";

function ImportantContacts() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="Important Contacts" />
      <h1>Important Contacts</h1>
      <Footer />
    </div>
  );
}

export default ImportantContacts;
