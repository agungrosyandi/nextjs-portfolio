import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QAAboutMe() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="font-bold">What Can i do ?</span>{" "}
          </AccordionTrigger>
          <AccordionContent>
            My Speciality is Graphic Design and Front-end Web Development.
            Having both as my soft-skill, make me capable to create graphic
            design content or assets, and inputs them into my front-end project
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="font-bold"> What my main stack ?</span>
          </AccordionTrigger>
          <AccordionContent>
            So far, I'm proficient in design software such as Adobe Photoshop,
            Illustrator and Premierre Pro. For front-end development, currently
            I'm skilled in HTML, CSS and Javascript including their framework
            and library using React JS or NextJS and styling using TailwindCSS.
            With my knowledge in front-end Development, basically I've capable
            to build stunning and high quality the Web UI with have good user
            experience. Beside that, not only just static web, I've also know
            how to improve web development to become dynamic web such as create
            REST API, user auth with personal token or google auth and connect
            them to database using postgresql with Prisma and Drizzle ORM
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <span className="font-bold">
              What is the correlation between graphic design and front-end as
              main stack ?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            As you know, Front-end structure and architecture need graphic asset
            which is create by design software for optimalization. However file
            for Web Development is different compare to ordinary graphic design
            like ads or social media content, you need convert graphic asset for
            Web to web legacy file and setting the resolution size to fit in
            your layout, so your asset have small size but still have hiqh
            resolution and your asset fit in all responsive mode both in mobile,
            tab, or desktop. The result is make web smooth and faster and
            elegant. Having someone who understand both of them is the advantage
            and make workflow flexible, because he know what he doing :)
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
