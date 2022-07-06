import React from 'react'

const Gallary = () => {
    return (
        <div>
            <h1>Welcome to gallary component</h1>
            <br />
            <figure>
                <ul class="clear">
                    <li class="one_third"><img src="images/demo/290x180.gif" width="290" height="180" alt="" /></li>
                    <li class="one_third"><img src="images/demo/290x180.gif" width="290" height="180" alt="" /></li>
                    <li class="one_third lastbox"><img src="images/demo/290x180.gif" width="290" height="180" alt="" /></li>
                    <li class="one_third lastbox"><img src="images/demo/290x180.gif" width="290" height="180" alt="" /></li>
                </ul>
            </figure>
        </div>
    )
}

export default Gallary
