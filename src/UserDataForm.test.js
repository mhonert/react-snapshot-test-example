import React from 'react';
import {shallow} from 'enzyme';
import UserDataForm from "./UserDataForm";

it('Render UserDataForm in editable mode', () => {
  expect(renderUserDataForm(false)).toMatchSnapshot();
});

it('Render UserDataForm in read-only mode', () => {
  expect(renderUserDataForm(true)).toMatchSnapshot();
});

const renderUserDataForm = isReadOnly =>
  shallow(<UserDataForm isReadOnly={isReadOnly}
                        userData={{name: "Test name", email: "test@localhost"}} />);