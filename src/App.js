import React from 'react';
import UserDataForm from "./UserDataForm";

const App = () => {
  return (
    <main>
      <UserDataForm userData={{name: "Me", email: "me@localhost"}}
                    isReadOnly={false}
                    onSubmit={handleUserDataChange} />
    </main>
  );
};

const handleUserDataChange = ({name, email}) => {
 alert(`Hello ${name}!\nYour email address is <${email}>`);
};

export default App;
