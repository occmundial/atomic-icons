import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";
import { toaster } from "@occmundial/occ-atomic";

export interface Instruction {
  trigger: Trigger;
  value?: string | number;
  toasterData?: ToasterData;
  callback?: CallableFunction;
}

type Trigger = "default" | "serviceName" | "code";

interface ToasterData {
  type?: ToasterType;
  title?: string;
  description: string;
  action?: Action;
  hasIcon?: boolean;
}

type ToasterType = "error" | "warning" | "info";

interface Action {
  label: string;
  onClick: CallableFunction;
}

const handleInstruction: (instruction: Instruction) => void = (instruction) => {
  const { toasterData, callback } = instruction;
  if (toasterData) {
    const { type = "error", title, description, action, hasIcon } = toasterData;
    toaster[type]({
      title,
      description,
      action,
      hasIcon,
    });
  }
  if (callback) callback();
};

export const errorHandler: (
  graphQLError: ApolloError,
  instructions: Instruction[]
) => void = (errors, instructions) => {
  for (const instruction of instructions) {
    const { trigger, value } = instruction;
    if (trigger === "default") handleInstruction(instruction);
    else if (trigger === "serviceName") {
      const error: GraphQLError | undefined = errors.graphQLErrors.find(
        (e) => e?.extensions?.serviceName === value
      );
      if (error) handleInstruction(instruction);
    } else if (trigger === "code") {
      const error: GraphQLError | undefined = errors.graphQLErrors.find(
        (e) => e?.extensions?.code === value
      );
      if (error) handleInstruction(instruction);
    }
  }
};
