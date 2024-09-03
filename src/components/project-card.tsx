import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

interface DevLogo {
  name: string;
  image: string;
}
interface ProjectCardProps {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
  url: string;
  devLogo: DevLogo[];
  youtube: string;
}

export function ProjectCard({
  img,
  title,
  subtitle,
  desc,
  url,
  devLogo,
  youtube,
}: ProjectCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder="Card"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody
        className="p-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h5"
          className="mb-1"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          className="mb-1"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {subtitle}
        </Typography>
        <div className="flex items-center space-x-4 p-4">
          {devLogo.map((logo, index) => (
            <Image
              src={logo.image}
              alt={logo.name}
              // className="w-8 h-8"
              key={index}
              width={20}
              height={20}
            />
          ))}
        </div>
        <hr />
        {youtube && (
          <div className="flex items-center space-x-4 pt-2">
            <Image
              src={"/image/porto/dev-logos/youtube-logo.png"}
              alt="youtube"
              width={25}
              height={25}
            />
            <a href={youtube} target="_blank" className="m-0 text-sm">
              Watch Demo
            </a>
          </div>
        )}
        <Typography
          className="mt-2 mb-6 font-normal !text-gray-500"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {desc}
        </Typography>
        <Button
          color="gray"
          size="sm"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Link href={url} target="_blank">
            see details
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
