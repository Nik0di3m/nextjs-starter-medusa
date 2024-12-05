import { parseContent } from "@/lib/richTextParser";
import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import FaceBookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import XIcon from "./Icons/XIcon";
import Link from "next/link";
import PhoneIcon from "./Icons/PhoneIcon";
import MailIcon from "./Icons/MailIcon";
const EditorCard = ({
  image,
  name,
  position,
  email,
  phone,
  bio,
  socialLink,
}) => {
  const socialLinkMap = {
    facebook: <FaceBookIcon />,
    x: <XIcon />,
    linkedin: <LinkedInIcon />,
    instagram: <InstagramIcon />,
  };
  return (
    <article className="prose max-w-none w-full prose-p:my-2 bg-neutral-50 p-6  border-t-2  border-yellow-400  self-stretch my-12 pt-12 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-shrink-0 flex flex-col">
          <Image
            src={getStrapiMedia(image.url)}
            alt={name}
            width={300}
            height={300}
            className="rounded-xl mb-4 mt-0"
          />
          <div className="pl-3 mb-2 flex gap-4">
            {socialLink.map((link, index) => (
              <Link
                href={link.url}
                className="w-5 h-5 text-neutral-700 hover:text-yellow-400 duration-150"
              >
                {socialLinkMap[link.type]}
              </Link>
            ))}
          </div>
          <div className="pl-3 space-y-1 pt-2">
            {phone && (
              <div className="flex gap-3 items-center">
                <PhoneIcon />
                <Link href={`tel:${phone}`}>{phone}</Link>
              </div>
            )}
            {email && (
              <div className="flex gap-3 items-center">
                <MailIcon />
                <Link href={`mailto:${email}`}>{email}</Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="mt-0">{name}</h2>
          {position && <p className="font-medium">{position}</p>}
          {bio && (
            <div
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: parseContent(bio) }}
            ></div>
          )}
        </div>
      </div>
    </article>
  );
};

export default EditorCard;
