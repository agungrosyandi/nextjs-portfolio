import Image from "next/image";
import Link from "next/link";

import mockup7 from "../../../public/img/20.jpg";
import {
  ContainerLink,
  ContainerLinkHyperlink,
  DescriptionContainer,
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
