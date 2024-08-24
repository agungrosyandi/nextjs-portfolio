import Image from "next/image";
import Link from "next/link";

import mockup7 from "../../../public/img/20.jpg";
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

export default function FirstPortfolio() {
  return (
    <SectionWebDevelopment>
      <ImageWebPortfolio>
        <Image
          src={mockup7}
          alt="mockup1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </ImageWebPortfolio>

      <DescriptionContainer>
        <DescriptionTitle> Portfolio V1</DescriptionTitle>
        <DescriptionParagraph>
          This is my first website. As an graphic designer, I want to expand and
          improve my soft-skills. Based on my basics in the design software and
          computer system, I try combine both of them. The result is make me
          plunge into Web Development especially front-end.
        </DescriptionParagraph>

        <ContainerLink>
          <FaArrowCircleRight />
          <Link href="https://agungrosyandi.github.io/mystory/" target="_blank">
            <ContainerLinkHyperlink>Visit source</ContainerLinkHyperlink>
          </Link>
        </ContainerLink>
      </DescriptionContainer>
    </SectionWebDevelopment>
  );
}
