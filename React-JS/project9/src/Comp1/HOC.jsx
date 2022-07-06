import React from 'react'

export const HOC = (OriginalComponent) => {


    class HOC extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
              count:0
            }
      
          }
          increase=()=>{
              this.setState({count:this.state.count+1})
          }
        render() {
            return (
                <OriginalComponent count={this.state.count} increase={this.increase}/>
            )
        }
    }

    return HOC
}
