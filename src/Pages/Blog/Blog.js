import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>

            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'>What are the different ways to manage a state in a React application?</h1>
                <p className='px-4'>
                    There are four main types of state you need to properly manage in your React apps:
                    <h2 className='font-medium pl-8'>Local state</h2>
                    <h2 className='font-medium pl-8'>Global state</h2>
                    <h2 className='font-medium pl-8'>Server state</h2>
                    <h2 className='font-medium pl-8'>URL state</h2>

                    Let's discuss each of these in detail:
                    <p>
                        Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.

                    </p>
                    <p>
                        Global (UI) state – Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    </p>
                    <p>
                        Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                    </p>
                    <p>URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.</p>

                </p>
            </div>

            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'> How does prototypical inheritance work?</h1>
                <p className='px-4'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </div>
            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'>What is a unit test? Why should we write unit tests?</h1>
                <p className='px-4'>
                    Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.
                    <br />

                    They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                </p>
            </div>
            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'>React vs. Angular vs. Vue?</h1>
                <p className='px-4'>
                    There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.
                    <br />
                    React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
                    <br />
                    They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.
                    <br />
                    Each framework is component-based and allows the rapid creation of UI features.
                </p>
            </div>
        </div>
    );
};

export default Blog;
