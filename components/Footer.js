import React from "react";

// TODO: replace names with logo

export default function Footer() {
  return (
    <footer className=" text-drCurrentLine dark:text-gray-400 py-6 px-6">
      <p className="text-center">
        Find an issue with this page?{" "}
        <a href="#" target="_blank">
          <strong className="text-drCurrentLine dark:text-gray-100">
            Fix it on GitHub
          </strong>
        </a>
      </p>

      {/* horizontal divider/ */}
      {/* <hr className="my-2 border-dashed border-2 border-gray-200 dark:border-drComment" /> */}
      <div className="footerDivider dark:footerDividerDark flex justify-center">
        <div className="h-full  bg-androidGreen"></div>
      </div>

      <p className="text-center">
        Created with{" "}
        <a href="https://tailwindcss.com/" target="_blank">
          <strong
            style={{
              color: `rgb(6, 182, 212)`,
            }}
          >
            tailwind
          </strong>
        </a>{" "}
        and{" "}
        <a href="https://nextjs.org/" target="_blank">
          <strong className="text-drCurrentLine dark:text-gray-100">
            next.js
          </strong>
        </a>
      </p>
      <p className="text-center">
        Design inspired by{" "}
        <a href="https://cred.club/" target="_blank">
          <strong className="text-drCurrentLine dark:text-gray-100">
            cred
          </strong>
        </a>{" "}
        and{" "}
        <a href="https://fireship.io/" target="_blank">
          <strong className="text-orange">fireship</strong>
        </a>
      </p>
    </footer>
  );
}
