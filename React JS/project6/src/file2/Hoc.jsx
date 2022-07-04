import { Component } from 'react'
export function Hoc(Orginal) {
    class Hoc extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0

            }
        }
        handlehover = () => {
            this.setState({ count: this.state.count + 1 })
        }

        render() {

            return <div>
                <Orginal count={this.state.count} handlehover={this.handlehover} />
            </div>
        }
    }
    return Hoc
}