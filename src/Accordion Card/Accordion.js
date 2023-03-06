import React from 'react'
import './Accordion.css'

function Accordion() {
    return (
        <div className='accordion-wrapper'>
            <ul className="accordion">
                <li>
                    <div className="line-border"></div>
                    <input type="radio" name="accordion" id="first" />
                    <label htmlfor="first">Products</label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            maximus nisl tortor. In vitae sem in orci gravida semper. Aliquam maximus
                            ullamcorper ligula vel vehicula. Nunc tincidunt mattis metus sed
                            fermentum. Pellentesque gravida interdum ligula pulvinar eleifend.
                            Maecenas sit amet turpis metus.</p>
                    </div>
                </li>

                <li>
                    <div className="line-border"></div>
                    <input type="radio" name="accordion" id="two" checked />
                    <label htmlfor="two">Products</label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            maximus nisl tortor. In vitae sem in orci gravida semper. Aliquam maximus
                            ullamcorper ligula vel vehicula. Nunc tincidunt mattis metus sed
                            fermentum. Pellentesque gravida interdum ligula pulvinar eleifend.
                            Maecenas sit amet turpis metus.</p>
                    </div>
                </li>

                <li>
                    <div className="line-border"></div>
                    <input type="radio" name="accordion" id="three" />
                    <label htmlfor="three">Products</label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            maximus nisl tortor. In vitae sem in orci gravida semper. Aliquam maximus
                            ullamcorper ligula vel vehicula. Nunc tincidunt mattis metus sed
                            fermentum. Pellentesque gravida interdum ligula pulvinar eleifend.
                            Maecenas sit amet turpis metus.</p>
                    </div>
                </li>

                <li>
                    <div className="line-border"></div>
                    <input type="radio" name="accordion" id="four" />
                    <label htmlfor="four">Products</label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            maximus nisl tortor. In vitae sem in orci gravida semper. Aliquam maximus
                            ullamcorper ligula vel vehicula. Nunc tincidunt mattis metus sed
                            fermentum. Pellentesque gravida interdum ligula pulvinar eleifend.
                            Maecenas sit amet turpis metus.</p>
                    </div>
                </li>

                <li>
                    <div className="line-border"></div>
                    <input type="radio" name="accordion" id="five" />
                    <label htmlfor="five">Products</label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            maximus nisl tortor. In vitae sem in orci gravida semper. Aliquam maximus
                            ullamcorper ligula vel vehicula. Nunc tincidunt mattis metus sed
                            fermentum. Pellentesque gravida interdum ligula pulvinar eleifend.
                            Maecenas sit amet turpis metus.</p>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Accordion