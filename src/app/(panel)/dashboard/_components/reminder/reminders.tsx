import { getreminders } from "../../_data-access/get-reminders";
import { ReminderList } from "./reminder-list";

export async function Reminders({ userId }: { userId: string }) {
  const reminders = await getreminders({ userId: userId });

  return <ReminderList reminder={reminders} />;
}
