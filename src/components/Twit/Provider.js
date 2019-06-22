import React from 'react'

const data = [{ author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" }, { author: "Lolek", message: "Siema", date: "10-09-2018" },]

export class Provider extends React.Component {
    render(){
        return this.props.children(data)
    }
}
