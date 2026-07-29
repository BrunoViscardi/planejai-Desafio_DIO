import { Card } from "../components/features/History/HistoryCard";
import { PageHero } from "../components/shared/PageHero";
import { useSimulationStorage } from "../hooks/useSimulationStorage";

export function SimulationHistoryPage() {
  const { getFormData } = useSimulationStorage();
  const data = getFormData();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico de Simulações"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />

      {!data ? (
        <p> O histórico de simulações está vazio.</p>
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <Card
              goalName={item.goalName}
              goalDate={item.goalDate}
              goalAmount={`R$ ${item.goalAmount}`}
              goalDeadline={`${item.goalDeadline} meses`}
              monthlySavings={`R$ ${item.monthlySavings}`}
            />
          </div>
        ))
      )}
    </main>
  );
}
