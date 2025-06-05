import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import backgroundPic from "../assets/images/contacts-background.jpeg";

function ImportantContacts() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="Important Contacts" />
      <h1>Important Contacts</h1>
    </div>
  );
}

export default ImportantContacts;
