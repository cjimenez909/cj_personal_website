import React from 'react'

export default function Experience() {
    return (
        <div className="flex flex-col">
            <h1 className="text-[#17326E]"><b>experience</b></h1>
            <div className="flex flex-row">
                <img src="/bootcamp_small.jpg"></img>
                <div className="flex flex-col">
                    <h2>Intro to High-Performance Computing (HPC) Bootcamp, St. Charles, IL</h2>
                    <h3>Participant</h3>
                    <h3>August 2025</h3>
                    <ul>
                        <li>Gained hands-on experience with distributed computing and large-scale systems during a weeklong bootcamp</li>
                        <li>Designed, trained, and benchmarked deep learning models using PyTorch and Jupyter Notebooks on multi-GPU nodes to perform short-term load forecasting, predicting electricity demand for 30 households</li>
                        <li>Processed and visualized time series data in Python using Matplotlib to analyze energy consumption trends</li>
                        <li>Collaborated in a small team to develop and deliver a technical presentation summarizing model performance, trade-offs between architectures, and forecasting accuracy</li>
                    </ul>
                </div>
            </div> 
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <img src="/argonne_pres_small.jpg"></img>
                    <a href="https://github.com/cjimenez909/ChicagoTechCircle_2024">View GitHub Repo</a>
                </div>
                <div className="flex flex-col">
                    <h2>Chicago Tech Circle, Chicago, IL</h2>
                    <h3>Tech Consultant / Research Intern</h3>
                    <h3>May 2024 - August 2024</h3>
                    <ul>
                        <li>Collaborated with a cross-disciplinary team at Argonne National Laboratory to automate manufacturing processes for diamond membranes used in color center qubits</li>
                        <li>Streamlined laboratory workflows by developing Python scripts to systematically control microscope positioning, reducing manual equipment handling by 96% and enhancing operational efficiency</li>
                        <li>Designed and tested computer vision algorithms with OpenCV to detect membranes and extract geometric features for automated analysis</li>
                        <li>Co-authored a technical report detailing methods, results, and recommendations for future work</li>
                    </ul>
                </div>
            </div>             
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <img src="/agu_small.jpg"></img>
                    <a href="https://orcid.org/0000-0001-5759-9008 ">View ORCID</a>
                </div>
                <div className="flex flex-col">
                    <h2>Adler Planetarium, Chicago, IL</h2>
                    <h3>Undergraduate Research Intern</h3>
                    <h3>September 2022 - May 2023</h3>
                    <ul>
                        <li>Processed and stitched aerial imagery from high-altitude balloon flights to generate geospatial light pollution maps</li>
                        <li>Analyzed image brightness and color data with QGIS to quantify light pollution across different property zones</li>
                        <li>Co-authored an article published in the Journal of Quantitative Spectroscopy and Radiative Transfer</li>
                        <li>Presented a poster at the 2022 American Geophysical Union (AGU) Fall Meeting</li>
                    </ul>
                </div>
            </div>  
        </div>
    );
}