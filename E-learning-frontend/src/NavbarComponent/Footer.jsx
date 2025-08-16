import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto"> 
      <div className="col-md-6 mb-3 mb-md-0 text-center">
        <h6 className="mb-0" style={{width:"100vw"}}>Copyright © {new Date().getFullYear()} SkillHub.All rights reserved.</h6>
      </div> 
    </footer>
  )
}
