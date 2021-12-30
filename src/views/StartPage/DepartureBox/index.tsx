import Heading from "components/Heading";
import MotionHeading from "components/MotionHeading";
import MotionParagraph from "components/MotionParagraph";
import { motion } from "framer-motion";
import Colors from "tokens/colors";
import { FontWeight } from "types";
import {
  BottomPart,
  BottomParagraph,
  BottomLeftPart,
  BottomRightPart,
  DepartsWrapper,
  NextDepartureWrapper,
  StyledTrailLogo,
  TopPart,
} from "./styles";

type NextDepartureBoxProps = {
  name: string | undefined;
  track: string | undefined;
  slim: boolean;
};

//TODO: alternative routes?
const DepartureBox = ({ name, track, slim }: NextDepartureBoxProps) => {
  const variant = {};
  const hide = { slim: { opacity: 0, y: -5 }, big: {} };
  const topPart = { slim: { paddingTop: 0 } };
  const bottomPart = { slim: { paddingTop: 0 } };

  return (
    <NextDepartureWrapper
      variants={variant}
      animate={slim ? "slim" : "big"}
      initial="initial"
    >
      <TopPart variants={topPart}>
        <motion.span variants={hide}>
          <MotionHeading
            variants={hide}
            headingType={"h1"}
            fontWeight={FontWeight.medium}
            fontSize={18}
            color={Colors.white}
          >
            Departs from
          </MotionHeading>
        </motion.span>
        <DepartsWrapper>
          {/* Todo: icon after type */}
          <StyledTrailLogo />
          <Heading
            headingType={"h2"}
            fontWeight={FontWeight.medium}
            fontSize={28}
            color={Colors.white}
          >
            {name}
          </Heading>
        </DepartsWrapper>
      </TopPart>
      <BottomPart>
        <BottomLeftPart variants={bottomPart}>
          <MotionParagraph
            variants={hide}
            fontWeight={FontWeight.medium}
            fontSize={14}
            color={Colors.white}
          >
            Platform
          </MotionParagraph>

          <BottomParagraph
            variants={bottomPart}
            fontWeight={FontWeight.medium}
            fontSize={24}
            color={Colors.white}
          >
            {track}
          </BottomParagraph>
        </BottomLeftPart>
        <BottomRightPart variants={bottomPart}>
          <MotionParagraph
            variants={hide}
            fontWeight={FontWeight.medium}
            fontSize={14}
            color={Colors.white}
          >
            Destination name
          </MotionParagraph>

          <BottomParagraph
            variants={bottomPart}
            fontWeight={FontWeight.medium}
            fontSize={24}
            color={Colors.white}
          >
            Placeholder
          </BottomParagraph>
        </BottomRightPart>
      </BottomPart>
    </NextDepartureWrapper>
  );
};

export default DepartureBox;
