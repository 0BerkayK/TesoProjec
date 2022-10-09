import React, { Component } from "react";
import Slider from "react-slick";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img
              alt="slide1"
              width={328}
              height={195}
              src="https://s3-alpha-sig.figma.com/img/1f45/5cb0/eb11bdbb9180a0c59e930407a173b044?Expires=1665360000&Signature=GD6llF8km4LPG9gMAJzDevE6CVfH1UomUFlujuMqVVSKNPLXPA1~U4pqFsN-5Xuxs2-ccr3d77WncNio3hQlOvMp7CxcWfZ9W0jZuO3yuGPc~FgVSCBOxZEKbGLRlqNWplGKu9bj4k5sUPrkeSDUO3CI5IGp9jt8Vy68efgFEv9UVXoUjNRHKq9zeIhUqKqg2GrELgkrE~Qo5oCXGcCibP-aqUuwkomWCKvNJeNqoLoLfxPjQmU1pdLHlAz3lqpVw7xO4IES~7-emYklhzfyTx6HNaiagWUaOU3rnHdKlyBd8lGJmQK0nX-G4oxhUu~UbvWs6lSv4kHMy2z1heMHqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            ></img>
            <h3 className="newsTitle">
              A Plan to Rebuild the Bus Terminal<br></br> Everyone Loves to Hate
            </h3>
            <h6 className="newSubtitle">1h ago . by Troy Corlson</h6>
          </div>
          <div>
            <img
              alt="slide2"
              width={328}
              height={195}
              src="https://s3-alpha-sig.figma.com/img/1f45/5cb0/eb11bdbb9180a0c59e930407a173b044?Expires=1665360000&Signature=GD6llF8km4LPG9gMAJzDevE6CVfH1UomUFlujuMqVVSKNPLXPA1~U4pqFsN-5Xuxs2-ccr3d77WncNio3hQlOvMp7CxcWfZ9W0jZuO3yuGPc~FgVSCBOxZEKbGLRlqNWplGKu9bj4k5sUPrkeSDUO3CI5IGp9jt8Vy68efgFEv9UVXoUjNRHKq9zeIhUqKqg2GrELgkrE~Qo5oCXGcCibP-aqUuwkomWCKvNJeNqoLoLfxPjQmU1pdLHlAz3lqpVw7xO4IES~7-emYklhzfyTx6HNaiagWUaOU3rnHdKlyBd8lGJmQK0nX-G4oxhUu~UbvWs6lSv4kHMy2z1heMHqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            ></img>
            <h3 className="newsTitle">
              A Plan to Rebuild the Bus Terminal<br></br>Everyone Loves to Hate
            </h3>
            <h6 className="newSubtitle">1h ago . by Troy Corlson</h6>
          </div>
          <div>
            <img
              alt="slide3"
              width={328}
              height={195}
              src="https://s3-alpha-sig.figma.com/img/1f45/5cb0/eb11bdbb9180a0c59e930407a173b044?Expires=1665360000&Signature=GD6llF8km4LPG9gMAJzDevE6CVfH1UomUFlujuMqVVSKNPLXPA1~U4pqFsN-5Xuxs2-ccr3d77WncNio3hQlOvMp7CxcWfZ9W0jZuO3yuGPc~FgVSCBOxZEKbGLRlqNWplGKu9bj4k5sUPrkeSDUO3CI5IGp9jt8Vy68efgFEv9UVXoUjNRHKq9zeIhUqKqg2GrELgkrE~Qo5oCXGcCibP-aqUuwkomWCKvNJeNqoLoLfxPjQmU1pdLHlAz3lqpVw7xO4IES~7-emYklhzfyTx6HNaiagWUaOU3rnHdKlyBd8lGJmQK0nX-G4oxhUu~UbvWs6lSv4kHMy2z1heMHqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            ></img>
            <h3 className="newsTitle">
              A Plan to Rebuild the Bus Terminal<br></br>Everyone Loves to Hate
            </h3>
            <h6 className="newSubtitle">1h ago . by Troy Corlson</h6>
          </div>
          <div>
            <img
              alt="slide4"
              width={328}
              height={195}
              src="https://s3-alpha-sig.figma.com/img/1f45/5cb0/eb11bdbb9180a0c59e930407a173b044?Expires=1665360000&Signature=GD6llF8km4LPG9gMAJzDevE6CVfH1UomUFlujuMqVVSKNPLXPA1~U4pqFsN-5Xuxs2-ccr3d77WncNio3hQlOvMp7CxcWfZ9W0jZuO3yuGPc~FgVSCBOxZEKbGLRlqNWplGKu9bj4k5sUPrkeSDUO3CI5IGp9jt8Vy68efgFEv9UVXoUjNRHKq9zeIhUqKqg2GrELgkrE~Qo5oCXGcCibP-aqUuwkomWCKvNJeNqoLoLfxPjQmU1pdLHlAz3lqpVw7xO4IES~7-emYklhzfyTx6HNaiagWUaOU3rnHdKlyBd8lGJmQK0nX-G4oxhUu~UbvWs6lSv4kHMy2z1heMHqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            ></img>
            <h3 className="newsTitle">
              A Plan to Rebuild the Bus Terminal<br></br>Everyone Loves to Hate
            </h3>
            <h6 className="newSubtitle">1h ago . by Troy Corlson</h6>
          </div>
          <div>
            <img
              alt="slide5"
              width={328}
              height={195}
              src="https://s3-alpha-sig.figma.com/img/1f45/5cb0/eb11bdbb9180a0c59e930407a173b044?Expires=1665360000&Signature=GD6llF8km4LPG9gMAJzDevE6CVfH1UomUFlujuMqVVSKNPLXPA1~U4pqFsN-5Xuxs2-ccr3d77WncNio3hQlOvMp7CxcWfZ9W0jZuO3yuGPc~FgVSCBOxZEKbGLRlqNWplGKu9bj4k5sUPrkeSDUO3CI5IGp9jt8Vy68efgFEv9UVXoUjNRHKq9zeIhUqKqg2GrELgkrE~Qo5oCXGcCibP-aqUuwkomWCKvNJeNqoLoLfxPjQmU1pdLHlAz3lqpVw7xO4IES~7-emYklhzfyTx6HNaiagWUaOU3rnHdKlyBd8lGJmQK0nX-G4oxhUu~UbvWs6lSv4kHMy2z1heMHqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            ></img>
            <h3 className="newsTitle">
              A Plan to Rebuild the Bus Terminal<br></br>Everyone Loves to Hate
            </h3>
            <h6 className="newSubtitle">1h ago . by Troy Corlson</h6>
          </div>
          <div>
            <img
              alt="slide6"
              width={328}
              height={195}
              src="https://s3-alpha-sig.figma.com/img/1f45/5cb0/eb11bdbb9180a0c59e930407a173b044?Expires=1665360000&Signature=GD6llF8km4LPG9gMAJzDevE6CVfH1UomUFlujuMqVVSKNPLXPA1~U4pqFsN-5Xuxs2-ccr3d77WncNio3hQlOvMp7CxcWfZ9W0jZuO3yuGPc~FgVSCBOxZEKbGLRlqNWplGKu9bj4k5sUPrkeSDUO3CI5IGp9jt8Vy68efgFEv9UVXoUjNRHKq9zeIhUqKqg2GrELgkrE~Qo5oCXGcCibP-aqUuwkomWCKvNJeNqoLoLfxPjQmU1pdLHlAz3lqpVw7xO4IES~7-emYklhzfyTx6HNaiagWUaOU3rnHdKlyBd8lGJmQK0nX-G4oxhUu~UbvWs6lSv4kHMy2z1heMHqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            ></img>
            <h3 className="newsTitle">
              A Plan to Rebuild the Bus Terminal<br></br>Everyone Loves to Hate
            </h3>
            <h6 className="newSubtitle">1h ago . by Troy Corlson</h6>
          </div>
        </Slider>
      </div>
    );
  }
}
