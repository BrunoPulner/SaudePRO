//beckend meusite.com/api/schedule/get-appointments
//   //Buscar se tem agendamentos(appointments) em uma data especifica de uma clica
//   //Quais horarios estão reservados

import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const userId = searchParams.get("userId");
  const dateParam = searchParams.get("date");

  if (!userId || userId === "null" || !dateParam || dateParam === "null") {
    return NextResponse.json(
      {
        error: "Nenhum agendamento encontrado",
      },
      {
        status: 400, // Bad request
      }
    );
  }

  try {
    // Converter a data recebida em um objeto Date
    const [year, month, day] = dateParam.split("-").map(Number);
    const startDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
    const endDate = new Date(Date.UTC(year, month - 1, day, 23, 59, 59, 999));

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Nenhum agendamento encontrado",
        },
        {
          status: 400, // Bad request
        }
      );
    }

    const appointments = await prisma.appointment.findMany({
      where: {
        userId: userId,
        appointmentDate: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        service: true,
      },
    });

    // Montar com todos os (slots) ocupados
    const blockedSlots = new Set<string>(); //Conjunto para armazenar strings

    for (const apt of appointments) {
      const requiredSlots = Math.ceil(apt.service.duration / 30);
      const startIndex = user.times.indexOf(apt.time); // se ele marcou 8 hrs o horario que deve ser marcado é apartir  do q ele marcou

      if (startIndex !== -1) {
        for (let i = 0; i < requiredSlots; i++) {
          //Percorre este for enquanto for menor que a quantidade de slots necessários
          const blockedSlot = user.times[startIndex + i];
          if (blockedSlot) {
            blockedSlots.add(blockedSlot);
          }
        }
      }
    }

    const blockedtimes = Array.from(blockedSlots);

    console.log("blockedTimes: ", blockedtimes);

    return NextResponse.json(blockedtimes);

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Nenhum agendamento encontrado",
      },
      {
        status: 400, // Bad request
      }
    );
  }
}
