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
            My Speciality is Graphic Design and Front-end Web Development
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="font-bold"> What my main stack ?</span>
          </AccordionTrigger>
          <AccordionContent>
            So far, I'm proficient in design software like a Adobe Photoshop,
            Illustrator and Premierre Pro. and for front-end tech I'm proficient
            in HTML, CSS and Javascript including their framework and library
            using React JS or NextJS and styling using TailwindCSS. Currently
            with my knowledge in front-end Development, basically I can build
            stunning and beautiful Web UI with have good user experience. Not
            only I've also know how to create REST API , user auth with personal
            token or google and connect them to database using postgresql with
            Prisma and Drizzle ORM
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
            which is create by design software for optimalization. Size and file
            for Web Development and ordinary graphic design like ads or social
            media content is not same, you need convert graphic asset for Web to
            web legacy file, so your asset have small size but still have hiqh
            resolution when put in the Web. Its make web smooth and faster, good
            for experience when user visit your web. Having someone who
            understand knowledge both of them is the advantage and make workflow
            flexible. because he know what he doing :)
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
