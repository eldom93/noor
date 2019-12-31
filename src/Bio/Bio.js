import React from "react";
import "./Bio.css";
import image from "./headshot.jpg";
function Bio() {
  return (
    <div className="Bio">
      <img alt="Headshot" className="bio-image" width="300px" src={image} />
      <div class="holder">
    <div class="line line1"></div>
    <div class="line line2"></div>
    
</div>
<span class="dot"></span>
      <h2 className="name">Name</h2>
      <h3 className="position">Position</h3>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
        phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
        maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
        latine molestiae, ad mutat oblique delicatissimi pro.
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
        phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
        maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
        latine molestiae, ad mutat oblique delicatissimi pro.
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
        phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
        maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
        latine molestiae, ad mutat oblique delicatissimi pro.
      </p>
    </div>
  );
}

export default Bio;
