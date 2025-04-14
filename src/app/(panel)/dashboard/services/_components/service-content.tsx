import { LabelSubscription } from "@/components/ui/label-subscription";
import { getAllServices } from "../_data-access/get-all-services";
import { ServicesList } from "./services-list";
import { canPermission } from "@/utils/permissions/canPermission";

interface ServicesContentProps {
  userId: string;
}

export async function ServicesContent({ userId }: ServicesContentProps) {
  const services = await getAllServices({ userId: userId });
  const permissions = await canPermission({ type: "service" });

  return (
    <>
      {permissions.planId == "TRIAL" && (
        <div>
          <h3>
            Você esta no seu plano de teste de 3 dias, teste nosso sistema
          </h3>
        </div>
      )}

      {!permissions.hasPermission && (
        <LabelSubscription expired={permissions.expired} />
      )}
      <ServicesList services={services.data || []} permission={permissions} />
    </>
  );
}
