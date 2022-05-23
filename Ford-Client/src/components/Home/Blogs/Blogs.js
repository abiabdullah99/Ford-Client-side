import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Blogs = () => {
  const blogs = [
    {
      head: "How will you improve the performance of a React Application?",
      content:
        "Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import(). Windowing or list virtualization in React Lazy loading images in React.",
    },
    {
      head: "What are the different ways to manage a state in a React application?",
      content:
        "There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state, URL state",
    },
    {
      head: "How does prototypical inheritance work?",
      content:
        "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object",
    },
    {
      head: "Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts",
      content:
        "If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.",
    },
    {
      head: "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name",
      name: "he includes() method returns either a true or a false if a value exists in an array or not. The indexOf() method returns the first index of a value in an array. If there is no match, the method returns -1",
    },
    {
      head: "What is a unit test? Why should write unit tests?",
      content:
        'Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.',
    },
  ];
  return (
    <div>
      <Accordion className="md:w-7/12 w-11/12 mx-auto mt-20" allowZeroExpanded={true}>
        {blogs.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading className="text-xl text-primary font-bold  px-10 py-4">
              <AccordionItemButton>&#x2b; {item.head}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-lg text-secondary font-semibold px-14 py-4 text-justify">
              {item.content}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Blogs;
