import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as gtag from "../lib/gtag";

function ProjectCard(props) {
  const project = props.project;
  const index = props.index;

  return (
    <div
      className="projectCard dark:projectCardDark"
      data-inviewport={index % 2 == 1 ? "slide-in-left" : "slide-in-right"}
    >
      <div className="flex flex-row">
        <p className="font-bold text-xl text-textHeadBlack dark:text-drForeGround noSelect">
          {project.name.toLocaleLowerCase()}
        </p>
        <div className="ml-auto">
          {project.isProtected ? (
            <FontAwesomeIcon
              icon={faLock}
              // className="text-textHeadBlack dark:text-drForeGround"
              className="dark:text-drOrange text-orange"
              style={{
                fontSize: "1rem",
              }}
            />
          ) : (
            <div className="flex flex-row justify-end space-x-4">
              {project.gitHubLink && (
                <FontAwesomeIcon
                  icon={faGithub}
                  // className="text-textHeadBlack dark:text-drForeGround cursor-pointer"
                  className="dark:text-drPurple text-textHeadBlack cursor-pointer"
                  style={{
                    fontSize: "1.4rem",
                  }}
                  onClick={() => {
                    gtag.event({
                      action: `github_${project.name.toLocaleLowerCase()}`,
                      category: "github",
                      label: project.name.toLocaleLowerCase(),
                    });
                    window.open(project.gitHubLink, "_blank", "noopener");
                  }}
                />
              )}
              {project.liveLink && (
                <FontAwesomeIcon
                  icon={faGlobe}
                  // className="text-textHeadBlack dark:text-drForeGround cursor-pointer"
                  className="dark:text-drCyan text-blue-500 cursor-pointer"
                  style={{
                    fontSize: "1.4rem",
                  }}
                  onClick={() => {
                    gtag.event({
                      action: `live_${project.name.toLocaleLowerCase()}`,
                      category: "live_link",
                      label: project.name.toLocaleLowerCase(),
                    });
                    window.open(project.liveLink, "_blank", "noopener");
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <p className="text-grayOnWhite dark:text-goodGray noSelect">
        {project.description}
      </p>
      <div className="flex flex-row overflow-x-scroll space-x-2 md:space-x-2 hideScrollbar noSelect">
        {project.tags.map((tag, index) => (
          <div key={index} className="tag">{`#${tag}`}</div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
