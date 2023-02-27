import React from 'react'
import classes from './HoverOn.module.css'
const HoverOn = () => {
  return (
    <div className={classes.container}>
        <div className={classes.links}>
        <ul className={classes.inside_links} >
            <span>Governance </span>
            <li>COBIT</li>
            <li>ISO/IEC 38500</li>
            <li>CGEIT</li>
            <span>Performance Management</span>
            <li>Balanced Scorecard</li>
            <li>KPI</li>
            <li>Strategy Management</li>
            <span>Cybersecurity & Privacy</span>
            <li>EXIN Information Security based ...</li>
            <li>ISO/IEC 27001</li>
            <li>Cyber & IT Security</li>
            <li>Computer Forensics</li>
            <li>Cybersecurity</li>
            <li>ISO/IEC 27001</li>
            <li>GDPR - Data Protection</li>
        </ul>
        <ul className={classes.inside_links}>
           <span>Continuity & Resilience </span>
           <li>BCM ISO 22301</li>
           <li>Disaster Recovery</li>
           <li>Organization Resilience - ISO 22316</li>
           <span>Risk Management</span>
           <li>CRISC</li>
           <li>ISO 31000</li>
           <li>IT Risk Management</li>
           <li>ISO 27005</li>
           <li>M_o_R</li>
           <span>Compliance Management</span>
           <li>ISO 19600 CMS</li>
           <li>ISO 37001 ABMS</li>
           <span>Quality & Lean Management</span>
           <span>Project Management </span>
           <span>Service Management </span>
        </ul>
        <ul className={classes.inside_links}>
            <span>Auditing & Assurance </span>
            <li>Cybersecurity Audit</li>
            <li>CISA</li>
            <li>Internal Auditor</li>
            <li>Assessor</li>
            <span>Digital Transformation</span>
            <li>Digital Transformation Officer</li>
            <li>Digital Transformation Professional</li>
            <li>Digital Transformation Specialist</li>
            <li>DG Technology Professional</li>
            <li>DG Data Science Professional</li>
            <li>Digital Transformation Data Scientist</li>
            <li>Digital Transformation Security Professional</li>
            <li>DG Technology Professional</li>
            <span>Architecture Management</span>
            <span>Others</span>

        </ul>
        </div>
    </div>
  )
}

export default HoverOn