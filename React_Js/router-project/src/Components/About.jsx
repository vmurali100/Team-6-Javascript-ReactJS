import React from 'react'

const About = () => {
    return (
        <div>
            <h2>Welcome to about component</h2>
            <section id="latest">
                <article>
                    <figure>
                    <ul>
                        <li class="one_quarter">
                            <img src="images/demo/215x150.gif" width="215" height="150" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p></li><li class="one_quarter"><img src="images/demo/215x150.gif" width="215" height="150" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p>
                        </li>
                        <li class="one_quarter">
                            <img src="images/demo/215x150.gif" width="215" height="150" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p>
                        </li>
                        <li class="one_quarter lastbox">
                            <img src="images/demo/215x150.gif" width="215" height="150" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p>
                        </li>
                        </ul>
                        <figcaption>
                            <a href="#">View All Our Recent Work Here »</a>
                        </figcaption>
                    </figure>
                    </article>
                </section>
        </div>
    )
}

export default About
