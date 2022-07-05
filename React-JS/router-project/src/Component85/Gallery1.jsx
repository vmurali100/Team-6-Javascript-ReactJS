import React from 'react'

export const Gallery1 = () => {
  return (
    <div>
        <h2>Welcome To Gallery1 Component</h2>
        <section id="latest">
        <article>
          <figure>
            <ul>
              <li class="one_quarter"><img src="images/demo/215x150.gif" width="215" height="150" alt="" /></li>
              <li class="one_quarter"><img src="images/demo/215x150.gif" width="215" height="150" alt="" /></li>
              <li class="one_quarter"><img src="images/demo/215x150.gif" width="215" height="150" alt="" /></li>
              <li class="one_quarter lastbox"><img src="images/demo/215x150.gif" width="215" height="150" alt="" /></li>
            </ul>
            <figcaption><a href="#">View All Our Recent Work Here »</a></figcaption>
          </figure>
        </article>
      </section>
    </div>
  )
}
