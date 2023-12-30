import React from 'react'
import "./todo.scss"
const todo = () => {
  return (
<>
<div className="todorow rhead">
    <div className="title">Title</div>
    <div className="description">Description</div>
</div>
<div className="todorow">
    <div className="title">Complete Dashboard</div>
    <div className="description">
        create dashboard with various classes, widgets and pages supporting those widgets
    </div>
</div>
<div className="todorow">
    <div className="title">make appointments</div>
    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius sunt similique nisi, ad ratione atque iusto. Veniam, ducimus nostrum.
    </div>
</div>
<div className="todorow">
    <div className="title">attend meeting</div>
    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius sunt similique nisi, ad ratione atque iusto. Veniam, ducimus nostrum.
    </div>
</div>
</>
  )
}

export default todo