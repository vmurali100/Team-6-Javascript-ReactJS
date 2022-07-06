import React from 'react'

export const Gallery = () => {
  return (
    <div>
        <figure>
            <ul class="clear">
              <li><a href="#"><img src="images/demo/130x130.gif" width="130" height="130" alt=""/></a></li>
              <li><a href="#"><img src="images/demo/130x130.gif" width="130" height="130" alt=""/></a></li>
              <li class="last"><a href="#"><img src="images/demo/130x130.gif" width="130" height="130" alt=""/></a></li>
            </ul>
            <figcaption><a href="#">View Our Image Gallery Here &raquo;</a></figcaption>
          </figure>
    </div>
  )
}
