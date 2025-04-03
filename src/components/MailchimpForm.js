import React from "react";

const MailchimpForm = ({color}) => {
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://medzentrum.us4.list-manage.com/subscribe/post?u=5cc43b1371434d47ff1823be2&amp;id=e5d169e4b8&amp;f_id=009fd2e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate mx-0"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                E-Mail Adresse <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email "
                id="mce-EMAIL"
                placeholder="Ihre E-Mail Adresse"
                required
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input type="text" name="b_5cc43b1371434d47ff1823be2_e5d169e4b8" tabIndex="-1" />
            </div>
            <div className="optionalParent">
              <div className={`clear foot ${color==='green' ? 'green' : 'blue'}`}>
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button py-1"
                  value="Registrieren"
                  style={{fontSize: '17px', height: 'unset'}}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function($) {
              window.fnames = new Array(); 
              window.ftypes = new Array();
              fnames[0]='EMAIL';
              ftypes[0]='email';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `,
        }}
      />
    </div>
  );
};

export default MailchimpForm;