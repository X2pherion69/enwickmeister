import { useAppCtx } from "@/context";
import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";

type Step = { label: string; container: string };

const steps: Step[] = [
  { label: "Home", container: "home-page" },
  { label: "Services", container: "service-page" },
  { label: "Skills", container: "skills-page" },
  { label: "Contact Us", container: "contact-page" },
];

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
    if (element)
      element?.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
              sx={{
                "& .MuiStepLabel-label.Mui-active": {
                  color: "#fff",
                  fontWeight: 600,
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
