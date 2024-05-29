import React from 'react'
// rafc

const Footer = () => {
  let footerStyle={
    position: "relative",
  width: "100%",
  top: "21.3vh"
  }
  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center" >Copyright &copy; MyTodosList.com</p>
    </div>
  )
}

export default Footer
