import React from "react";
import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "./screens/WelcomeScreen";
import IntroductionScreen from "./screens/IntroductionScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import CategoryIntroScreen from "./screens/CategoryIntroScreen";
import NovaScreen from "./screens/NovaScreen";
import QuestionScreen from "./screens/QuestionScreen";
import { categories, introductionPages } from "./constants/discoveryContent";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [customAnswer, setCustomAnswer] = useState("");
  const introductionStart = 1;
  const discoveryStep = introductionStart + introductionPages.length;
  const categoryStep = discoveryStep + 1;
  const novaStep = categoryStep + 1;
  const questionStep = novaStep + 1;

  const next = () => setStep((current) => current + 1);
  const back = () => setStep((current) => Math.max(0, current - 1));
  const identity = categories[0];
  const identityQuestion = identity.questions?.[0];

  let screen = <WelcomeScreen onBegin={next} />;
  if (step >= introductionStart && step < discoveryStep) {
    const pageIndex = step - introductionStart;
    screen = <IntroductionScreen page={introductionPages[pageIndex]} index={pageIndex} onContinue={next} onBack={back} />;
  } else if (step === discoveryStep) {
    screen = <DiscoveryScreen onContinue={next} onBack={back} />;
  } else if (step === categoryStep) {
    screen = <CategoryIntroScreen category={identity} index={0} onContinue={next} onBack={back} />;
  }
  else if (step === novaStep) screen = <NovaScreen onContinue={next} onBack={back} />;
  else if (step >= questionStep && identityQuestion) {
    screen = <QuestionScreen
      category={identity}
      categoryIndex={0}
      question={identityQuestion}
      selected={selectedAnswer}
      custom={customAnswer}
      onSelect={setSelectedAnswer}
      onCustomChange={setCustomAnswer}
      onContinue={() => undefined}
      onBack={back}
    />;
  }
  return (
      <>
            <StatusBar style="dark" />
                  {screen}
                      </>
                        );
                        }