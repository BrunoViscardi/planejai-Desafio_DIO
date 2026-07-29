import { useState } from "react";

import { Card } from "../components/features/History/HistoryCard";
import { PageHero } from "../components/shared/PageHero";
import { useSimulationStorage } from "../hooks/useSimulationStorage";
import { calcMonthlySavings } from "../utils/simulation";

export function SimulationHistoryPage() {
  const { getFormData, removeFormData } = useSimulationStorage();
  const [data, setData] = useState(() => getFormData());

  const handleDelete = (id: string) => {
    removeFormData(id);
    setData(getFormData());
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico de Simulações"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />

      {!data || data.length === 0 ? (
        <p> O histórico de simulações está vazio.</p>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <Card
              id={item.id}
              goalName={item.goalName}
              createdAt={new Date(item.createdAt).toLocaleDateString("pt-BR")}
              goalAmount={`R$ ${item.goalAmount}`}
              goalDeadline={`${item.goalDeadline} ${item.goalDeadline === "1" ? "mês" : "meses"}`}
              monthlySavings={`R$ ${calcMonthlySavings(item).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              onDelete={handleDelete}
            />
          </div>
        ))
      )}
    </main>
  );
}
