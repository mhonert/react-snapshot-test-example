# React Snapshot testing example

This example project shows how to test React components using snapshot tests with [Jest](https://jestjs.io/) and
[Enzyme](https://github.com/airbnb/enzyme).

Snapshot tests are a form of unit tests, which test React components by rendering them
and comparing the rendered representation (i.e. snapshot) of the component with a previous 
snapshot.

The very first time a snapshot test is run, there will be no existing snapshot file available
to compare against. Instead, the result of the first test run will be used to initialize
the snapshot file.
This means, that this initial file needs to be validated manually.
The generated snapshot file will be kept and committed to the code repository.

When the tests are then run again, the rendered representation of the component
will be compared to the previously stored snapshot to detect any deviations that might
have been introduced by some code changes (e.g. after a refactoring).


## Setup

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and the following additional devDependencies were added:
* [enzyme](https://www.npmjs.com/package/enzyme)
* [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16)
* [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json)

In order to register the enzyme-to-json serializer with the Jest test runner,
the [package.json](package.json) file was extended with a jest-configuration key:

```json
{ 
  "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
}
```

Then in the root of the src folder a file named [setupTests.js](src/setupTests.js) needs to be created with the following content:
```ecmascript 6
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

This will tell Enzyme to use the adapter for React 16 to render the components.


## Example

The example project implements a simple [form component](src/UserDataForm.js), which has two modes of operation.
It can be either in read-only or in editable mode.
The mode is controlled by the isReadOnly prop of the component.

So in the [snapshot test](src/UserDataForm.test.js) there are two test cases, which render the component first with the 
isReadOnly prop set to true and then set to false.

The repository already contains an initialized [snapshot file](src/__snapshots__/UserDataForm.test.js.snap), so both tests should pass,
if you run them (npm test).

If you introduce a bug, which causes the component to render differently for the same set of
input props, then the test case will fail with a report of the detected differences.


## Conclusion
Snapshot tests provide a very low maintenance way to test certain aspects of your React application.
They are quick to create and do not require a lot of effort to update, if the implementation of
a component changes over time.

For some components the snapshot tests might already be all you need.
However depending upon your quality requirements and the complexity of your application,
you usually would want to combine them with other unit tests (e.g. for your reducers if you are working with a Redux-based application architecture).

In this combination they can provide a solid foundation for the [Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html)
and reduce the need for a high amount of brittle UI-driven end-to-end tests (e.g. using Selenium).
