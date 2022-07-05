import React from 'react'

export const Gallerys = () => {
  return (
    <div>
        <h2>Welcome to Gallerys Components</h2>
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
