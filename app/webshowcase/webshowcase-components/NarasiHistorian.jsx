import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

import mockup1 from "../../../public/img/narasihistorian.jpg";
import ImageWebPortfolio from "./ImageWebPortfolio";
import {
  DescriptionContainer,
  DescriptionTitle,
  DescriptionParagraph,
  ContainerLink,
  ContainerLinkHyperlink,
  SectionWebDevelopment,
} from "./DescriptionContainer";

// main components

export default function NarasiHistorian() {
  return (
    <SectionWebDevelopment>
      <ImageWebPortfolio>
        <Image
          src={mockup1}
          alt="mockup1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </ImageWebPortfolio>

      <DescriptionContainer>
        <DescriptionTitle>Blog App (Beta)</DescriptionTitle>
        <DescriptionParagraph>
          Narasihistorian is history content blog with interactive aproach,
          visual pleasing, and smooth and simple responsive layout in the
          desktop, tab or mobile with high quallity content through article.
        </DescriptionParagraph>

        <ContainerLink>
          <FaArrowCircleRight />
          <Link href="https://narasihistorian.netlify.app/" target="_blank">
            <ContainerLinkHyperlink>Visit source</ContainerLinkHyperlink>
          </Link>
        </ContainerLink>
      </DescriptionContainer>
    </SectionWebDevelopment>
  );
}
