"use client";

import { useRef, Fragment } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { workflowSteps } from "@/data/about-data";
import { AnimatedText } from "../animated/animated-text";

interface WorkflowStepProps {
  step: (typeof workflowSteps)[0];
}

interface ProgressBarProps {
  progress: MotionValue<number>;
}

function WorkflowStep({ step }: WorkflowStepProps) {
  const StepIcon = step.icon;
  return (
    <div className="relative z-10 flex w-full flex-col items-center">
      <div className="bg-background p-1">
        <StepIcon className="h-12 w-12 text-foreground" />
      </div>
      <div className="bg-background p-1 text-center">
        <h4 className="max-w-[250px] text-base font-medium text-foreground/80">
          <AnimatedText lines={[step.title]} />
        </h4>
      </div>
    </div>
  );
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="relative h-20 w-1.5">
      <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gray-300 dark:bg-gray-700" />
      <motion.div
        className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-gradient animate-gradientShift"
        style={{ scaleY: progress }}
      />
    </div>
  );
}

interface ProgressSegmentProps {
  scrollYProgress: MotionValue<number>;
  index: number;
  numSegments: number;
}

function ProgressSegment({
  scrollYProgress,
  index,
  numSegments,
}: ProgressSegmentProps) {
  const segmentProgress = useTransform(
    scrollYProgress,
    [index / numSegments, (index + 1) / numSegments],
    [0, 1]
  );

  return <ProgressBar progress={segmentProgress} />;
}

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const numSteps = workflowSteps.length;
  const numSegments = numSteps - 1;

  return (
    <div ref={containerRef}>
      <div className="relative flex flex-col items-center">
        {workflowSteps.map((step, index) => (
          <Fragment key={index}>
            <WorkflowStep step={step} />
            {index < numSegments && (
              <ProgressSegment
                scrollYProgress={scrollYProgress}
                index={index}
                numSegments={numSegments}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
