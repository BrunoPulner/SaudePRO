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
    Description: "Perfeito para clinicas menores ou atendimentos particulares.",
    oldPrice: "R$ 60,00",
    price: "R$ 50,00",
    features: [
      `Até ${PLANS["BASIC"].maxServices} serviços`,
      "agendamentos ilimitados",
      "suporte",
      "Relatórios",
    ],
  },
  {
    id: "PROFESSIONAL",
    name: "Professional",
    Description: "Ideal para clinicas grandes",
    oldPrice: "R$ 100,00",
    price: "R$ 70,00",
    features: [
      `Até ${PLANS["PROFESSIONAL"].maxServices} serviços`,
      "agendamentos ilimitados",
      "suporte prioritario",
      "Relatórios avançados",
    ],
  },
];
