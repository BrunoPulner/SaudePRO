import { Description } from "@radix-ui/react-dialog";
import { features } from "process";

export type PlanDetailsProps = {
  maxServices: number;
};

export type PlansProps = {
  BASIC: PlanDetailsProps;
  PROFESSIONAL: PlanDetailsProps;
};

export const PLANS: PlansProps = {
  BASIC: {
    maxServices: 3,
  },
  PROFESSIONAL: {
    maxServices: 50,
  },
};

export const subscriptionPlans = [
  {
    id: "BASIC",
    name: "Basic",
    Description: "Perfeito para clinicas menores",
    oldPrice: "R$ 97,90",
    price: "R$ 27,90",
    features: [
      `Até ${PLANS["BASIC"].maxServices} serviços`,
      "agendamentos ilimitados",
      "suporte",
      "Relatórios",
    ],
  },
  {
    id: "PROFESSIONAL",
    name: "Profissional",
    Description: "Ideal para clinicas grandes",
    oldPrice: "R$ 197,90",
    price: "R$ 97,90",
    features: [
      `Até ${PLANS["PROFESSIONAL"].maxServices} serviços`,
      "agendamentos ilimitados",
      "suporte prioritario",
      "Relatórios avançados",
    ],
  },
];
