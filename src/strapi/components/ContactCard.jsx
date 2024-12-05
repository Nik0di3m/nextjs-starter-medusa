import React from "react";
import PinIcon from "./Icons/PinIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import FaxIcon from "./Icons/FaxIcon";
import ClockIcon from "./Icons/ClockIcon";
import MailIcon from "./Icons/MailIcon";
import { parseContent } from "../lib/richTextParser";

const ContactCard = ({
  title,
  address,
  phone,
  fax,
  openHour,
  email,
  extraText,
}) => {
  return (
    <article className="prose max-w-none w-full prose-p:my-2 bg-neutral-50 p-6  border-t-2  border-yellow-400  self-stretch">
      <h3>{title}</h3>

      {address && (
        <div className="flex items-center gap-3">
          <div>
            <PinIcon />
          </div>
          <div>
            <p>{address}</p>
          </div>
        </div>
      )}

      {phone && (
        <div className="flex items-center gap-3">
          <div>
            <PhoneIcon />
          </div>
          <div>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
      )}

      {fax && (
        <div className="flex items-center gap-3">
          <div>
            <FaxIcon />
          </div>
          <div>
            <p>{fax}</p>
          </div>
        </div>
      )}

      {openHour && (
        <div className="flex items-center gap-3">
          <div>
            <ClockIcon />
          </div>
          <div>
            <p>{openHour}</p>
          </div>
        </div>
      )}

      {email && (
        <div className="flex items-center gap-3">
          <div>
            <MailIcon />
          </div>
          <div>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      )}

      {extraText && (
        <div
          dangerouslySetInnerHTML={{ __html: parseContent(extraText) }}
        ></div>
      )}
    </article>
  );
};

export default ContactCard;
