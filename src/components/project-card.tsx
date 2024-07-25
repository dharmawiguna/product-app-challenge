import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
  url: string;
}

export function ProjectCard({
  img,
  title,
  subtitle,
  desc,
  url,
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
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
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
          <hr />
        </a>
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
