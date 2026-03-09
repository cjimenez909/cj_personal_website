import React from 'react'

export default function Contact() {
    return (
        <div className="flex flex-col"> 
            <h1 className="text-[#17326E]"><b>contact</b></h1>
            <div className="flex flex-row">
                <a href="mailto:cjim99330@gmail.com">
                    <img src="/email.png" alt="Email" width={100} height={100}></img>
                </a>
                <a href="mailto:cjim99330@gmail.com">cjim99330@gmail.com</a>
            </div>
            <div className="flex flex-row">
                <a href="https://www.linkedin.com/in/jimenez-claudia/">
                    <img src="/linkedin.png" alt="LinkedIn" width={100} height={100}></img>
                </a>
                <a href="https://www.linkedin.com/in/jimenez-claudia/">https://www.linkedin.com/in/jimenez-claudia/</a>
            </div>
            <div className="flex flex-row">
                <a href="https://github.com/cjimenez909">
                    <img src="/github.png" alt="GitHub" width={100} height={100}></img>
                </a>
                <a href="https://github.com/cjimenez909">https://github.com/cjimenez909</a>
            </div>
        </div>
    );
}