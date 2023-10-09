import React from "react";
import { PageTitle, LayoutAccount } from "../components/DashboardLayout";
import { BasicInfo, EmailUpdate, PasswordUpdate } from "../components/Profile";

const Profile = () => {
  

  return (
    <LayoutAccount>
      <PageTitle title="Profile" />
      
      <BasicInfo />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
      <EmailUpdate/>

      <PasswordUpdate/>
        
      </div>

    </LayoutAccount>
  );
};

export default Profile;
