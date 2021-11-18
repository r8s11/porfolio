import React from "react";
import jobTemp from "./Jobs/jobTemp";

function App() {
  return (
    <div className="App">
      <br />
      <div>
        <h3>Summary</h3>
        <p>
          Experience worker providing IT support. A person with great customer
          service skills that can provide support over the phone or email.
          Someone who is always looking to learn new things and how to apply
          them to business goals.{" "}
        </p>
      </div>

      <div>
        <h3>Skills & Abilities</h3>
        <ul>
          <li>Microsoft Windows OS</li>
          <li>Microsoft Office Applications</li>
          <li>Mac OS</li>
          <li>Network Security knowledge</li>
          <li>Bilingual (English and Spanish)</li>
          <li>Superior Customer Service</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
      <div>
        <h3>Certifications</h3>
        <p><span role="img" aria-label="cert">📜</span>CompTIA Security+ CE Apr/2016 – Apr/2019</p>
      </div>
      <div>
        <h3>Training</h3>
        <ul>
          <li>Windows Server 2012 R2 </li>
          <li> Windows OS </li>
          <li>Network+ </li>
          <li>Security+ </li>
          <li>Linux</li>
        </ul>
      </div>
      {/* Job list */}
      <div className="jobExperience">
        <h3>Experience</h3>
        <br></br>

        <jobTemp />
        {/* MGH  */}
        <div>
          <div className="headerContent">
            <h4>
              Desktop Support Analyst
              <br />
              Massachusetts General Hospital
              <br />
              Boston, MA
              <br />
              May/2019 – Present
            </h4>
          </div>

          <div className="bodyContent">
            <div className="toolsList">
              <p class="title">Tools</p>
              <ul>
                <li>ServiceNow</li>
                <li>SmartDeploy</li>
                <li>Active Directory</li>
                <li>Angular</li>
                <li>VS code</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>SQL Server</li>
                <li>Microsoft IIS</li>
              </ul>
            </div>
            <div className="jobDescription">
              <p className="title"> Description </p>
              <ul>
                <li>
                  Collaborate and communicate effectively with colleagues, and
                  other hospital personnel, to facilitate day to day operations.
                </li>
                <li>Troubleshoot / repair hardware and software problems.</li>
                <li>
                  Install patches / upgrades to Desktop / Office based
                  applications.
                </li>
                <li>
                  Coordinates with System Administrators on mission critical
                  application issues.
                </li>
                <li>
                  Provide training and documentation instructions for hardware
                  and software operation for clinical systems.
                </li>
                <li>
                  Provide phone, e-mail, on-site, and off-site direct user
                  support as required.
                </li>
                <li>
                  Investigates, plans, implements, tests, and debugs operating
                  system software.
                </li>
                <li>
                  Troubleshoots and resolves hardware, software, and
                  connectivity problems, including user access and component
                  configuration.
                </li>
                <li>
                  Provide advanced technical assistance and maintenance support
                  to department and users.
                </li>
                <li>
                  Records and maintains hardware and software inventories for
                  ender user license agreements.
                </li>
                <li>
                  Performs problem resolution and provides on-call support for
                  computer/network systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Lincoln Lab */}
        <div>
          <div className="headerContent">
            <h4>
              System Support Analyst
              <br />
              MIT Lincoln Laboratory
              <br />
              Lexington, MA
              <br />
              Apr/2019 – May/2019
            </h4>
          </div>

          <div class="bodyContent">
            <div className="toolsList">
              <p class="title">Tools</p>
              <ul>SCCM BMC footprints</ul>
            </div>
            <div class="jobDescription">
              <p className="title"> Description </p>
              <ul>
                <li>
                  Provide desktop and laptop desk side support for Windows & Mac
                  systems.
                </li>
                <li>
                  Provide technical support and training to personal computer
                  and PC network users.
                </li>
                <li>
                  Assist users in solving IT problems using available hardware
                  and software tools.
                </li>
                <li>
                  Support, install, and maintain personal computers, local area
                  networks, operating systems, software, and related IT
                  peripherals.
                </li>
                <li>
                  Install and support hardware and software components for user
                  groups, perform preventive maintenance, and test equipment.
                </li>
                <li>
                  Evaluate system configuration and software to ensure effective
                  use of hardware resources.
                </li>
                <li>
                  Engage with users to determine their potential future business
                  requirements and create ways to streamline making these
                  requirements a reality.
                </li>
                <li>
                  Provide positive customer experiences when working with users.
                </li>
                <li>
                  Use “Footprints” ticketing system daily to triage tickets,
                  escalations, issues, etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Netscout */}
        <div>
          <div class="headerContent">
            <h4>
              IT Helpdesk Support Specialist
              <br />
              Netscout
              <br />
              Westford, MA
              <br />
              Nov/2018 – Mar/2019
            </h4>
          </div>
          <div class="bodyContent">
            <div class="toolsList">
              <p class="title">Tools</p>
              Okta Active Directory BMC Remedy Ticketing System Office 365 SCCM
              Cisco VPN Pulse VPN
            </div>
            <div class="jobDescription">
              <ul>
                <li>
                  Provide desktop end-user support, PC setup/configuration and
                  resolution of all IT Client Services requests, for local and
                  remote employees.
                </li>
                <li>
                  Provide technical support to end users in support of hardware,
                  software, peripherals, and network infrastructure.
                </li>
                <li>
                  Build and deploy various brands of personal computers with
                  associated configurations.
                </li>
                <li>Deploy and support VOIP phone hardware and software.</li>
                <li>
                  Maintain and enforce corporate hardware, software, and
                  anti-virus policies.
                </li>
                <li>
                  Update online helpdesk ticketing system, to track progress and
                  status.
                </li>
                <li>Attend regular staff meetings to report on tasks.</li>
                <li>
                  Act as a resource for all employees regarding technical
                  questions, and training.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* MilliporeSigma */}
        {/* <div>
          <h4>
            Line Assembler
            <br />
            MilliporeSigma
            <br />
            Danvers, MA
            <br />
            Apr/2018 – Oct/2018
          </h4>

          <ul>
            <li>
              Reading detailed instructions and following established procedures
              during the assembly of product.
            </li>
            <li>
              producing and packaging medical disposables in a biopharmaceutical
              environment.
            </li>
            <li>
              Maintains a safe and clean working environment by complying with
              procedures, rules, and regulations.
            </li>
          </ul>
        </div> */}
        {/* 1Path */}
        <div>
          <div class="headerContent">
            <h4>
              Help Desk Technician I
              <br />
              1Path
              <br />
              North Andover, MA
              <br />
              Aug/2017 – Jan/2018
            </h4>
          </div>
          <div className="bodyContent">
            <div className="toolsList">
              <p class="title">Tools</p>
              Active Directory Office 365 ConnectWise LabTech Kaseya Cisco VPN
            </div>
            <div className="jobDescription">
              <ul>
                <li>
                  Install, modify, and repair computer hardware and software.
                </li>
                <li>Manage Active Directory.</li>
                <li>Manage and Troubleshoot Office 365 email.</li>
                <li>Troubleshoot MS Windows 7 & 10.</li>
                <li>
                  Coordinate with remote users for PC repairs and diagnostics.
                </li>
                <li>
                  Troubleshoot network connectivity issues, working with remote
                  users on a corporate network.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* G4S */}
        <div>
          <div class="headerContent">
            <h4>
              Help Desk Technician I
              <br />
              G4S Secure Integration
              <br />
              Burlington, MA
              <br />
              Oct/2016 – March/2017
            </h4>
          </div>
          <div class="bodyContent">
            <div class="toolsList">
              <p class="title">Tools</p>
              Cash 360
            </div>
            <div class="jobDescription">
              <ul>
                <li>Monitor hardware, software and networks.</li>
                <li>
                  {" "}
                  Used internal ticketing systems to track, manage, review
                  machine issues.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Extra */}
      <div>
        <h3>Military</h3>

        <p>
          21W Carpentry Specialist
          <br /> E-4 Specialist
          <br />
          U.S. Army Reserves
          <br />
          Mar/2010 - Mar/2018
        </p>
      </div>
      <div>
        <h3>Education</h3>

        <p>
          Field of Study: Cybersecurity
          <br /> Middlesex Community College
        </p>
      </div>
    </div>
  );
}

export default App;
