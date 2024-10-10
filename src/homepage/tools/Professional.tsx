import React from "react";

export default function ToolsProfessional(){
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className='h2'>Tools I use</h2>
        <ul>
          <li>React Native ✨</li>
          <ul>
            <li><i>As of October 2024</i></li>
          </ul>
          <li>NextJS / React / Typescript</li>
          <li>GraphQL via Apollo</li>
          <li>AWS via Terraform</li>
          <li>kubernetes and Docker</li>
          <li>Git(lab) and Jira</li>
        </ul>
      </div>

      <div>
        <h2 className="h2 pt-4 md:pt-0">What I've worked with before</h2>

        <ul>
          <li>.NET</li>
          <li>MSSQL</li>
          <li>Jenkins</li>
          <li>Python / Databricks / Pandas</li>
        </ul>
      </div>
    </div>

  )
}