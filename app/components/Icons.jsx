import React from 'react'

export default function Icons() {
    return (
        <div className="flex flex-row"> 
            <a href="mailto:cjim99330@gmail.com">
                <img src="/email.png" alt="Email" width={50} height={50}></img>
            </a>
            <a href="https://www.linkedin.com/in/jimenez-claudia/">
                <img src="/linkedin.png" alt="LinkedIn" width={50} height={50}></img>
            </a>
            <a href="https://github.com/cjimenez909">
                <img src="/github.png" alt="GitHub" width={50} height={50}></img>
            </a>
        </div>
    );
}