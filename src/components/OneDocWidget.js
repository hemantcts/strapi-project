import { useEffect } from "react";

const OneDocWidget = ({ page }) => {
    const widgetId =
        page === "pt"
            ? "9ab35c81eb24d0fbdf46d97d41109f37cad817cd6b2ded7f07a6417467771e80"
            : "a863db5d99b6614341beefbbc55c2e031843602b0b6bc6b26c08a96709b0b7fd";

    const widgetSrc = `https://onedoc.ch/de/widget/${widgetId}`;

    useEffect(() => {
        // alert("OneDoc Widget component loaded");
        // Create global config if missing
        if (!window.widgetConfigs) {
            window.widgetConfigs = {};
        }

        // Initialize widget config object
        window.widgetConfigs[widgetId] = {
            measurementIds: [],
            hasGoogleTagTracking: false,
            hasFusedeck: false,
        };

        // ---- MESSAGE LISTENER (copied from OneDoc script) ----
        const messageListener = (e) => {
            const t = e.data["od-widget-id"];
            const iframe = document.getElementById(`od-widget-${t}`);

            if (t && window.widgetConfigs[t] && t === widgetId) {
                const height = e.data["od-widget-height"];
                const isIOS = e.data["od-widget-ios"];

                if (iframe && height) {
                    iframe.style.height = `${height}px`;
                }

                if (isIOS === true && iframe) {
                    iframe.style.width = "100px";
                    iframe.style.minWidth = "100%";
                    iframe.scrolling = "no";
                }

                const g = e.data["od-tracking-configs"];
                if (g !== undefined) window.widgetConfigs[t].measurementIds = g;

                const hasGT = e.data["od-has-google-tag-manager"];
                if (hasGT !== undefined)
                    window.widgetConfigs[t].hasGoogleTagTracking = hasGT;

                const hasFD = e.data["od-has-fusedeck"];
                if (hasFD !== undefined)
                    window.widgetConfigs[t].hasFusedeck = hasFD;

                const GA4 = e.data.GA4;

                if (
                    window.widgetConfigs[t].hasGoogleTagTracking &&
                    window.dataLayer &&
                    GA4
                ) {
                    const props = Object.keys(GA4.properties);
                    const evt = { event: GA4.name };
                    props.forEach((p) => (evt[p] = GA4.properties[p]));
                    window.dataLayer.push(evt);
                }

                if (window.widgetConfigs[t].hasFusedeck && window.fdData && GA4) {
                    const props = Object.keys(GA4.properties);
                    const evt = { event: GA4.name };
                    props.forEach((p) => (evt[p] = GA4.properties[p]));
                    window.fdData.push(evt);
                }

                if (GA4 && window.gtag) {
                    for (let m of window.widgetConfigs[t].measurementIds) {
                        const props = Object.keys(GA4.properties);
                        const evt = { send_to: m };
                        props.forEach((p) => (evt[p] = GA4.properties[p]));
                        window.gtag("event", GA4.name, evt);
                    }
                }
            }
        };

        window.addEventListener("message", messageListener);

        // ---- LOAD SRC INTO IFRAME (like the HTML script does) ----
        // const loadListener = () => {
        //     const iframes = document.querySelectorAll("iframe.od-widget");
        //     iframes.forEach((frame) => {
        //         if (frame.dataset && frame.dataset.src) {
        //             frame.src = frame.dataset.src;
        //         }
        //     });
        // };

        // window.addEventListener("load", loadListener);

        // Load iframe immediately (fix for React SPA)
        setTimeout(() => {
            const iframe = document.getElementById(`od-widget-${widgetId}`);
            if (iframe && iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
            }
        }, 0);

        return () => {
            window.removeEventListener("message", messageListener);
            // window.removeEventListener("load", loadListener);
        };
    }, [page]);

    return (
        <iframe
            className="od-widget"
            id={`od-widget-${widgetId}`}
            src="about:blank"
            data-src={widgetSrc}
            frameBorder="0"
            style={{ width: "100%", minHeight: '620px'}}
        ></iframe>
    );
};

export default OneDocWidget;
