# Technologies use in this project:
React 18.2.0v

Node 16.16.0v

Npm 8.15.0v

Jest 28.1.3v

# Getting Started with this project

## Quick Overview with React

```sh
npx create-react-app demo-test-fs
cd demo-test-fs
```
If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Jest document:
## Quick Overview with Jest.js

[Jest doc](https://jestjs.io/docs/getting-started) 

Install Jest using your favorite package manager:

```sh
npm install --save-dev jest
```
# Create and delete files
Create file `componente` and `test`.

It is recommended that for each component a test of this is created.

For example:

## component:
```
login.js
demo.js
```
## test:
```
login.test.js
demo.test.js
```
## Example in this project for FS:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
     ├──components
     │    └── demo.js
     ├──test
     │    └── demo.test.js
     │
     └── index.js
```
demo.js
```javascript
import React, { useState } from 'react'



const Form = ({name,email}) => {
    const [newName, setSetName] = useState(name);
    const [newEmail, setSetEmail] = useState(email);

    
  return (
    <>
      <form data-testid="form">
        <p>Name</p><br/>
        <input nombre={name} defaultValue= {newName}/><br/>
        <p>Email</p><br/>
        <input correo={email} defaultValue= {newEmail}/><br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form;
```
demo.test.js
```javascript
import Form from "../components/demo";
import {render,screen,fireEvent} from '@testing-library/react';
//import userEvent from "@testing-library/user-event"; OTRO EVENTO DE CLICKS

describe('Demo description', () => { 

     it('Should render test', () => { 
        render(<Form/>)
     })

     it('Should rest api free with props', async() => { 
        //https://gorest.co.in/public/v2/users API FREE consulte otro usuario si no esta disponible o si sale timeout
        const url = await  fetch('https://gorest.co.in/public/v2/users/3559');
        const data= await  url.json();
        let inserName =  data.name;
        let insertEmail = data.email;
       render(<Form name= {inserName}email= {insertEmail}/>)
       const buttonEl = screen.getByText(/Submit/i);   
        fireEvent.submit(buttonEl);
      })

      it('Should render unmount', () => { 
        const {unmount} = render(<Form />)
        unmount()
      })

      it("Should click event button name", () => {
       
        render(<Form />);
        const buttonEl = screen.getByText(/Submit/i);   
        fireEvent.submit(buttonEl);

       
      });

      it("Should search in the form name and email", () => {
      render(<Form />);
        expect(screen.getByText('Name'));  
        expect(screen.getByText('Email'));  

        
      });
}) 


```

## 🔴IMPORTANT🔴
For each component that needs to be tested you need to export the function.

Example:

login.js
```javascript
export const user = () => {..,
                            }
export const password = () => {..,
                                }
...
   ``` 
login.test.js
```javascript
import {user,password} from "../components/demo";
describe('Demo example', () => { 

    it('Should render user', () => { 
        render(<user/>)
     })
     it('Should render pass', () => { 
        render(<password/>)
     })
     ....
   ``` 
## Run test:
```sh
npm run test
```

![img](https://i.ibb.co/7j99cJm/Test.png)



