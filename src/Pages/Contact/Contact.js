



const Contact = () => {
  

    return (
        <>
            <div className="">
                <div className="text-center">
                <h3 className="text-center text-2xl font-bold my-4 text-purple-400">Contact Us!!</h3>
                    <div className="bg-gray-300 py-4 mx-10 shadow-xl rounded">
                        <form>
                          
                            <ul>
                                <li>
                                    <input type="text" name="name" placeholder="Name" required></input>
                                </li>
                                <br />
                      
                                <li>
                                    <input type="email" name="email" placeholder="Email" required></input>
                                </li>

                                <br />
                      
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required></input>
                                </li>
                                <br />
                           
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                            
                                <li>
                                    <input type="submit" className='btn btn-outline btn-warning' />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                
            </div>
        
        </>
    );
}

export default Contact;

