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
