import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Get In Touch I’m interested in learning opportunities
              especially ambitious or interesting open-source projects.
              However, if you have other request or question, don’t hesitate
              contact.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                Linked in :
                https://www.linkedin.com/in/shyam-prakash-a3025b237 
              </h4>
              <h4>Contact Me : {resumeData.Contact}</h4>

              <h4>Mail Me : {resumeData.Mail}</h4>
            </div>
          </aside>
        </div>
      </section>;
  }
}