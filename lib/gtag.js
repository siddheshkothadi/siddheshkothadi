export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
const isProduction = process.env.NODE_ENV === "production";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  console.log('pageview', url)
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events

// click , what was clicked, where was clicked
export const event = ({ action, category, label, value }) => {
  console.log(action, category, label, value);
  console.log(isProduction);
  if(isProduction && window && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
