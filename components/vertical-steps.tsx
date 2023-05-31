import { useAppCtx } from "@/context";
import { Check } from "@mui/icons-material";
import {
  Box,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  styled,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";
import CircleIcon from "@mui/icons-material/Circle";

type Step = { label: string; container: string };

const steps: Step[] = [
  { label: "Home", container: "home-page" },
  { label: "Services", container: "service-page" },
  { label: "Skills", container: "skills-page" },
  { label: "Contact Us", container: "contact-page" },
];

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.grey[700],
    display: "flex",
    width: 26,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      color: "#568F63",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#568F63",
      zIndex: 1,
      fontSize: 18,
      width: 8,
      height: 8,
    },
    "& .QontoStepIcon-circle": {
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CircleIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <CircleIcon className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const VerticalSteps = () => {
  const { selectedSection, setSelectSection } = useAppCtx();
  const element = useMemo(
    () => document.getElementById(selectedSection.id),
    [selectedSection.id]
  );
  const handleClick = useCallback(
    (step: Step, idx: number) => {
      setSelectSection({ id: step.container, index: idx });
    },
    [setSelectSection]
  );

  useEffect(() => {
    if (element) element?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [element]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 200,
        left: 25,
        background: "inherit",
      }}
    >
      <Stepper activeStep={selectedSection.index} orientation="vertical">
        {steps.map((step, idx) => (
          <Step key={step.label} onClick={() => handleClick(step, idx)}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              sx={{
                "& .MuiStepLabel-iconContainer": {
                  cursor: "pointer",
                },
                "& .MuiStepLabel-label.Mui-active": {
                  color: "#568F63",
                  fontWeight: 600,
                  cursor: "pointer",
                },
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalSteps;
