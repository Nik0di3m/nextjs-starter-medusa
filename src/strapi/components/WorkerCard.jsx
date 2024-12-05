import React from "react";
import MailIcon from "./Icons/MailIcon";
import PhoneIcon from "./Icons/PhoneIcon";

const WorkerCard = ({ name, position, email, phone }) => {
  return (
    <article className="bg-neutral-50 p-4 max-w-sm w-full border-t-2 border-yellow-400">
      <h3 className="mt-0">{name}</h3>
      <p className="text-sm">{position}</p>
      {email && (
        <div className="flex items-center gap-3">
          <div>
            <MailIcon />
          </div>
          <div>
            <a href={`mailto:${email}`} className="my-2 no-underline">
              {email}
            </a>
          </div>
        </div>
      )}

      {phone && (
        <div className="flex items-center gap-3">
          <div>
            <PhoneIcon />
          </div>
          <div>
            <a href={`tel:${phone}`} className="my-2 no-underline">
              {phone}
            </a>
          </div>
        </div>
      )}
    </article>
  );
};

export default WorkerCard;
