import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import LoadingSpinner from "./LoadingSpinner";
import { faEnvelope, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const [isSent, setIsSent] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    setIsLoading(true);

    if (name && email && message) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSent(true);
          console.log("Message sent");
          setIsLoading(false);
          setTimeout(() => {
            setIsSent(null);
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
          setIsSent(false);
          setIsLoading(false);
          setTimeout(() => {
            setIsSent(null);
          }, 5000);
        });
    } else {
      setIsLoading(false);
      setIsSent(false);
      setTimeout(() => {
        setIsSent(null);
      }, 5000);
    }
  };

  useEffect(() => {
    const submitBtn = window.document.getElementById("submit-btn");
    submitBtn.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        handleSubmit(e);
      }
    });

    return () => {
      submitBtn.removeEventListener("keyup", function (e) {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      });
    };
  }, []);

  return (
    <div className="w-11/12 flex pt-20 flex-col pb-8" id="contact">
      <p className="text-2xl font-semibold text-textHeadBlack dark:text-drForeGround mb-2">
        Contact Me
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center">
        <div
          className="w-full md:w-1/2 flex flex-col justify-center"
          data-inviewport="slide-in-right"
        >
          <div className="flex flex-row items-strech my-2">
            <div className="dark:bg-drBackground bg-lightBackground rounded-l-lg textInputIconSection dark:textInputIconSectionDark flex items-center px-3">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-textHeadBlack dark:text-drForeGround"
                style={{
                  fontSize: "1.2rem",
                }}
              />
            </div>
            <div
              className="textInput dark:textInputDark p-3 flex-1"
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
            >
              <input
                type="text"
                className="dark:bg-drBackground bg-lightBackground w-full"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row items-strech my-2">
            <div className="dark:bg-drBackground bg-lightBackground rounded-l-lg textInputIconSection dark:textInputIconSectionDark flex items-center px-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-textHeadBlack dark:text-drForeGround"
                style={{
                  fontSize: "1.2rem",
                }}
              />
            </div>
            <div
              className="textInput dark:textInputDark p-3 flex-1"
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
            >
              <input
                type="text"
                className="dark:bg-drBackground bg-lightBackground w-full"
                style={{
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="textInput dark:textInputDark p-3">
            <textarea
              type="text"
              className="dark:bg-drBackground bg-lightBackground w-full"
              placeholder="Message"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div
            className={"toggleThemeBtn dark:toggleThemeBtnDark"}
            id="submit-btn"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              borderRadius: "0.5rem",
              padding: "1rem",
              width: "100%",
              height: "3.6rem",
              ...(!isLoading &&
                isSent === true && {
                  backgroundColor: "#3ddc84",
                }),
            }}
            onClick={handleSubmit}
            tabIndex="0"
          >
            {!isLoading && isSent == null && (
              <strong className="text-textHeadBlack dark:text-drForeGround noSelect">
                Submit
              </strong>
            )}
            {!isLoading && isSent === false && (
              <strong className="text-drRed noSelect">
                Couldn't send message
              </strong>
            )}
            {!isLoading && isSent === true && (
              <strong className="text-textHeadBlack noSelect">
                Message sent
              </strong>
            )}
            {isLoading && <LoadingSpinner />}
          </div>
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center"
          data-inviewport="slide-in-left"
        >
          <div className="flex flex-col justify-center items-center">
            <strong className="text-textHeadBlack dark:text-drForeGround noSelect">
              or
            </strong>
            <strong className="text-textHeadBlack dark:text-drForeGround noSelect">
              connect with me on
            </strong>
          </div>
          <div className="flex flex-row justify-center items-center mt-10 w-3/4 lg:w-2/5">
            <a
              href="https://twitter.com/siddhesh_kt"
              target="_blank"
              rel="noopener"
              className="toggleThemeBtn dark:toggleThemeBtnDark twitterHover"
              style={{
                padding: "1rem",
              }}
              aria-label="Twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-lg align-middle text-center"
                style={{
                  fontSize: "1.4rem",
                }}
              />
            </a>
            <a
              className="toggleThemeBtn dark:toggleThemeBtnDark linkedinHover"
              href="https://www.linkedin.com/in/siddhesh-kothadi/"
              target="_blank"
              rel="noopener"
              style={{
                padding: "1rem",
              }}
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-lg align-middle text-center"
                style={{
                  fontSize: "1.4rem",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
