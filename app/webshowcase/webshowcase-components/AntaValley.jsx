import Link from "next/link";
import Image from "next/image";
import mockup5 from "../../../public/img/antavalley.jpg";
import {
  ContainerLink,
  ContainerLinkHyperlink,
  DescriptionContainer,
  DescriptionParagraph,
  DescriptionTitle,
  SectionWebDevelopment,
} from "./DescriptionContainer";
import ImageWebPortfolio from "./ImageWebPortfolio";
import { FaArrowCircleRight } from "react-icons/fa";

export default function AntaValley() {
  return (
    <SectionWebDevelopment>
      <ImageWebPortfolio>
        <Image
          src={mockup5}
          alt="mockup1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </ImageWebPortfolio>

      <DescriptionContainer>
        <DescriptionTitle> Landing Page (Beta)</DescriptionTitle>
        <DescriptionParagraph>
          AntaValley is Resort Holding Landing Page create by motion design with
          2D style. Its combine unique, interactive with visual pleasing
          website, so it can make good assessment for the user when they want to
          find information about resort on the internet.
        </DescriptionParagraph>

        <ContainerLink>
          <FaArrowCircleRight />
          <Link
            href="https://narasihistorian.github.io/prototype-landingpage//"
            target="_blank"
          >
            <ContainerLinkHyperlink>Visit source</ContainerLinkHyperlink>
          </Link>
        </ContainerLink>
      </DescriptionContainer>
    </SectionWebDevelopment>
  );
}
