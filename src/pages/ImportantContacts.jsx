import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Footer from "../components/footer";
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
