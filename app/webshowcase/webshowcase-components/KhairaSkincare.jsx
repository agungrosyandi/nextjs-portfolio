import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

import SkincareImage from "../../../public/img/khairaskincare-bg.jpg";
import ImageWebPortfolio from "./ImageWebPortfolio";
import {
  DescriptionContainer,
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
          src={SkincareImage}
          alt="mockup1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </ImageWebPortfolio>

      <DescriptionContainer>
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
